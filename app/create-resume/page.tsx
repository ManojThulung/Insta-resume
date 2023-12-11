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

const CreateResume = () => {
  return (
    <main>
      <ToolBar />
      <div className="grid grid-cols-12 gap-x-1 h-[95vh]">
        <div className="col-span-6 h-full overflow-y-scroll">
          <form className="bg-secondary-light dark:bg-primary shadow-sm px-10 py-4">
            <BioForm />
            <br />
            <SocialLinkForm />
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
        <div className="col-span-6">cv</div>
      </div>
    </main>
  );
};

export default CreateResume;
