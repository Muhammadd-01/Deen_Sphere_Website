"use client"

import { motion } from "framer-motion"
import { Star, Video, Sparkles } from "lucide-react"

const SpeakersPage = () => {
    const speakers = [
        {
            name: "Sheikh Ahmad Al-Farooq",
            specialty: "Fiqh & Islamic Jurisprudence",
            image: "👳",
            rating: 5,
            sessions: 150,
            bio: "A renowned scholar specializing in Hanafi fiqh with over 20 years of teaching experience.",
            accentColor: "from-amber-500/20"
        },
        {
            name: "Dr. Fatima Hassan",
            specialty: "Quranic Studies",
            image: "🧕",
            rating: 5,
            sessions: 200,
            bio: "PhD in Quranic Sciences from Al-Azhar University. Expert in Tajweed and Tafsir.",
            accentColor: "from-emerald-500/20"
        },
        {
            name: "Imam Yusuf Ibrahim",
            specialty: "Hadith Sciences",
            image: "👳",
            rating: 5,
            sessions: 180,
            bio: "Specialist in Hadith authentication and narrator criticism. Author of several books.",
            accentColor: "from-blue-500/20"
        },
        {
            name: "Sheikh Muhammad Qasim",
            specialty: "Comparative Religion",
            image: "👳",
            rating: 5,
            sessions: 120,
            bio: "Expert in interfaith dialogue and dawah. Has debated with scholars from various faiths.",
            accentColor: "from-purple-500/20"
        },
        {
            name: "Dr. Aisha Rahman",
            specialty: "Islamic History",
            image: "🧕",
            rating: 5,
            sessions: 90,
            bio: "Historian specializing in the Golden Age of Islam and Ottoman Empire.",
            accentColor: "from-rose-500/20"
        },
        {
            name: "Sheikh Omar Suleiman",
            specialty: "Spirituality & Tazkiyah",
            image: "👳",
            rating: 5,
            sessions: 250,
            bio: "Known for his inspiring lectures on spiritual purification and personal development.",
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
                    <span className="text-[#FFD84D] text-sm font-medium">World-Class Scholars</span>
                </motion.div>
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl font-bold text-white mb-6"
                >
                    Our <span className="text-gradient">Speakers</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-[#B3B3B3] text-lg max-w-3xl mx-auto"
                >
                    Learn from world-renowned Islamic scholars and speakers. Book private sessions or attend live lectures.
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
                                <span className="text-[#888] text-xs">{speaker.sessions} sessions</span>
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
                                Book Speaker
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
                        <h3 className="text-2xl font-bold text-white mb-3">Become a Speaker</h3>
                        <p className="text-[#B3B3B3] mb-6">
                            Are you a qualified Islamic scholar? Join our platform and share your knowledge with millions.
                        </p>
                        <motion.button
                            className="px-8 py-3 gradient-gold text-black font-bold rounded-lg hover:shadow-lg hover:shadow-[#F5B400]/30 transition-all"
                            whileHover={{ scale: 1.05 }}
                        >
                            Apply Now
                        </motion.button>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default SpeakersPage
