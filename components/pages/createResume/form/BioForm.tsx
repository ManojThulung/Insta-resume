"use client";

import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import TextEditorField from "../TextEditorField";

import { BioFormProps } from "@/types";

const BioForm = ({
  setBioData,
  bioData,
}: {
  setBioData: Dispatch<SetStateAction<BioFormProps>>;
  bioData: BioFormProps;
}) => {
  const [bioSummery, setBioSummery] = useState<string>("");

  const handleBioChange = (e: ChangeEvent<HTMLInputElement> | null) => {
    if (e) {
      setBioData((prev: BioFormProps) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    } else {
      setBioData((prev: BioFormProps) => ({
        ...prev,
        bio_summery: bioSummery,
      }));
    }
  };

  useEffect(() => {
    handleBioChange(null);
  }, [bioSummery]);

  return (
    <section id="bio-form" className="form-container-sec">
      <div className="pb-4">
        <h2 className="form-header">
          Personal <span className="text-secondary">Details</span>
        </h2>
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
              placeholder="Front-end Developer"
              value={bioData?.job_title}
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
              placeholder="Peter"
              value={bioData?.first_name}
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
              placeholder="Parker"
              value={bioData?.last_name}
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
              placeholder="peter33@gmail.com"
              value={bioData?.email}
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
              value={bioData?.phone}
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
              placeholder="Mystic Valley, Nepal"
              value={bioData?.address}
              onChange={(e) => handleBioChange(e)}
              className="form-input"
            />
          </div>
        </div>
        <div className="lg:col-span-2">
          <label>
            Write a short summary telling more about yourself, your strengths
            and experience.
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
