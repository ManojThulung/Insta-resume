import Link from "next/link";
import { ArrowRight } from "@/assets/icon";
import Button from "../common/Button";

const Footer = () => {
  return (
    <div className="bg-primary text-secondary-light text-[14px] text-center py-12 font-sans mt-24">
      <h1 className="text-[30px] text-center xs:text-[40px] leading-[1] font-bold py-6 px-3">
        Ready To <span className="text-secondary">Build</span>
      </h1>
      <p className="px-3">
        Craft your winning resume today! Click the button below to begin.
      </p>
      <div className="flex justify-center">
        <Link href="/create-resume">
          <Button className="mt-8 hover:bg-secondary hover:from-secondary-light hover:text-primary group">
            Get Started
            <ArrowRight className="scale-125 group-hover:translate-x-2 duration-300" />
          </Button>
        </Link>
      </div>

      <div className="max-w-[800px] h-[1px] bg-secondary-light rounded-[5px] mx-auto mt-12 opacity-20" />

      <ul className="flex flex-col xs:flex-row max-w-[800px] items-start gap-y-2 xs:items-center justify-around mx-auto py-12">
        <li className="duration-150 ease-in hover:text-secondary">
          <Link href="/">Home</Link>
        </li>
        <li className="duration-150 ease-in hover:text-secondary">
          <Link href="/#guide">How-to</Link>
        </li>
        <li className="duration-150 ease-in hover:text-secondary">
          <Link href="/#faq">FAQ</Link>
        </li>
        <li className="duration-150 ease-in hover:text-secondary">
          <Link href="/about">About</Link>
        </li>
        <li className="duration-150 ease-in hover:text-secondary">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>

      <div className="maxWidth text-center sm:flex items-center flex-wrap justify-between text-[12px] opacity-80">
        <p className="">Copyright © 2024 InstaResume: All rights reserved</p>
        <p className="">
          Build by{" "}
          <Link href="mailto:manojthulung03@gmail.com" className="underline">
            manojthulung03@gmail.com
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
