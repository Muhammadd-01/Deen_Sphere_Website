"use client"

import { motion } from "framer-motion"
import { Users, MessageCircle, Heart, Share2, Star } from "lucide-react"

const CommunityPage = () => {
    const testimonials = [
        { name: "Ahmad K.", text: "DeenSphere helped me connect with scholars and strengthen my deen", rating: 5 },
        { name: "Fatima M.", text: "An amazing platform that brings Muslims together from all over the world", rating: 5 },
        { name: "Yusuf R.", text: "The best Islamic app I've used. Very comprehensive and user-friendly", rating: 5 }
    ]

    return (
        <div className="min-h-screen bg-[#0B0B0B] pt-24 pb-12 px-4 sm:px-6 lg:px-8">
            {/* Hero */}
            <div className="max-w-4xl mx-auto text-center mb-20">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl font-bold text-white mb-6"
                >
                    Join the <span className="text-gradient">Community</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-[#B3B3B3] text-lg leading-relaxed"
                >
                    Connect with millions of Muslims worldwide. Share knowledge, find support, and grow together in faith.
                </motion.p>
            </div>

            {/* Stats */}
            <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
                {[
                    { label: "Active Members", value: "2M+" },
                    { label: "Daily Posts", value: "50K+" },
                    { label: "Countries", value: "150+" },
                    { label: "Scholars", value: "500+" }
                ].map((stat, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-[#141414] p-6 rounded-2xl border border-[#2A2A2A] text-center hover:border-[#F5B400]/50 transition-all"
                    >
                        <div className="text-3xl font-bold text-[#F5B400] mb-2">{stat.value}</div>
                        <div className="text-[#B3B3B3] text-sm">{stat.label}</div>
                    </motion.div>
                ))}
            </div>

            {/* Community Features */}
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                {[
                    { icon: <Users size={32} />, title: "Global Network", desc: "Connect with Muslims from every corner of the world" },
                    { icon: <MessageCircle size={32} />, title: "Discussion Forums", desc: "Engage in meaningful conversations about faith and life" },
                    { icon: <Heart size={32} />, title: "Support Groups", desc: "Find and offer support in various life situations" },
                    { icon: <Share2 size={32} />, title: "Share Knowledge", desc: "Learn from others and share your insights" }
                ].map((feature, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-[#141414] p-6 rounded-2xl border border-[#2A2A2A] hover:border-[#F5B400]/50 transition-all text-center group"
                    >
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-[#1C1C1C] rounded-xl mb-4 text-[#F5B400] group-hover:scale-110 transition-transform">
                            {feature.icon}
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                        <p className="text-[#B3B3B3] text-sm">{feature.desc}</p>
                    </motion.div>
                ))}
            </div>

            {/* Testimonials */}
            <section className="max-w-7xl mx-auto mb-20">
                <h2 className="text-3xl font-bold text-white text-center mb-12">
                    What Our <span className="text-[#F5B400]">Community</span> Says
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-[#141414] p-6 rounded-2xl border border-[#2A2A2A] hover:border-[#F5B400]/30 transition-all"
                        >
                            <div className="flex gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, j) => (
                                    <Star key={j} size={16} className="text-[#F5B400] fill-[#F5B400]" />
                                ))}
                            </div>
                            <p className="text-[#B3B3B3] mb-4 italic">"{testimonial.text}"</p>
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
                    className="bg-gradient-to-r from-[#141414] to-[#1C1C1C] p-12 rounded-3xl border border-[#F5B400]/30"
                >
                    <h2 className="text-3xl font-bold text-white mb-4">Ready to Join?</h2>
                    <p className="text-[#B3B3B3] mb-8 max-w-2xl mx-auto">
                        Download the Deen Sphere app and become part of a thriving global community dedicated to knowledge, faith, and unity.
                    </p>
                    <button className="px-8 py-4 gradient-gold text-black font-bold rounded-lg hover:shadow-2xl transition-all hover:scale-105">
                        Download App
                    </button>
                </motion.div>
            </div>
        </div>
    )
}

export default CommunityPage
