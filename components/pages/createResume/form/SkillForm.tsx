"use client";

import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useCallback,
  useState,
} from "react";
import Button from "@/components/common/Button";
import {
  ChevronDown,
  Pencil,
  Plus,
  PlusCircle,
  Trash2,
  X,
  XCircle,
} from "lucide-react";
import { ResumeDataProps, SkillFormProps } from "@/types";

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
  const [enableAdd, setEnableAdd] = useState<enableAddProps>({
    index: null,
    state: false,
  });

  // ADD skills
  const addSkills = () => {
    setResumeData((prev) => ({
      ...prev,
      skills: [...prev.skills, { skill_title: "", skills_list: [""] }],
    }));
  };

  // REMOVE skills
  const removeSkills = (index: number) => {
    if (skills.length > 1) {
      setResumeData((prev) => ({
        ...prev,
        skills: prev.skills.filter((_, i) => i !== index),
      }));
    }
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

  return (
    <section id="skill-form" className="form-container-sec">
      <div>
        <div>
          <h2>Skills</h2>
          <p>
            Heighlight your relevant professional key skills and proficiencies.
          </p>
        </div>
        {skills.length >= 1 &&
          skills.map((skill, index) => (
            <div key={index} className="form-card">
              <div className="flex items-center gap-2 mb-2 justify-end text-primary-border">
                <ChevronDown className="cursor-pointer" />
                {skills.length > 1 && (
                  <Trash2
                    onClick={() => removeSkills(index)}
                    className="scale-75 cursor-pointer"
                  />
                )}
              </div>
              <div>
                <label htmlFor="skill_title">Skill Title: </label>
                <input
                  type="text"
                  name="skill_title"
                  id="skill_title"
                  className="form-input"
                  value={skill.skill_title}
                  placeholder="Technical Skills"
                  onChange={(e) => handleChange(index, e)}
                />
              </div>
              <div className="mt-2 flex gap-2 flex-wrap items-center w-auto">
                {skill.skills_list.length >= 1 &&
                  skill.skills_list.map((skl, i) => (
                    <div key={i}>
                      {skl.trim() !== "" && (
                        <div className="skill-item flex flex-nowrap items-center">
                          <p className="px-2 py-1">{skl}</p>
                          {/* <Pencil size={15} className="skill-item__icon" /> */}
                          <X
                            size={18}
                            className="skill-item__icon"
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
                      className="form-input !w-auto !pr-7"
                      placeholder="Microsfot Excel"
                      value={newSkillItem}
                      onChange={(e) => setNewSkillItem(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter")
                          addSkillItem(index, newSkillItem);
                      }}
                    />
                    <div
                      className="skill-item__add-btn"
                      onClick={() => addSkillItem(index, newSkillItem)}
                    >
                      <Plus size={20} />
                    </div>
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
                    variant="blueGhost"
                    size="pLess"
                  >
                    <PlusCircle className="scale-75" />
                    Add Skill
                  </Button>
                )}
              </div>
            </div>
          ))}
        <div className="flex justify-end">
          <Button
            onClick={addSkills}
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

export default SkillForm;
