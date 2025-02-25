"use client";
import React from "react";
import {   MdDarkMode, MdLightMode } from "react-icons/md";
import { useTheme } from "next-themes";
function DarkModeSwitch() {
  const { theme, setTheme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <div>
      <div>
        {currentTheme == "dark" ? (
          <MdLightMode
            onClick={() => setTheme("light")}
            className="text-xl cursor-pointer hover:text-amber-500"
          />
        ) : (
          <MdDarkMode
            onClick={() => setTheme("dark")}
            className="text-xl cursor-pointer hover:text-amber-500"
          />
        )}
      </div>
    </div>
  );
}

export default DarkModeSwitch;
