"use client"

import { motion } from "framer-motion"
import { Scale, Globe, Landmark } from "lucide-react"

const Vision = () => {
    return (
        <section className="py-24 bg-[#0B0B0B] relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F5B400]/5 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-[#F5B400] font-bold tracking-widest uppercase text-sm"
                    >
                        Our Mission
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6"
                    >
                        Reviving the <span className="text-gradient">Complete Deen</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-[#B3B3B3] text-lg max-w-3xl mx-auto leading-relaxed"
                    >
                        Islam is not just a religion of rituals; it is a comprehensive way of life that encompasses every aspect of human existence.
                        Deen Sphere aims to gather and present the full spectrum of Islamic civilization.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Card 1: Politics */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="bg-[#141414] p-8 rounded-2xl border border-[#2A2A2A] hover:border-[#F5B400]/50 transition-all group"
                    >
                        <div className="w-14 h-14 bg-[#1C1C1C] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <Landmark className="text-[#F5B400]" size={32} />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">Politics & Governance</h3>
                        <p className="text-[#B3B3B3] leading-relaxed">
                            Rediscovering the principles of justice (Adl), consultation (Shura), and ethical leadership that governed great civilizations.
                        </p>
                    </motion.div>

                    {/* Card 2: Economy */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-[#141414] p-8 rounded-2xl border border-[#2A2A2A] hover:border-[#F5B400]/50 transition-all group"
                    >
                        <div className="w-14 h-14 bg-[#1C1C1C] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <Scale className="text-[#F5B400]" size={32} />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">Economy & Finance</h3>
                        <p className="text-[#B3B3B3] leading-relaxed">
                            Moving beyond interest (Riba) to an equitable system of wealth distribution, ethical trade, and social welfare (Zakat).
                        </p>
                    </motion.div>

                    {/* Card 3: History */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="bg-[#141414] p-8 rounded-2xl border border-[#2A2A2A] hover:border-[#F5B400]/50 transition-all group"
                    >
                        <div className="w-14 h-14 bg-[#1C1C1C] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <Globe className="text-[#F5B400]" size={32} />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">History & Civilization</h3>
                        <p className="text-[#B3B3B3] leading-relaxed">
                            Connecting the past to the future. Learning from the Golden Age of Islam to inspire a modern renaissance of knowledge.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Vision
