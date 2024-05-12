import { ManWithLaptop } from "@/assets/icon";
import SubTitle from "@/components/common/SubTitle";
import ContactForm from "@/components/pages/contactUs/ContactForm";
import Link from "next/link";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "InstaResume | Contact",
  description:
    "Have questions or feedback? Get in touch with the InstaResume team easily through the contact page. InstaResume here to assist you in crafting your perfect resume.",
};

const Contact = () => {
  return (
    <main className="maxWidth text-[16px] font-sans text-primary scroll-smooth">
      {/* HERO SECTION ----------------- */}
      <section className=" min-h-[60vh] text-center flex flex-col justify-center">
        <SubTitle title={"CONTACT"} />
        <h1 className="text-[30px] xs:text-[40px] leading-[1.3] font-bold max-w-[700px] mx-auto py-6">
          Your Thoughts <span className="text-secondary">Matter </span>
        </h1>
        <p className="max-w-[900px] mx-auto text-[14px] sm:text-[16px]">
          <span className="text-secondary">InstaResume </span> value your
          feedback and insights. Whether you have a suggestion, a question, or
          just want to say hello, I’m all ears! Reach out to me using the form
          below or via{" "}
          <Link
            href="mailto:manojthulung03@gmail.com"
            className="text-secondary underline cursor-pointer"
          >
            manojthulung03@gmail.com
          </Link>
        </p>
      </section>
      {/* MISSION SECTION ----------------- */}
      <section id="features" className="pb-16 sm:grid grid-cols-2">
        <div className="flex justify-center items-end h-full">
          <ManWithLaptop className="max-w-[240px] sm:max-w-[320px]" />
        </div>
        <div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
};

export default Contact;
