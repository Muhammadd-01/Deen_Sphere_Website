"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Apple, HandCoins as Android, Check } from "lucide-react"

const AppShowcase = () => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })

  const appFeatures = [
    "Offline Quran access",
    "Prayer time notifications",
    "Personalized learning paths",
    "Community messaging",
    "Bookmarking & notes",
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

  return (
    <section
      id="app"
      className="py-24 px-4 bg-gradient-to-b from-[#0B0B0B] via-[#141414] to-[#0B0B0B] relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -bottom-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#F5B400]/10 to-transparent rounded-full blur-3xl"
          animate={{ y: [0, -40, 0], x: [0, 40, 0] }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
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
            className="inline-block px-4 py-2 bg-[#1C1C1C] border border-[#F5B400] rounded-full mb-6 hover:border-[#FFD84D] transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-[#FFD84D] text-sm font-medium">Mobile Experience</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            DeenSphere <span className="text-gradient">Mobile App</span>
          </h2>
          <p className="text-lg text-[#B3B3B3] max-w-3xl mx-auto hover:text-white transition-colors duration-300">
            Your Islamic companion, always in your pocket. Coming soon to iOS and Android.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative flex justify-center"
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="relative group"
            >
              {/* Phone Frame */}
              <div className="w-64 h-[520px] bg-gradient-to-br from-[#1C1C1C] to-[#141414] rounded-3xl border-8 border-[#2A2A2A] shadow-2xl flex flex-col group-hover:shadow-2xl group-hover:shadow-[#F5B400]/20 group-hover:border-[#F5B400]/50 transition-all duration-300">
                {/* Status Bar */}
                <div className="h-10 bg-[#0B0B0B] rounded-t-2xl flex items-center justify-center text-xs text-[#B3B3B3]">
                  <span>9:41</span>
                </div>

                {/* Content */}
                <motion.div
                  className="flex-1 bg-[#0B0B0B] p-4 flex flex-col justify-center"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  <div className="text-center">
                    <motion.div
                      className="w-16 h-16 gradient-gold rounded-2xl mx-auto mb-4 flex items-center justify-center"
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    >
                      <span className="text-2xl font-bold text-black">D</span>
                    </motion.div>
                    <h3 className="font-bold text-white mb-2">DeenSphere</h3>
                    <p className="text-xs text-[#B3B3B3] mb-4">Islamic Knowledge Platform</p>
                  </div>

                  <div className="space-y-2">
                    {appFeatures.slice(0, 3).map((feature) => (
                      <motion.div
                        key={feature}
                        className="text-xs text-[#FFD84D] flex items-center gap-2"
                        initial={{ opacity: 0, x: -10 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.6, duration: 0.4 }}
                      >
                        <div className="w-2 h-2 gradient-gold rounded-full" />
                        {feature}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Home Indicator */}
                <div className="h-6 bg-[#0B0B0B] rounded-b-2xl flex items-end justify-center pb-1">
                  <div className="w-32 h-1 bg-[#2A2A2A] rounded-full" />
                </div>
              </div>

              <motion.div
                className="absolute inset-0 gradient-gold rounded-3xl opacity-0 group-hover:opacity-30 blur-2xl -z-10 transition-all duration-300"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              />
            </motion.div>
          </motion.div>

          {/* Right: Features List */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <motion.div
              className="space-y-6 mb-8"
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              {appFeatures.map((feature, index) => (
                <motion.div
                  key={feature}
                  className="flex items-start gap-4 group cursor-pointer"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="w-10 h-10 gradient-gold rounded-lg flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Check className="text-black font-bold text-lg" size={20} />
                  </motion.div>
                  <div>
                    <h4 className="font-bold text-white mb-1 group-hover:text-[#FFD84D] transition-colors">
                      {feature}
                    </h4>
                    <p className="text-[#B3B3B3] text-sm group-hover:text-white transition-colors">
                      Experience Islamic knowledge wherever you go.
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Platform Badges */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                className="flex-1 flex items-center justify-center gap-3 px-6 py-4 bg-black text-white rounded-xl border border-[#2A2A2A] hover:border-[#F5B400] transition-all duration-300 group"
                whileHover={{ y: -4, boxShadow: "0 0 20px rgba(245, 180, 0, 0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                <Apple size={24} />
                <div className="text-left">
                  <div className="text-xs text-[#B3B3B3]">Coming to</div>
                  <div className="font-semibold group-hover:text-[#FFD84D] transition-colors">App Store</div>
                </div>
              </motion.button>
              <motion.button
                className="flex-1 flex items-center justify-center gap-3 px-6 py-4 bg-black text-white rounded-xl border border-[#2A2A2A] hover:border-[#F5B400] transition-all duration-300 group"
                whileHover={{ y: -4, boxShadow: "0 0 20px rgba(245, 180, 0, 0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                <Android size={24} />
                <div className="text-left">
                  <div className="text-xs text-[#B3B3B3]">Coming to</div>
                  <div className="font-semibold group-hover:text-[#FFD84D] transition-colors">Google Play</div>
                </div>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AppShowcase
