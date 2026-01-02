import React from "react";
import ProjectCard from "../components/portfolio/ProjectCard";
import projects from "../data/projects";
import { motion } from "framer-motion";
import logoWhite from "../assets/logo w.png";
import logoBlack from "../assets/logo b.png";
import { useTheme } from "../context/ThemeContext";

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

export default function Home() {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <div
      className="min-h-screen bg-lightCustom dark:bg-darkCustom text-black dark:text-white transition-colors duration-500">

      {/* Toggle Button */}
      <div className="absolute top-4 right-4">
        <button
          onClick={toggleDarkMode}
          className={`px-4 py-2 rounded shadow transition-colors duration-300
            ${darkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-black"}`}
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>

      {/* Hero */}
      <section id="home" className="min-h-screen flex flex-col items-center justify-center text-center py-32 px-4">
        <motion.img
          src={darkMode ? logoWhite : logoBlack}
          alt="Naya Moore Logo"
          className="w-96 md:w-[50rem] mb-6"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
        <motion.h3
          className="text-3xl font-fancy font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}  // start slightly above
          animate={{ opacity: 1, y: 0 }}    // slide into place
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }} // smooth slide
        >
          Software Engineer | Web Dev | Artist
        </motion.h3>

        <motion.p
          className="text-lg max-w-xl font-secondary"
          variants={containerVariants}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          I design and develop web applications that look good and work (hopefully). 
          I'm a software engineer with a background in art, so I bring creativity into every line of code. 
          I use technoligies like React, Tailwind CSS, Node.js and Java for my back-end needs.
          My work combines the worlds of CS and art, blending creativity with functionality to deliver engaging user experiences.
        </motion.p>
      </section>

      <section id="about" className="min-h-screen-[80vh] flex flex-col items-center justify-right text-right py-32 px-4">
        <motion.h2
          className="text-3xl font-fancy font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}  // start slightly above
          animate={{ opacity: 1, y: 0 }}    // slide into place
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }} // smooth slide
        >
          About Me
        </motion.h2>

        <motion.p
          className="text-lg max-w-xl font-secondary"
          variants={containerVariants}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          I'm a software engineer with a strong foundation in computer science and a background in art and design. 
          I enjoy building well-structured, scalable applications while also prioritizing usability and visual clarity. 
          My experience spans frontend development, interactive UI design, and full-stack concepts, and I'm particularly interested in creating software that balances technical rigor with thoughtful design. 
          I'm motivated by opportunities to learn new technologies, collaborate on meaningful projects, and apply both analytical and creative problem-solving skills to real-world challenges.
        </motion.p>
      </section>

      {/* Projects */}
      <section id="projects" className="min-h-screen py-16 scroll-mt-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-fancy font-bold mb-8 text-center">My Projects</h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 font-secondary"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </motion.div>
      </section>
    </div>
  );
}
