import { fetchData, putData, removeData, uploadFileToBucket } from '../dba';
import { Member, MemberFormInput, MemberResponse } from '../types/member.types';
import { useMutation, useQuery } from '@tanstack/react-query';
import { sort_order } from '../types/object_schema';
import { toast } from 'react-toastify';
import { AxiosError } from 'axios';

const useMembers = () => {
  const { data: members, refetch: refetchMembers } = useQuery({
    queryKey: ['MEMBERS'],
    queryFn: async () => {
      const sort = (await fetchData('sort-orders')) as Record<string, string[]>;
      const res = (await fetchData('people')) as MemberResponse[];
      return sort['people'].map(
        (email) => res.filter((m) => m.socials.email === email)[0],
      );
    },
    cacheTime: 10 * 60 * 60,
  });

  const { mutate: mutateMember } = useMutation<
    void,
    AxiosError,
    MemberFormInput
  >({
    mutationFn: async (data) => {
      await putData(
        'people',
        Member({
          first: data['First Name'],
          last: data['Last Name'],
          collegiate_title: data['Collegiate Title'],
          lab_title: data['Lab Title'],
          lab_status: data['Lab Status'],
          year_joined: data['Year Joined'],
          description: data.Description,
          socials: {
            email: data.Email,
            twitter: data.Twitter,
            linkedin: data.Linkedin,
            instagram: data.Instagram,
          },
        }),
      );
      if (data.image?.length) {
        const fileName = `${data['Last Name'].toLowerCase()}.png`;
        uploadFileToBucket('profile_pictures', fileName, data.image);
      }
      refetchMembers();
    },
    onSuccess: () => toast.success('User has been updated!'),
    onError: () => toast.error('User update failed'),
  });

  const { mutate: deleteMember } = useMutation({
    mutationFn: (data: string) => removeMember(data),
    onSuccess: async () => {
      await refetchMembers();
      toast.success('User has been deleted!');
    },
    onError: () => toast.error('User deletion failed'),
  });

  const removeMember = async (email_to_remove: string) => {
    await removeData('people', {
      email: { S: email_to_remove },
    });
    const sort = await fetchData('sort-orders');
    const output = sort['people'].filter((email: string) => {
      if (email !== email_to_remove) {
        return { S: email };
      }
      return false;
    });
    await putData('sort-orders', sort_order('people', output));
  };

  return {
    members: members,
    refetchMembers,
    createMember: mutateMember,
    updateMember: mutateMember,
    deleteMember: deleteMember,
  };
};

export default useMembers;
