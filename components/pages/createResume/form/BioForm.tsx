import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import TextEditorField from "../TextEditorField";

import { BioFormProps } from "@/types";
import CustomDropDown from "@/components/common/CustomDropDown";

const BioForm = ({
  setBioData,
}: {
  setBioData: Dispatch<SetStateAction<BioFormProps>>;
}) => {
  const [bioSummery, setBioSummery] = useState<string>("");
  const handleBioChange = (e: ChangeEvent<HTMLInputElement>) => {
    setBioData((prev: BioFormProps) => ({
      ...prev,
      [e.target.name]: e.target.value,
      bio_summery: bioSummery,
    }));
  };

  return (
    <section id="bio-form" className="form-container-sec">
      <div>
        <h2>Resume Heading</h2>
        <p>How do you want employers to contact you</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="lg:col-span-2">
          <label htmlFor="job-title">Job Title</label>
          <div>
            <input
              type="text"
              name="job_title"
              id="job-title"
              placeholder="eg Front-end Developer"
              onChange={(e) => handleBioChange(e)}
              className="form-input"
            />
          </div>
        </div>
        <div>
          <label htmlFor="first-name">First Name</label>
          <div>
            <input
              type="text"
              name="first_name"
              id="fist-name"
              placeholder="eg Peter"
              onChange={(e) => handleBioChange(e)}
              className="form-input"
            />
          </div>
        </div>
        <div>
          <label htmlFor="last-name">Last Name</label>
          <div>
            <input
              type="text"
              name="last_name"
              id="last-name"
              placeholder="eg Parker"
              onChange={(e) => handleBioChange(e)}
              className="form-input"
            />
          </div>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <div>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="eg peter33@gmail.com"
              onChange={(e) => handleBioChange(e)}
              className="form-input"
            />
          </div>
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <div>
            <input
              type="phone"
              name="phone"
              id="phone"
              placeholder="+977 9990009900"
              onChange={(e) => handleBioChange(e)}
              className="form-input"
            />
          </div>
        </div>

        <div className="lg:col-span-2">
          <label htmlFor="address">Address</label>
          <div>
            <input
              type="text"
              name="address"
              id="address"
              placeholder="eg St. State, bt street"
              onChange={(e) => handleBioChange(e)}
              className="form-input"
            />
          </div>
        </div>
        <div className="lg:col-span-2">
          <label>
            Write a short summary telling more about yourself, your strengths
            and experience. demo
          </label>
          <div>
            <TextEditorField data={bioSummery} setData={setBioSummery} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BioForm;
