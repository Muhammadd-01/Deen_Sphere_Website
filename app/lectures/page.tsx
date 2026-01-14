"use client"

import { motion } from "framer-motion"
import { Play, ExternalLink, Clock, Eye, Sparkles } from "lucide-react"
import { useLanguage } from "@/context/language-context"

const LecturesPage = () => {
    const { t } = useLanguage()
    const lectures = [
        {
            title: t("lecture.t1.title"),
            speaker: t("lecture.t1.speaker"),
            thumbnail: "🕌",
            duration: "45:30",
            views: "125K",
            category: t("cat.aqeedah"),
            categoryColor: "#F5B400",
            youtubeUrl: "https://youtube.com/@deensphere"
        },
        {
            title: t("lecture.t2.title"),
            speaker: t("lecture.t2.speaker"),
            thumbnail: "📖",
            duration: "1:20:00",
            views: "89K",
            category: t("cat.tafsir"),
            categoryColor: "#10B981",
            youtubeUrl: "https://youtube.com/@deensphere"
        },
        {
            title: t("lecture.t3.title"),
            speaker: t("lecture.t3.speaker"),
            thumbnail: "🌙",
            duration: "2:15:00",
            views: "200K",
            category: t("cat.seerah"),
            categoryColor: "#3B82F6",
            youtubeUrl: "https://youtube.com/@deensphere"
        },
        {
            title: t("lecture.t4.title"),
            speaker: t("lecture.t4.speaker"),
            thumbnail: "⚖️",
            duration: "1:45:00",
            views: "350K",
            category: t("cat.comparative"),
            categoryColor: "#A855F7",
            youtubeUrl: "https://youtube.com/@deensphere"
        },
        {
            title: t("lecture.t5.title"),
            speaker: t("lecture.t5.speaker"),
            thumbnail: "🏛️",
            duration: "55:00",
            views: "75K",
            category: t("cat.history"),
            categoryColor: "#EF4444",
            youtubeUrl: "https://youtube.com/@deensphere"
        },
        {
            title: t("lecture.t6.title"),
            speaker: t("lecture.t6.speaker"),
            thumbnail: "❤️",
            duration: "40:00",
            views: "180K",
            category: t("cat.spirituality"),
            categoryColor: "#EC4899",
            youtubeUrl: "https://youtube.com/@deensphere"
        },
        {
            title: t("lecture.t7.title"),
            speaker: t("lecture.t7.speaker"),
            thumbnail: "💰",
            duration: "1:00:00",
            views: "45K",
            category: t("cat.economy"),
            categoryColor: "#F59E0B",
            youtubeUrl: "https://youtube.com/@deensphere"
        },
        {
            title: t("lecture.t8.title"),
            speaker: t("lecture.t8.speaker"),
            thumbnail: "👨‍👩‍👧‍👦",
            duration: "50:00",
            views: "95K",
            category: t("cat.family"),
            categoryColor: "#06B6D4",
            youtubeUrl: "https://youtube.com/@deensphere"
        }
    ]

    return (
        <div className="min-h-screen bg-transparent pt-24 pb-12 px-4 sm:px-6 lg:px-8 relative">
            {/* Color accent gradients */}
            <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-l from-red-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-1/2 left-0 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-40 right-1/4 w-64 h-64 bg-gradient-to-l from-purple-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

            {/* Header */}
            <div className="max-w-7xl mx-auto text-center mb-16 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#1C1C1C]/70 backdrop-blur-sm border border-[#F5B400]/30 rounded-full mb-6"
                >
                    <Sparkles size={16} className="text-[#F5B400]" />
                    <span className="text-[#FFD84D] text-sm font-medium">{t("lectures_page.badge")}</span>
                </motion.div>
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl font-bold text-white mb-6"
                >
                    {t("lectures_page.title")} <span className="text-gradient">{t("lectures_page.title_highlight")}</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-[#B3B3B3] text-lg max-w-3xl mx-auto"
                >
                    {t("lectures_page.subtitle")}
                </motion.p>
            </div>

            {/* Lectures Grid */}
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 relative z-10">
                {lectures.map((lecture, i) => (
                    <motion.a
                        key={i}
                        href={lecture.youtubeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                        whileHover={{ y: -8, scale: 1.02 }}
                        className="bg-[#141414]/70 backdrop-blur-md rounded-xl border border-[#2A2A2A] overflow-hidden hover:border-[#F5B400]/50 transition-all group cursor-pointer"
                    >
                        {/* Thumbnail */}
                        <div className="relative h-44 bg-gradient-to-br from-[#1C1C1C] to-[#0B0B0B] flex items-center justify-center">
                            <span className="text-6xl group-hover:scale-110 transition-transform">{lecture.thumbnail}</span>

                            {/* Play Button Overlay */}
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center">
                                <motion.div
                                    className="w-16 h-16 bg-[#F5B400] rounded-full flex items-center justify-center"
                                    whileHover={{ scale: 1.1 }}
                                >
                                    <Play size={32} className="text-black ml-1" fill="black" />
                                </motion.div>
                            </div>

                            {/* Duration */}
                            <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/80 rounded text-white text-xs flex items-center gap-1">
                                <Clock size={12} />
                                {lecture.duration}
                            </div>

                            {/* Category */}
                            <div
                                className="absolute top-2 left-2 px-2 py-1 rounded text-black text-xs font-semibold"
                                style={{ backgroundColor: lecture.categoryColor }}
                            >
                                {lecture.category}
                            </div>
                        </div>

                        <div className="p-4">
                            <h3 className="text-white font-bold mb-1 line-clamp-2 group-hover:text-[#F5B400] transition-colors">
                                {lecture.title}
                            </h3>
                            <p className="text-[#888] text-sm mb-2">{lecture.speaker}</p>

                            <div className="flex items-center gap-3 text-[#666] text-xs">
                                <span className="flex items-center gap-1">
                                    <Eye size={12} />
                                    {lecture.views} {t("lectures_page.views")}
                                </span>
                                <span className="flex items-center gap-1">
                                    <ExternalLink size={12} />
                                    {t("lectures_page.youtube")}
                                </span>
                            </div>
                        </div>
                    </motion.a>
                ))}
            </div>

            {/* YouTube Channel CTA */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto text-center relative z-10"
            >
                <div className="bg-gradient-to-r from-[#141414]/80 to-[#1C1C1C]/80 backdrop-blur-md rounded-2xl border border-[#FF0000]/30 p-8 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#FF0000]/20 to-transparent rounded-full blur-3xl" />
                    <div className="relative z-10">
                        <div className="text-6xl mb-4">📺</div>
                        <h3 className="text-2xl font-bold text-white mb-3">{t("lectures_page.cta.title")}</h3>
                        <p className="text-[#B3B3B3] mb-6">
                            {t("lectures_page.cta.desc")}
                        </p>
                        <motion.a
                            href="https://youtube.com/@deensphere"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-8 py-3 bg-[#FF0000] text-white font-bold rounded-lg hover:bg-[#CC0000] transition-all"
                            whileHover={{ scale: 1.05 }}
                        >
                            {t("lectures_page.cta.btn")}
                        </motion.a>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default LecturesPage
