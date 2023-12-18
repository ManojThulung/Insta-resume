import Button from "@/components/common/Button";
import ToggleBtn from "@/components/common/ToggleBtn";
import { ChevronDown, PlusCircle, Trash2 } from "lucide-react";
import TextEditorField from "../TextEditorField";

const ExperienceForm = () => {
  return (
    <section id="experience-form" className="form-container-sec">
      <div>
        <div>
          <h2>Work Experiences</h2>
          <p>List your work experience, from the most recent to the oldest.</p>
        </div>
        <div className="form-card grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className="lg:col-span-2 flex items-center gap-2 -mb-2 justify-end text-primary-border">
            <ChevronDown className="cursor-pointer" />
            <Trash2 className="scale-75 cursor-pointer" />
          </div>
          <div>
            <label htmlFor="work-job-title">Job Title</label>
            <div>
              <input
                type="text"
                name="work_job_title"
                id="work-job-title"
                className="form-input"
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
                className="form-input"
              />
            </div>
          </div>
          <div className="lg:col-span-2">
            <label htmlFor="organization_location">Location</label>
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
              <label htmlFor="currently_employed">Currently Employed</label>
            </div>
          </div>
          <div className="lg:col-span-2">
            <label>Work Description</label>
            <div>
              <TextEditorField />
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <Button variant="blueGhost" size="pLess" className="mt-4">
            <PlusCircle className="scale-75" />
            Add More Experience
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ExperienceForm;
