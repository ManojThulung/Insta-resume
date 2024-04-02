import { ChevronDown, PlusCircle, Trash2 } from "lucide-react";

import ToggleBtn from "@/components/common/ToggleBtn";
import Button from "@/components/common/Button";
import { EducationFormProps, ResumeDataProps } from "@/types";
import { ChangeEvent, Dispatch, SetStateAction } from "react";

const EducationForm = ({
  educations,
  setResumeData,
}: {
  educations: EducationFormProps[];
  setResumeData: Dispatch<SetStateAction<ResumeDataProps>>;
}) => {
  // ADD new Education object
  const addEducation = () => {
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
  };

  // REMOVE Education object
  const removeEducation = (index: number) => {
    if (educations.length > 1) {
      setResumeData((prev) => ({
        ...prev,
        educations: prev.educations.filter((_, i) => i !== index),
      }));
    }
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

  return (
    <section id="education-form" className="form-container-sec">
      <div>
        <div>
          <h2>Education</h2>
          <p>
            Add your educational details, including your current enrollments.
          </p>
        </div>
        {educations.length >= 1 &&
          educations.map((edu, index) => (
            <div
              key={index}
              className="form-card grid grid-cols-1 lg:grid-cols-2 gap-5"
            >
              <div className="lg:col-span-2 flex items-center gap-2 -mb-2 justify-end text-primary-border">
                <ChevronDown className="cursor-pointer" />
                {educations.length > 1 && (
                  <Trash2
                    onClick={() => removeEducation(index)}
                    className="scale-75 cursor-pointer"
                  />
                )}
              </div>
              <div className="lg:col-span-2">
                <label htmlFor="school_name">School Name</label>
                <div>
                  <input
                    type="text"
                    name="school_name"
                    id="school_name"
                    value={edu.school_name}
                    className="form-input"
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
                    onChange={(e) => handleEduChange(index, e)}
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
                    value={edu.start_date}
                    className="form-input"
                    onChange={(e) => handleEduChange(index, e)}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="end_date">End Date</label>
                <div>
                  {!edu.currently_study ? (
                    <input
                      type="month"
                      name="end_date"
                      id="end_date"
                      value={edu.end_date}
                      className="form-input"
                      onChange={(e) => handleEduChange(index, e)}
                    />
                  ) : (
                    <input
                      type="string"
                      disabled
                      name="end_date"
                      id="end_date"
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
          ))}
        <div className="flex justify-end">
          <Button
            onClick={addEducation}
            variant="blueGhost"
            size="pLess"
            className="mt-4"
          >
            <PlusCircle className="scale-75" />
            Add More Education
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EducationForm;
