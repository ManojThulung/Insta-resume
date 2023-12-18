"use client";

import { useState, Fragment, Dispatch, SetStateAction, useEffect } from "react";
import { Listbox, Transition } from "@headlessui/react";

import { ChevronsUpDown, Check } from "lucide-react";
import { SocialLinksProps } from "@/types";

function CustomDropDown({
  socialSiteList,
  socialLinks,
  setSocialLinks,
  index,
}: {
  socialSiteList: string[];
  socialLinks: SocialLinksProps[];
  setSocialLinks: Dispatch<SetStateAction<SocialLinksProps[]>>;
  index: number;
}) {
  const handleSocialLinkUpdate = (selected: string) => {
    setSocialLinks((prev) => {
      const updateData = [...prev];

      updateData[index] = { ...updateData[index], socialPlatform: selected };

      return updateData;
    });
  };

  return (
    <Listbox
      value={socialLinks[index]?.socialPlatform}
      onChange={handleSocialLinkUpdate}
    >
      <div className="relative mt-1">
        <Listbox.Button className="form-input relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
          <span className="block truncate">
            {socialLinks[index]?.socialPlatform}
          </span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <ChevronsUpDown
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute z-10 !p-0 bg-white mt-1 max-h-60 w-full overflow-auto rounded-md py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
            {socialSiteList &&
              socialSiteList.map((socialSite, index) => {
                return (
                  <Listbox.Option
                    key={index}
                    value={socialSite}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? "bg-amber-100 text-amber-900" : "text-gray-900"
                      }`
                    }
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {socialSite}
                        </span>
                        {selected ? (
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                            <Check className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                );
              })}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
}

export default CustomDropDown;
