"use client";

import Link from "next/link";
import Button from "@/components/common/Button";

const Categories = [
  { name: "Bio", path: "bio-form" },
  { name: "Social Links", path: "social-link-form" },
  { name: "Experience", path: "experience-form" },
  { name: "Education", path: "education-form" },
  { name: "Projects", path: "project-form" },
  { name: "Skills", path: "skill-form" },
  { name: "Certification", path: "certification-form" },
  { name: "Language", path: "language-form" },
  { name: "Reference", path: "reference-form" },
];

const categoryBar = () => {
  return (
    <div className="bg-white dark:bg-primary px-2 py-3 overflow-x-auto relative shadow">
      <div className="flex whitespace-nowrap justify-start lg:justify-center items-center gap-2">
        {Categories.map((category) => (
          <div key={category.path}>
            <Link href={`#${category.path}`}>
              <Button variant={"ghost"} size={"small"} className="text-sm">
                {category.name}
              </Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default categoryBar;
