"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Heart, Globe, Users } from "lucide-react"

const About = () => {
  const { ref, inView } = useInView({ threshold: 0.3 })

  const values = [
    {
      icon: Heart,
      title: "Spiritual Growth",
      description: "Deepen your connection with Islamic teachings and personal faith journey.",
    },
    {
      icon: Globe,
      title: "Global Community",
      description: "Connect with Muslims worldwide in a safe, respectful environment.",
    },
    {
      icon: Users,
      title: "Knowledge Sharing",
      description: "Learn from scholars and share wisdom with an engaged community.",
    },
  ]

  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-b from-[#0B0B0B] to-[#141414]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="inline-block px-4 py-2 bg-[#1C1C1C] border border-[#F5B400] rounded-full mb-6">
            <span className="text-[#FFD84D] text-sm font-medium">About DeenSphere</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Building the Future of Islamic Community</h2>
          <p className="text-lg text-[#B3B3B3] max-w-3xl">
            DeenSphere is more than a platform—it's a movement toward spiritual enlightenment, community unity, and
            accessible Islamic education for everyone, everywhere.
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="group p-8 bg-[#1C1C1C] rounded-xl border border-[#2A2A2A] hover-gold-border cursor-pointer"
              >
                <div className="w-16 h-16 gradient-gold rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon size={32} className="text-black" />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-[#B3B3B3]">{value.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default About
