"use client";

import { useState } from "react";
import { Switch } from "@headlessui/react";

export default function ToggleBtn() {
  const [enabled, setEnabled] = useState(false);

  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={`${enabled ? "bg-yellow-500" : "bg-teal-700"}
          relative inline-flex h-[17px] w-[32px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75`}
    >
      <span className="sr-only">Use setting</span>
      <span
        aria-hidden="true"
        className={`${enabled ? "translate-x-[15px]" : "translate-x-0"}
            pointer-events-none inline-block h-[13px] w-[13px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
      />
    </Switch>
  );
}
