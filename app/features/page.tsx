"use client"

import { motion } from "framer-motion"
import { MessageSquare, Calendar, Scale, BookOpen, Download, Globe, Landmark } from "lucide-react"

const FeaturesPage = () => {
    return (
        <div className="min-h-screen bg-[#0B0B0B] pt-24 pb-12 px-4 sm:px-6 lg:px-8">
            {/* Page Header */}
            <div className="max-w-7xl mx-auto text-center mb-20">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl font-bold text-white mb-6"
                >
                    App <span className="text-gradient">Features</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-[#B3B3B3] text-lg max-w-3xl mx-auto"
                >
                    Explore the powerful features that will be available in the Deen Sphere mobile app.
                </motion.p>
            </div>

            {/* Feature 1: Scholars */}
            <section className="max-w-7xl mx-auto mb-32">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-block px-4 py-1 rounded-full border border-[#F5B400]/30 bg-[#F5B400]/10 text-[#F5B400] text-sm font-medium mb-6">
                            Feature #1
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            Connect with <span className="text-[#F5B400]">Scholars</span>
                        </h2>
                        <p className="text-[#B3B3B3] text-lg mb-8 leading-relaxed">
                            Direct access to verified Islamic scholars. Get fatwas, spiritual guidance, and Islamic knowledge through private chat, video calls, and live sessions.
                        </p>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-start gap-3">
                                <div className="w-10 h-10 rounded-lg bg-[#1C1C1C] flex items-center justify-center text-[#F5B400]">
                                    <MessageSquare size={20} />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold">Private Chat</h3>
                                    <p className="text-xs text-[#888]">1-on-1 messaging</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-10 h-10 rounded-lg bg-[#1C1C1C] flex items-center justify-center text-[#F5B400]">
                                    <Calendar size={20} />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold">Booking</h3>
                                    <p className="text-xs text-[#888]">Schedule calls</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Phone Mockup Placeholder */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative flex justify-center"
                    >
                        <div className="relative w-[280px] h-[560px] bg-black rounded-[40px] border-[8px] border-[#2A2A2A] overflow-hidden shadow-2xl">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-xl z-20"></div>
                            <div className="w-full h-full bg-[#141414] flex items-center justify-center">
                                <div className="text-center px-8">
                                    <MessageSquare size={48} className="text-[#F5B400] mx-auto mb-4" />
                                    <p className="text-white text-sm">Scholars Screen</p>
                                    <p className="text-[#666] text-xs mt-2">Replace with your mockup</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Feature 2: Comparative Religion */}
            <section className="max-w-7xl mx-auto mb-32">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Phone Mockup - Left on Desktop */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative flex justify-center order-2 lg:order-1"
                    >
                        <div className="relative w-[280px] h-[560px] bg-black rounded-[40px] border-[8px] border-[#2A2A2A] overflow-hidden shadow-2xl">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-xl z-20"></div>
                            <div className="w-full h-full bg-[#141414] flex items-center justify-center">
                                <div className="text-center px-8">
                                    <Scale size={48} className="text-emerald-400 mx-auto mb-4" />
                                    <p className="text-white text-sm">Religion Screen</p>
                                    <p className="text-[#666] text-xs mt-2">Replace with your mockup</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="order-1 lg:order-2"
                    >
                        <div className="inline-block px-4 py-1 rounded-full border border-emerald-400/30 bg-emerald-400/10 text-emerald-400 text-sm font-medium mb-6">
                            Feature #2
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            Comparative <span className="text-emerald-400">Religion</span>
                        </h2>
                        <p className="text-[#B3B3B3] text-lg mb-8 leading-relaxed">
                            Understand different faiths and their comparison with Islam. Evidence-based theological analysis to strengthen your knowledge.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-start gap-3 p-4 bg-[#141414] rounded-xl border border-[#2A2A2A]">
                                <Scale className="text-emerald-400 shrink-0 mt-1" size={20} />
                                <div>
                                    <h3 className="text-white font-bold">Deep Analysis</h3>
                                    <p className="text-sm text-[#888]">Trinity, Monotheism, and more</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Feature 3: Books */}
            <section className="max-w-7xl mx-auto mb-32">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-block px-4 py-1 rounded-full border border-blue-400/30 bg-blue-400/10 text-blue-400 text-sm font-medium mb-6">
                            Feature #3
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            Islamic <span className="text-blue-400">Library</span>
                        </h2>
                        <p className="text-[#B3B3B3] text-lg mb-8 leading-relaxed">
                            Your pocket library with classical and contemporary Islamic books. Read, listen, and learn on the go.
                        </p>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-start gap-3">
                                <div className="w-10 h-10 rounded-lg bg-[#1C1C1C] flex items-center justify-center text-blue-400">
                                    <BookOpen size={20} />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold">E-Books</h3>
                                    <p className="text-xs text-[#888]">Read anywhere</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-10 h-10 rounded-lg bg-[#1C1C1C] flex items-center justify-center text-blue-400">
                                    <Download size={20} />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold">Offline</h3>
                                    <p className="text-xs text-[#888]">Download books</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative flex justify-center"
                    >
                        <div className="relative w-[280px] h-[560px] bg-black rounded-[40px] border-[8px] border-[#2A2A2A] overflow-hidden shadow-2xl">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-xl z-20"></div>
                            <div className="w-full h-full bg-[#141414] flex items-center justify-center">
                                <div className="text-center px-8">
                                    <BookOpen size={48} className="text-blue-400 mx-auto mb-4" />
                                    <p className="text-white text-sm">Books Screen</p>
                                    <p className="text-[#666] text-xs mt-2">Replace with your mockup</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Feature 4: History, Politics, Economy */}
            <section className="max-w-7xl mx-auto mb-32">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative flex justify-center order-2 lg:order-1"
                    >
                        <div className="relative w-[280px] h-[560px] bg-black rounded-[40px] border-[8px] border-[#2A2A2A] overflow-hidden shadow-2xl">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-xl z-20"></div>
                            <div className="w-full h-full bg-[#141414] flex items-center justify-center">
                                <div className="text-center px-8">
                                    <Globe size={48} className="text-purple-400 mx-auto mb-4" />
                                    <p className="text-white text-sm">History Screen</p>
                                    <p className="text-[#666] text-xs mt-2">Replace with your mockup</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="order-1 lg:order-2"
                    >
                        <div className="inline-block px-4 py-1 rounded-full border border-purple-400/30 bg-purple-400/10 text-purple-400 text-sm font-medium mb-6">
                            Feature #4
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            History, Politics & <span className="text-purple-400">Economy</span>
                        </h2>
                        <p className="text-[#B3B3B3] text-lg mb-8 leading-relaxed">
                            Explore the complete Islamic civilization. From the Golden Age to modern economic systems and governance.
                        </p>

                        <div className="space-y-3">
                            <div className="flex items-start gap-3">
                                <Landmark className="text-purple-400 shrink-0 mt-1" size={20} />
                                <div>
                                    <h3 className="text-white font-bold">Islamic Politics</h3>
                                    <p className="text-sm text-[#888]">Governance & Justice</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Globe className="text-purple-400 shrink-0 mt-1" size={20} />
                                <div>
                                    <h3 className="text-white font-bold">History Timeline</h3>
                                    <p className="text-sm text-[#888]">Interactive events</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

export default FeaturesPage
