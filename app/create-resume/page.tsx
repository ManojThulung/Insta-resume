"use client";
import dynamic from "next/dynamic";
import { useState } from "react";

import ToolBar from "@/components/pages/createResume/ToolBar";

// FORMS
import BioForm from "@/components/pages/createResume/form/BioForm";
import EducationForm from "@/components/pages/createResume/form/EducationForm";
import ExperienceForm from "@/components/pages/createResume/form/ExperienceForm";
import ProjectForm from "@/components/pages/createResume/form/ProjectForm";
import SkillForm from "@/components/pages/createResume/form/SkillForm";
import SocialLinkForm from "@/components/pages/createResume/form/SocialLinkForm";
import CertificationForm from "@/components/pages/createResume/form/CertificationForm";
import ReferenceForm from "@/components/pages/createResume/form/ReferenceForm";
import Button from "@/components/common/Button";
import ResumePdf from "@/components/pages/createResume/pdf/ResumePdf";

import { BioFormProps, SocialLinksProps } from "@/types";

const DynamicResumePdf = dynamic(
  () => import("@/components/pages/createResume/pdf/ResumePdf"),
  { ssr: false }
);

const CreateResume = () => {
  const [resumeData, setResumeData] = useState({});

  const [bioData, setBioData] = useState<BioFormProps>({
    job_title: "",
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    address: "",
    bio_summery: "",
  });

  const [socialLinks, setSocialLinks] = useState<SocialLinksProps[]>([]);

  const handleDownload = () => {
    console.log("resume bioData ", bioData);
    console.log("resume social Links ", socialLinks);
  };

  return (
    <main>
      <ToolBar />
      <div className="grid grid-cols-12 gap-x-1 h-[95vh]">
        <div className="col-span-12 sm:col-span-6 h-full overflow-y-scroll bg-secondary-light dark:bg-primary ">
          <form className="shadow-sm px-6 py-4 max-w-[700px] mx-auto">
            <BioForm setBioData={setBioData} />
            <br />
            <SocialLinkForm
              socialLinks={socialLinks}
              setSocialLinks={setSocialLinks}
            />
            <br />
            <ExperienceForm />
            <br />
            <EducationForm />
            <br />
            <ProjectForm />
            <br />
            <SkillForm />
            <br />
            <CertificationForm />
            <br />
            <ReferenceForm />
            <br />
          </form>
        </div>
        <div className="col-span-12 sm:col-span-6 px-6 py-4 bg-[#525659]">
          <div className="flex items-center justify-end gap-5 flex-wrap">
            <Button onClick={handleDownload}>Download</Button>
          </div>
          <div className="flex items-center justify-center">
            {/* <ResumePdf /> */}
            <DynamicResumePdf bioData={bioData} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default CreateResume;
