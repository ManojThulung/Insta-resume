import TemplateCard from "./TemplateCard";
import { TemplateList } from "@/utils/contentData";

const Template = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 my-6 sm:my-10 bg-primary py-14 rounded-[10px] gap-x-2 gap-y-6 px-5">
      {TemplateList.map(
        (template, index) =>
          template.featured && (
            <div key={index} className="flex items-center justify-center">
              <TemplateCard />
            </div>
          )
      )}
    </div>
  );
};

export default Template;
