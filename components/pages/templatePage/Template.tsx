import Link from "next/link";
import { TemplateListPops } from "@/types/contentDataTypes";
import TemplateCard from "./TemplateCard";
import Button from "@/components/common/Button";

const Template = ({
  templateList,
  featured = false,
}: {
  templateList: TemplateListPops[];
  featured?: boolean;
}) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 my-6 sm:my-10 bg-primary py-14 rounded-[10px] gap-x-2 gap-y-6 px-5">
      {templateList.map((template, index) => (
        <div key={index} className="flex items-center justify-center">
          <TemplateCard template={template} />
        </div>
      ))}
      {featured && (
        <div className="flex justify-center items-center lg:col-span-3">
          <Link href="/templates">
            <Button
              variant="outline"
              size="default"
              className="mt-8 text-white border-white hover:border-secondary group"
            >
              Explore More
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Template;
