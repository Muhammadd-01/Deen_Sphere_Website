"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { BookOpen, Users, Smartphone, Search, Award, Globe } from "lucide-react"

const PlatformServices = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  const services = [
    {
      icon: BookOpen,
      title: "Comprehensive Knowledge Base",
      description: "Access thousands of articles, books, and resources covering Islamic and Western knowledge",
      features: ["Curated content", "Expert-verified", "Multi-language"],
    },
    {
      icon: Users,
      title: "Global Community",
      description: "Connect with scholars, students, and seekers of knowledge from around the world",
      features: ["Forums", "Study groups", "Mentorship"],
    },
    {
      icon: Smartphone,
      title: "Mobile Learning",
      description: "Learn anytime, anywhere with our powerful mobile app for iOS and Android",
      features: ["Offline access", "Push notifications", "Progress tracking"],
    },
    {
      icon: Search,
      title: "Smart Search & Discovery",
      description: "Find exactly what you need with AI-powered search across all knowledge domains",
      features: ["Advanced filters", "Personalized", "Recommendations"],
    },
    {
      icon: Award,
      title: "Certification Programs",
      description: "Earn recognized certificates by completing structured learning paths",
      features: ["Interactive courses", "Assessments", "Credentials"],
    },
    {
      icon: Globe,
      title: "Cultural Integration",
      description: "Understand how Islamic and Western perspectives intersect across history and culture",
      features: ["Comparative studies", "Historical context", "Modern analysis"],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section
      ref={ref}
      className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-[#0B0B0B] via-[#141414] to-[#0B0B0B]"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-[#F5B400]/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-blue-500/5 to-transparent rounded-full blur-3xl"></div>
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
            What <span className="text-gradient">DeenSphere Offers</span>
          </h2>
          <p className="text-[#B3B3B3] text-lg md:text-xl max-w-3xl mx-auto">
            Everything you need to expand your knowledge, connect with others, and grow intellectually and spiritually.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div key={index} variants={itemVariants} className="group">
                <div className="h-full p-8 rounded-xl border border-[#2A2A2A] bg-gradient-to-br from-[#1C1C1C]/50 to-[#141414]/50 backdrop-blur-sm hover-lift hover:border-[#F5B400] transition-all duration-300 hover:bg-gradient-to-br hover:from-[#1C1C1C]/80 hover:to-[#141414]/80">
                  {/* Icon Container */}
                  <div className="mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#F5B400] to-[#E6A800] p-2.5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 flex items-center justify-center">
                      <Icon className="w-full h-full text-black" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#FFD84D] transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#B3B3B3] text-sm leading-relaxed mb-4 group-hover:text-white transition-colors">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2">
                    {service.features.map((feature, fIndex) => (
                      <motion.div
                        key={fIndex}
                        className="flex items-center gap-2 text-xs text-[#B3B3B3] group-hover:text-[#FFD84D] transition-colors"
                        initial={{ opacity: 0, x: -10 }}
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                        transition={{ duration: 0.4, delay: 0.1 * fIndex }}
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-[#F5B400] group-hover:bg-[#FFD84D]"></div>
                        {feature}
                      </motion.div>
                    ))}
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

export default PlatformServices
