"use client"

import { motion } from "framer-motion"
import { Users, MessageCircle, Lightbulb, Trophy } from "lucide-react"

const Community = () => {

  const stats = [
    { icon: Users, label: "Global Members", value: "2M+" },
    { icon: MessageCircle, label: "Daily Discussions", value: "50K+" },
    { icon: Lightbulb, label: "Learning Resources", value: "10K+" },
    { icon: Trophy, label: "Scholarship Givers", value: "5K+" },
  ]

  return (
    <section id="community" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-[#1C1C1C] border border-[#F5B400] rounded-full mb-6 hover:bg-[#F5B400]/10 transition-all">
            <span className="text-[#FFD84D] text-sm font-medium">Our Community</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">A Growing Global Movement</h2>
          <p className="text-lg text-[#B3B3B3] max-w-3xl mx-auto">
            Join millions of Muslims united in faith, learning, and community building.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center p-6 bg-[#1C1C1C] rounded-xl border border-[#2A2A2A] hover:border-[#F5B400]/50 transition-all cursor-pointer"
              >
                <div className="w-12 h-12 gradient-gold rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon size={24} className="text-black" />
                </div>
                <div className="text-3xl font-bold text-[#F5B400] mb-2">{stat.value}</div>
                <p className="text-[#B3B3B3]">{stat.label}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Community Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="bg-gradient-to-r from-[#1C1C1C] to-[#141414] rounded-2xl border border-[#2A2A2A] p-8 md:p-12 text-center hover:border-[#F5B400]/30 transition-all"
        >
          <h3 className="text-2xl font-bold mb-4">What Makes DeenSphere Special</h3>
          <p className="text-[#B3B3B3] max-w-3xl mx-auto mb-8">
            We're committed to creating a space where authentic Islamic knowledge thrives, diverse voices are respected,
            and everyone can grow spiritually while building meaningful connections with Muslims around the world.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {["Authentic Knowledge", "Safe Community", "Cultural Diversity"].map((value) => (
              <motion.div
                key={value}
                className="p-4 bg-[#0B0B0B] rounded-lg hover:bg-[#F5B400]/10 transition-all cursor-pointer"
                whileHover={{ scale: 1.05 }}
              >
                <p className="font-semibold text-[#FFD84D]">{value}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Community
