import Button from "@/components/common/Button";
import { ChevronDown, PenLine, PlusCircle, Trash2 } from "lucide-react";
import React from "react";

const SkillForm = () => {
  return (
    <section id="skill-form" className="form-container-sec">
      <div>
        <div>
          <h2>Skills</h2>
          <p>
            Heighlight your relevant professional key skills and proficiencies.
          </p>
        </div>
        <div className="form-card">
          <div className="flex items-center gap-2 mb-2 justify-end text-primary-border">
            <ChevronDown className="cursor-pointer" />
            <Trash2 className="scale-75 cursor-pointer" />
          </div>

          <div className="flex items-center">
            <input
              type="text"
              name="work_job_title"
              id="work-job-title"
              className="form-input"
            />
            <PenLine className="text-primary-border scale-75 cursor-pointer" />
          </div>

          <div>
            <input type="text" name="skills" className="form-input" />
          </div>
        </div>
        <div className="flex justify-end">
          <Button variant="blueGhost" size="pLess" className="mt-4">
            <PlusCircle className="scale-75" />
            Add More Skill
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SkillForm;
