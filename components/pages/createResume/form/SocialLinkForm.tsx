"use client";

import { useState } from "react";
import { PlusCircle, X } from "lucide-react";
import Button from "@/components/common/Button";

// type fo social links
type SocialLinksProps = {
  socialPlatform: string;
  link: string;
};

const SocialLinkForm = () => {
  const [socialLinks, setSocialLinks] = useState<SocialLinksProps[]>([
    { socialPlatform: "", link: "" },
  ]);

  const addLinks = () => {
    setSocialLinks((prev) => [...prev, { socialPlatform: "", link: "" }]);
  };

  const removeSocialLinks = () => {
    setSocialLinks((prev) => prev.slice(1));
  };

  return (
    <section id="social-link-form" className="form-container-sec">
      <div>
        <h2>Social Links</h2>
        <p>Select your social platform and add links</p>
      </div>
      <div>
        {socialLinks.map((link, index) => (
          <div key={index}>
            <div className="flex items-center gap-0 mt-4">
              <select className="form-input">
                <option>Facebook</option>
                <option>Twitter</option>
                <option>LinkedIn</option>
                <option>Dribble</option>
                <option>Behance</option>
                <option>Medium</option>
              </select>
              <button
                type="button"
                onClick={removeSocialLinks}
                className="text-blue-400 py-1 border-[1px] border-primary flex items-center justify-center h-full w-[40px] rounded"
              >
                <X />
              </button>
            </div>
            <div className="flex items-center gap-2 mt-1">
              <input
                type="text"
                name="job_title"
                id="job-title"
                className="form-input"
                placeholder="Links eg https://www.facebook.com/user"
              />
            </div>
          </div>
        ))}

        <Button
          onClick={addLinks}
          variant="blueGhost"
          size="pLess"
          className="mt-4"
        >
          <PlusCircle className="scale-75" />
          Add More Social Link
        </Button>
      </div>
    </section>
  );
};

export default SocialLinkForm;
