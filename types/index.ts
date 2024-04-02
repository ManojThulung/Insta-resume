export interface BioFormProps {
  job_title: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  address: string;
  bio_summery: string;
}

// social links props
export interface SocialLinksProps {
  url: string;
}

// type fo resume data props
export interface ResumeDataProps {
  socialLinks: SocialLinksProps[];
  experiences: never[];
  education: never[];
  projects: never[];
  Skills: never[];
  certifications: never[];
  references: never[];
}
