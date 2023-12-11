import Button from "@/components/common/Button";
import { PlusCircle } from "lucide-react";
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
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
                type="text"
                name="reference_email"
                id="reference_email"
                className="form-input"
              />
            </div>
          </div>
        </div>
        <Button variant="blueGhost" size="pLess" className="mt-4">
          <PlusCircle className="scale-75" />
          Add More Reference
        </Button>
      </div>
    </section>
  );
};

export default ReferenceForm;
