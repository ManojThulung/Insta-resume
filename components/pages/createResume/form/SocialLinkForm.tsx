import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { PlusCircle, Trash2 } from "lucide-react";

import Button from "@/components/common/Button";
import { ResumeDataProps, SocialLinksProps } from "@/types";
import { PlusIcon, TrashBinIcon } from "@/assets/icon";

//social sites data
const socialSiteList = [
  "Facebook",
  "Github",
  "Portfolio",
  "Twitter",
  "LinkedIn",
  "Instagram",
  "Dribble",
  "Behance",
  "Medium",
];

const SocialLinkForm = ({
  socialLinks,
  setResumeData,
}: {
  socialLinks: SocialLinksProps[];
  setResumeData: Dispatch<SetStateAction<ResumeDataProps>>;
}) => {
  // ADD new object in socialLinkData array when add button is clicked
  const addLinks = () => {
    setResumeData((prev) => ({
      ...prev,
      socialLinks: [...prev.socialLinks, { url: "" }],
    }));
  };

  const removeSocialLinks = (index: number) => {
    if (socialLinks.length >= 1) {
      setResumeData((prev) => ({
        ...prev,
        socialLinks: prev.socialLinks.filter((_, i) => i !== index),
      }));
    }
  };

  const handleChange = (index: number, e: ChangeEvent<HTMLInputElement>) => {
    setResumeData((prev) => {
      const updateData = { ...prev };
      // Update the specific element at the given index
      updateData.socialLinks[index] = { url: e.target.value };

      return updateData;
    });
  };

  return (
    <section id="social-link-form" className="form-container-sec">
      <div className="pb-4">
        <h2 className="form-header">
          Social <span className="text-secondary">Links</span>
        </h2>
        <p>Select your social platform and add links</p>
      </div>
      <div>
        {socialLinks.length >= 1 &&
          socialLinks.map((link, index) => (
            <div key={index} className="form-card">
              <div className="flex items-center justify-between gap-1">
                <input
                  type="text"
                  name="url"
                  id="url"
                  className="form-input"
                  value={link?.url ? link?.url : ""}
                  placeholder="eg https://www.facebook.com/user"
                  onChange={(e) => handleChange(index, e)}
                />
                {socialLinks.length > 1 && (
                  <Button
                    onClick={() => removeSocialLinks(index)}
                    variant="round"
                    size="round"
                    className="hover:brightness-95"
                  >
                    <TrashBinIcon />
                  </Button>
                )}
              </div>
            </div>
          ))}

        <div className="flex justify-end">
          {socialLinks.length <= socialSiteList.length && ( //to allow to add social links not more than available social sites
            <div
              onClick={addLinks}
              className="flex items-center gap-x-1 duration-150 ease-in transition-all cursor-pointer hover:bg-secondary-light rounded-full group"
            >
              <Button
                variant="round"
                size="round"
                className="bg-primary text-white group-hover:bg-black"
              >
                <PlusIcon />
              </Button>
              Add {socialLinks.length === 0 ? "" : "more"} social link
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SocialLinkForm;
