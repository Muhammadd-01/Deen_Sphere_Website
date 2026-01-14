"use client"

import { motion } from "framer-motion"
import { Heart, DollarSign, Users } from "lucide-react"

const Donations = () => {
    return (
        <section className="py-20 px-4 bg-gradient-to-b from-[#0B0B0B] to-[#141414]">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1C1C1C] border border-[#F5B400]/30 rounded-full mb-6">
                        <Heart className="text-[#F5B400]" size={16} />
                        <span className="text-[#F5B400] text-sm font-medium">Support the Cause</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Help Us Spread <span className="text-[#F5B400]">Knowledge</span>
                    </h2>
                    <p className="text-[#B3B3B3] text-lg max-w-3xl mx-auto">
                        Your donations help us provide free Islamic education, connect people with scholars,
                        and build a stronger global Muslim community.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    {[
                        { icon: <Heart size={32} />, title: "One-Time Donation", desc: "Make a single contribution to support our mission" },
                        { icon: <DollarSign size={32} />, title: "Monthly Support", desc: "Sustain our work with recurring monthly donations" },
                        { icon: <Users size={32} />, title: "Become a Patron", desc: "Join our community of dedicated supporters" }
                    ].map((option, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-[#1C1C1C] p-8 rounded-2xl border border-[#2A2A2A] hover:border-[#F5B400]/50 transition-all text-center group"
                        >
                            <div className="w-16 h-16 bg-[#141414] rounded-xl flex items-center justify-center mx-auto mb-6 text-[#F5B400] group-hover:scale-110 transition-transform">
                                {option.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{option.title}</h3>
                            <p className="text-[#B3B3B3] mb-6">{option.desc}</p>
                            <button className="w-full py-3 gradient-gold text-black font-bold rounded-lg hover:shadow-xl transition-all">
                                Donate Now
                            </button>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <p className="text-[#B3B3B3] text-sm">
                        100% of your donation goes towards platform development and providing free Islamic resources.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}

export default Donations
