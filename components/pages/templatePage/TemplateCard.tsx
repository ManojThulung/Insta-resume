import { Template1Img } from "@/assets/img";
import Button from "@/components/common/Button";
import Image from "next/image";
import Link from "next/link";

const TemplateCard = () => {
  return (
    <div className="text-center duration-150 ease-in hover:scale-105 group">
      <h1 className="text-white mb-1">Title 1</h1>
      <Link href="/create-resume">
        <div className="relative">
          <div className="absolute text-center text-white w-full translate-y-[-50%] top-[50%]">
            Select
          </div>
          <Image
            src={Template1Img}
            alt="Tempalte"
            className="group-hover:opacity-60 duration-150 ease-in"
          />
        </div>
      </Link>
    </div>
  );
};

export default TemplateCard;
