"use client"

import { motion } from "framer-motion"
import { Scale, Globe, Landmark, Target } from "lucide-react"
import Donations from "@/components/sections/donations"

const AboutPage = () => {
    return (
        <div className="min-h-screen bg-[#0B0B0B] pt-24 pb-12 px-4 sm:px-6 lg:px-8">
            {/* Hero Section */}
            <div className="max-w-4xl mx-auto text-center mb-20">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl font-bold text-white mb-6"
                >
                    About <span className="text-gradient">Deen Sphere</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-[#B3B3B3] text-lg leading-relaxed"
                >
                    A comprehensive platform bringing together all aspects of Islamic civilization
                </motion.p>
            </div>

            {/* Vision Section */}
            <section className="max-w-7xl mx-auto mb-24">
                <div className="bg-[#141414] rounded-3xl p-8 md:p-12 border border-[#2A2A2A] relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#F5B400]/5 rounded-full blur-3xl"></div>

                    <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-xl bg-[#1C1C1C] flex items-center justify-center">
                                <Target className="text-[#F5B400]" size={24} />
                            </div>
                            <h2 className="text-3xl font-bold text-white">Our Vision</h2>
                        </div>

                        <p className="text-[#B3B3B3] text-lg leading-relaxed mb-6">
                            To revive the complete understanding of Islam as a comprehensive way of life, not just a set of rituals.
                            Deen Sphere aims to gather and present the full spectrum of Islamic civilization—from spirituality to
                            governance, from economics to history.
                        </p>

                        <p className="text-[#B3B3B3] text-lg leading-relaxed">
                            We believe that Islam provided a holistic framework for human existence, and understanding this
                            completeness is essential for Muslims navigating the modern world.
                        </p>
                    </div>
                </div>
            </section>

            {/* Mission Pillars */}
            <section className="max-w-7xl mx-auto mb-24">
                <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
                    Our <span className="text-[#F5B400]">Mission</span>
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Pillar 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-[#141414] p-8 rounded-2xl border border-[#2A2A2A] hover:border-[#F5B400]/50 transition-all"
                    >
                        <div className="w-14 h-14 bg-[#1C1C1C] rounded-xl flex items-center justify-center mb-6">
                            <Landmark className="text-[#F5B400]" size={32} />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">Politics & Governance</h3>
                        <p className="text-[#B3B3B3] leading-relaxed">
                            Rediscovering the principles of justice (Adl), consultation (Shura), and ethical leadership
                            that governed Islamic civilizations for centuries.
                        </p>
                    </motion.div>

                    {/* Pillar 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-[#141414] p-8 rounded-2xl border border-[#2A2A2A] hover:border-[#F5B400]/50 transition-all"
                    >
                        <div className="w-14 h-14 bg-[#1C1C1C] rounded-xl flex items-center justify-center mb-6">
                            <Scale className="text-[#F5B400]" size={32} />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">Economy & Finance</h3>
                        <p className="text-[#B3B3B3] leading-relaxed">
                            Moving beyond interest (Riba) to an equitable system of wealth distribution, ethical trade,
                            and social welfare through Zakat and Waqf.
                        </p>
                    </motion.div>

                    {/* Pillar 3 */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="bg-[#141414] p-8 rounded-2xl border border-[#2A2A2A] hover:border-[#F5B400]/50 transition-all"
                    >
                        <div className="w-14 h-14 bg-[#1C1C1C] rounded-xl flex items-center justify-center mb-6">
                            <Globe className="text-[#F5B400]" size={32} />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">History & Civilization</h3>
                        <p className="text-[#B3B3B3] leading-relaxed">
                            Connecting the past to the future. Learning from the Golden Age of Islam to inspire
                            a modern renaissance of knowledge and innovation.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Quote Section */}
            <section className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-[#141414] to-[#1C1C1C] p-12 rounded-3xl border border-[#F5B400]/30 text-center"
                >
                    <p className="text-2xl md:text-3xl font-serif italic text-white mb-6">
                        "Islam is not just a religion of worship, but a complete way of life"
                    </p>
                    <div className="w-16 h-1 bg-[#F5B400] mx-auto"></div>
                </motion.div>
            </section>

            {/* Donations Section */}
            <Donations />
        </div>
    )
}

export default AboutPage
