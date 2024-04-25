import { FaqGirl } from "@/assets/icon";
import FaqCard from "./FaqCard";
import { faqList } from "@/utils/contentData";

const FAQ = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="flex h-full items-end pb-2 justify-center">
        <FaqGirl className="h-56 md:h-auto" />
      </div>
      <div>
        <FaqCard />
      </div>
    </div>
  );
};

export default FAQ;
