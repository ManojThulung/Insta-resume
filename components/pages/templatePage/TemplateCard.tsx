"use client";

import Image from "next/image";
import Link from "next/link";
import { TemplateListPops } from "@/types/contentDataTypes";
import { useDispatch } from "react-redux";
import { setTemplate } from "@/redux/slice/resumeSlice";

const TemplateCard = ({ template }: { template: TemplateListPops }) => {
  const dispatch = useDispatch();

  const handleSelect = (templateId: number) => {
    dispatch(setTemplate(templateId));
  };

  return (
    <div className="text-center duration-150 ease-in hover:scale-105 group">
      <h1 className="text-white mb-1 text-[12px] xs:text-[14px]">
        {template.name}
      </h1>
      <Link href="/create-resume" onClick={() => handleSelect(template.id)}>
        <div className="relative">
          <div className="absolute text-center text-white w-full translate-y-[-50%] top-[50%]">
            Select
          </div>
          <Image
            src={template.sampleImg}
            alt={template.name}
            className="group-hover:opacity-60 duration-150 ease-in"
          />
        </div>
      </Link>
    </div>
  );
};

export default TemplateCard;
