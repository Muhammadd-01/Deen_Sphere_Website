"use client"

import { motion } from "framer-motion"
import { MessageSquare, Calendar, Scale, BookOpen, Download, Globe, Landmark, MessageCircle, Lightbulb, Users, Bot, ArrowDown, Sparkles } from "lucide-react"

const FeaturesPage = () => {
    const features = [
        {
            id: 1,
            title: "Connect with Scholars",
            highlight: "Scholars",
            color: "#F5B400",
            accentColor: "from-amber-500/20",
            desc: "Direct access to verified Islamic scholars. Get fatwas, spiritual guidance, and Islamic knowledge through private chat, video calls, and live sessions.",
            icon: MessageSquare,
            subFeatures: [
                { icon: MessageSquare, title: "Private Chat", desc: "1-on-1 messaging" },
                { icon: Calendar, title: "Booking", desc: "Schedule calls" }
            ]
        },
        {
            id: 2,
            title: "Comparative Religion",
            highlight: "Religion",
            color: "#10B981",
            accentColor: "from-emerald-500/20",
            desc: "Understand different faiths and their comparison with Islam. Evidence-based theological analysis to strengthen your knowledge.",
            icon: Scale,
            subFeatures: [
                { icon: Scale, title: "Deep Analysis", desc: "Trinity, Monotheism, and more" }
            ]
        },
        {
            id: 3,
            title: "Islamic Library",
            highlight: "Library",
            color: "#3B82F6",
            accentColor: "from-blue-500/20",
            desc: "Your pocket library with classical and contemporary Islamic books. Read, listen, and learn on the go.",
            icon: BookOpen,
            subFeatures: [
                { icon: BookOpen, title: "E-Books", desc: "Read anywhere" },
                { icon: Download, title: "Offline", desc: "Download books" }
            ]
        },
        {
            id: 4,
            title: "History, Politics & Economy",
            highlight: "Economy",
            color: "#A855F7",
            accentColor: "from-purple-500/20",
            desc: "Explore the complete Islamic civilization. From the Golden Age to modern economic systems and governance.",
            icon: Globe,
            subFeatures: [
                { icon: Landmark, title: "Islamic Politics", desc: "Governance & Justice" },
                { icon: Globe, title: "History Timeline", desc: "Interactive events" }
            ]
        },
        {
            id: 5,
            title: "Islamic Debates",
            highlight: "Debates",
            color: "#EF4444",
            accentColor: "from-red-500/20",
            desc: "Watch and participate in respectful Islamic debates. Learn how to defend your faith with knowledge and wisdom.",
            icon: MessageCircle,
            subFeatures: [
                { icon: MessageCircle, title: "Live Debates", desc: "Real-time discussions" },
                { icon: Users, title: "Community", desc: "Join discussions" }
            ]
        },
        {
            id: 6,
            title: "Muslim Inventions",
            highlight: "Inventions",
            color: "#F59E0B",
            accentColor: "from-orange-500/20",
            desc: "Discover the incredible contributions Muslims made to science, medicine, mathematics, and technology.",
            icon: Lightbulb,
            subFeatures: [
                { icon: Lightbulb, title: "Discoveries", desc: "Scientific breakthroughs" },
                { icon: Globe, title: "Timeline", desc: "Historical inventions" }
            ]
        },
        {
            id: 7,
            title: "Muslim Scientists",
            highlight: "Scientists",
            color: "#06B6D4",
            accentColor: "from-cyan-500/20",
            desc: "Learn about the brilliant Muslim scholars and scientists who shaped the world. From Al-Khwarizmi to Ibn Sina.",
            icon: Users,
            subFeatures: [
                { icon: Users, title: "Profiles", desc: "Scholar biographies" },
                { icon: BookOpen, title: "Works", desc: "Their contributions" }
            ]
        },
        {
            id: 8,
            title: "AI Islamic Assistant",
            highlight: "AI Assistant",
            color: "#8B5CF6",
            accentColor: "from-violet-500/20",
            desc: "Ask any question about Islam and get instant, accurate answers. Powered by verified Islamic knowledge.",
            icon: Bot,
            subFeatures: [
                { icon: Bot, title: "Chat AI", desc: "Instant answers" },
                { icon: BookOpen, title: "Sources", desc: "Quran & Hadith references" }
            ]
        }
    ]

    return (
        <div className="min-h-screen bg-transparent pt-24 pb-12 px-4 sm:px-6 lg:px-8 relative">
            {/* Color accent gradients */}
            <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-r from-amber-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-1/3 right-0 w-96 h-96 bg-gradient-to-l from-emerald-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/3 left-0 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-l from-blue-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

            {/* Page Header */}
            <div className="max-w-7xl mx-auto text-center mb-20 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#1C1C1C]/70 backdrop-blur-sm border border-[#F5B400]/30 rounded-full mb-6"
                >
                    <Sparkles size={16} className="text-[#F5B400]" />
                    <span className="text-[#FFD84D] text-sm font-medium">8 Powerful Features</span>
                </motion.div>
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl font-bold text-white mb-6"
                >
                    App <span className="text-gradient">Features</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-[#B3B3B3] text-lg max-w-3xl mx-auto"
                >
                    Explore the powerful features that will be available in the Deen Sphere mobile app.
                </motion.p>
            </div>

            {/* All Features */}
            {features.map((feature, idx) => (
                <section key={feature.id} className="max-w-7xl mx-auto mb-32 relative z-10">
                    <div className={`grid lg:grid-cols-2 gap-12 items-center ${idx % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                        {/* Content */}
                        <motion.div
                            initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className={idx % 2 === 1 ? 'lg:col-start-2' : ''}
                        >
                            <div
                                className="inline-block px-4 py-1 rounded-full border text-sm font-medium mb-6"
                                style={{ borderColor: `${feature.color}50`, backgroundColor: `${feature.color}15`, color: feature.color }}
                            >
                                Feature #{feature.id}
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                                {feature.title.replace(feature.highlight, '')}
                                <span style={{ color: feature.color }}>{feature.highlight}</span>
                            </h2>
                            <p className="text-[#B3B3B3] text-lg mb-8 leading-relaxed">
                                {feature.desc}
                            </p>

                            <div className="grid grid-cols-2 gap-4 mb-6">
                                {feature.subFeatures.map((sub, i) => (
                                    <motion.div
                                        key={i}
                                        className="flex items-start gap-3 p-3 bg-[#1C1C1C]/50 backdrop-blur-sm rounded-lg border border-[#2A2A2A] hover:border-[#F5B400]/30 transition-all"
                                        whileHover={{ scale: 1.02 }}
                                    >
                                        <div
                                            className="w-10 h-10 rounded-lg bg-[#1C1C1C] flex items-center justify-center"
                                            style={{ color: feature.color }}
                                        >
                                            <sub.icon size={20} />
                                        </div>
                                        <div>
                                            <h3 className="text-white font-bold">{sub.title}</h3>
                                            <p className="text-xs text-[#888]">{sub.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            <a
                                href="#download-app"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById('download-app')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                            >
                                <motion.button
                                    className="px-6 py-3 rounded-lg font-semibold transition-all hover:shadow-lg"
                                    style={{ backgroundColor: feature.color, color: '#000' }}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Learn More
                                </motion.button>
                            </a>
                        </motion.div>

                        {/* Phone Mockup */}
                        <motion.div
                            initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className={`relative flex justify-center ${idx % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}
                        >
                            {/* Glow effect behind phone */}
                            <div
                                className={`absolute inset-0 bg-gradient-to-br ${feature.accentColor} to-transparent rounded-full blur-3xl opacity-50`}
                            />
                            <div className="relative w-[280px] h-[560px] bg-black rounded-[40px] border-[8px] border-[#2A2A2A] overflow-hidden shadow-2xl">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-xl z-20"></div>
                                <div
                                    className="w-full h-full flex items-center justify-center"
                                    style={{ background: `linear-gradient(135deg, ${feature.color}15 0%, #141414 100%)` }}
                                >
                                    <div className="text-center px-8">
                                        <feature.icon size={48} style={{ color: feature.color }} className="mx-auto mb-4" />
                                        <p className="text-white text-sm font-semibold">{feature.highlight} Screen</p>
                                        <p className="text-[#666] text-xs mt-2">Replace with your mockup</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>
            ))}

            {/* QR Code Download Section */}
            <section id="download-app" className="max-w-7xl mx-auto py-20 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-[#141414]/80 to-[#1C1C1C]/80 backdrop-blur-md rounded-3xl p-8 md:p-16 border border-[#F5B400]/30 relative overflow-hidden"
                >
                    {/* Decorative gradient */}
                    <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-[#F5B400]/20 to-transparent rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-emerald-500/10 to-transparent rounded-full blur-3xl" />

                    <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
                        {/* QR Code Side */}
                        <div className="text-center md:text-left">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                Download the <span className="text-[#F5B400]">Deen Sphere</span> App
                            </h2>
                            <p className="text-[#B3B3B3] mb-8">
                                Scan the QR code with your phone camera to download the app, or click the buttons below.
                            </p>

                            {/* QR Code Placeholder */}
                            <div className="inline-block p-6 bg-white rounded-2xl mb-8 shadow-lg shadow-white/10">
                                <div className="w-40 h-40 bg-[#0B0B0B] rounded-lg flex items-center justify-center">
                                    <div className="text-center">
                                        <ArrowDown size={32} className="text-[#F5B400] mx-auto mb-2" />
                                        <p className="text-white text-xs">QR Code</p>
                                        <p className="text-[#888] text-[10px]">Replace with actual QR</p>
                                    </div>
                                </div>
                            </div>

                            {/* App Store Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                                <motion.button
                                    className="px-6 py-3 bg-[#1C1C1C] border border-[#2A2A2A] rounded-lg text-white font-semibold hover:border-[#F5B400] hover:bg-[#F5B400]/10 transition-all"
                                    whileHover={{ scale: 1.05 }}
                                >
                                    📱 App Store
                                </motion.button>
                                <motion.button
                                    className="px-6 py-3 bg-[#1C1C1C] border border-[#2A2A2A] rounded-lg text-white font-semibold hover:border-[#10B981] hover:bg-[#10B981]/10 transition-all"
                                    whileHover={{ scale: 1.05 }}
                                >
                                    🤖 Google Play
                                </motion.button>
                            </div>
                        </div>

                        {/* Phone Mockup */}
                        <div className="flex justify-center">
                            <motion.div
                                className="relative w-[280px] h-[560px] bg-black rounded-[40px] border-[8px] border-[#2A2A2A] overflow-hidden shadow-2xl"
                                whileHover={{ scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 200 }}
                            >
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-xl z-20"></div>
                                <div className="w-full h-full bg-gradient-to-br from-[#F5B400]/20 to-[#E6A800]/10 flex items-center justify-center">
                                    <div className="text-center px-8">
                                        <div className="text-6xl mb-4">🕌</div>
                                        <p className="text-white font-bold">Deen Sphere</p>
                                        <p className="text-[#F5B400] text-sm mt-2">Coming Soon</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </section>
        </div>
    )
}

export default FeaturesPage
