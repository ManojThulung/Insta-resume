"use client";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

const DarkModeBtn = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false); //to add icons opacity animation when changed

  useEffect(() => {
    localStorage?.theme === "dark" ? setIsDarkMode(true) : setIsDarkMode(false);
  }, []);

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    }
  }, []);

  // fuction to enable and disable dark modes
  const toggleTheme = (mode: boolean) => {
    setIsAnimating(true);

    setTimeout(() => {
      if (!mode) {
        document.documentElement.classList.add("dark");
        localStorage.theme = "dark";
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.theme = "light";
      }

      setIsDarkMode(!mode);
      setIsAnimating(false);
    }, 200); // Adjust the duration of the animation
  };

  return (
    <button
      onClick={() => toggleTheme(isDarkMode)}
      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm hover:bg-[rgba(0,0,0,0.2)] duration-100 ease-in transition-all p-[5px] ${
        isAnimating ? "opacity-10" : ""
      }`}
    >
      {isDarkMode ? <Sun /> : <Moon />}
    </button>
  );
};

export default DarkModeBtn;
