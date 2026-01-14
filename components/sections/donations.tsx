"use client"

import { motion } from "framer-motion"
import { Heart, DollarSign, Users, CreditCard, Smartphone, QrCode, Shield, Sparkles } from "lucide-react"

const Donations = () => {
    const amounts = [10, 25, 50, 100, 250, 500]

    return (
        <section className="py-20 px-4 bg-transparent relative">
            {/* Color accent gradients */}
            <div className="absolute top-0 left-0 w-80 h-80 bg-gradient-to-r from-rose-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-l from-emerald-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <motion.div
                        className="inline-flex items-center gap-2 px-4 py-2 bg-[#1C1C1C]/70 backdrop-blur-sm border border-[#F5B400]/30 rounded-full mb-6"
                        whileHover={{ scale: 1.05 }}
                    >
                        <Sparkles className="text-[#F5B400]" size={16} />
                        <span className="text-[#F5B400] text-sm font-medium">Support the Cause</span>
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Help Us Spread <span className="text-gradient">Knowledge</span>
                    </h2>
                    <p className="text-[#B3B3B3] text-lg max-w-3xl mx-auto">
                        Your donations help us provide free Islamic education, connect people with scholars,
                        and build a stronger global Muslim community.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 mb-16">
                    {/* Donation Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-[#1C1C1C]/70 backdrop-blur-md p-8 rounded-2xl border border-[#2A2A2A] hover:border-[#F5B400]/30 transition-all"
                    >
                        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <Heart className="text-[#F5B400]" />
                            Make a Donation
                        </h3>

                        {/* Amount Selection */}
                        <div className="mb-6">
                            <label className="text-white text-sm font-medium mb-3 block">Select Amount (USD)</label>
                            <div className="grid grid-cols-3 gap-3">
                                {amounts.map((amount) => (
                                    <motion.button
                                        key={amount}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="py-3 bg-[#141414] border border-[#2A2A2A] rounded-lg text-white font-bold hover:border-[#F5B400] hover:text-[#F5B400] transition-all"
                                    >
                                        ${amount}
                                    </motion.button>
                                ))}
                            </div>
                        </div>

                        {/* Custom Amount */}
                        <div className="mb-6">
                            <label className="text-white text-sm font-medium mb-2 block">Or Enter Custom Amount</label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#F5B400] font-bold">$</span>
                                <input
                                    type="number"
                                    placeholder="0.00"
                                    className="w-full pl-8 pr-4 py-3 bg-[#141414] border border-[#2A2A2A] rounded-lg text-white placeholder-[#666] focus:outline-none focus:border-[#F5B400] transition-all"
                                />
                            </div>
                        </div>

                        {/* Donation Type */}
                        <div className="flex gap-3 mb-6">
                            <button className="flex-1 py-3 gradient-gold text-black font-bold rounded-lg">
                                One-Time
                            </button>
                            <button className="flex-1 py-3 bg-[#141414] border border-[#2A2A2A] rounded-lg text-white font-bold hover:border-[#F5B400] transition-all">
                                Monthly
                            </button>
                        </div>

                        {/* Donate Button */}
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full py-4 gradient-gold text-black font-bold rounded-lg flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-[#F5B400]/30 transition-all"
                        >
                            <CreditCard size={20} />
                            Donate Now
                        </motion.button>

                        {/* Trust Badges */}
                        <div className="flex items-center justify-center gap-6 mt-6 text-[#888] text-xs">
                            <div className="flex items-center gap-1">
                                <Shield size={14} className="text-emerald-500" />
                                Secure Payment
                            </div>
                            <div className="flex items-center gap-1">
                                <Heart size={14} className="text-rose-500" />
                                100% Goes to Cause
                            </div>
                        </div>
                    </motion.div>

                    {/* QR Code & Alternative Methods */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        {/* QR Code */}
                        <div className="bg-[#1C1C1C]/70 backdrop-blur-md p-8 rounded-2xl border border-[#2A2A2A] hover:border-[#F5B400]/30 transition-all text-center">
                            <h3 className="text-xl font-bold text-white mb-4 flex items-center justify-center gap-2">
                                <QrCode className="text-[#F5B400]" />
                                Scan to Donate
                            </h3>
                            <div className="inline-block p-4 bg-white rounded-xl mb-4 shadow-lg">
                                {/* Dummy QR Code Pattern */}
                                <div className="w-40 h-40 relative">
                                    <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 gap-[2px]">
                                        {[...Array(64)].map((_, i) => (
                                            <div
                                                key={i}
                                                className={`${Math.random() > 0.5 ? 'bg-black' : 'bg-white'} rounded-[1px]`}
                                            />
                                        ))}
                                    </div>
                                    {/* QR Code corners */}
                                    <div className="absolute top-0 left-0 w-8 h-8 border-4 border-black rounded-sm" />
                                    <div className="absolute top-0 right-0 w-8 h-8 border-4 border-black rounded-sm" />
                                    <div className="absolute bottom-0 left-0 w-8 h-8 border-4 border-black rounded-sm" />
                                    {/* Center logo */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-10 h-10 bg-[#F5B400] rounded-lg flex items-center justify-center text-black font-bold text-xs">
                                            DS
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p className="text-[#888] text-sm">Scan with any payment app</p>
                        </div>

                        {/* Other Payment Methods */}
                        <div className="bg-[#1C1C1C]/70 backdrop-blur-md p-6 rounded-2xl border border-[#2A2A2A] hover:border-[#F5B400]/30 transition-all">
                            <h4 className="text-lg font-bold text-white mb-4">Other Ways to Donate</h4>
                            <div className="space-y-3">
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    className="w-full py-3 bg-[#141414] border border-[#2A2A2A] rounded-lg text-white font-semibold flex items-center justify-center gap-3 hover:border-[#F5B400] transition-all"
                                >
                                    <Smartphone size={20} className="text-[#F5B400]" />
                                    Mobile Banking
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    className="w-full py-3 bg-[#141414] border border-[#2A2A2A] rounded-lg text-white font-semibold flex items-center justify-center gap-3 hover:border-[#F5B400] transition-all"
                                >
                                    <DollarSign size={20} className="text-emerald-500" />
                                    Bank Transfer
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    className="w-full py-3 bg-[#141414] border border-[#2A2A2A] rounded-lg text-white font-semibold flex items-center justify-center gap-3 hover:border-[#F5B400] transition-all"
                                >
                                    <Users size={20} className="text-purple-500" />
                                    Become a Patron
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Impact Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="grid md:grid-cols-4 gap-6"
                >
                    {[
                        { value: "$500K+", label: "Raised", color: "#F5B400" },
                        { value: "10K+", label: "Donors", color: "#10B981" },
                        { value: "50+", label: "Countries", color: "#3B82F6" },
                        { value: "100%", label: "Transparent", color: "#A855F7" }
                    ].map((stat, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1.05 }}
                            className="text-center p-6 bg-[#1C1C1C]/50 backdrop-blur-sm rounded-xl border border-[#2A2A2A] hover:border-[#F5B400]/30 transition-all"
                        >
                            <div className="text-3xl font-bold mb-1" style={{ color: stat.color }}>{stat.value}</div>
                            <p className="text-[#B3B3B3]">{stat.label}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default Donations
