import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { ChevronDown, PlusCircle, Trash2 } from "lucide-react";

import Button from "@/components/common/Button";
import CustomDropDown from "@/components/common/CustomDropDown";
import { SocialLinksProps } from "@/types";

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
  setSocialLinks,
}: {
  socialLinks: SocialLinksProps[];
  setSocialLinks: Dispatch<SetStateAction<SocialLinksProps[]>>;
}) => {
  // ADD new object in socialLinkData array when add button is clicked
  const addLinks = () => {
    setSocialLinks((prev) => [
      ...prev,
      { socialPlatform: socialSiteList[0], link: "" },
    ]);
  };

  const removeSocialLinks = () => {
    if (socialLinks.length >= 1) {
      setSocialLinks((prev) => prev.slice(1));
    }
  };

  const handleChange = (index: number, e: ChangeEvent<HTMLInputElement>) => {
    setSocialLinks((prev) => {
      const updateData = [...prev];

      // Update the specific element at the given index
      updateData[index] = { ...updateData[index], link: e.target.value };

      return updateData;
    });
  };

  return (
    <section id="social-link-form" className="form-container-sec">
      <div>
        <h2>Social Links</h2>
        <p>Select your social platform and add links</p>
      </div>
      <div>
        {socialLinks.length >= 1 &&
          socialLinks.map((link, index) => (
            <div key={index} className="form-card">
              <div className="flex items-center gap-2 -mb-2 justify-end text-primary-border">
                <ChevronDown className="cursor-pointer" />
                <Trash2
                  onClick={removeSocialLinks}
                  className="scale-75 cursor-pointer"
                />
              </div>

              <div className="items-center gap-0 mt-4 w-full">
                <CustomDropDown
                  socialSiteList={socialSiteList}
                  socialLinks={socialLinks}
                  setSocialLinks={setSocialLinks}
                  index={index}
                />
              </div>
              <div className="flex items-center gap-2 mt-1">
                <input
                  type="text"
                  name="job_title"
                  id="job-title"
                  className="form-input"
                  placeholder="eg https://www.facebook.com/user"
                  onChange={(e) => handleChange(index, e)}
                />
              </div>
            </div>
          ))}

        <div className="flex justify-end">
          {socialLinks.length <= socialSiteList.length && ( //to allow to add social links not more than available social sites
            <Button
              onClick={addLinks}
              variant="blueGhost"
              size="pLess"
              className="mt-4"
            >
              <PlusCircle className="scale-75" />
              Add {socialLinks.length === 0 ? "" : "more"} social link
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default SocialLinkForm;
