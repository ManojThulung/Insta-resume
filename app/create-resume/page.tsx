"use client";

import { ChangeEvent, useRef, useState } from "react";
import jsPDF from "jspdf";

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

import { BioFormProps } from "@/types";
import LanguageForm from "@/components/pages/createResume/form/LanguageForm";

const CreateResume = () => {
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
    languages: [""],
    references: [
      {
        full_name: "",
        relationship: "",
        organization: "",
        email: "",
        social_link: "",
      },
    ],
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

  const [selectedTemplate, setSelectedTemplate] = useState<number>(2);
  const [margin, setMargin] = useState<number>(0);
  const previewRef = useRef(null);

  const resumeDoc = new jsPDF({
    unit: "px",
    // compress: true,
  });

  const handleDownload = () => {
    setMargin(7); // to adjust the margin of resume when generating.
    const element = previewRef.current;

    if (element) {
      resumeDoc
        .html(element, {
          callback: async function (resumeDoc) {
            // Save the PDF document
            await resumeDoc.save("Resume.pdf");
          },
          autoPaging: "text",
          width: 445,
          windowWidth: 480,
          margin: [30, 0, 30, 0],
        })
        .then(() => {
          setMargin(0); //reset to original style.
        });
    }
  };

  const handleSelectTemplate = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedTemplate(Number(e.target.value));
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
            <LanguageForm
              languages={resumeData.languages}
              setResumeData={setResumeData}
            />
            <br />
            <ReferenceForm
              references={resumeData.references}
              setResumeData={setResumeData}
            />
            <br />
          </form>
        </div>
        <div className="col-span-12 sm:col-span-6 px-6 py-4 bg-[#525659]">
          <div className="flex items-center justify-between gap-5 flex-wrap mb-2">
            <div>
              <select
                name="selectedTemplate"
                value={selectedTemplate}
                onChange={(e) => handleSelectTemplate(e)}
              >
                <option value={1}>Template 1</option>
                <option value={2}>Template 2</option>
              </select>
            </div>
            <Button onClick={handleDownload}>Download</Button>
          </div>
          <div className="relative bg-yellow-200">
            <div className="pdf-preview-container">
              <PreviewPdf
                bioData={bioData}
                resumeData={resumeData}
                selectedTemplate={selectedTemplate}
                margin={margin}
                ref={previewRef}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CreateResume;
