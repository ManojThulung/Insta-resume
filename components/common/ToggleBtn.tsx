"use client";

import { Dispatch, SetStateAction } from "react";
import { Switch } from "@headlessui/react";
import { ResumeDataProps } from "@/types";
import { start } from "repl";

export default function ToggleBtn({
  state,
  targetName,
  index,
  setResumeData,
}: {
  state: boolean;
  targetName: string;
  index: number;
  setResumeData: Dispatch<SetStateAction<ResumeDataProps>>;
}) {
  const handleChange = () => {
    setResumeData((prev) => {
      const updateData = { ...prev };

      if (targetName === "experiences") {
        updateData.experiences[index].currently_employed = !state;
      } else if (targetName === "educations") {
        updateData.educations[index].currently_study = !state;
      }

      return updateData;
    });
  };

  return (
    <Switch
      checked={state}
      onChange={handleChange}
      className={`${state ? "bg-secondary" : "bg-primary"}
          relative inline-flex h-[17px] w-[32px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75`}
    >
      <span className="sr-only">Use setting</span>
      <span
        aria-hidden="true"
        className={`${state ? "translate-x-[15px]" : "translate-x-0"}
            pointer-events-none inline-block h-[13px] w-[13px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
      />
    </Switch>
  );
}
