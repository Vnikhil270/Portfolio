// components/SkillsSection.tsx

"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import {
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaSass,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiFramer,
  SiExpress,
  SiMysql,
  SiMongodb,
} from "react-icons/si";

const skills = {
  Frontend: [
    { name: "JavaScript", icon: <FaJsSquare />, color: "text-yellow-500" },
    { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-500" },
    { name: "React", icon: <FaReact />, color: "text-blue-500" },
    { name: "Next.js", icon: <SiNextdotjs />, color: "text-gray-700" },
    { name: "Redux", icon: <SiRedux />, color: "text-purple-500" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-blue-400" },
    { name: "Framer Motion", icon: <SiFramer /> },
    { name: "SASS", icon: <FaSass />, color: "text-red-300" },
    { name: "Bootstrap", icon: <FaBootstrap />, color: "text-purple-600" },
  ],
  Backend: [
    { name: "Node.js", icon: <FaNodeJs />, color: "text-Green-500" },
    { name: "Express.js", icon: <SiExpress />, color: "text-black" },
  ],
  Database: [
    { name: "MySQL", icon: <SiMysql />, color: "text-blue-600" },
    { name: "MongoDB", icon: <SiMongodb />, color: "text-green-500" },
  ],
};

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function SkillsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("show");
    }
  }, [inView]);
  return (
    <section className="px-5 sm:px-20 lg:px-20 pt-16 bg-white"  id="skills">
      <h2 className="text-3xl font-semibold mb-12">Skills</h2>
      {Object.entries(skills).map(([category, skillsList]) => {
        return (
          <div key={category} className="grid grid-cols-12 mb-12" ref={ref}>
            <div className="col-span-12 md:col-span-3">
              <h3 className="text-2xl font-bold text-gray-600">{category}</h3>
            </div>
            <motion.div
              className="col-span-12 md:col-span-9 grid grid-cols-2 md:grid-cols-3 gap-4"
              initial="hidden"
              animate={controls}
              variants={containerVariants}
            >
              {skillsList.map((skill) => (
                <motion.div
                  key={skill.name}
                  className="p-3 px-4 bg-transparent rounded-md text-gray-800 font-medium flex items-center gap-3"
                  variants={itemVariants}
                >
                  <span className={`text-2xl ${skill.color}`}>{skill.icon}</span>
                  <span className="text-md font-medium text-gray-700">{skill.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        );
      })}
    </section>
  );
}
