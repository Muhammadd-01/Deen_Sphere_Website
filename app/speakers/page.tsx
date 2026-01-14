"use client"

import { motion } from "framer-motion"
import { Star, BookOpen, MessageCircle, Video } from "lucide-react"

const SpeakersPage = () => {
    const speakers = [
        {
            name: "Sheikh Ahmad Al-Farooq",
            specialty: "Fiqh & Islamic Jurisprudence",
            image: "👳",
            rating: 5,
            sessions: 150,
            bio: "A renowned scholar specializing in Hanafi fiqh with over 20 years of teaching experience."
        },
        {
            name: "Dr. Fatima Hassan",
            specialty: "Quranic Studies",
            image: "🧕",
            rating: 5,
            sessions: 200,
            bio: "PhD in Quranic Sciences from Al-Azhar University. Expert in Tajweed and Tafsir."
        },
        {
            name: "Imam Yusuf Ibrahim",
            specialty: "Hadith Sciences",
            image: "👳",
            rating: 5,
            sessions: 180,
            bio: "Specialist in Hadith authentication and narrator criticism. Author of several books."
        },
        {
            name: "Sheikh Muhammad Qasim",
            specialty: "Comparative Religion",
            image: "👳",
            rating: 5,
            sessions: 120,
            bio: "Expert in interfaith dialogue and dawah. Has debated with scholars from various faiths."
        },
        {
            name: "Dr. Aisha Rahman",
            specialty: "Islamic History",
            image: "🧕",
            rating: 5,
            sessions: 90,
            bio: "Historian specializing in the Golden Age of Islam and Ottoman Empire."
        },
        {
            name: "Sheikh Omar Suleiman",
            specialty: "Spirituality & Tazkiyah",
            image: "👳",
            rating: 5,
            sessions: 250,
            bio: "Known for his inspiring lectures on spiritual purification and personal development."
        }
    ]

    return (
        <div className="min-h-screen bg-[#0B0B0B] pt-24 pb-12 px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="max-w-7xl mx-auto text-center mb-16">
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
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {speakers.map((speaker, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-[#141414] rounded-2xl border border-[#2A2A2A] overflow-hidden hover:border-[#F5B400]/50 transition-all group"
                    >
                        {/* Avatar */}
                        <div className="h-40 bg-gradient-to-br from-[#F5B400]/20 to-[#1C1C1C] flex items-center justify-center">
                            <span className="text-7xl">{speaker.image}</span>
                        </div>

                        <div className="p-6">
                            {/* Name & Specialty */}
                            <h3 className="text-xl font-bold text-white mb-1">{speaker.name}</h3>
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

                            {/* Actions */}
                            <div className="flex gap-3">
                                <button className="flex-1 py-2 bg-[#1C1C1C] border border-[#2A2A2A] rounded-lg text-white text-sm hover:border-[#F5B400] transition-all flex items-center justify-center gap-2">
                                    <MessageCircle size={16} />
                                    Chat
                                </button>
                                <button className="flex-1 py-2 gradient-gold rounded-lg text-black text-sm font-semibold flex items-center justify-center gap-2">
                                    <Video size={16} />
                                    Book
                                </button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* CTA */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto text-center"
            >
                <div className="bg-[#141414] rounded-2xl border border-[#2A2A2A] p-8">
                    <BookOpen size={48} className="text-[#F5B400] mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-3">Become a Speaker</h3>
                    <p className="text-[#B3B3B3] mb-6">
                        Are you a qualified Islamic scholar? Join our platform and share your knowledge with millions.
                    </p>
                    <button className="px-8 py-3 gradient-gold text-black font-bold rounded-lg hover:scale-105 transition-all">
                        Apply Now
                    </button>
                </div>
            </motion.div>
        </div>
    )
}

export default SpeakersPage
