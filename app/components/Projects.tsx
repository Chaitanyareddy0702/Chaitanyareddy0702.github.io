"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function Projects() {
  const projects = [
    {
      title: "Credit Card Fraud Detection",
      description: "Developed a fraud detection system using Hidden Markov Model with 91% accuracy.",
      tools: "Python, NumPy, Pandas",
      image: "/credit-card-fraud.jpg",
    },
    {
      title: "Sleep Stage Classification",
      description: "Identified sleep stages through EEG signals using Machine Learning Algorithms with 85% accuracy.",
      tools: "Python, NumPy, Matplotlib, Pandas",
      image: "/sleep-stage.jpg",
    },
    {
      title: "Voice Pathology Detection",
      description:
        "Early detection of voice pathologies using ML techniques and Vision Transformers with 93% accuracy.",
      tools: "Python, OpenSmile, TensorFlow, Librosa",
      image: "/voice-pathology.jpg",
    },
  ]

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
      id="projects"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="mb-16 bg-white bg-opacity-10 p-8 rounded-lg shadow-lg"
    >
      <h2 className="text-4xl font-bold mb-6 text-blue-400">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div key={index} variants={itemVariants} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-blue-300">{project.title}</h3>
              <p className="mb-3 text-gray-300">{project.description}</p>
              <p className="text-sm text-gray-400">Tools: {project.tools}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

