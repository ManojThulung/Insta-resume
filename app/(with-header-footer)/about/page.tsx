import { JourneyManDog, MissionMan } from "@/assets/icon";
import SubTitle from "@/components/common/SubTitle";
import Features from "@/components/pages/homePage/Features";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "InstaResume | About",
  description:
    "Learn more about InstaResume - the fast and intuitive web app that simplifies the resume-building process. Discover our mission, vision, and the team behind the scenes.",
};

const About = () => {
  return (
    <main className="maxWidth text-[16px] font-sans text-primary scroll-smooth">
      {/* HERO SECTION ----------------- */}
      <section className=" min-h-[70vh] text-center flex flex-col justify-center">
        <SubTitle title={"ABOUT InstaResume"} />
        <h1 className="text-[30px] xs:text-[40px] leading-[1.3] font-bold max-w-[700px] mx-auto py-6">
          <span className="text-secondary">InstaResume </span>- Empower Your
          Career Journey
        </h1>
        <p className="max-w-[900px] mx-auto text-[14px] sm:text-[16px]">
          Welcome to<span className="text-secondary"> InstaResume</span>,
          dedicated to making career advancement accessible. The platform
          Authored by Manoj Rai, empowers individuals worldwide to{" "}
          <span className="text-secondary">
            craft standout resumes effortlessly.
          </span>{" "}
          Understanding job seekers' challenges, the process is{" "}
          <span className="text-secondary">
            streamlined for simplicity and efficiency.
          </span>
        </p>
      </section>

      {/* MISSION SECTION ----------------- */}
      <section id="features" className="py-16">
        <div className="bg-white rounded-[10px] md:grid grid-cols-2 gap-x-5 px-4 xs:px-8 py-6 sm:py-10">
          <div className="flex items-start justify-center flex-col">
            <h1 className="sec-title !pt-0">Mission</h1>
            <p className="text-[12px] xs:text-[14px]">
              InstaResume is on a mission to empower job seekers globally. The
              free, hassle-free resume builder simplifies the process without
              any account required. Craft your resume effortlessly and open
              doors to your future. Join us in shaping careers, one page at a
              time.
            </p>
          </div>
          <div className="flex justify-center">
            <MissionMan className="max-w-[380px]" />
          </div>
        </div>
      </section>

      {/* FEATURES SECTION ----------------- */}
      <section className="py-16" id="features">
        <SubTitle title="FEATURES" />
        <h1 className="sec-title">
          Why <span className="text-secondary">InstaResume?</span>{" "}
        </h1>
        <Features />
      </section>

      {/* JOURNEY SECTION ----------------- */}
      <section className="py-16" id="features">
        <div className="flex justify-center items-center flex-col">
          <JourneyManDog className="max-w-[420px] h-auto" />
          <div className="text-center bg-white rounded-[10px] px-4 xs:px-8 py-6 sm:py-10 w-full">
            <h1 className="sec-title !pt-0">Journey</h1>
            <p className="text-[12px] xs:text-[14px] max-w-[800px] mx-auto">
              From a small startup to the beginning of a global resume-building
              platform, the journey has just begun. The commitment remains the
              same: elevate careers. Join on this exciting new journey!
            </p>{" "}
            <p className="text-[12px] xs:text-[14px] max-w-[800px] mx-auto my-4">
              Feel free to explore templates, create your resume, and let's
              start building your success story together!
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
