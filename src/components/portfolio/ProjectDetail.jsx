import React from "react";
import { useParams, Link } from "react-router-dom";
import projects from "../../data/projects";
import logoWhite from "../../assets/logo w.png";
import logoBlack from "../../assets/logo b.png";
import { useTheme } from "../../context/ThemeContext";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  const { darkMode, toggleDarkMode } = useTheme();

  if (!project)
    return <div className="text-center py-20 text-black dark:text-white">Project not found</div>;

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-black dark:text-white transition-colors duration-500 p-8">
      {/* Toggle Button */}
      <div className="absolute top-4 right-4">
        <button
          onClick={toggleDarkMode}
          className="px-4 py-2 bg-gray-200 dark:bg-gray-800 text-black dark:text-white rounded shadow"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>

      {/* Logo */}
      <div className="flex justify-center mb-6">
        <img
          src={darkMode ? logoWhite : logoBlack}
          alt="Naya Moore Logo"
          className="w-96 md:w-[35rem]"
        />
      </div>

      {/* Back */}
      <Link to="/" className="text-brand-500 hover:underline">&larr; Back to Home</Link>

      {/* Project Info */}
      <h1 className="text-4xl font-bold mt-6">{project.title}</h1>
      <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-300">
        {project.longDescription || project.description}
      </p>

      <h2 className="text-2xl font-semibold mt-6">Tech Stack</h2>
      <div className="flex flex-wrap gap-2 mt-2">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 rounded-full bg-neutral-200 dark:bg-neutral-800 text-black dark:text-neutral-300 border border-neutral-400 dark:border-neutral-700 text-sm"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-4 mt-6">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-brand-500 hover:bg-brand-600 text-white px-4 py-2 rounded-lg font-semibold"
        >
          GitHub
        </a>
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-neutral-300 dark:bg-neutral-700 hover:bg-neutral-400 dark:hover:bg-neutral-600 text-black dark:text-white px-4 py-2 rounded-lg font-semibold"
          >
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}
