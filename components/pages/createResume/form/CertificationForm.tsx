"use client";

import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { CertificationProps, ResumeDataProps } from "@/types";
import { ChevDown, EditIcon, PlusIcon, TrashBinIcon } from "@/assets/icon";
import Button from "@/components/common/Button";
import DeleteModal from "./DeleteModal";

const CertificationForm = ({
  certifications,
  setResumeData,
}: {
  certifications: CertificationProps[];
  setResumeData: Dispatch<SetStateAction<ResumeDataProps>>;
}) => {
  const [expandForm, setExpandForm] = useState<number | null>(0);
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // ADD New Certification
  const addCertification = (index: number) => {
    // Create New Certification form
    setResumeData((prev) => ({
      ...prev,
      certifications: [
        ...prev.certifications,
        {
          certificate_title: "",
          organization: "",
          certificate_date: "",
          certificate_link: "",
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

  // REMOVE Certification
  const removeCertification = (index: number) => {
    if (certifications.length > 1) {
      setResumeData((prev) => ({
        ...prev,
        certifications: prev.certifications.filter((_i, i) => i !== index),
      }));
    }

    closeModal(); //close delete modal when form deleted.
  };

  const handleChange = (index: number, e: ChangeEvent<HTMLInputElement>) => {
    setResumeData((prev) => {
      const updateData = { ...prev };

      updateData.certifications[index] = {
        ...prev.certifications[index],
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
    <section id="certification-form" className="form-container-sec">
      <div>
        <div className="pb-4">
          <h2 className="form-header">Certification</h2>
          <p>Provide a concise overview of your tranining or certification.</p>
        </div>
        {certifications?.length >= 1 &&
          certifications.map((certificate, index) => (
            <div key={index} className="form-card">
              <div className="flex flex-wrap  items-center justify-between mb-2 min-h-[35px]">
                <div>
                  <h3 className="font-bold text-secondary">
                    {certificate?.certificate_title}
                  </h3>
                  <p className="text-secondary text-[12px]">
                    {certificate?.organization}
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
                  {certifications.length > 1 && (
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
                <div className="lg:col-span-2">
                  <label htmlFor="certificate_title">Certificate Title</label>
                  <div>
                    <input
                      type="text"
                      name="certificate_title"
                      id="certificate_title"
                      className="form-input"
                      value={certificate.certificate_title}
                      onChange={(e) => handleChange(index, e)}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="organization">organization/Institution</label>
                  <div>
                    <input
                      type="text"
                      name="organization"
                      id="organization"
                      className="form-input"
                      value={certificate.organization}
                      onChange={(e) => handleChange(index, e)}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="certificate_date">Certificate Date</label>
                  <div>
                    <input
                      type="month"
                      name="certificate_date"
                      id="certificate_date"
                      className="form-input"
                      value={certificate.certificate_date}
                      onChange={(e) => handleChange(index, e)}
                    />
                  </div>
                </div>
                <div className="lg:col-span-2">
                  <label htmlFor="certificate_link">Certificate Url</label>
                  <div>
                    <input
                      type="text"
                      name="certificate_link"
                      id="certificate_link"
                      className="form-input"
                      value={certificate.certificate_link}
                      onChange={(e) => handleChange(index, e)}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        <div className="flex justify-end">
          <div
            onClick={() => addCertification(certifications.length)}
            className="flex items-center gap-x-1 duration-150 ease-in transition-all cursor-pointer hover:bg-secondary-light rounded-full group"
          >
            <Button
              variant="round"
              size="round"
              className="bg-primary text-white group-hover:bg-black"
            >
              <PlusIcon className="fill-white hover:fill-white" />
            </Button>
            Add More Certificate
          </div>
        </div>
      </div>

      <DeleteModal
        isOpen={showDeleteModal}
        handleClose={closeModal}
        title={"Certificate"}
        index={selectedIndex}
        handleDelete={removeCertification}
      />
    </section>
  );
};

export default CertificationForm;
