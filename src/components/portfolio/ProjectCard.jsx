import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext"; // If you want to access theme

// Entrance animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function ProjectCard({ project }) {
  const navigate = useNavigate();
  const { darkMode } = useTheme(); // optional, if you want JS-based theme access

  if (!project) return null;

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      whileHover="hover"
      className="group cursor-pointer"
      onClick={() => navigate(`/projects/${project.slug}`)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) =>
        e.key === "Enter" && navigate(`/projects/${project.slug}`)
      }
    >
      <motion.div
        variants={{ hover: { scale: 1.03 } }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <Card
          className={`
            max-w-sm w-full mx-auto
            rounded-2xl border
            transition-all duration-300 ease-out
            shadow-sm hover:shadow-xl

            bg-projectCardsLight text-black
            border-[#d6cfcb]
            hover:-translate-y-1
            hover:ring-1 hover:ring-neutral-950/40
            hover:bg-brand-500/5

            dark:bg-projectCardsDark dark:text-white
            dark:border-neutral-800
            dark:hover:-translate-y-1
            dark:hover:shadow-brand-500/30
            dark:hover:bg-gradient-to-tr
            dark:hover:from-neutral-900
            dark:hover:via-brand-500/20
            dark:hover:to-neutral-800
          `
        }
        >
          <CardContent className="flex flex-col gap-4">
            {/* Title */}
            <motion.h2
              className="text-xl tracking-tight font-semibold"
              variants={{ hover: { y: -2 } }}
            >
              {project.title}
            </motion.h2>

            {/* Description */}
            <motion.p
              className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-400"
              initial={{ opacity: 0.9 }}
              variants={{ hover: { opacity: 1 } }}
            >
              {project.description}
            </motion.p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2">
              {project.tech?.map((tech, i) => (
                <motion.span
                  key={tech}
                  className="text-xs px-3 py-1 rounded-full bg-neutral-200 text-neutral-800 border border-neutral-300 dark:bg-neutral-800 dark:text-neutral-300 dark:border-neutral-700"
                  variants={{ hover: { scale: 1.1 } }}
                  transition={{ delay: i * 0.05, type: "spring", stiffness: 300 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>

            {/* Buttons */}
            <motion.div
              className="
                font-secondary
                text-black
                flex gap-3 pt-2
                transition-opacity duration-300
              "
            >
              <Button
                variant="outline"
                size="sm"
                className="
                  font-secondary
                  text-neutral-900
                  border-brand-500
                  hover:bg-brand-500/10
                  hover:text-brand-600

                  dark:text-neutral-200
                  dark:border-brand-400
                  dark:hover:bg-brand-500/20
                  dark:hover:text-white
                "
                onClick={(e) => e.stopPropagation()}
              >
                 <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </a>
              </Button>

              {project.demo && (
                <Button
                  size="sm"
                  className="bg-brand-500"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(project.demo, "_blank");
                  }}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Demo
                </Button>
              )}
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}
