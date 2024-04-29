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

//Experiencedata Type props
export interface ExperienceFormProps {
  job_title: string;
  organization_name: string;
  location: string;
  start_date: string;
  end_date: string;
  currently_employed: boolean;
  work_description: string;
}

// Educations Type Props
export interface EducationFormProps {
  school_name: string;
  location: string;
  course: string;
  start_date: string;
  end_date: string;
  currently_study: boolean;
}

// Project Type Props
export interface ProjectFormProps {
  project_title: string;
  summery: string;
  project_link: string;
}

// Skills Type Props
export interface SkillFormProps {
  skill_title: string;
  skills_list: string[];
}

// Certificate Type Props
export interface CertificationProps {
  certificate_title: string;
  organization: string;
  certificate_date: string;
  certificate_link: string;
}

// Certificate Type Props
export interface ReferenceProps {
  full_name: string;
  relationship: string;
  organization: string;
  email: string;
  social_link: string;
}

// type fo resume data props
export interface ResumeDataProps {
  socialLinks: SocialLinksProps[];
  experiences: ExperienceFormProps[];
  educations: EducationFormProps[];
  projects: ProjectFormProps[];
  skills: SkillFormProps[];
  certifications: CertificationProps[];
  languages: string[];
  references: ReferenceProps[];
}

// Template Props Type
export interface TemplateProps {
  bioData: BioFormProps;
  resumeData: ResumeDataProps;
  margin: number;
}

export interface FontListType {
  id: number;
  name: string;
}
