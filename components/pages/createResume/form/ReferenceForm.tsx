import { ChevDown, EditIcon, PlusIcon, TrashBinIcon } from "@/assets/icon";
import Button from "@/components/common/Button";
import { ReferenceProps, ResumeDataProps } from "@/types";
import React, { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import DeleteModal from "./DeleteModal";

const ReferenceForm = ({
  references,
  setResumeData,
}: {
  references: ReferenceProps[];
  setResumeData: Dispatch<SetStateAction<ResumeDataProps>>;
}) => {
  const [expandForm, setExpandForm] = useState<number | null>(0);
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // ADD new references
  const addReference = (index: number) => {
    // Create New reference form
    setResumeData((prev) => ({
      ...prev,
      references: [
        ...prev.references,
        {
          full_name: "",
          relationship: "",
          organization: "",
          email: "",
          social_link: "",
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

  // REMOVE references
  const removeReference = (index: number) => {
    if (references.length > 1) {
      setResumeData((prev) => ({
        ...prev,
        references: prev.references.filter((_, i) => i !== index),
      }));
    }

    closeModal(); //close delete modal when form deleted.
  };

  const handleChange = (index: number, e: ChangeEvent<HTMLInputElement>) => {
    setResumeData((prev) => {
      const updateData = { ...prev };

      updateData.references[index] = {
        ...prev.references[index],
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
    <section id="reference-form" className="form-container-sec">
      <div>
        <div className="pb-4">
          <h2 className="form-header">Reference</h2>
          <p>
            Include references from colleagues, employers, or professors to
            support your credentials.
          </p>
        </div>
        {references.length >= 1 &&
          references.map((reference, index) => (
            <div key={index} className="form-card">
              <div className="flex flex-wrap items-center justify-between mb-2 min-h-[35px]">
                <div>
                  <h3 className="font-bold text-secondary">
                    {reference?.full_name}
                  </h3>
                  <p className="text-secondary text-[12px]">
                    {reference?.relationship}
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
                  {references.length > 1 && (
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
                <div>
                  <label htmlFor="full_name">Full Name</label>
                  <div>
                    <input
                      type="text"
                      name="full_name"
                      id="full_name"
                      className="form-input"
                      value={reference.full_name}
                      onChange={(e) => handleChange(index, e)}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="relationship">
                    Relationship to Reference
                  </label>
                  <div>
                    <input
                      type="text"
                      name="relationship"
                      id="relationship"
                      className="form-input"
                      value={reference.relationship}
                      onChange={(e) => handleChange(index, e)}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="organization">
                    Organization/Institution{" "}
                  </label>
                  <div>
                    <input
                      type="text"
                      name="organization"
                      id="organization"
                      className="form-input"
                      value={reference.organization}
                      onChange={(e) => handleChange(index, e)}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email">Email </label>
                  <div>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="form-input"
                      value={reference.email}
                      onChange={(e) => handleChange(index, e)}
                    />
                  </div>
                </div>
                <div className="lg:col-span-2">
                  <label htmlFor="social_link">Social Link</label>
                  <div>
                    <input
                      type="text"
                      name="social_link"
                      id="social_link"
                      className="form-input"
                      value={reference.social_link}
                      onChange={(e) => handleChange(index, e)}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        <div className="flex justify-end">
          <div
            onClick={() => addReference(references.length)}
            className="flex items-center gap-x-1 duration-150 ease-in transition-all cursor-pointer hover:bg-secondary-light rounded-full group"
          >
            <Button
              variant="round"
              size="round"
              className="bg-primary text-white group-hover:bg-black"
            >
              <PlusIcon className="fill-white hover:fill-white" />
            </Button>
            Add More Reference
          </div>
        </div>
      </div>

      <DeleteModal
        isOpen={showDeleteModal}
        handleClose={closeModal}
        title={"Reference"}
        index={selectedIndex}
        handleDelete={removeReference}
      />
    </section>
  );
};

export default ReferenceForm;
