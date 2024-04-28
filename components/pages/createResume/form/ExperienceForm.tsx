"use client";

import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import dynamic from "next/dynamic";
import { ExperienceFormProps, ResumeDataProps } from "@/types";
import { ChevDown, EditIcon, PlusIcon, TrashBinIcon } from "@/assets/icon";

import Button from "@/components/common/Button";
import ToggleBtn from "@/components/common/ToggleBtn";
import DeleteModal from "./DeleteModal";

const CustomEditors = dynamic(
  () => {
    return import("@/components/layout/CustomEditors");
  },
  { ssr: false }
);

const ExperienceForm = ({
  experiences,
  setResumeData,
}: {
  experiences: ExperienceFormProps[];
  setResumeData: Dispatch<SetStateAction<ResumeDataProps>>;
}) => {
  const [expandForm, setExpandForm] = useState<number | null>(0);
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  //ADD new experience object
  const addExperience = (index: number) => {
    // Create New Experience form
    setResumeData((prev) => ({
      ...prev,
      experiences: [
        ...prev.experiences,
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

  // REMOVE experience object
  const removeExperience = (index: number) => {
    if (experiences.length > 1) {
      setResumeData((prev) => ({
        ...prev,
        experiences: prev.experiences.filter((_, i) => i !== index),
      }));
    }

    closeModal(); //close delete modal when form deleted.
  };

  const handleChange = (index: number, e: ChangeEvent<HTMLInputElement>) => {
    setResumeData((prev) => {
      const updateData = { ...prev };

      updateData.experiences[index] = {
        ...prev.experiences[index],
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
    <section id="experience-form" className="form-container-sec">
      <div>
        <div className="pb-4">
          <h2 className="form-header">
            Work <span className="text-secondary">Experiences</span>
          </h2>
          <p>List your work experience, from the most recent to the oldest.</p>
        </div>
        {experiences.length >= 1 &&
          experiences.map((exp, index) => (
            <div key={index} className="form-card">
              <div className="flex flex-wrap  items-center justify-between mb-2 min-h-[35px]">
                <div>
                  <h3 className="font-bold text-secondary">{exp?.job_title}</h3>
                  <p className="text-secondary text-[12px]">
                    {exp?.organization_name}
                  </p>
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
                  {experiences.length > 1 && (
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
                className={`grid px-1 pb-1 grid-cols-1 lg:grid-cols-2 gap-5 duration-300 transition-all ease-in ${
                  expandForm === index
                    ? "max-h-[600px] overflow-y-auto"
                    : "max-h-0 overflow-y-hidden"
                }`}
              >
                <div>
                  <label htmlFor="job_title">Job Title</label>
                  <div>
                    <input
                      type="text"
                      name="job_title"
                      id="job_title"
                      value={exp.job_title}
                      placeholder="Frontend Developer"
                      className="form-input"
                      onChange={(e) => handleChange(index, e)}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="organization-name">Organization Name</label>
                  <div>
                    <input
                      type="text"
                      name="organization_name"
                      id="organization-name"
                      value={exp.organization_name}
                      placeholder="ABC Company"
                      className="form-input"
                      onChange={(e) => handleChange(index, e)}
                    />
                  </div>
                </div>
                <div className="lg:col-span-2">
                  <label htmlFor="location">Location</label>
                  <div>
                    <input
                      type="text"
                      name="location"
                      id="location"
                      placeholder="Rothenburg, Nepal"
                      value={exp.location}
                      className="form-input"
                      onChange={(e) => handleChange(index, e)}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="start_date">Start Date</label>
                  <div>
                    <input
                      type="month"
                      name="start_date"
                      id="start_date"
                      value={exp.start_date}
                      className="form-input"
                      onChange={(e) => handleChange(index, e)}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="end_date">End Date</label>
                  <div>
                    {!exp.currently_employed ? (
                      <input
                        type="month"
                        name="end_date"
                        id="end_date"
                        value={exp.currently_employed ? "" : exp.end_date}
                        className="form-input"
                        disabled={exp.currently_employed}
                        onChange={(e) => handleChange(index, e)}
                      />
                    ) : (
                      <input
                        type="string"
                        disabled
                        value="Present"
                        className="form-input"
                      />
                    )}
                  </div>

                  <div className="mt-2 flex items-center gap-2 flex-wrap justify-start">
                    <ToggleBtn
                      index={index}
                      targetName="experiences"
                      state={exp.currently_employed}
                      setResumeData={setResumeData}
                    />
                    <label htmlFor="currently_employed">
                      Currently Employed
                    </label>
                  </div>
                </div>
                <div className="lg:col-span-2">
                  <label>Work Description</label>
                  <div>
                    <CustomEditors
                      index={index}
                      targetName="experiences"
                      data={exp.work_description}
                      setData={setResumeData}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        <div className="flex justify-end">
          <div
            onClick={() => addExperience(experiences.length)}
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
        title={"Experience"}
        index={selectedIndex}
        handleDelete={removeExperience}
      />
    </section>
  );
};

export default ExperienceForm;
