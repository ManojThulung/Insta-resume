import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { PlusCircle, Trash2 } from "lucide-react";

import Button from "@/components/common/Button";
// import CustomDropDown from "@/components/common/CustomDropDown";
import { ResumeDataProps, SocialLinksProps } from "@/types";

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
      <div>
        <h2>Social Links</h2>
        <p>Select your social platform and add links</p>
      </div>
      <div>
        {socialLinks.length >= 1 &&
          socialLinks.map((link, index) => (
            <div key={index} className="form-card">
              {/* <div className="flex items-center mb-1 justify-end text-primary-border">
                <Trash2
                  onClick={() => removeSocialLinks(index)}
                  className="scale-75 cursor-pointer"
                />
              </div> */}
              {/* <div className="items-center gap-0 mt-4 w-full">
                <CustomDropDown
                  socialSiteList={socialSiteList}
                  socialLinks={socialLinks}
                  setSocialLinks={setSocialLinks}
                  index={index}
                />
              </div> */}
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
                <Trash2
                  onClick={() => removeSocialLinks(index)}
                  className="scale-75 cursor-pointer text-primary-border"
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
