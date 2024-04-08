"use client";

import { useState } from "react";
import ToolBar from "@/components/pages/createResume/ToolBar";
import PreviewPdf from "@/components/pages/createResume/preview/PreviewPdf";

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

import { BioFormProps, SocialLinksProps } from "@/types";

const CreateResume = () => {
  const [dwnTrigger, setDwnTrigger] = useState<boolean>(false);
  const [resumeData, setResumeData] = useState({
    socialLinks: [{ url: "" }],
    experiences: [
      {
        job_title: "",
        organization_name: "",
        location: "",
        start_date: "",
        end_date: "",
        currently_employed: false,
        work_description: "",
      },
    ],
    educations: [
      {
        school_name: "",
        location: "",
        course: "",
        start_date: "",
        end_date: "",
        currently_study: false,
      },
    ],
    projects: [
      {
        project_title: "",
        summery: "",
        project_link: "",
      },
    ],
    skills: [
      {
        skill_title: "",
        skills_list: ["Hardware", "Software"],
      },
    ],
    certifications: [
      {
        certificate_title: "",
        organization: "",
        certificate_date: "",
        certificate_link: "",
      },
    ],
    references: [],
  });

  const [bioData, setBioData] = useState<BioFormProps>({
    job_title: "",
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    address: "",
    bio_summery: "",
  });

  const handleDownload = () => {
    setDwnTrigger(true); //trigger the generatePDF function of child component.
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
              socialLinks={resumeData.socialLinks}
              setResumeData={setResumeData}
            />
            <br />
            <ExperienceForm
              experiences={resumeData.experiences}
              setResumeData={setResumeData}
            />
            <br />
            <EducationForm
              educations={resumeData.educations}
              setResumeData={setResumeData}
            />
            <br />
            <ProjectForm
              projects={resumeData.projects}
              setResumeData={setResumeData}
            />
            <br />
            <SkillForm
              skills={resumeData.skills}
              setResumeData={setResumeData}
            />
            <br />
            <CertificationForm
              certifications={resumeData.certifications}
              setResumeData={setResumeData}
            />
            <br />
            <ReferenceForm />
            <br />
          </form>
        </div>
        <div className="col-span-12 sm:col-span-6 px-6 py-4 bg-[#525659]">
          <div className="flex items-center justify-end gap-5 flex-wrap mb-2">
            <Button onClick={handleDownload}>Download</Button>
          </div>
          <div className="relative bg-yellow-200">
            <div className="pdf-preview-container">
              <PreviewPdf
                bioData={bioData}
                dwnTrigger={dwnTrigger}
                setDwnTrigger={setDwnTrigger}
                resumeData={resumeData}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CreateResume;
