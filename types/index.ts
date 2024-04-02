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

// experiencedata props
export interface ExperienceFormProps {
  job_title: string;
  organization_name: string;
  location: string;
  start_date: string;
  end_date: string;
  currently_employed: boolean;
  work_description: string;
}

// type fo resume data props
export interface ResumeDataProps {
  socialLinks: SocialLinksProps[];
  experiences: ExperienceFormProps[];
  education: never[];
  projects: never[];
  Skills: never[];
  certifications: never[];
  references: never[];
}
