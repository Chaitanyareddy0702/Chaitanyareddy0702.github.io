"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function Skills() {
  const skills = [
    { name: "Python", level: 90 },
    { name: "MATLAB", level: 85 },
    { name: "Java", level: 80 },
    { name: "Golang", level: 75 },
    { name: "Crossplane", level: 70 },
    { name: "YAML", level: 85 },
    { name: "Kubernetes", level: 80 },
    { name: "Docker", level: 85 },
    { name: "Terraform", level: 75 },
    { name: "Machine Learning", level: 90 },
    { name: "Deep Learning", level: 85 },
    { name: "Scikit-Learn", level: 90 },
    { name: "TensorFlow", level: 85 },
    { name: "NumPy", level: 95 },
    { name: "Pandas", level: 95 },
    { name: "SciPy", level: 90 },
  ]

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.section
      id="skills"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="mb-16 bg-white bg-opacity-10 p-8 rounded-lg shadow-lg"
    >
      <h2 className="text-4xl font-bold mb-6 text-blue-400">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="flex justify-between mb-1">
              <span className="text-base font-medium text-blue-300">{skill.name}</span>
              <span className="text-sm font-medium text-blue-300">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2.5">
              <motion.div
                className="bg-blue-600 h-2.5 rounded-full"
                style={{ width: `${skill.level}%` }}
                initial={{ width: 0 }}
                animate={inView ? { width: `${skill.level}%` } : {}}
                transition={{ duration: 1, delay: index * 0.1 }}
              ></motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

