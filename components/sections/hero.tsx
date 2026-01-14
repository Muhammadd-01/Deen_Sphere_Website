"use client"

import { motion } from "framer-motion"
import { Zap, MessageSquare, ArrowRight } from "lucide-react"

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 pb-12 px-4 relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#F5B400]/20 to-transparent rounded-full blur-3xl"
          animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-full blur-3xl"
          animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-5xl mx-auto w-full relative z-10">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="text-center">
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#1C1C1C] border border-[#F5B400] rounded-full mb-8 hover:border-[#FFD84D] hover:shadow-lg hover:shadow-[#F5B400]/30 transition-all duration-300 cursor-pointer group"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <Zap size={16} className="text-[#FFD84D]" />
            </motion.div>
            <span className="text-sm text-[#FFD84D] font-medium">The All-In-One Islamic App</span>
          </motion.div>

          {/* Heading */}
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold mb-6 text-balance leading-tight">
            <span className="text-white">Your Pocket Companion for</span>
            <br />
            <span className="text-gradient animate-pulse-scale">Knowledge & Growth</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-[#B3B3B3] mb-8 max-w-2xl mx-auto text-balance hover:text-white transition-colors duration-300"
          >
            Connect with millions in a community built on knowledge, faith, and spiritual growth.
            Access Scholars, Comparative Religion, History, and Books—all in one app.

          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="px-8 py-4 gradient-gold text-black font-bold rounded-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 group"
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98 }}
            >
              <Zap size={20} />
              Join Waitlist
              <motion.div animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}>
                <ArrowRight size={20} />
              </motion.div>
            </motion.button>
            <motion.button
              className="px-8 py-4 border-2 border-[#F5B400] text-[#FFD84D] font-bold rounded-lg hover:bg-[#F5B400]/10 transition-all duration-300 flex items-center justify-center gap-2 hover-lift"
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98 }}
            >
              <MessageSquare size={20} />
              Explore Features
              <motion.div animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}>
                <ArrowRight size={20} />
              </motion.div>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          className="mt-20 relative h-64 flex items-center justify-center"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Decorative Circles */}
          <motion.div
            className="absolute w-80 h-80 rounded-full border-2 border-[#F5B400]/20"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          />
          <motion.div
            className="absolute w-64 h-64 rounded-full border-2 border-[#F5B400]/40"
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          />
          <motion.div
            className="absolute w-48 h-48 bg-gradient-to-br from-[#F5B400]/20 to-[#E6A800]/10 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />

          {Array.from({ length: 5 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-[#F5B400] rounded-full"
              animate={{
                x: [Math.cos((i / 5) * Math.PI * 2) * 150, Math.cos((i / 5) * Math.PI * 2) * 180],
                y: [Math.sin((i / 5) * Math.PI * 2) * 150, Math.sin((i / 5) * Math.PI * 2) * 180],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 4 + i,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
