"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Mail, ArrowRight } from "lucide-react"
import { useState } from "react"

const CTA = () => {
  const { ref, inView } = useInView({ threshold: 0.4 })
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail("")
      setTimeout(() => setSubmitted(false), 3000)
    }
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[#0B0B0B] to-[#141414]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Join <span className="gradient-gold bg-clip-text text-transparent">DeenSphere</span>?
          </h2>
          <p className="text-lg text-[#B3B3B3] mb-8 max-w-2xl mx-auto">
            Be among the first to access our platform. Sign up for early access and get exclusive updates about our
            mobile app launch.
          </p>

          {/* Email Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 bg-[#1C1C1C] border border-[#2A2A2A] rounded-lg text-white placeholder-[#B3B3B3] focus:outline-none focus:border-[#F5B400] transition-colors duration-300"
              required
            />
            <button
              type="submit"
              className="px-8 py-3 gradient-gold text-black font-semibold rounded-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <Mail size={20} />
              Notify Me
            </button>
          </motion.form>

          {/* Success Message */}
          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="px-6 py-3 bg-[#1C1C1C] border border-[#F5B400] rounded-lg text-[#FFD84D] text-sm font-medium mb-8"
            >
              ✓ Thank you! Check your email for updates.
            </motion.div>
          )}

          {/* Secondary CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#about"
              className="flex items-center justify-center gap-2 text-[#FFD84D] hover:text-[#F5B400] transition-colors duration-300 font-medium group"
            >
              Learn More About Us
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </motion.div>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          className="mt-16 relative"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-[#F5B400]/10 to-[#E6A800]/10 rounded-full blur-3xl" />
        </motion.div>
      </div>
    </section>
  )
}

export default CTA
