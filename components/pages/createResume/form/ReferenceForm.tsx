import Button from "@/components/common/Button";
import { ChevronDown, PlusCircle, Trash2 } from "lucide-react";
import React from "react";

const ReferenceForm = () => {
  return (
    <section id="reference-form" className="form-container-sec">
      <div>
        <div>
          <h2>Reference</h2>
          <p>
            Include references from colleagues, employers, or professors to
            support your credentials.
          </p>
        </div>
        <div className="form-card grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className="lg:col-span-2 flex items-center gap-2 -mb-2 justify-end text-primary-border">
            <ChevronDown className="cursor-pointer" />
            <Trash2 className="scale-75 cursor-pointer" />
          </div>
          <div>
            <label htmlFor="reference_fullName">Full Name *</label>
            <div>
              <input
                type="text"
                name="reference_fullName"
                id="reference_fullName"
                className="form-input"
              />
            </div>
          </div>
          <div>
            <label htmlFor="reference_relation">
              Relationship to Reference *
            </label>
            <div>
              <input
                type="text"
                name="reference_relation"
                id="reference_relation"
                className="form-input"
              />
            </div>
          </div>
          <div>
            <label htmlFor="reference_organization">
              Organization/Institution *
            </label>
            <div>
              <input
                type="text"
                name="reference_organization"
                id="reference_organization"
                className="form-input"
              />
            </div>
          </div>
          <div>
            <label htmlFor="reference_email">Email *</label>
            <div>
              <input
                type="email"
                name="reference_email"
                id="reference_email"
                className="form-input"
              />
            </div>
          </div>
          <div className="lg:col-span-2">
            <label htmlFor="reference_social_link">Social Link</label>
            <div>
              <input
                type="text"
                name="reference_social_link"
                id="reference_social_link"
                className="form-input"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <Button variant="blueGhost" size="pLess" className="mt-4">
            <PlusCircle className="scale-75" />
            Add More Reference
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ReferenceForm;
