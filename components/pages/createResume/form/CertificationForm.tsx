import { ChangeEvent, Dispatch, SetStateAction } from "react";
import TextEditorField from "../TextEditorField";
import Button from "@/components/common/Button";
import { ChevronDown, PlusCircle, Trash2 } from "lucide-react";
import { CertificationProps, ResumeDataProps } from "@/types";

const CertificationForm = ({
  certifications,
  setResumeData,
}: {
  certifications: CertificationProps[];
  setResumeData: Dispatch<SetStateAction<ResumeDataProps>>;
}) => {
  // ADD New Certification
  const addCertification = () => {
    setResumeData((prev) => ({
      ...prev,
      certifications: [
        ...prev.certifications,
        {
          certificate_title: "",
          organization: "",
          certificate_date: "",
          certificate_link: "",
        },
      ],
    }));
  };

  // REMOVE Certification
  const removeCertification = (index: number) => {
    if (certifications.length > 1) {
      setResumeData((prev) => ({
        ...prev,
        certifications: prev.certifications.filter((_i, i) => i !== index),
      }));
    }
  };

  const handleChange = (index: number, e: ChangeEvent<HTMLInputElement>) => {
    setResumeData((prev) => {
      const updateData = { ...prev };

      updateData.certifications[index] = {
        ...prev.certifications[index],
        [e.target.name]: e.target.value,
      };

      return updateData;
    });
  };

  return (
    <section id="certification-form" className="form-container-sec">
      <div>
        <div>
          <h2>Certification</h2>
          <p>Provide a concise overview of your tranining or certification.</p>
        </div>
        {certifications?.length >= 1 &&
          certifications.map((certificate, index) => (
            <div
              key={index}
              className="form-card grid grid-cols-1 lg:grid-cols-2 gap-5"
            >
              <div className="lg:col-span-2 flex items-center gap-2 -mb-2 justify-end text-primary-border">
                <ChevronDown className="cursor-pointer" />
                {certifications.length > 1 && (
                  <Trash2
                    onClick={() => removeCertification(index)}
                    className="scale-75 cursor-pointer"
                  />
                )}
              </div>
              <div className="lg:col-span-2">
                <label htmlFor="certificate_title">Certificate Title *</label>
                <div>
                  <input
                    type="text"
                    name="certificate_title"
                    id="certificate_title"
                    className="form-input"
                    value={certificate.certificate_title}
                    onChange={(e) => handleChange(index, e)}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="organization">organization/Institution *</label>
                <div>
                  <input
                    type="text"
                    name="organization"
                    id="organization"
                    className="form-input"
                    value={certificate.organization}
                    onChange={(e) => handleChange(index, e)}
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
                    value={certificate.certificate_date}
                    onChange={(e) => handleChange(index, e)}
                  />
                </div>
              </div>
              <div className="lg:col-span-2">
                <label htmlFor="certificate_link">Certificate Url</label>
                <div>
                  <input
                    type="text"
                    name="certificate_link"
                    id="certificate_link"
                    className="form-input"
                    value={certificate.certificate_link}
                    onChange={(e) => handleChange(index, e)}
                  />
                </div>
              </div>
            </div>
          ))}
        <div className="flex justify-end">
          <Button
            onClick={addCertification}
            variant="blueGhost"
            size="pLess"
            className="mt-4"
          >
            <PlusCircle className="scale-75" />
            Add More Certificate
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CertificationForm;
