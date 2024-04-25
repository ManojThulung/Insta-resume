import { FeatureCardProps } from "@/types/contentDataTypes";

const FeatureCard = ({ feature }: { feature: FeatureCardProps }) => {
  return (
    <div className="bg-white text-primary rounded-[10px] p-4 text-[14px] flex items-center justify-start flex-col gap-1 max-w-[450px] sm:max-w-auto sm:w-[45%] lg:w-[30%] flex-wrap">
      <div className="bg-secondary-light rounded-[50px] p-2 mt-2">
        {feature.icon}
      </div>
      <h3 className="font-semibold text-[18px] text-center">{feature.title}</h3>
      <p className="text-center pb-6">{feature.description}</p>
    </div>
  );
};

export default FeatureCard;
