import Link from "next/link";
import { Metadata } from "next";

import { ArrowRight, HeroResume } from "@/assets/icon";

import Button from "@/components/common/Button";
import SubTitle from "@/components/common/SubTitle";
import Features from "@/components/pages/homePage/Features";
import Guide from "@/components/pages/homePage/Guide";
import Template from "@/components/pages/templatePage/Template";
import FAQ from "@/components/pages/homePage/FAQ";
import { TemplateList } from "@/utils/resumeData";

export const metadata: Metadata = {
  title: "InstaResume",
  description:
    "InstaResume. Your go-to platform for creating polished resumes in minutes. Explore multiple templates, customize effortlessly, and download your professional resume as a PDF.",
};

export default function Home() {
  const featuredTemplates = TemplateList.filter((temp) => temp.featured);

  return (
    <main className="maxWidth text-[16px] font-sans text-primary">
      {/* HERO SECTION ----------------- */}
      <section className="min-h-[90vh] flex flex-col-reverse md:flex-row items-center justify-end md:justify-between gap-x-5 mb-12">
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
      <section className="py-16" id="features">
        <SubTitle title="FEATURES" />
        <h1 className="sec-title">
          WHY <span className="text-secondary">InstaResume</span> ROCKS!
        </h1>
        <Features />
      </section>

      {/* Guide SECTION ----------------- */}
      <section className="py-16" id="guide">
        <SubTitle title="A SIMPLE GUIDE" />
        <h1 className="sec-title">
          Create your Perfect Resume in{" "}
          <span className="text-secondary">3 easy steps</span>
        </h1>
        <Guide />
      </section>

      {/* TEMPLATES SECTION ----------------- */}
      <section className="py-16" id="template">
        <SubTitle title="TOP RESUME TEMPLATES" />
        <h1 className="sec-title">
          Choose our <span className="text-secondary">popular templates</span>{" "}
          to create a <span className="text-secondary">Standout Resume</span>
        </h1>
        <Template templateList={featuredTemplates} featured={true} />
      </section>

      {/* FAQ SECTION ----------------- */}
      <section className="py-16" id="faq">
        <SubTitle title="FAQ" />
        <h1 className="sec-title">
          Got Questions?{" "}
          <span className="text-secondary">We’ve Got Answers!</span>
        </h1>
        <FAQ />
      </section>
    </main>
  );
}
