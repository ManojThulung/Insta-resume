"use client";

import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";

import ToggleBtn from "@/components/common/ToggleBtn";
import Button from "@/components/common/Button";
import { EducationFormProps, ResumeDataProps } from "@/types";
import { ChevDown, EditIcon, PlusIcon, TrashBinIcon } from "@/assets/icon";
import DeleteModal from "./DeleteModal";

const EducationForm = ({
  educations,
  setResumeData,
}: {
  educations: EducationFormProps[];
  setResumeData: Dispatch<SetStateAction<ResumeDataProps>>;
}) => {
  const [expandForm, setExpandForm] = useState<number | null>(0);
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // ADD new Education object
  const addEducation = (index: number) => {
    // Create new Education form
    setResumeData((prev) => ({
      ...prev,
      educations: [
        ...prev.educations,
        {
          school_name: "",
          location: "",
          course: "",
          start_date: "",
          end_date: "",
          currently_study: false,
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

  // REMOVE Education object
  const removeEducation = (index: number) => {
    if (educations.length > 1) {
      setResumeData((prev) => ({
        ...prev,
        educations: prev.educations.filter((_, i) => i !== index),
      }));
    }

    closeModal(); //close delete modal when form deleted.
  };

  const handleEduChange = (index: number, e: ChangeEvent<HTMLInputElement>) => {
    setResumeData((prev) => {
      let updateData = { ...prev };

      updateData.educations[index] = {
        ...prev.educations[index],
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
    <section id="education-form" className="form-container-sec">
      <div>
        <div className="pb-4">
          <h2 className="form-header">Education</h2>
          <p>
            Add your educational details, including your current enrollments.
          </p>
        </div>
        {educations.length >= 1 &&
          educations.map((edu, index) => (
            <div key={index} className="form-card">
              <div className="flex flex-wrap  items-center justify-between mb-2 min-h-[35px]">
                <div>
                  <h3 className="font-bold text-secondary">
                    {edu?.school_name}
                  </h3>
                  <p className="text-secondary text-[12px]">{edu?.course}</p>
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
                  {educations.length > 1 && (
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
                className={`grid px-1 grid-cols-1 lg:grid-cols-2 gap-5 duration-300 transition-all ease-in ${
                  expandForm === index
                    ? "max-h-[600px] overflow-y-auto"
                    : "max-h-0 overflow-y-hidden"
                }`}
              >
                <div className="lg:col-span-2">
                  <label htmlFor="school_name">School Name</label>
                  <div>
                    <input
                      type="text"
                      name="school_name"
                      id="school_name"
                      value={edu.school_name}
                      className="form-input"
                      placeholder="Horizon University"
                      onChange={(e) => handleEduChange(index, e)}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="course">Course/Degree</label>
                  <div>
                    <input
                      type="text"
                      name="course"
                      id="course"
                      value={edu.course}
                      className="form-input"
                      placeholder="BSc (Hons) Computing"
                      onChange={(e) => handleEduChange(index, e)}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="location">School Location</label>
                  <div>
                    <input
                      type="text"
                      name="location"
                      id="location"
                      value={edu.location}
                      className="form-input"
                      placeholder="Emerald City, Nepal"
                      onChange={(e) => handleEduChange(index, e)}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="start_date">Start Year</label>
                  <div>
                    <input
                      type="number"
                      id="start_date"
                      name="start_date"
                      value={edu.start_date}
                      onChange={(e) => handleEduChange(index, e)}
                      min="2000"
                      max="2100"
                      step="1"
                      className="form-input"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="end_date">End Year</label>
                  <div>
                    {!edu.currently_study ? (
                      <input
                        type="number"
                        id="end_date"
                        name="end_date"
                        value={edu.end_date}
                        onChange={(e) => handleEduChange(index, e)}
                        min="2000"
                        max="2100"
                        step="1"
                        className="form-input"
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
                      targetName="educations"
                      state={edu.currently_study}
                      setResumeData={setResumeData}
                    />
                    <label htmlFor="currently_employed">
                      Currently study here
                    </label>
                  </div>
                </div>
              </div>
            </div>
          ))}
        <div className="flex justify-end">
          <div
            onClick={() => addEducation(educations.length)}
            className="flex items-center gap-x-1 duration-150 ease-in transition-all cursor-pointer hover:bg-secondary-light rounded-full group"
          >
            <Button
              variant="round"
              size="round"
              className="bg-primary text-white group-hover:bg-black"
            >
              <PlusIcon className="fill-white hover:fill-white" />
            </Button>
            Add More Education
          </div>
        </div>
      </div>

      <DeleteModal
        isOpen={showDeleteModal}
        handleClose={closeModal}
        title={"Education"}
        index={selectedIndex}
        handleDelete={removeEducation}
      />
    </section>
  );
};

export default EducationForm;
