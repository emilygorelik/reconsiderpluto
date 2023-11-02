export interface MemberFormInput {
  'First Name': string;
  'Last Name': string;
  'Collegiate Title': string;
  'Lab Title': string;
  'Year Joined': string;
  'Lab Status': boolean;
  Description: string;
  Email: string;
  Twitter: string;
  Instagram: string;
  Linkedin: string;
  image?: FileList;
}

export interface MemberSocials {
  twitter: string;
  instagram: string;
  linkedin: string;
  email: string;
}
export interface MemberResponse {
  first: string;
  last: string;
  collegiate_title: string;
  lab_title: string;
  year_joined: string;
  lab_status: boolean;
  description: string;
  socials: MemberSocials;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const defaultMemberFormValues = (member: Record<string, any>) => {
  return {
    'First Name': member.first.S,
    'Last Name': member.last.S,
    'Collegiate Title': member.collegiate_title.S,
    'Lab Title': member.lab_title.S,
    'Lab Status': member.lab_status.S,
    'Year Joined': member.year_joined.S,
    Description: member.description.S,
    Email: member.socials.M.email.S,
    Twitter: member.socials.M.twitter.S,
    Instagram: member.socials.M.instagram.S,
    Linkedin: member.socials.M.linkedin.S,
  };
};

export const Member = ({
  first,
  last,
  collegiate_title,
  lab_title,
  lab_status,
  year_joined,
  description,
  socials,
}: MemberResponse) => {
  return {
    email: { S: socials.email },
    data: {
      M: {
        first: { S: first },
        last: { S: last },
        slug: { S: socials.email.split('@')[0] },
        collegiate_title: { S: collegiate_title },
        lab_title: { S: lab_title },
        lab_status: { S: lab_status },
        year_joined: { S: year_joined },
        description: { S: description },
        socials: {
          M: {
            email: { S: socials.email },
            twitter: { S: socials.twitter },
            linkedin: { S: socials.linkedin },
            instagram: { S: socials.instagram },
          },
        },
      },
    },
  };
};
