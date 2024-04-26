"use client";

import { useState } from "react";
import { ChevDown } from "@/assets/icon";
import { faqList } from "@/utils/contentData";

const FaqCard = () => {
  const [showIndex, setShowIndex] = useState<null | number>(null);

  const handleDisplayAns = (index: number) => {
    showIndex === index ? setShowIndex(null) : setShowIndex(index);
  };

  return (
    <>
      {faqList.map((faq, index) => (
        <div key={index} className="bg-white rounded-[10px] p-4 my-3">
          <div
            onClick={() => handleDisplayAns(index)}
            className="flex justify-between items-start flex-nowrap gap-4 cursor-pointer"
          >
            <h2>{faq.question}</h2>
            <ChevDown
              className={`cursor-pointer duration-200 ease-in ${
                showIndex === index ? "-rotate-90" : "rotate-0"
              }`}
            />
          </div>
          <div
            className={`overflow-hidden duration-300 ${
              showIndex === index ? "max-h-96" : "max-h-0 opacity-0"
            }`}
            // className={`overflow-hidden duration-300 `}
          >
            <p className="text-[14px] pt-2 px-1 text-secondary">{faq.ans}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default FaqCard;
