import Button from "@/components/common/Button";
import React from "react";

const TOOLS = [
  "Bio",
  "Social Links",
  "Experience",
  "Education",
  "Projects",
  "Skills",
  "Certification",
  "Reference",
];

const ToolBar = () => {
  return (
    <div className="bg-secondary-light dark:bg-primary p-2">
      <ul className="flex flex-wrap justify-center items-center gap-1">
        {TOOLS.map((tool) => (
          <li key={tool}>
            <Button variant={"ghost"} size={"small"} className="text-sm">
              {tool}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToolBar;
