"use client"

import { motion } from "framer-motion"
import { Users, MessageCircle, Heart, Share2, Star } from "lucide-react"
import { useLanguage } from "@/context/language-context"

const CommunityPage = () => {
    const { t } = useLanguage()
    const testimonials = [
        { name: "Ahmad K.", text: t("community_page.testimonials.t1"), rating: 5 },
        { name: "Fatima M.", text: t("community_page.testimonials.t2"), rating: 5 },
        { name: "Yusuf R.", text: t("community_page.testimonials.t3"), rating: 5 }
    ]

    return (
        <div className="min-h-screen bg-transparent pt-24 pb-12 px-4 sm:px-6 lg:px-8 relative">
            {/* Color accent gradients */}
            <div className="absolute top-40 right-0 w-96 h-96 bg-gradient-to-l from-emerald-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-40 left-0 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-b from-transparent via-[#F5B400]/5 to-transparent pointer-events-none" />
            {/* Hero */}
            <div className="max-w-4xl mx-auto text-center mb-20">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl font-bold text-white mb-6"
                >
                    Join the <span className="text-gradient">{t("community_page.title")}</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-[#B3B3B3] text-lg leading-relaxed"
                >
                    {t("community_page.subtitle")}
                </motion.p>
            </div>

            {/* Stats */}
            <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
                {[
                    { label: t("community_page.stats.active"), value: "2M+" },
                    { label: t("community_page.stats.posts"), value: "50K+" },
                    { label: t("community_page.stats.countries"), value: "150+" },
                    { label: t("community_page.stats.scholars"), value: "500+" }
                ].map((stat, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-[#141414]/70 backdrop-blur-md p-6 rounded-2xl border border-[#2A2A2A] text-center hover:border-[#F5B400]/50 transition-all hover:scale-105"
                    >
                        <div className="text-3xl font-bold text-[#F5B400] mb-2">{stat.value}</div>
                        <div className="text-[#B3B3B3] text-sm group-hover:text-white transition-colors">{stat.label}</div>
                    </motion.div>
                ))}
            </div>

            {/* Community Features */}
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                {[
                    { icon: <Users size={32} />, title: t("community_page.f1.title"), desc: t("community_page.f1.desc") },
                    { icon: <MessageCircle size={32} />, title: t("community_page.f2.title"), desc: t("community_page.f2.desc") },
                    { icon: <Heart size={32} />, title: t("community_page.f3.title"), desc: t("community_page.f3.desc") },
                    { icon: <Share2 size={32} />, title: t("community_page.f4.title"), desc: t("community_page.f4.desc") }
                ].map((feature, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-[#141414]/70 backdrop-blur-md p-6 rounded-2xl border border-[#2A2A2A] hover:border-[#F5B400]/50 transition-all text-center group"
                    >
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-[#1C1C1C]/70 backdrop-blur-sm rounded-xl mb-4 text-[#F5B400] group-hover:scale-110 transition-transform">
                            {feature.icon}
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                        <p className="text-[#B3B3B3] text-sm group-hover:text-white transition-colors">{feature.desc}</p>
                    </motion.div>
                ))}
            </div>

            {/* Testimonials */}
            <section className="max-w-7xl mx-auto mb-20">
                <h2 className="text-3xl font-bold text-white text-center mb-12">
                    {t("community_page.testimonials.title").split("Community")[0]} <span className="text-[#F5B400]">Community</span> {t("community_page.testimonials.title").split("Community")[1]}
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-[#141414]/70 backdrop-blur-md p-6 rounded-2xl border border-[#2A2A2A] hover:border-[#F5B400]/30 transition-all group"
                        >
                            <div className="flex gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, j) => (
                                    <Star key={j} size={16} className="text-[#F5B400] fill-[#F5B400]" />
                                ))}
                            </div>
                            <p className="text-[#B3B3B3] mb-4 italic group-hover:text-white transition-colors">"{testimonial.text}"</p>
                            <p className="text-white font-bold">— {testimonial.name}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <div className="max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-[#141414]/80 to-[#1C1C1C]/80 backdrop-blur-md p-12 rounded-3xl border border-[#F5B400]/30 shadow-2xl overflow-hidden relative"
                >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#F5B400]/10 rounded-full blur-2xl" />
                    <h2 className="text-3xl font-bold text-white mb-4 relative z-10">{t("community_page.cta.title")}</h2>
                    <p className="text-[#B3B3B3] mb-8 max-w-2xl mx-auto relative z-10">
                        {t("community_page.cta.desc")}
                    </p>
                    <button className="px-8 py-4 gradient-gold text-black font-bold rounded-lg hover:shadow-2xl transition-all hover:scale-105 relative z-10">
                        {t("community_page.cta.btn")}
                    </button>
                </motion.div>
            </div>
        </div>
    )
}

export default CommunityPage
