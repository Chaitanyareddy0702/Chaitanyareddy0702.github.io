"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function Education() {
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
      id="education"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="mb-16 bg-white bg-opacity-10 p-8 rounded-lg shadow-lg"
    >
      <h2 className="text-4xl font-bold mb-6 text-blue-400">Education</h2>
      <motion.div variants={itemVariants} className="mb-6 bg-gray-800 p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold text-blue-300">
          B.Tech in Computer Science and Engineering (Artificial Intelligence)
        </h3>
        <p className="text-lg text-gray-300">Amrita Vishwa Vidyapeetham, Coimbatore</p>
        <p className="text-md text-gray-400">2020 – 2024</p>
        <p className="mt-2 text-gray-300">CGPA: 8.5/10</p>
        <p className="mt-2 text-gray-300">
          Key Modules: Python for Machine Learning (Grade A), Data Structures and Algorithms (Grade A)
        </p>
      </motion.div>
      <motion.div variants={itemVariants} className="mb-6 bg-gray-800 p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold text-blue-300">Higher Secondary Certificate (HSC)</h3>
        <p className="text-lg text-gray-300">Narayana Junior College, Hyderabad</p>
        <p className="text-md text-gray-400">2018 – 2020</p>
        <p className="mt-2 text-gray-300">Percentage: 92.7%</p>
        <p className="mt-2 text-gray-300">Subjects: Mathematics, Physics, Chemistry, English</p>
      </motion.div>
      <motion.div variants={itemVariants} className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold text-blue-300">Secondary School Certificate (SSC)</h3>
        <p className="text-lg text-gray-300">Sri Chaitanya High School, Hyderabad</p>
        <p className="text-md text-gray-400">2018</p>
        <p className="mt-2 text-gray-300">GPA: 9.3/10</p>
      </motion.div>
    </motion.section>
  )
}

