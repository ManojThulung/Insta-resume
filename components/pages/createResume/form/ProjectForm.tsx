import dynamic from "next/dynamic";
import { ChevronDown, PlusCircle, Trash2 } from "lucide-react";
import Button from "@/components/common/Button";
import { ProjectFormProps, ResumeDataProps } from "@/types";
import { ChangeEvent, Dispatch, SetStateAction } from "react";

const CustomEditors = dynamic(
  () => {
    return import("@/components/layout/CustomEditors");
  },
  { ssr: false }
);

const ProjectForm = ({
  projects,
  setResumeData,
}: {
  projects: ProjectFormProps[];
  setResumeData: Dispatch<SetStateAction<ResumeDataProps>>;
}) => {
  // ADD New Projects
  const addProjects = () => {
    setResumeData((prev) => ({
      ...prev,
      projects: [
        ...prev.projects,
        {
          project_title: "",
          project_link: "",
          summery: "",
        },
      ],
    }));
  };

  // REMOVE projects
  const removeProjects = (index: number) => {
    if (projects.length > 1) {
      setResumeData((prev) => ({
        ...prev,
        projects: prev.projects.filter((_, i) => i !== index),
      }));
    }
  };

  const handleProjectChange = (
    index: number,
    e: ChangeEvent<HTMLInputElement>
  ) => {
    setResumeData((prev) => {
      let updateData = { ...prev };

      updateData.projects[index] = {
        ...prev.projects[index],
        [e.target.name]: e.target.value,
      };

      return updateData;
    });
  };

  return (
    <section id="project-form" className="form-container-sec">
      <div>
        <div>
          <h2>Projects</h2>
          <p>Add your noteworthy recent projects.</p>
        </div>
        {projects.length >= 1 &&
          projects.map((project, index) => (
            <div key={index} className="form-card flex flex-col gap-y-5">
              <div className="flex items-center gap-2 -mb-2 justify-end text-primary-border">
                <ChevronDown className="cursor-pointer" />
                {projects.length > 1 && (
                  <Trash2
                    onClick={() => removeProjects(index)}
                    className="scale-75 cursor-pointer"
                  />
                )}
              </div>
              <div>
                <label htmlFor="project_title">Project Title</label>
                <div>
                  <input
                    type="text"
                    name="project_title"
                    id="project_title"
                    value={project.project_title}
                    className="form-input"
                    onChange={(e) => handleProjectChange(index, e)}
                  />
                </div>
              </div>
              <div>
                <label>Project Summery</label>
                <div>
                  <CustomEditors
                    index={index}
                    targetName="projects"
                    data={project.summery}
                    setData={setResumeData}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="project_link">Project Link</label>
                <div>
                  <input
                    type="text"
                    name="project_link"
                    id="project_link"
                    value={project.project_link}
                    className="form-input"
                    onChange={(e) => handleProjectChange(index, e)}
                  />
                </div>
              </div>
            </div>
          ))}
        <div className="flex justify-end">
          <Button
            onClick={addProjects}
            variant="blueGhost"
            size="pLess"
            className="mt-4"
          >
            <PlusCircle className="scale-75" />
            Add More Project
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectForm;
