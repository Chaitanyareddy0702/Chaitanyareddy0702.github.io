"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.section
      id="about"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="mb-16 bg-white bg-opacity-10 p-8 rounded-lg shadow-lg"
    >
      <h2 className="text-4xl font-bold mb-6 text-blue-400">About Me</h2>
      <div className="flex flex-col md:flex-row items-center gap-8">
        <img
          src="/profile-picture.jpg"
          alt="Onteddu Chaitanya Reddy"
          className="w-64 h-64 rounded-full object-cover shadow-lg"
        />
        <div>
          <p className="text-lg leading-relaxed text-gray-300 mb-4">
            As an emerging engineer with a specialization in Artificial Intelligence, I bring a unique blend of
            technical expertise and innovative problem-solving skills to the table. My proficiency spans across Python,
            Machine Learning, and Deep Learning, complemented by a strong foundation in software engineering principles.
          </p>
          <p className="text-lg leading-relaxed text-gray-300 mb-4">
            What sets me apart is not just my technical acumen, but also my ability to work effectively in team
            environments and handle responsibilities independently. I thrive in collaborative settings where I can
            contribute my ideas and learn from others, fostering an environment of continuous growth and innovation.
          </p>
          <p className="text-lg leading-relaxed text-gray-300">
            I am actively seeking opportunities to contribute to organizations at the forefront of AI and ML
            technologies. My goal is to be part of projects that push the boundaries of what's possible in AI, while
            continuously enhancing my skills and knowledge in this rapidly evolving field.
          </p>
        </div>
      </div>
    </motion.section>
  )
}

