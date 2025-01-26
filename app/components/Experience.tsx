"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <motion.section
      id="experience"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="mb-16 bg-white bg-opacity-10 p-8 rounded-lg shadow-lg"
    >
      <h2 className="text-4xl font-bold mb-6 text-blue-400">Experience</h2>
      <motion.div variants={itemVariants} className="mb-6 bg-gray-800 p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold text-blue-300">Software Engineer</h3>
        <p className="text-lg text-gray-300">Guidewire Software</p>
        <p className="text-md text-gray-400">May 2023 - 2024</p>
        <ul className="list-disc list-inside mt-4 text-gray-300">
          <li>Developed and maintained core insurance software modules</li>
          <li>Collaborated with cross-functional teams to implement new features</li>
          <li>Optimized database queries, improving system performance by 30%</li>
          <li>Participated in code reviews and mentored junior developers</li>
        </ul>
      </motion.div>
      <motion.div variants={itemVariants} className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold text-blue-300">Intern</h3>
        <p className="text-lg text-gray-300">Guidewire Software</p>
        <p className="text-md text-gray-400">January 3, 2023 - May 17, 2023</p>
        <ul className="list-disc list-inside mt-4 text-gray-300">
          <li>Assisted in the development of insurance claim processing systems</li>
          <li>Conducted unit testing and bug fixes for existing modules</li>
          <li>Participated in daily stand-ups and sprint planning meetings</li>
          <li>Gained hands-on experience with Agile methodologies and version control systems</li>
        </ul>
      </motion.div>
    </motion.section>
  )
}

