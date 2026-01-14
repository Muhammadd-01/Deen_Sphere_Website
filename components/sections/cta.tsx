"use client"

import type React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Mail, ArrowRight, Zap, CheckCircle, Sparkles, PartyPopper } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

// Confetti particle component
const ConfettiParticle = ({ delay, x }: { delay: number; x: number }) => (
  <motion.div
    className="absolute w-2 h-2 rounded-full"
    style={{
      left: `${x}%`,
      top: "50%",
      backgroundColor: ["#F5B400", "#10B981", "#3B82F6", "#A855F7", "#EF4444", "#EC4899"][Math.floor(Math.random() * 6)]
    }}
    initial={{ y: 0, opacity: 1, scale: 1 }}
    animate={{
      y: [0, -100, 200],
      x: [0, (Math.random() - 0.5) * 100],
      opacity: [1, 1, 0],
      scale: [1, 1.2, 0.5],
      rotate: [0, 360, 720]
    }}
    transition={{
      duration: 2,
      delay: delay,
      ease: "easeOut"
    }}
  />
)

const CTA = () => {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (email && name) {
      setIsSubmitting(true)
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))
      setIsSubmitting(false)
      setSubmitted(true)
      setShowConfetti(true)
      setEmail("")
      setName("")

      // Hide confetti after animation
      setTimeout(() => setShowConfetti(false), 3000)
      setTimeout(() => setSubmitted(false), 5000)
    }
  }

  return (
    <section id="cta" className="py-24 px-4 bg-transparent relative overflow-hidden">
      {/* Color accent gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-[#F5B400]/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-r from-emerald-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-l from-purple-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#1C1C1C]/70 backdrop-blur-sm border border-[#F5B400]/30 rounded-full mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <Sparkles size={16} className="text-[#F5B400]" />
              <span className="text-[#FFD84D] text-sm font-medium">🚀 Early Access</span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Join <span className="text-gradient">DeenSphere</span>?
            </h2>
            <p className="text-lg text-[#B3B3B3] mb-8">
              Be among the first to access our platform. Sign up for early access and get exclusive updates about our mobile app launch.
            </p>

            {/* Features list */}
            <div className="space-y-3 mb-8">
              {[
                { text: "Early access to all features", color: "#F5B400" },
                { text: "Exclusive community membership", color: "#10B981" },
                { text: "Direct connection with scholars", color: "#3B82F6" }
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: feature.color }}
                  >
                    <CheckCircle size={12} className="text-black" />
                  </div>
                  <span className="text-white">{feature.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-[#1C1C1C]/50 backdrop-blur-md border border-[#2A2A2A] hover:border-[#F5B400]/30 rounded-2xl p-8 relative overflow-hidden transition-all"
          >
            {/* Confetti effect */}
            <AnimatePresence>
              {showConfetti && (
                <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden">
                  {[...Array(30)].map((_, i) => (
                    <ConfettiParticle key={i} delay={i * 0.05} x={Math.random() * 100} />
                  ))}
                </div>
              )}
            </AnimatePresence>

            {!submitted ? (
              <>
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative w-12 h-12">
                    <Image src="/logo.png" alt="DeenSphere" fill className="object-contain" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Get Notified</h3>
                    <p className="text-[#888] text-sm">Join 10,000+ waiting</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="cta-name" className="block text-sm font-medium text-white mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="cta-name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your name"
                      required
                      className="w-full px-4 py-3 bg-[#141414]/80 border border-[#2A2A2A] rounded-lg text-white placeholder-[#666] focus:outline-none focus:border-[#F5B400] focus:shadow-lg focus:shadow-[#F5B400]/10 transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="cta-email" className="block text-sm font-medium text-white mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="cta-email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      required
                      className="w-full px-4 py-3 bg-[#141414]/80 border border-[#2A2A2A] rounded-lg text-white placeholder-[#666] focus:outline-none focus:border-[#F5B400] focus:shadow-lg focus:shadow-[#F5B400]/10 transition-all"
                    />
                  </div>
                  <div className="relative">
                    {/* Pulsing glow behind button */}
                    <motion.div
                      className="absolute inset-0 gradient-gold rounded-lg blur-md opacity-50"
                      animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="relative w-full py-4 gradient-gold text-black font-bold rounded-lg hover:shadow-lg hover:shadow-[#F5B400]/30 transition-all disabled:opacity-70 flex items-center justify-center gap-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {isSubmitting ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-5 h-5 border-2 border-black border-t-transparent rounded-full"
                          />
                          Joining...
                        </>
                      ) : (
                        <>
                          <Zap size={20} />
                          Get Notified
                          <ArrowRight size={20} />
                        </>
                      )}
                    </motion.button>
                    {/* Badge */}
                    <div className="absolute -top-2 -right-2 px-2 py-0.5 bg-emerald-500 text-white text-[10px] font-bold rounded-full animate-pulse">
                      FREE
                    </div>
                  </div>
                </form>

                <p className="text-[#666] text-xs text-center mt-4">
                  We respect your privacy. No spam, ever.
                </p>
              </>
            ) : (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-8"
              >
                <motion.div
                  className="w-20 h-20 bg-gradient-to-br from-emerald-500/30 to-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-4"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 0.5 }}
                >
                  <PartyPopper size={40} className="text-emerald-500" />
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-2">You're on the list! 🎉</h3>
                <p className="text-[#B3B3B3]">We'll notify you when DeenSphere launches.</p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CTA
