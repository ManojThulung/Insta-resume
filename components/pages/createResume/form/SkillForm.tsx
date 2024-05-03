"use client";

import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { ResumeDataProps, SkillFormProps } from "@/types";
import {
  ChevDown,
  EditIcon,
  PlusIcon,
  TrashBinIcon,
  XIcon,
} from "@/assets/icon";
import Button from "@/components/common/Button";
import DeleteModal from "./DeleteModal";

interface enableAddProps {
  index: number | null;
  state: boolean;
}

const SkillForm = ({
  skills,
  setResumeData,
}: {
  skills: SkillFormProps[];
  setResumeData: Dispatch<SetStateAction<ResumeDataProps>>;
}) => {
  const [newSkillItem, setNewSkillItem] = useState<string>("");
  const [expandForm, setExpandForm] = useState<number | null>(0);
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [enableAdd, setEnableAdd] = useState<enableAddProps>({
    index: null,
    state: false,
  });

  // ADD skills
  const addSkills = (index: number) => {
    // Create New Skill form
    setResumeData((prev) => ({
      ...prev,
      skills: [...prev.skills, { skill_title: "", skills_list: [""] }],
    }));

    // Expands the newly added form.
    if (expandForm) {
      setExpandForm(index);
    } else {
      // to make visible expand animation on newly added form
      setTimeout(() => {
        setExpandForm(index);
      }, 50);
    }
  };

  // REMOVE skills
  const removeSkills = (index: number) => {
    if (skills.length > 1) {
      setResumeData((prev) => ({
        ...prev,
        skills: prev.skills.filter((_, i) => i !== index),
      }));
    }

    closeModal(); //close delete modal when form deleted.
  };

  const handleChange = (index: number, e: ChangeEvent<HTMLInputElement>) => {
    setResumeData((prev) => {
      let updateData = { ...prev };

      updateData.skills[index] = {
        ...prev.skills[index],
        [e.target.name]: e.target.value,
      };

      return updateData;
    });
  };

  // ADD new skill item
  const addSkillItem = (index: number, data: string) => {
    if (data !== "") {
      setResumeData((prev) => {
        const updateData = { ...prev };

        const isRepeat = skills[index].skills_list.find((itm) => itm === data);

        // to prevent from render twice
        if (isRepeat) return updateData;

        updateData.skills[index].skills_list = [
          ...prev.skills[index].skills_list,
          data,
        ];

        return updateData;
      });
    }

    // reset state
    setEnableAdd({ index: null, state: false });
  };

  // REMOVE skill list
  const removeSkillList = (index: number, data: string) => {
    // console.log("selected data ", data);
    setResumeData((prev) => {
      const updateData = { ...prev };

      updateData.skills[index].skills_list = prev.skills[
        index
      ].skills_list.filter((itm) => itm !== data);

      return updateData;
    });
  };

  // Collapse/Hide form field
  const handleCollapse = (index: number) => {
    if (expandForm === index) {
      setExpandForm(null);
    } else {
      setExpandForm(index);
    }
  };

  // CLOSE delete Modal
  const closeModal = () => {
    setShowDeleteModal(false);
    setSelectedIndex(null);
  };

  return (
    <section id="skill-form" className="form-container-sec">
      <div>
        <div className="pb-4">
          <h2 className="form-header">Skills</h2>
          <p>
            Heighlight your relevant professional key skills and proficiencies.
          </p>
        </div>
        {skills.length >= 1 &&
          skills.map((skill, index) => (
            <div key={index} className="form-card">
              <div className="flex flex-wrap  items-center justify-between mb-2 min-h-[35px]">
                <div>
                  <h3 className="font-bold text-secondary">
                    {skill?.skill_title}
                  </h3>
                </div>
                <div className="flex items-center gap-2 -mb-2 justify-end text-primary-border">
                  <Button
                    variant="round"
                    size="round"
                    className="hover:brightness-95 group"
                    onClick={() => handleCollapse(index)}
                  >
                    {expandForm === index ? (
                      <ChevDown className="scale-75 " />
                    ) : (
                      <EditIcon className="fill-none stroke-secondary group-hover:stroke-primary" />
                    )}
                  </Button>
                  {skills.length > 1 && (
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
              <div
                className={`px-1 duration-300 transition-all ease-in ${
                  expandForm === index
                    ? "max-h-[600px] overflow-y-auto"
                    : "max-h-0 overflow-y-hidden"
                }`}
              >
                <div>
                  <label htmlFor="skill_title">Skill Title: </label>
                  <input
                    type="text"
                    name="skill_title"
                    id="skill_title"
                    className="form-input"
                    value={skill.skill_title}
                    placeholder="Programming Skills"
                    onChange={(e) => handleChange(index, e)}
                  />
                </div>
                <div className="mt-3 flex gap-2 flex-wrap items-center w-auto">
                  {skill.skills_list.length >= 1 &&
                    skill.skills_list.map((skl, i) => (
                      <div key={i}>
                        {skl.trim() !== "" && (
                          <div className="skill-item">
                            <p className="px-2 py-1">{skl}</p>
                            <XIcon
                              size={18}
                              className="skill-item__icon stroke-primary hover:stroke-secondary -mr-2"
                              onClick={() => removeSkillList(index, skl)}
                            />
                          </div>
                        )}
                      </div>
                    ))}
                  {enableAdd.state && enableAdd.index === index ? (
                    <div className="relative">
                      <input
                        type="text"
                        name="skill"
                        id="skill"
                        className="form-input !w-auto !pr-7 !py-2 !pl-3"
                        placeholder="Microsfot Excel"
                        value={newSkillItem}
                        onChange={(e) => setNewSkillItem(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter")
                            addSkillItem(index, newSkillItem);
                        }}
                      />
                      <Button
                        variant="round"
                        size="round"
                        className="skill-item__add-btn"
                        onClick={() => addSkillItem(index, newSkillItem)}
                      >
                        <PlusIcon />
                      </Button>
                    </div>
                  ) : (
                    <Button
                      onClick={() => {
                        setNewSkillItem("");
                        setEnableAdd({
                          index: index,
                          state: true,
                        });
                      }}
                      variant="round"
                      size="round"
                    >
                      <PlusIcon className="scale-125" />
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        <div className="flex justify-end">
          <div
            onClick={() => addSkills(skills.length)}
            className="flex items-center gap-x-1 duration-150 ease-in transition-all cursor-pointer hover:bg-secondary-light rounded-full group"
          >
            <Button
              variant="round"
              size="round"
              className="bg-primary text-white group-hover:bg-black"
            >
              <PlusIcon className="fill-white hover:fill-white" />
            </Button>
            Add New Skill
          </div>
        </div>
      </div>

      <DeleteModal
        isOpen={showDeleteModal}
        handleClose={closeModal}
        title={"Skill"}
        index={selectedIndex}
        handleDelete={removeSkills}
      />
    </section>
  );
};

export default SkillForm;
