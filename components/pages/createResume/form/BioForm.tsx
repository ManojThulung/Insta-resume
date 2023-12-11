import React from "react";
import TextEditorField from "../TextEditorField";

const BioForm = () => {
  return (
    <section id="bio-form" className="form-container-sec">
      <div>
        <h2>Resume Heading</h2>
        <p>How do you want employers to contact you</p>
      </div>
      <div className="grid grid-cols-2 gap-5">
        <div className="col-span-2">
          <label htmlFor="job-title">Job Title</label>
          <div>
            <input
              type="text"
              name="job_title"
              id="job-title"
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
              className="form-input"
            />
          </div>
        </div>
        <div className="col-span-2">
          <label htmlFor="address">Address</label>
          <div>
            <input
              type="text"
              name="address"
              id="address"
              className="form-input"
            />
          </div>
        </div>
        <div className="col-span-2">
          <label>
            Write a short summary telling more about yourself, your strengths
            and experience.
          </label>
          <div>
            <TextEditorField />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BioForm;
