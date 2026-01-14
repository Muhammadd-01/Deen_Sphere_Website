"use client"

import { motion } from "framer-motion"
import { Star, Video, Sparkles } from "lucide-react"
import { useLanguage } from "@/context/language-context"

const SpeakersPage = () => {
    const { t } = useLanguage()
    const speakers = [
        {
            name: t("lecture.t1.speaker"), // Reusing speaker name
            specialty: t("spec.fiqh"),
            image: "👳",
            rating: 5,
            sessions: 150,
            bio: t("speaker.bio.ahmad"),
            accentColor: "from-amber-500/20"
        },
        {
            name: t("lecture.t2.speaker"),
            specialty: t("spec.quran"),
            image: "🧕",
            rating: 5,
            sessions: 200,
            bio: t("speaker.bio.fatima"),
            accentColor: "from-emerald-500/20"
        },
        {
            name: t("lecture.t3.speaker"),
            specialty: t("spec.hadith"),
            image: "👳",
            rating: 5,
            sessions: 180,
            bio: t("speaker.bio.yusuf"),
            accentColor: "from-blue-500/20"
        },
        {
            name: t("lecture.t4.speaker"),
            specialty: t("spec.comparative"),
            image: "👳",
            rating: 5,
            sessions: 120,
            bio: t("speaker.bio.muhammad"),
            accentColor: "from-purple-500/20"
        },
        {
            name: t("lecture.t5.speaker"),
            specialty: t("spec.history"),
            image: "🧕",
            rating: 5,
            sessions: 90,
            bio: t("speaker.bio.aisha"),
            accentColor: "from-rose-500/20"
        },
        {
            name: t("lecture.t6.speaker"),
            specialty: t("spec.spirituality"),
            image: "👳",
            rating: 5,
            sessions: 250,
            bio: t("speaker.bio.omar"),
            accentColor: "from-cyan-500/20"
        }
    ]

    return (
        <div className="min-h-screen bg-transparent pt-24 pb-12 px-4 sm:px-6 lg:px-8 relative">
            {/* Color accent gradients */}
            <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-r from-amber-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-1/2 right-0 w-96 h-96 bg-gradient-to-l from-purple-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-20 left-1/4 w-64 h-64 bg-gradient-to-r from-emerald-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

            {/* Header */}
            <div className="max-w-7xl mx-auto text-center mb-16 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#1C1C1C]/70 backdrop-blur-sm border border-[#F5B400]/30 rounded-full mb-6"
                >
                    <Sparkles size={16} className="text-[#F5B400]" />
                    <span className="text-[#FFD84D] text-sm font-medium">{t("speakers_page.badge")}</span>
                </motion.div>
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl font-bold text-white mb-6"
                >
                    {t("speakers_page.title")} <span className="text-gradient">{t("speakers_page.title_highlight")}</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-[#B3B3B3] text-lg max-w-3xl mx-auto"
                >
                    {t("speakers_page.subtitle")}
                </motion.p>
            </div>

            {/* Speakers Grid */}
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 relative z-10">
                {speakers.map((speaker, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        whileHover={{ y: -10, scale: 1.02 }}
                        className="bg-[#141414]/70 backdrop-blur-md rounded-2xl border border-[#2A2A2A] overflow-hidden hover:border-[#F5B400]/50 transition-all group cursor-pointer relative"
                    >
                        {/* Accent glow */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${speaker.accentColor} to-transparent opacity-0 group-hover:opacity-100 transition-opacity`} />

                        {/* Avatar */}
                        <div className="h-40 bg-gradient-to-br from-[#F5B400]/20 to-[#1C1C1C] flex items-center justify-center relative">
                            <span className="text-7xl group-hover:scale-110 transition-transform">{speaker.image}</span>
                        </div>

                        <div className="p-6 relative z-10">
                            {/* Name & Specialty */}
                            <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#F5B400] transition-colors">{speaker.name}</h3>
                            <p className="text-[#F5B400] text-sm mb-3">{speaker.specialty}</p>

                            {/* Rating */}
                            <div className="flex items-center gap-2 mb-3">
                                <div className="flex">
                                    {[...Array(speaker.rating)].map((_, j) => (
                                        <Star key={j} size={14} className="text-[#F5B400] fill-[#F5B400]" />
                                    ))}
                                </div>
                                <span className="text-[#888] text-xs">{speaker.sessions} {t("speakers_page.sessions")}</span>
                            </div>

                            {/* Bio */}
                            <p className="text-[#B3B3B3] text-sm mb-4">{speaker.bio}</p>

                            {/* Book Button Only */}
                            <motion.button
                                className="w-full py-3 gradient-gold rounded-lg text-black font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-[#F5B400]/30 transition-all"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <Video size={18} />
                                {t("speakers_page.btn.book")}
                            </motion.button>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* CTA */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto text-center relative z-10"
            >
                <div className="bg-gradient-to-r from-[#141414]/80 to-[#1C1C1C]/80 backdrop-blur-md rounded-2xl border border-[#F5B400]/30 p-8 hover:border-[#F5B400]/50 transition-all relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#F5B400]/20 to-transparent rounded-full blur-3xl" />
                    <div className="relative z-10">
                        <div className="text-5xl mb-4">🎤</div>
                        <h3 className="text-2xl font-bold text-white mb-3">{t("speakers_page.cta.title")}</h3>
                        <p className="text-[#B3B3B3] mb-6">
                            {t("speakers_page.cta.desc")}
                        </p>
                        <motion.button
                            className="px-8 py-3 gradient-gold text-black font-bold rounded-lg hover:shadow-lg hover:shadow-[#F5B400]/30 transition-all"
                            whileHover={{ scale: 1.05 }}
                        >
                            {t("speakers_page.cta.btn")}
                        </motion.button>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default SpeakersPage
