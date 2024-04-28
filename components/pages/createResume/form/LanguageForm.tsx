"use client";

import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { PlusCircle, Trash2 } from "lucide-react";

import Button from "@/components/common/Button";
import { ResumeDataProps } from "@/types";
import { PlusIcon, TrashBinIcon } from "@/assets/icon";
import DeleteModal from "./DeleteModal";

const LanguageForm = ({
  languages,
  setResumeData,
}: {
  languages: string[];
  setResumeData: Dispatch<SetStateAction<ResumeDataProps>>;
}) => {
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

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

    closeModal(); //close delete modal when form deleted.
  };

  const handleChange = (index: number, e: ChangeEvent<HTMLInputElement>) => {
    setResumeData((prev) => {
      let updateData = { ...prev };

      updateData.languages[index] = e.target.value;

      return updateData;
    });
  };

  // CLOSE delete Modal
  const closeModal = () => {
    setShowDeleteModal(false);
    setSelectedIndex(null);
  };

  return (
    <section id="language-form" className="form-container-sec">
      <div>
        <div className="pb-4">
          <h2 className="form-header">Languages</h2>
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
                  <Button
                    variant="round"
                    size="round"
                    className="hover:brightness-95"
                    onClick={() => {
                      setShowDeleteModal(true);
                      setSelectedIndex(index);
                    }}
                  >
                    <TrashBinIcon />
                  </Button>
                )}
              </div>
            </div>
          ))}
        <div className="flex justify-end">
          <div
            onClick={addLanguage}
            className="flex items-center gap-x-1 duration-150 ease-in transition-all cursor-pointer hover:bg-secondary-light rounded-full group"
          >
            <Button
              variant="round"
              size="round"
              className="bg-primary text-white group-hover:bg-black"
            >
              <PlusIcon className="fill-white hover:fill-white" />
            </Button>
            Add More Language
          </div>
        </div>
      </div>

      <DeleteModal
        isOpen={showDeleteModal}
        handleClose={closeModal}
        title={"Language"}
        index={selectedIndex}
        handleDelete={removeLanguage}
      />
    </section>
  );
};

export default LanguageForm;
