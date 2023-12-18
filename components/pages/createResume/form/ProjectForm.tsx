import { ChevronDown, PlusCircle, Trash2 } from "lucide-react";
import TextEditorField from "../TextEditorField";
import Button from "@/components/common/Button";

const ProjectForm = () => {
  return (
    <section id="project-form" className="form-container-sec">
      <div>
        <div>
          <h2>Projects</h2>
          <p>Add your noteworthy recent projects.</p>
        </div>
        <div className="form-card flex flex-col gap-y-5">
          <div className="flex items-center gap-2 -mb-2 justify-end text-primary-border">
            <ChevronDown className="cursor-pointer" />
            <Trash2 className="scale-75 cursor-pointer" />
          </div>
          <div>
            <label htmlFor="project_title">Project Title</label>
            <div>
              <input
                type="text"
                name="project_title"
                id="project_title"
                className="form-input"
              />
            </div>
          </div>
          <div>
            <label>Project Summery</label>
            <div>
              <TextEditorField />
            </div>
          </div>
          <div>
            <label htmlFor="project_link">Project Link</label>
            <div>
              <input
                type="text"
                name="project_link"
                id="project_link"
                className="form-input"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <Button variant="blueGhost" size="pLess" className="mt-4">
            <PlusCircle className="scale-75" />
            Add More Project
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectForm;
