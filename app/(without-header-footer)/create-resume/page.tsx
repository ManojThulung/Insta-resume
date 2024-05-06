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
import LanguageForm from "@/components/pages/createResume/form/LanguageForm";
import ResetConfirmModal from "@/components/pages/createResume/ResetConfirmModal";
import FontsOption from "@/components/pages/createResume/FontsOption";
import TemplatesModal from "@/components/pages/createResume/TemplatesModal";

import { BioFormProps } from "@/types";
import { EyeHideIcon, EyeShowIcon, TemplateBoxIcon } from "@/assets/icon";
import { FontListType } from "@/types";

const CreateResume = () => {
  const [resetFormConfirmModal, setResetFormConfirmModal] =
    useState<boolean>(false);
  const [selectedTemplate, setSelectedTemplate] = useState<number>(2);
  const [loading, setLoading] = useState<boolean>(false);
  const [isTemplateModal, setIsTemplateModal] = useState<boolean>(false);
  const [visiblePreview, setVisiblePreview] = useState<boolean>(false);
  const [margin, setMargin] = useState<number>(0);
  const [selectedFont, setSelectedFont] = useState<FontListType>({
    id: 5,
    name: "Times New Roman",
  });
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
        skills_list: ["ReactJS", "NextJS"],
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

  const previewRef = useRef(null);
  const resumeDoc = new jsPDF({
    unit: "px",
    // compress: true,
  });

  // Generate pdf
  const handleDownload = () => {
    setMargin(7); // to adjust the margin of resume when generating.
    // setLoading(true);
    const element = previewRef.current;

    if (element) {
      resumeDoc
        .html(element, {
          callback: async function (resumeDoc) {
            // Save the PDF document
            // console.log(resumeDoc.getFontList());
            resumeDoc.setFont(selectedFont.name);

            await resumeDoc.save("Resume.pdf");
          },
          autoPaging: "text",
          width: 445,
          windowWidth: 480,
          margin: [20, 0, 30, 0],
        })
        .then(() => {
          setMargin(0); //reset to original style.
          // setLoading(false);
        });
      // .finally(() => setLoading(false));
    }
  };

  // reset form fields
  const handleResetForm = () => {
    setBioData({
      job_title: "",
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      address: "",
      bio_summery: "",
    });

    setResumeData({
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
          skills_list: ["ReactJS", "NextJS"],
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

    closeResetFormModal();
  };

  // Hide reset form confirm modal
  const closeResetFormModal = () => {
    setResetFormConfirmModal(false);
  };

  // Change template
  const handleSelectTemplate = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedTemplate(Number(e.target.value));
  };

  // Close Templates modal
  const closeTemplateModal = () => {
    setIsTemplateModal(false);
  };

  return (
    <main className="font-sans">
      <ToolBar />

      {/* Floating button for mobile version */}
      <Button
        variant="float"
        size="float"
        className="fixed sm:hidden bottom-2 right-2 z-20"
        onClick={() => setVisiblePreview((prev) => !prev)}
      >
        {!visiblePreview ? (
          <EyeShowIcon className="scale-125" />
        ) : (
          <EyeHideIcon className="scale-125" />
        )}
      </Button>
      <div className="grid grid-cols-12 gap-x-1 sm:h-[95vh]">
        <div
          className={`col-span-12 sm:col-span-6 h-full overflow-y-auto ${
            !visiblePreview ? "block" : "hidden sm:block"
          }`}
        >
          <form className="shadow-sm px-6 py-4 max-w-[700px] mx-auto">
            <div className="flex justify-end">
              <Button
                type="button"
                variant="fill"
                size="medium"
                className="w-[140px] hover:bg-black"
                onClick={() => setResetFormConfirmModal(true)}
              >
                Clear Form
              </Button>
            </div>
            <BioForm bioData={bioData} setBioData={setBioData} />
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
        <div
          className={`col-span-12 sm:col-span-6 px-6 py-4 bg-[#CDCCCD] min-h-[105vh] ${
            visiblePreview ? "block" : "hidden sm:block"
          }`}
        >
          <div className="flex items-center justify-between gap-5 flex-wrap mb-2">
            <FontsOption
              selectedFont={selectedFont}
              setSelectedFont={setSelectedFont}
            />
            <div className="flex flex-wrap items-center gap-2">
              <Button
                variant="fill"
                className="bg-secondary hover:bg-secondary-dark"
                size="square"
                onClick={() => setIsTemplateModal(true)}
              >
                <TemplateBoxIcon />
              </Button>
              <Button
                onClick={handleDownload}
                variant="fill"
                className="bg-secondary hover:bg-secondary-dark w-[140px]"
                size="medium"
              >
                {loading ? <span className="loader-2" /> : "Download"}
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="pdf-preview-container">
              <PreviewPdf
                bioData={bioData}
                resumeData={resumeData}
                selectedTemplate={selectedTemplate}
                selectedFont={selectedFont}
                margin={margin}
                ref={previewRef}
              />
            </div>
          </div>
        </div>
      </div>

      <ResetConfirmModal
        isOpen={resetFormConfirmModal}
        handleClose={closeResetFormModal}
        handleReset={handleResetForm}
      />

      <TemplatesModal
        isOpen={isTemplateModal}
        handleClose={closeTemplateModal}
      />
    </main>
  );
};

export default CreateResume;
