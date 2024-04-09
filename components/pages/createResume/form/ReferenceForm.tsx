import Button from "@/components/common/Button";
import { ReferenceProps, ResumeDataProps } from "@/types";
import { ChevronDown, PlusCircle, Trash2 } from "lucide-react";
import React, { ChangeEvent, Dispatch, SetStateAction } from "react";

const ReferenceForm = ({
  references,
  setResumeData,
}: {
  references: ReferenceProps[];
  setResumeData: Dispatch<SetStateAction<ResumeDataProps>>;
}) => {
  // ADD new references
  const addReference = () => {
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
  };

  // REMOVE references
  const removeReference = (index: number) => {
    if (references.length > 1) {
      setResumeData((prev) => ({
        ...prev,
        references: prev.references.filter((_, i) => i !== index),
      }));
    }
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

  return (
    <section id="reference-form" className="form-container-sec">
      <div>
        <div>
          <h2>Reference</h2>
          <p>
            Include references from colleagues, employers, or professors to
            support your credentials.
          </p>
        </div>
        {references.length >= 1 &&
          references.map((reference, index) => (
            <div
              key={index}
              className="form-card grid grid-cols-1 lg:grid-cols-2 gap-5"
            >
              <div className="lg:col-span-2 flex items-center gap-2 -mb-2 justify-end text-primary-border">
                <ChevronDown className="cursor-pointer" />
                {references.length > 1 && (
                  <Trash2
                    onClick={() => removeReference(index)}
                    className="scale-75 cursor-pointer"
                  />
                )}
              </div>
              <div>
                <label htmlFor="full_name">Full Name *</label>
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
                  Relationship to Reference *
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
                <label htmlFor="organization">Organization/Institution *</label>
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
                <label htmlFor="email">Email *</label>
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
          ))}
        <div className="flex justify-end">
          <Button
            onClick={() => addReference()}
            variant="blueGhost"
            size="pLess"
            className="mt-4"
          >
            <PlusCircle className="scale-75" />
            Add More Reference
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ReferenceForm;
