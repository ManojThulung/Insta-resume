import { GuideCardProps } from "@/types/contentDataTypes";

const GuideCard = ({ guide }: { guide: GuideCardProps }) => {
  return (
    <div
      className={`aspect-square p-10 rounded-full flex flex-col items-center justify-center relative max-h-[400px]`}
      style={{ backgroundColor: guide.bgColor }}
    >
      <div className="absolute top-12 left-[0] font-semibold bg-secondary-light text-secondary w-24 text-center py-1 rounded-[10px]">
        Step {guide.step}
      </div>
      <div className="p-2 mt-2 pb-5">{guide.icon}</div>
      <h3 className="font-semibold text-[18px] text-center py-3">
        {guide.title}
      </h3>
      <p className="text-center pb-6 text-[14px]">{guide.description}</p>
    </div>
  );
};

export default GuideCard;
