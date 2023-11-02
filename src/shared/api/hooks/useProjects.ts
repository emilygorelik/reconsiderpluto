import { Project, project, projectMember } from '../types/project.types';
import { useMutation, useQuery } from '@tanstack/react-query';
import { fetchData, putData, removeData } from '../dba';
import { toast } from 'react-toastify';
import { AxiosError } from 'axios';

const useProjects = () => {
  const { data: projects, refetch: refetchProjects } = useQuery({
    queryKey: ['PROJECTS'],
    queryFn: async () => {
      const sort = (await fetchData('sort-orders')) as Record<string, string[]>;
      const res = (await fetchData('projects')) as Project[];
      return sort['projects'].map(
        (title) => res.filter((m) => m.title === title)[0],
      );
    },
    cacheTime: 10 * 60 * 60,
  });

  const { mutate: updateProject } = useMutation<void, AxiosError, Project>({
    mutationFn: async (data) =>
      putData(
        'projects',
        project({
          title: data.title,
          description: data.description,
          members: data.members.map(projectMember).map((m) => ({ M: m })),
        }),
      ),
    onSuccess: async () => {
      await refetchProjects();
      toast.success('Project has been updated!');
    },
    onError: () => toast.error('Project update failed'),
  });

  const { mutate: deleteProject } = useMutation({
    mutationFn: async (title: string) => {
      await removeData('projects', { title: { S: title } });
    },
    onSuccess: async () => {
      await refetchProjects();
      toast.success('Project has been deleted!');
    },
    onError: () => toast.error('Project deletion failed'),
  });

  return {
    projects,
    updateProject,
    deleteProject,
    refetchProjects,
  };
};

export default useProjects;
