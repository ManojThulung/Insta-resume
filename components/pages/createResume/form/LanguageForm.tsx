import { PlusCircle, Trash2 } from "lucide-react";
import { ChangeEvent, Dispatch, SetStateAction } from "react";

import Button from "@/components/common/Button";
import { ResumeDataProps } from "@/types";

const LanguageForm = ({
  languages,
  setResumeData,
}: {
  languages: string[];
  setResumeData: Dispatch<SetStateAction<ResumeDataProps>>;
}) => {
  // ADD new language
  const addLanguage = () => {
    setResumeData((prev) => ({
      ...prev,
      languages: [...prev.languages, ""],
    }));
  };

  // REMOVE language
  const removeLanguage = (index: number) => {
    // setResumeData(prev => )
    if (languages.length > 1) {
      setResumeData((prev) => ({
        ...prev,
        languages: prev.languages.filter((_, i) => i !== index),
      }));
    }
  };

  const handleChange = (index: number, e: ChangeEvent<HTMLInputElement>) => {
    setResumeData((prev) => {
      let updateData = { ...prev };

      updateData.languages[index] = e.target.value;

      return updateData;
    });
  };

  return (
    <section id="language-form" className="form-container-sec">
      <div>
        <div>
          <h2>Languages</h2>
          <p>Display your language abilities.</p>
        </div>
        {languages.length >= 1 &&
          languages.map((lang, index) => (
            <div key={index} className="form-card">
              <div className="flex items-center justify-between gap-1">
                <input
                  type="text"
                  name="language"
                  id="language"
                  className="form-input"
                  value={lang}
                  placeholder="English"
                  onChange={(e) => handleChange(index, e)}
                />
                {languages.length > 1 && (
                  <Trash2
                    onClick={() => removeLanguage(index)}
                    className="scale-75 cursor-pointer text-primary-border"
                  />
                )}
              </div>
            </div>
          ))}
        <div className="flex justify-end">
          <Button
            onClick={addLanguage}
            variant="blueGhost"
            size="pLess"
            className="mt-4"
          >
            <PlusCircle className="scale-75" />
            Add More Skill Title
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LanguageForm;
