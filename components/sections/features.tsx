"use client"

import { motion, Variants } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { BookOpen, Users, BarChart, Shield, Search, Zap } from "lucide-react"
import { useLanguage } from "@/context/language-context"

const Features = () => {
  const { t } = useLanguage()
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  const features = [
    {
      icon: BookOpen,
      title: t("features.quran.title"),
      description: t("features.quran.desc"),
      color: "from-blue-500 to-cyan-600",
    },
    {
      icon: Users,
      title: t("features.community.title"),
      description: t("features.community.desc"),
      color: "from-purple-500 to-pink-600",
    },
    {
      icon: BarChart,
      title: t("features.learning.title"),
      description: t("features.learning.desc"),
      color: "from-emerald-500 to-teal-600",
    },
    {
      icon: Shield,
      title: t("features.safety.title"),
      description: t("features.safety.desc"),
      color: "from-red-500 to-rose-600",
    },
    {
      icon: Search,
      title: t("features.search.title"),
      description: t("features.search.desc"),
      color: "from-yellow-400 to-orange-500",
    },
    {
      icon: Zap,
      title: t("features.reminders.title"),
      description: t("features.reminders.desc"),
      color: "from-indigo-500 to-blue-600",
    },
  ]

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section id="features" className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-[#F5B400]/10 to-transparent rounded-full blur-3xl"
          animate={{ y: [0, 40, 0] }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-block px-4 py-2 bg-[#1C1C1C] border border-[#F5B400] rounded-full mb-6 hover:border-[#FFD84D] hover:shadow-lg hover:shadow-[#F5B400]/30 transition-all duration-300 cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-[#FFD84D] text-sm font-medium">{t("features.badge")}</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Everything <span className="text-gradient">{t("features.title").split("Everything ")[1]}</span>
          </h2>
          <p className="text-lg text-[#B3B3B3] max-w-3xl mx-auto hover:text-white transition-colors duration-300">
            {t("features.description")}
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div key={feature.title} variants={itemVariants} className="group relative">
                <a
                  href="/features#download-app"
                  className={`block h-full p-6 rounded-xl border border-[#2A2A2A] bg-[#1C1C1C]/70 backdrop-blur-md hover-lift hover:border-[#F5B400] cursor-pointer overflow-hidden transition-all duration-300 relative will-change-transform`}
                >
                  <div
                    className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-gradient-to-br ${feature.color}`}
                  ></div>

                  <div className="relative z-10">
                    <motion.div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon size={24} className="text-white" />
                    </motion.div>
                    <h3 className="text-lg font-bold mb-2 group-hover:text-[#FFD84D] transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-[#B3B3B3] text-sm group-hover:text-white transition-colors duration-300">
                      {feature.description}
                    </p>

                    <div className="mt-4 flex items-center gap-2 text-[#F5B400] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-sm font-medium">{t("features.learn_more")}</span>
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                      >
                        →
                      </motion.span>
                    </div>
                  </div>
                </a>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Features
