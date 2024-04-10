import { ChangeEvent, Dispatch, SetStateAction } from "react";
import dynamic from "next/dynamic";
import { ChevronDown, PlusCircle, Trash2 } from "lucide-react";
import Button from "@/components/common/Button";
import ToggleBtn from "@/components/common/ToggleBtn";
import { ExperienceFormProps, ResumeDataProps } from "@/types";

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
  //ADD new experience object
  const addExperience = () => {
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
  };

  // REMOVE experience object
  const removeExperience = (index: number) => {
    if (experiences.length > 1) {
      setResumeData((prev) => ({
        ...prev,
        experiences: prev.experiences.filter((_, i) => i !== index),
      }));
    }
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

  return (
    <section id="experience-form" className="form-container-sec">
      <div>
        <div>
          <h2>Work Experiences</h2>
          <p>List your work experience, from the most recent to the oldest.</p>
        </div>
        {experiences.length >= 1 &&
          experiences.map((exp, index) => (
            <div
              key={index}
              className="form-card grid grid-cols-1 lg:grid-cols-2 gap-5"
            >
              <div className="lg:col-span-2 flex items-center gap-2 -mb-2 justify-end text-primary-border">
                <ChevronDown className="cursor-pointer" />
                {experiences.length > 1 && (
                  <Trash2
                    onClick={() => removeExperience(index)}
                    className="scale-75 cursor-pointer"
                  />
                )}
              </div>
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
                  <label htmlFor="currently_employed">Currently Employed</label>
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
          ))}
        <div className="flex justify-end">
          <Button
            onClick={addExperience}
            variant="blueGhost"
            size="pLess"
            className="mt-4"
          >
            <PlusCircle className="scale-75" />
            Add More Experience
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ExperienceForm;
