import { ChevronDown, PlusCircle, Trash2 } from "lucide-react";

import ToggleBtn from "@/components/common/ToggleBtn";
import Button from "@/components/common/Button";

const EducationForm = () => {
  return (
    <section id="experience-form" className="form-container-sec">
      <div>
        <div>
          <h2>Education</h2>
          <p>
            Add your educational details, including your current enrollments.
          </p>
        </div>
        <div className="form-card grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className="lg:col-span-2 flex items-center gap-2 -mb-2 justify-end text-primary-border">
            <ChevronDown className="cursor-pointer" />
            <Trash2 className="scale-75 cursor-pointer" />
          </div>
          <div className="lg:col-span-2">
            <label htmlFor="school_name">School Name</label>
            <div>
              <input
                type="text"
                name="school_name"
                id="school_name"
                className="form-input"
              />
            </div>
          </div>
          <div>
            <label htmlFor="school_location">School Location</label>
            <div>
              <input
                type="text"
                name="school_location"
                id="school_location"
                className="form-input"
              />
            </div>
          </div>
          <div>
            <label htmlFor="organization_location">Course/Degree</label>
            <div>
              <input
                type="text"
                name="organization_location"
                id="organization_location"
                className="form-input"
              />
            </div>
          </div>
          <div>
            <label htmlFor="work-job-title">Start Date</label>
            <div>
              <input
                type="month"
                name="work_job_title"
                id="work-job-title"
                className="form-input"
              />
            </div>
          </div>
          <div>
            <label htmlFor="work-job-title">End Date</label>
            <div>
              <input
                type="month"
                name="work_job_title"
                id="work-job-title"
                className="form-input"
              />
            </div>
            <div className="mt-2 flex items-center gap-2 flex-wrap justify-start">
              <ToggleBtn />
              <label htmlFor="currently_employed">Currently study here</label>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <Button variant="blueGhost" size="pLess" className="mt-4">
            <PlusCircle className="scale-75" />
            Add More Education
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EducationForm;
