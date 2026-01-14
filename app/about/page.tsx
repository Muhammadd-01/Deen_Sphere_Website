"use client"

import { motion } from "framer-motion"
import { Scale, Globe, Landmark, Target } from "lucide-react"
import Donations from "@/components/sections/donations"
import { useLanguage } from "@/context/language-context"

const AboutPage = () => {
    const { t } = useLanguage()
    return (
        <div className="min-h-screen bg-transparent pt-24 pb-12 px-4 sm:px-6 lg:px-8 relative">
            {/* Color accent gradients */}
            <div className="absolute top-40 left-0 w-96 h-96 bg-gradient-to-r from-emerald-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-40 right-0 w-80 h-80 bg-gradient-to-l from-purple-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

            {/* Hero Section */}
            <div className="max-w-4xl mx-auto text-center mb-20 relative z-10">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl font-bold text-white mb-6"
                >
                    {t("about_page.title")} <span className="text-gradient">Deen Sphere</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-[#B3B3B3] text-lg leading-relaxed"
                >
                    {t("about_page.subtitle")}
                </motion.p>
            </div>

            {/* Vision Section */}
            <section className="max-w-7xl mx-auto mb-24 relative z-10">
                <div className="bg-[#141414]/70 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-[#2A2A2A] hover:border-[#F5B400]/30 transition-all relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#F5B400]/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-500/5 rounded-full blur-3xl"></div>

                    <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-xl bg-[#1C1C1C] flex items-center justify-center">
                                <Target className="text-[#F5B400]" size={24} />
                            </div>
                            <h2 className="text-3xl font-bold text-white">{t("about_page.vision.title")}</h2>
                        </div>

                        <p className="text-[#B3B3B3] text-lg leading-relaxed mb-6">
                            {t("about_page.vision.desc1")}
                        </p>

                        <p className="text-[#B3B3B3] text-lg leading-relaxed">
                            {t("about_page.vision.desc2")}
                        </p>
                    </div>
                </div>
            </section>

            {/* Mission Pillars */}
            <section className="max-w-7xl mx-auto mb-24">
                <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
                    {t("about_page.mission.title")} <span className="text-[#F5B400]">{t("about_page.mission.highlight")}</span>
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
                        <h3 className="text-2xl font-bold text-white mb-4">{t("about_page.mission.p1.title")}</h3>
                        <p className="text-[#B3B3B3] leading-relaxed">
                            {t("about_page.mission.p1.desc")}
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
                        <h3 className="text-2xl font-bold text-white mb-4">{t("about_page.mission.p2.title")}</h3>
                        <p className="text-[#B3B3B3] leading-relaxed">
                            {t("about_page.mission.p2.desc")}
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
                        <h3 className="text-2xl font-bold text-white mb-4">{t("about_page.mission.p3.title")}</h3>
                        <p className="text-[#B3B3B3] leading-relaxed">
                            {t("about_page.mission.p3.desc")}
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
                        "{t("about_page.quote")}"
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
