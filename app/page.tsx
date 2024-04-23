// import { HeroResume } from "@/assets/icon";
import { ArrowRight, BehanceIcon, HeroResume } from "@/assets/icon";
import Button from "@/components/common/Button";
import SubTitle from "@/components/common/SubTitle";
import Title from "@/components/common/Title";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="maxWidth text-[16px]">
      {/* HERO SECTION ----------------- */}
      <section className="min-h-[90vh] flex flex-col-reverse md:flex-row items-center justify-end md:justify-between gap-x-5">
        <div className="flex justify-around flex-col items-center md:items-start text-center md:text-start">
          <SubTitle title={"WELCOME TO InstaResume"} />
          <h1 className="text-[30px] xs:text-[40px] leading-[1] font-bold max-w-[490px] py-6">
            Make Your Perfect Resume{" "}
            <span className="text-secondary text-[40] xs:text-[50px]">
              In Minutes
            </span>
          </h1>
          <p>Instantly create professional resumes tailored to your need.</p>
          <Link href="/create-resume">
            <Button className="mt-8 hover:bg-secondary group">
              Get Started
              <ArrowRight className="scale-125 group-hover:translate-x-2 duration-300" />
            </Button>
          </Link>
        </div>
        <div className="flex items-center justify-center pt-10 pb-10 md:pt-0 md:pb-0 w-[300px] md:w-[50%]">
          {/* <div className="w-72"> */}
          <HeroResume className="md:w-full" />
          {/* </div> */}
        </div>
      </section>

      {/* FEATURES SECTION ----------------- */}
      <section className="w-full">
        <SubTitle title="FEATURES" />
        <h1 className="title">
          WHY <span className="text-secondary">InstaResume</span> ROCKS!
        </h1>
      </section>
    </main>
  );
}
