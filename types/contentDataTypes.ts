import { StaticImageData } from "next/image";

export interface FeatureCardProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface GuideCardProps {
  icon: JSX.Element;
  step: number;
  bgColor: string;
  title: string;
  description: string;
}

export interface TemplateListPops {
  id: number;
  featured: boolean;
  name: string;
  category: string;
  sampleImg: StaticImageData;
}

export interface FaqListProps {
  question: string;
  ans: string;
}

export interface FormDataProps {
  full_name: string;
  email: string;
  message: string;
}
