"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function Achievements() {
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
      id="achievements"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="mb-16 bg-white bg-opacity-10 p-8 rounded-lg shadow-lg"
    >
      <h2 className="text-4xl font-bold mb-6 text-blue-400">Achievements</h2>
      <motion.ul variants={itemVariants} className="list-disc list-inside text-gray-300">
        <li className="mb-4">
          <span className="font-semibold">Research Paper:</span> "Enhancing Water Body Segmentation using DeepLabv3+: A
          Comprehensive Study and Performance Analysis" - Presented at the 2023 ASPRS International Technical Symposium
        </li>
        <li className="mb-4">
          <span className="font-semibold">Certification:</span> Artificial Intelligence Virtual Experience Program -
          Certificate of Completion from Cognizant (Forage)
        </li>
        <li className="mb-4">
          <span className="font-semibold">Academic Excellence:</span> Consistently maintained a CGPA above 8.5
          throughout the B.Tech program
        </li>
      </motion.ul>
    </motion.section>
  )
}

