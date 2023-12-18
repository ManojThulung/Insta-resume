import React from "react";
import TextEditorField from "../TextEditorField";
import Button from "@/components/common/Button";
import { ChevronDown, PlusCircle, Trash2 } from "lucide-react";

const CertificationForm = () => {
  return (
    <section id="certification-form" className="form-container-sec">
      <div>
        <div>
          <h2>Certification</h2>
          <p>Provide a concise overview of your tranining or certification.</p>
        </div>
        <div className="form-card grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className="lg:col-span-2 flex items-center gap-2 -mb-2 justify-end text-primary-border">
            <ChevronDown className="cursor-pointer" />
            <Trash2 className="scale-75 cursor-pointer" />
          </div>
          <div className="lg:col-span-2">
            <label htmlFor="certificate_title">Certificate Title *</label>
            <div>
              <input
                type="text"
                name="certificate_title"
                id="certificate_title"
                className="form-input"
              />
            </div>
          </div>
          <div>
            <label htmlFor="certificate_institution">
              Organization/Institution *
            </label>
            <div>
              <input
                type="text"
                name="certificate_institution"
                id="certificate_institution"
                className="form-input"
              />
            </div>
          </div>
          <div>
            <label htmlFor="certificate_date">Certificate Date *</label>
            <div>
              <input
                type="month"
                name="certificate_date"
                id="certificate_date"
                className="form-input"
              />
            </div>
          </div>
          <div className="lg:col-span-2">
            <label htmlFor="certificate_url">Certificate Url</label>
            <div>
              <input
                type="text"
                name="certificate_url"
                id="certificate_url"
                className="form-input"
              />
            </div>
          </div>
          <div className="lg:col-span-2">
            <label>Description</label>
            <div>
              <TextEditorField />
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <Button variant="blueGhost" size="pLess" className="mt-4">
            <PlusCircle className="scale-75" />
            Add More Certificate
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CertificationForm;
