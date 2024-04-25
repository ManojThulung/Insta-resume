import {
  Download,
  Download2Icon,
  FormFillIcon,
  NoDollar,
  NoProfile,
  PdfDoc,
  TemplateSelectIcon,
} from "@/assets/icon";
import { Template1Img } from "@/assets/img";

export const FeaturesList = [
  {
    icon: <NoDollar />,
    title: "Free Forever",
    description:
      "Build your ideal resume for free. No hidden fees, no trial periods. Craft your perfect resume without spending a dime",
  },
  {
    icon: <NoProfile />,
    title: "No Account Required",
    description:
      "Skip the sign-up process! Create, customize, and download your resume hassle-free. We value your time!",
  },
  {
    icon: <Download />,
    title: "Instant Download",
    description:
      "Download your resume instantly with a single click. We believe in simplicity and accessibility for everyone.",
  },
  {
    icon: <PdfDoc />,
    title: "Multiple Templates, One Format",
    description:
      "Choose from our variety of templates, but rest assured—all downloads are in PDF format. Whether you’re emailing your resume or printing it for an interview, we’ve got you covered.",
  },
];

export const guideList = [
  {
    step: 1,
    icon: <TemplateSelectIcon />,
    title: "Choose Your Template",
    bgColor: "#E1F6F4",
    description:
      "Add your contact information, professional summary, work experience, education, skills, and achievements.",
  },
  {
    step: 2,
    icon: <FormFillIcon />,
    title: "Fill in Your Information",
    bgColor: "#FDEDED",
    description:
      "Add your contact information, professional summary, work experience, education, skills, and achievements. ",
  },
  {
    step: 3,
    icon: <Download2Icon />,
    title: "Download Your Resume",
    bgColor: "#DCF2FF",
    description:
      "Preview your resume, make any necessary edits, and then download it in PDF format with a single click.",
  },
];

export const TemplateList = [
  {
    id: 1,
    featured: true,
    name: "Template 1",
    category: "Modern Template",
    sampleImg: Template1Img,
  },
  {
    id: 2,
    featured: true,
    name: "Template 2",
    category: "Modern Template 2",
    sampleImg: Template1Img,
  },
  {
    id: 3,
    featured: false,
    name: "Template 3",
    category: "classic Template",
    sampleImg: Template1Img,
  },
  {
    id: 4,
    featured: false,
    name: "Template 4",
    category: "Creative Template",
    sampleImg: Template1Img,
  },
  {
    id: 5,
    featured: false,
    name: "Template 5",
    category: "Creative Template",
    sampleImg: Template1Img,
  },
  {
    id: 6,
    featured: true,
    name: "Template 6",
    category: "Classic Template",
    sampleImg: Template1Img,
  },
];

export const faqList = [
  {
    question: "Can I use this service for free?",
    ans: "Absolutely! InstaResume is completely free. No hidden fees, no trial periods. Craft your perfect resume without spending a dime.",
  },
  {
    question: "Do I need to create an account to download my resume?",
    ans: "Nope! Skip the sign-up process. You can create, customize, and download your resume without any authentication. Your time is valuable, and we respect that.",
  },
  {
    question: "How do I choose the right template?",
    ans: "Browse templates and select the one that aligns with your industry and style. Whether you’re a recent graduate or a seasoned professional, InstaResume got options for everyone.",
  },
  {
    question: "Can I edit my resume later?",
    ans: "Absolutely! Your account allows you to revisit and update your resume anytime. Life changes, and so can your resume.",
  },
  {
    question: "What file formats are supported for download?",
    ans: "InstaResume offer PDF format for easy sharing and printing. Whether you’re emailing your resume or handing it to an employer, rest assured—it’s in the right format.",
  },
];
