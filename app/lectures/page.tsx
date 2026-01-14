"use client"

import { motion } from "framer-motion"
import { Play, ExternalLink, Clock, Eye, Sparkles } from "lucide-react"

const LecturesPage = () => {
    const lectures = [
        {
            title: "The Beauty of Tawheed",
            speaker: "Sheikh Ahmad Al-Farooq",
            thumbnail: "🕌",
            duration: "45:30",
            views: "125K",
            category: "Aqeedah",
            categoryColor: "#F5B400",
            youtubeUrl: "https://youtube.com/@deensphere"
        },
        {
            title: "Understanding Surah Al-Kahf",
            speaker: "Dr. Fatima Hassan",
            thumbnail: "📖",
            duration: "1:20:00",
            views: "89K",
            category: "Tafsir",
            categoryColor: "#10B981",
            youtubeUrl: "https://youtube.com/@deensphere"
        },
        {
            title: "The Life of Prophet Muhammad ﷺ",
            speaker: "Imam Yusuf Ibrahim",
            thumbnail: "🌙",
            duration: "2:15:00",
            views: "200K",
            category: "Seerah",
            categoryColor: "#3B82F6",
            youtubeUrl: "https://youtube.com/@deensphere"
        },
        {
            title: "Islam vs Christianity: Key Differences",
            speaker: "Sheikh Muhammad Qasim",
            thumbnail: "⚖️",
            duration: "1:45:00",
            views: "350K",
            category: "Comparative Religion",
            categoryColor: "#A855F7",
            youtubeUrl: "https://youtube.com/@deensphere"
        },
        {
            title: "The Golden Age of Islam",
            speaker: "Dr. Aisha Rahman",
            thumbnail: "🏛️",
            duration: "55:00",
            views: "75K",
            category: "History",
            categoryColor: "#EF4444",
            youtubeUrl: "https://youtube.com/@deensphere"
        },
        {
            title: "Purification of the Heart",
            speaker: "Sheikh Omar Suleiman",
            thumbnail: "❤️",
            duration: "40:00",
            views: "180K",
            category: "Spirituality",
            categoryColor: "#EC4899",
            youtubeUrl: "https://youtube.com/@deensphere"
        },
        {
            title: "Islamic Economics Explained",
            speaker: "Dr. Muhammad Akram",
            thumbnail: "💰",
            duration: "1:00:00",
            views: "45K",
            category: "Economy",
            categoryColor: "#F59E0B",
            youtubeUrl: "https://youtube.com/@deensphere"
        },
        {
            title: "Raising Muslim Children",
            speaker: "Sheikh Ahmad Al-Farooq",
            thumbnail: "👨‍👩‍👧‍👦",
            duration: "50:00",
            views: "95K",
            category: "Family",
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
                    <span className="text-[#FFD84D] text-sm font-medium">Video Library</span>
                </motion.div>
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl font-bold text-white mb-6"
                >
                    Islamic <span className="text-gradient">Lectures</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-[#B3B3B3] text-lg max-w-3xl mx-auto"
                >
                    Watch inspiring lectures from our scholars. Click to watch on YouTube.
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
                                    {lecture.views} views
                                </span>
                                <span className="flex items-center gap-1">
                                    <ExternalLink size={12} />
                                    YouTube
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
                        <h3 className="text-2xl font-bold text-white mb-3">Subscribe to Our Channel</h3>
                        <p className="text-[#B3B3B3] mb-6">
                            Get notified when we upload new lectures. Join our growing community of learners.
                        </p>
                        <motion.a
                            href="https://youtube.com/@deensphere"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-8 py-3 bg-[#FF0000] text-white font-bold rounded-lg hover:bg-[#CC0000] transition-all"
                            whileHover={{ scale: 1.05 }}
                        >
                            Subscribe on YouTube
                        </motion.a>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default LecturesPage
