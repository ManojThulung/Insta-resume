import Button from "@/components/common/Button";
import { PlusCircle } from "lucide-react";
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
        <div>
          <div>
            <input type="text" name="skills" className="form-input" />
          </div>
        </div>
        <Button variant="blueGhost" size="pLess" className="mt-4">
          <PlusCircle className="scale-75" />
          Add More Skill
        </Button>
      </div>
    </section>
  );
};

export default SkillForm;
