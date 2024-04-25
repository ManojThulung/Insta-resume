import GuideCard from "./GuideCard";
import { guideList } from "@/utils/contentData";

const Guide = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10 py-6 sm:py-10">
      {guideList.map((guide, index) => (
        <div
          key={index}
          className={`
            ${
              index === 1
                ? "-mt-[10%] md:mt-[40%]"
                : index === 2
                ? "-mt-[10%] md:-mt-[30%] lg:mt-0"
                : ""
            } flex lg:block justify-center flex-nowrap
          `}
        >
          <GuideCard guide={guide} />
        </div>
      ))}
    </div>
  );
};

export default Guide;
