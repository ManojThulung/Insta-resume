"use client";

import { Dispatch, Fragment, SetStateAction, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { ChevDown, FontIcon } from "@/assets/icon";
import { fontList } from "@/utils/resumeData";
import { FontListType } from "@/types";
import Button from "@/components/common/Button";

import { useDispatch } from "react-redux";
import { setFont } from "@/redux/slice/resumeSlice";

export default function FontsOption({
  selectedFont,
}: {
  selectedFont: FontListType;
}) {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const filterFonts =
    query === ""
      ? fontList
      : fontList.filter((font) =>
          font.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  const handleChangeFont = (font: FontListType) => {
    dispatch(setFont(font));
  };

  return (
    <div className="flex 0tems-center justify-start gap-2">
      <Button variant="fill" className="bg-white hover:bg-light" size="square">
        <FontIcon />
      </Button>
      <Combobox
        value={selectedFont}
        onChange={(value: FontListType) => handleChangeFont(value)}
      >
        <div className="relative">
          <div className="relative">
            <Combobox.Input
              className="form-input !py-2 text-[14px] w-[90px]"
              displayValue={(item: FontListType) => item.name}
              style={{ fontFamily: selectedFont?.name }}
              onChange={(event) => setQuery(event.target.value)}
            />
            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevDown className="fill-primary" aria-hidden="true" />
            </Combobox.Button>
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options className="absolute z-50 mt-1 max-h-60 w-full px-2 overflow-auto rounded-[10px] bg-white py-2 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
              {filterFonts.length === 0 && query !== "" ? (
                <div className="relative cursor-default select-none px-2 py-2 text-secondary">
                  Nothing found.
                </div>
              ) : (
                filterFonts.map((font) => (
                  <Combobox.Option
                    key={font.id}
                    className={({ active }) =>
                      `relative cursor-default rounded-[5px] select-none py-2 px-2 ${
                        active
                          ? "bg-secondary-light text-secondary"
                          : "text-primary"
                      }`
                    }
                    style={{ fontFamily: font.name }}
                    value={font}
                  >
                    {/* {({ selectedFont, active }) => ( */}
                    <>
                      <span
                        className={`block truncate ${
                          selectedFont ? "font-medium" : "font-normal"
                        }`}
                      >
                        {font.name}
                      </span>
                    </>
                    {/* )} */}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
}
