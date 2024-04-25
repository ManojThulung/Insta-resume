import FeatureCard from "./FeatureCard";
import { FeaturesList } from "@/utils/contentData";

const Features = () => {
  return (
    <div className="flex gap-5 flex-wrap justify-center py-6 sm:py-10">
      {FeaturesList.map((feature, index) => (
        <FeatureCard key={index} feature={feature} />
      ))}
    </div>
  );
};

export default Features;
