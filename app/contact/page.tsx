"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useState } from "react"
import { Mail, Phone, MapPin, Send, Loader } from "lucide-react"
import dynamic from "next/dynamic"

// Dynamically import map component
const MapComponent = dynamic(() => import("@/components/contact/map"), { ssr: false })

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus("success")
      setFormData({ name: "", email: "", subject: "", message: "" })
      setIsLoading(false)

      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus("idle"), 3000)
    }, 1500)
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "hello@deensphere.com",
      href: "mailto:hello@deensphere.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567",
    },
    {
      icon: MapPin,
      label: "Address",
      value: "Global Community Hub, Earth",
      href: "#",
    },
  ]

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0B0B0B] via-[#141414] to-[#0B0B0B]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h1>
          <p className="text-[#B3B3B3] text-lg md:text-xl max-w-3xl mx-auto">
            Have questions or want to join our community? We'd love to hear from you. Reach out to us anytime.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Info Cards */}
          {contactInfo.map((info, index) => {
            const Icon = info.icon
            return (
              <motion.a
                key={index}
                href={info.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="h-full p-6 rounded-xl border border-[#2A2A2A] bg-gradient-to-br from-[#1C1C1C] to-[#141414] hover-lift hover:border-[#F5B400] transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#F5B400] to-[#E6A800] p-2.5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 flex-shrink-0 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-black" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-semibold mb-1 group-hover:text-[#FFD84D] transition-colors">
                        {info.label}
                      </h3>
                      <p className="text-[#B3B3B3] text-sm group-hover:text-white transition-colors break-all">
                        {info.value}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.a>
            )
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="p-8 rounded-xl border border-[#2A2A2A] bg-gradient-to-br from-[#1C1C1C] to-[#141414]">
              <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-white mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-[#0B0B0B] border border-[#2A2A2A] text-white placeholder-[#666] focus:border-[#F5B400] focus:outline-none transition-all duration-300 hover-gold-border"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-[#0B0B0B] border border-[#2A2A2A] text-white placeholder-[#666] focus:border-[#F5B400] focus:outline-none transition-all duration-300 hover-gold-border"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-[#0B0B0B] border border-[#2A2A2A] text-white placeholder-[#666] focus:border-[#F5B400] focus:outline-none transition-all duration-300 hover-gold-border"
                    placeholder="What is this about?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-[#0B0B0B] border border-[#2A2A2A] text-white placeholder-[#666] focus:border-[#F5B400] focus:outline-none transition-all duration-300 hover-gold-border resize-none"
                    placeholder="Your message..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full px-6 py-3 gradient-gold text-black font-semibold rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <Loader className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>

                {/* Success Message */}
                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-lg bg-green-500/20 border border-green-500 text-green-400 text-sm"
                  >
                    ✓ Message sent successfully! We'll get back to you soon.
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>

          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="h-full min-h-[500px] rounded-xl overflow-hidden border border-[#2A2A2A]"
          >
            <MapComponent />
          </motion.div>
        </div>
      </div>
    </div>
  )
}
