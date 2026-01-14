"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { CloudRain as Quran, Globe, Brain, Zap, History, Lightbulb } from "lucide-react"

const Knowledge = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  const categories = [
    {
      icon: Quran,
      title: "Islamic Studies",
      description: "Comprehensive Islamic knowledge including Quran, Hadith, Fiqh, and Aqidah",
      color: "from-emerald-500 to-teal-600",
    },
    {
      icon: Globe,
      title: "Geopolitics & History",
      description: "World history, political movements, and geopolitical analysis",
      color: "from-blue-500 to-cyan-600",
    },
    {
      icon: Brain,
      title: "Philosophy & Culture",
      description: "Deep dives into philosophy, ethics, and cultural studies",
      color: "from-purple-500 to-pink-600",
    },
    {
      icon: Zap,
      title: "Science & Technology",
      description: "Modern scientific discoveries and technological innovations",
      color: "from-yellow-400 to-orange-500",
    },
    {
      icon: History,
      title: "Historical Events",
      description: "Detailed exploration of pivotal moments in human history",
      color: "from-red-500 to-rose-600",
    },
    {
      icon: Lightbulb,
      title: "Inventions & Innovation",
      description: "Breakthroughs in science, technology, and human achievement",
      color: "from-indigo-500 to-blue-600",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section ref={ref} className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#F5B400]/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#F5B400] via-[#FFD84D] to-[#E6A800] bg-clip-text text-transparent">
              Knowledge Across All Disciplines
            </span>
          </h2>
          <p className="text-[#B3B3B3] text-lg md:text-xl max-w-3xl mx-auto">
            DeenSphere bridges Islamic and Western knowledge, covering history, politics, science, inventions, culture,
            and everything in between.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {categories.map((category, index) => {
            const Icon = category.icon
            return (
              <motion.div key={index} variants={itemVariants} className="group relative">
                <div className="h-full p-6 rounded-xl border border-[#2A2A2A] bg-gradient-to-br from-[#1C1C1C] to-[#141414] hover-lift hover:border-[#F5B400] cursor-pointer overflow-hidden">
                  {/* Animated background gradient */}
                  <div
                    className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-gradient-to-br ${category.color}`}
                  ></div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div
                      className={`w-14 h-14 rounded-lg bg-gradient-to-br ${category.color} p-3 mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-full h-full text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#FFD84D] transition-colors">
                      {category.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[#B3B3B3] text-sm leading-relaxed group-hover:text-[#F4F4F4] transition-colors">
                      {category.description}
                    </p>

                    {/* Hover indicator */}
                    <div className="mt-4 flex items-center gap-2 text-[#F5B400] opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1">
                      <span className="text-sm font-medium">Explore</span>
                      <span>→</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Knowledge
