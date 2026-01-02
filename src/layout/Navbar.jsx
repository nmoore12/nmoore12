import React, { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";

const sections = ["home", "about", "projects"];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const { darkMode, toggleDarkMode } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2;

      // Find the section whose center is closest to scroll center
      let closestSection = sections[0];
      let minDistance = Infinity;

      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (el) {
          const sectionCenter = el.offsetTop + el.offsetHeight / 2;
          const distance = Math.abs(scrollPos - sectionCenter);
          if (distance < minDistance) {
            minDistance = distance;
            closestSection = section;
          }
        }
      });

      setActiveSection(closestSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-neutral-900 shadow flex justify-between items-center px-8 py-4">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-center space-x-8">
        {sections.map((section) => (
          <a
            key={section}
            href={`#${section}`}
            className={`font-semibold px-3 py-1 rounded transition-colors ${
              activeSection === section
                ? "bg-brand-500 text-white"
                : "text-black dark:text-white hover:text-brand-500"
            }`}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </a>
        ))}
      </div>

      <button
        onClick={toggleDarkMode}
        className="px-4 py-2 rounded shadow bg-gray-200 dark:bg-gray-800 text-black dark:text-white"
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </nav>
  );
}
