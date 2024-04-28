import dynamic from "next/dynamic";
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";

import Button from "@/components/common/Button";
import { ProjectFormProps, ResumeDataProps } from "@/types";
import { ChevDown, TrashBinIcon, EditIcon, PlusIcon } from "@/assets/icon";
import DeleteModal from "./DeleteModal";

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
  const [expandForm, setExpandForm] = useState<number | null>(0);
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // ADD New Projects
  const addProjects = (index: number) => {
    // Create New Project form
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

    // Expands the newly added form.
    if (expandForm) {
      setExpandForm(index);
    } else {
      // to make visible expand animation on newly added form
      setTimeout(() => {
        setExpandForm(index);
      }, 50);
    }
  };

  // REMOVE projects
  const removeProjects = (index: number) => {
    if (projects.length > 1) {
      setResumeData((prev) => ({
        ...prev,
        projects: prev.projects.filter((_, i) => i !== index),
      }));
    }

    closeModal(); //close delete modal when form deleted.
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

  // Collapse/Hide form field
  const handleCollapse = (index: number) => {
    if (expandForm === index) {
      setExpandForm(null);
    } else {
      setExpandForm(index);
    }
  };

  // CLOSE delete Modal
  const closeModal = () => {
    setShowDeleteModal(false);
    setSelectedIndex(null);
  };

  return (
    <section id="project-form" className="form-container-sec">
      <div>
        <div className="pb-4">
          <h2 className="form-header">Projects</h2>
          <p>Add your noteworthy recent projects.</p>
        </div>
        {projects.length >= 1 &&
          projects.map((project, index) => (
            <div key={index} className="form-card">
              <div className="flex flex-wrap  items-center justify-between mb-2 min-h-[35px]">
                <div>
                  <h3 className="font-bold text-secondary">
                    {project?.project_title}
                  </h3>
                </div>
                <div className="flex items-center gap-2 -mb-2 justify-end text-primary-border">
                  <Button
                    variant="round"
                    size="round"
                    className="hover:brightness-95 group"
                    onClick={() => handleCollapse(index)}
                  >
                    {expandForm === index ? (
                      <ChevDown className="scale-75 " />
                    ) : (
                      <EditIcon className="fill-none stroke-secondary group-hover:stroke-primary" />
                    )}
                  </Button>
                  {projects.length > 1 && (
                    <Button
                      variant="round"
                      size="round"
                      className="hover:brightness-95"
                      onClick={() => {
                        setShowDeleteModal(true);
                        setSelectedIndex(index);
                      }}
                    >
                      <TrashBinIcon />
                    </Button>
                  )}
                </div>
              </div>
              <div
                className={`grid px-1 pb-1 grid-cols-1 gap-5 duration-300 transition-all ease-in ${
                  expandForm === index
                    ? "max-h-[600px] overflow-y-auto"
                    : "max-h-0 overflow-y-hidden"
                }`}
              >
                <div>
                  <label htmlFor="project_title">Project Title</label>
                  <div>
                    <input
                      type="text"
                      name="project_title"
                      id="project_title"
                      value={project.project_title}
                      className="form-input"
                      placeholder="Resume Generator"
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
                      placeholder="https://projectlink.com"
                      onChange={(e) => handleProjectChange(index, e)}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        <div className="flex justify-end">
          <div
            onClick={() => addProjects(projects.length)}
            className="flex items-center gap-x-1 duration-150 ease-in transition-all cursor-pointer hover:bg-secondary-light rounded-full group"
          >
            <Button
              variant="round"
              size="round"
              className="bg-primary text-white group-hover:bg-black"
            >
              <PlusIcon className="fill-white hover:fill-white" />
            </Button>
            Add More Experience
          </div>
        </div>
      </div>

      <DeleteModal
        isOpen={showDeleteModal}
        handleClose={closeModal}
        title={"Project"}
        index={selectedIndex}
        handleDelete={removeProjects}
      />
    </section>
  );
};

export default ProjectForm;
