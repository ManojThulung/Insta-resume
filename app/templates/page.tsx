import Link from "next/link";
import Button from "@/components/common/Button";
import SubTitle from "@/components/common/SubTitle";
import Features from "@/components/pages/homePage/Features";
import Template from "@/components/pages/templatePage/Template";
import { TemplateList } from "@/utils/contentData";

const Templates = () => {
  return (
    <main className="maxWidth text-[16px] font-sans text-primary scroll-smooth">
      {/* HERO SECTION ----------------- */}
      <section className="min-h-[70vh] text-center flex flex-col justify-center">
        <SubTitle title={"TEMPLATES"} />
        <h1 className="text-[30px] xs:text-[40px] leading-[1.3] font-bold max-w-[700px] mx-auto py-6">
          Explore Our <span className="text-secondary">Diverse Collection</span>
          of Professionally Designed{" "}
          <span className="text-secondary">Templates</span>
        </h1>
        <p className="max-w-[900px] mx-auto text-[14px] sm:text-[16px]">
          Choose the template that resonates with your style and career path.
          Whether you’re a seasoned professional or a fresh graduate, we’ve got
          options for everyone. Customize, create, and stand out! 
        </p>
        <div className="flex justify-center">
          <Link href="/templates#templates">
            <Button className="mt-8 hover:bg-secondary group">Explore</Button>
          </Link>
        </div>
      </section>

      {/* TEMPLATES SECTION ----------------- */}
      <section className="py-16" id="templates">
        <Template templateList={TemplateList} />
      </section>

      {/* FEATURES SECTION ----------------- */}
      <section className="py-16" id="features">
        <SubTitle title="FEATURES" />
        <h1 className="sec-title">
          WHY <span className="text-secondary">InstaResume</span> ROCKS!
        </h1>
        <Features />
      </section>
    </main>
  );
};

export default Templates;
