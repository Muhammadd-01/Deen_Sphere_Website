"use client"

import { useState, useEffect } from "react"
import { motion, Variants } from "framer-motion"
import { Zap, MessageSquare, ArrowRight } from "lucide-react"
import Link from "next/link"
import WaitlistModal from "../waitlist-modal"
import { useLanguage } from "@/context/language-context"

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-4">
      {/* Background Animations - Vision-related elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Geometric Shapes - Representing Unity */}
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 border border-[#F5B400]/20 rounded-full will-change-transform"
          animate={{ rotate: 360, scale: [1, 1.1, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        {!isMobile && (
          <>
            <motion.div
              className="absolute top-40 right-20 w-24 h-24 border border-[#F5B400]/15 rotate-45 will-change-transform"
              animate={{ rotate: [45, 135, 45], y: [0, 20, 0] }}
              transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-40 left-20 w-16 h-16 bg-[#F5B400]/5 rounded-lg will-change-transform"
              animate={{ rotate: [0, 90, 0], scale: [1, 1.2, 1] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />
          </>
        )}

        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-[#F5B400]/10 to-transparent rounded-full blur-3xl will-change-[transform,opacity]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        {!isMobile && (
          <motion.div
            className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-tr from-[#E6A800]/10 to-transparent rounded-full blur-3xl will-change-[transform,opacity]"
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
        )}

        {/* Connecting Lines - Representing Community */}
        {!isMobile && (
          <svg className="absolute inset-0 w-full h-full opacity-10">
            <motion.line
              x1="10%" y1="20%" x2="30%" y2="40%"
              stroke="#F5B400" strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: [0, 1, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
            />
            <motion.line
              x1="70%" y1="30%" x2="90%" y2="60%"
              stroke="#F5B400" strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: [0, 1, 0] }}
              transition={{ duration: 6, repeat: Infinity, delay: 1 }}
            />
            <motion.line
              x1="20%" y1="70%" x2="50%" y2="50%"
              stroke="#FFD84D" strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: [0, 1, 0] }}
              transition={{ duration: 7, repeat: Infinity, delay: 2 }}
            />
          </svg>
        )}

        {/* Floating Dots - Stars/Knowledge */}
        {[...Array(isMobile ? 6 : 12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#F5B400]/30 rounded-full will-change-transform"
            style={{
              left: `${10 + (i * (isMobile ? 15 : 8))}%`,
              top: `${20 + ((i * 7) % 60)}%`
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.7, 0.3]
            }}
            transition={{
              duration: 3 + (i * 0.5),
              repeat: Infinity,
              delay: i * 0.3
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-8">
          {/* Badge */}
          <motion.div variants={itemVariants} className="inline-block">
            <motion.div
              className="px-4 py-2 bg-[#1C1C1C]/80 backdrop-blur-sm border border-[#F5B400] rounded-full cursor-pointer"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(245, 180, 0, 0.3)" }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-[#FFD84D] text-sm font-medium">{t("hero.badge")}</span>
            </motion.div>
          </motion.div>

          {/* Title */}
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
            {t("hero.title1")}
            <br />
            <span className="text-gradient">{t("hero.title2")}</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-[#B3B3B3] max-w-2xl mx-auto font-light leading-relaxed"
          >
            {t("hero.description")}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              onClick={() => setIsModalOpen(true)}
              className="px-8 py-4 gradient-gold text-black font-bold rounded-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 group w-full sm:w-auto"
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98 }}
            >
              <Zap size={20} />
              {t("hero.btn.waitlist")}
              <motion.div animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                <ArrowRight size={20} />
              </motion.div>
            </motion.button>

            <Link href="/features">
              <motion.button
                className="px-8 py-4 border-2 border-[#F5B400] text-[#FFD84D] font-bold rounded-lg hover:bg-[#F5B400]/10 transition-all duration-300 flex items-center justify-center gap-2 hover-lift w-full sm:w-auto"
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
              >
                <MessageSquare size={20} />
                {t("hero.btn.features")}
                <motion.div animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                  <ArrowRight size={20} />
                </motion.div>
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        {/* 360-Degree Sphere Animation */}
        <motion.div
          className="mt-12 mb-8 relative h-[350px] flex items-center justify-center overflow-visible will-change-transform"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Central Sphere */}
          <div className="relative w-56 h-56">
            {/* Rotating Circle - Represents 360 Degrees */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-[#F5B400]/30 will-change-transform"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute inset-4 rounded-full border-2 border-[#F5B400]/20 will-change-transform"
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />

            {/* Center Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-[#F5B400]/10 to-[#E6A800]/5 rounded-full backdrop-blur-sm">
              <div className="text-5xl font-bold text-[#F5B400]">360°</div>
              <div className="text-sm text-white/80 mt-2">{t("hero.360.deen")}</div>
            </div>

            {/* Orbiting Aspect Labels - Simplified on mobile */}
            <motion.div
              className="absolute inset-0 overflow-visible will-change-transform"
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            >
              {[
                { label: t("aspect.worship"), angle: 0, color: "#F5B400" },
                { label: t("aspect.politics"), angle: 45, color: "#10B981" },
                { label: t("aspect.economy"), angle: 90, color: "#3B82F6" },
                { label: t("aspect.history"), angle: 135, color: "#A855F7" },
                { label: t("aspect.science"), angle: 180, color: "#EC4899" },
                { label: t("aspect.culture"), angle: 225, color: "#F59E0B" },
                { label: t("aspect.society"), angle: 270, color: "#06B6D4" },
                { label: t("aspect.ethics"), angle: 315, color: "#EF4444" }
              ].filter((_, i) => !isMobile || i % 2 === 0).map((aspect, i) => {
                const radius = isMobile ? 100 : 120
                const x = Math.cos((aspect.angle * Math.PI) / 180) * radius
                const y = Math.sin((aspect.angle * Math.PI) / 180) * radius

                return (
                  <motion.div
                    key={aspect.label}
                    className="absolute w-20 h-8 flex items-center justify-center will-change-transform"
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
                      rotate: { duration: 30, repeat: Infinity, ease: "linear" }
                    }}
                  >
                    <div
                      className="px-3 py-1.5 bg-[#1C1C1C]/90 backdrop-blur-md border rounded-lg text-xs font-semibold whitespace-nowrap shadow-lg"
                      style={{ color: aspect.color, borderColor: `${aspect.color}50` }}
                    >
                      {aspect.label}
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Waitlist Modal */}
      <WaitlistModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}

export default Hero
