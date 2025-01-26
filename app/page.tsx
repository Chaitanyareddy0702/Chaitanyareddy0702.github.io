"use client"

import { motion } from "framer-motion"
import Header from "./components/Header"
import About from "./components/About"
import Experience from "./components/Experience"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Education from "./components/Education"
import Achievements from "./components/Achievements"

export default function Home() {
  return (
    <main className="min-h-screen bg-fixed bg-cover bg-center" style={{ backgroundImage: "url('/background.jpg')" }}>
      <div className="backdrop-blur-sm bg-black bg-opacity-70">
        <Header />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-4 py-8"
        >
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Education />
          <Achievements />
          <Contact />
        </motion.div>
      </div>
    </main>
  )
}

