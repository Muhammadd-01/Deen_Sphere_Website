"use client"

import { motion } from "framer-motion"
import { Zap, MessageSquare, ArrowRight } from "lucide-react"
import Link from "next/link"

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
            <Link href="#cta" scroll={true}>
              <motion.button
                className="px-8 py-4 gradient-gold text-black font-bold rounded-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 group w-full sm:w-auto"
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
              >
                <Zap size={20} />
                Join Waitlist
                <motion.div animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}>
                  <ArrowRight size={20} />
                </motion.div>
              </motion.button>
            </Link>
            <Link href="/features">
              <motion.button
                className="px-8 py-4 border-2 border-[#F5B400] text-[#FFD84D] font-bold rounded-lg hover:bg-[#F5B400]/10 transition-all duration-300 flex items-center justify-center gap-2 hover-lift w-full sm:w-auto"
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
              >
                <MessageSquare size={20} />
                Explore Features
                <motion.div animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}>
                  <ArrowRight size={20} />
                </motion.div>
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>


        {/* 360-Degree Sphere Animation */}
        <motion.div
          className="mt-20 relative h-[400px] flex items-center justify-center"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Central Sphere */}
          <div className="relative w-64 h-64">
            {/* Rotating Circle - Represents 360 Degrees */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-[#F5B400]/30"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            />
            <motion.div
              className="absolute inset-4 rounded-full border-2 border-[#F5B400]/20"
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            />

            {/* Center Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-[#F5B400]/10 to-[#E6A800]/5 rounded-full backdrop-blur-sm">
              <div className="text-6xl font-bold text-[#F5B400]">360°</div>
              <div className="text-sm text-white/80 mt-2">Complete Deen</div>
            </div>

            {/* Orbiting Aspect Labels - All labels rotate together */}
            <motion.div
              className="absolute inset-0"
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              {[
                { label: "Worship", angle: 0, color: "#F5B400" },
                { label: "Politics", angle: 45, color: "#FFD84D" },
                { label: "Economy", angle: 90, color: "#F5B400" },
                { label: "History", angle: 135, color: "#FFD84D" },
                { label: "Science", angle: 180, color: "#F5B400" },
                { label: "Culture", angle: 225, color: "#FFD84D" },
                { label: "Society", angle: 270, color: "#F5B400" },
                { label: "Ethics", angle: 315, color: "#FFD84D" }
              ].map((aspect, i) => {
                const radius = 150
                const x = Math.cos((aspect.angle * Math.PI) / 180) * radius
                const y = Math.sin((aspect.angle * Math.PI) / 180) * radius

                return (
                  <motion.div
                    key={i}
                    className="absolute w-20 h-20 flex items-center justify-center"
                    style={{
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                      transform: "translate(-50%, -50%)"
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1, rotate: -360 }}
                    transition={{
                      opacity: { delay: 0.5 + i * 0.1, duration: 0.5 },
                      scale: { delay: 0.5 + i * 0.1, duration: 0.5 },
                      rotate: { duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }
                    }}
                  >
                    <div className="px-3 py-2 bg-[#1C1C1C]/80 backdrop-blur-md border border-[#2A2A2A] rounded-lg text-xs font-semibold whitespace-nowrap" style={{ color: aspect.color }}>
                      {aspect.label}
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
