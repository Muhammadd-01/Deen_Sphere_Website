"use client"

import { motion } from "framer-motion"
import { MessageSquare, Calendar, Scale, BookOpen, Download, Globe, Landmark, MessageCircle, Lightbulb, Users, Bot, ArrowDown, Sparkles } from "lucide-react"
import { useLanguage } from "@/context/language-context"

const FeaturesPage = () => {
    const { t } = useLanguage()
    const features = [
        {
            id: 1,
            title: t("features.scholars.title"),
            highlight: t("features.scholars.highlight"),
            color: "#F5B400",
            accentColor: "from-amber-500/20",
            desc: t("features.scholars.desc"),
            icon: MessageSquare,
            subFeatures: [
                { icon: MessageSquare, title: t("features.scholars.sub1.title"), desc: t("features.scholars.sub1.desc") },
                { icon: Calendar, title: t("features.scholars.sub2.title"), desc: t("features.scholars.sub2.desc") }
            ]
        },
        {
            id: 2,
            title: t("features.religion.title"),
            highlight: t("features.religion.highlight"),
            color: "#10B981",
            accentColor: "from-emerald-500/20",
            desc: t("features.religion.desc"),
            icon: Scale,
            subFeatures: [
                { icon: Scale, title: t("features.religion.sub1.title"), desc: t("features.religion.sub1.desc") }
            ]
        },
        {
            id: 3,
            title: t("features.library.title"),
            highlight: t("features.library.highlight"),
            color: "#3B82F6",
            accentColor: "from-blue-500/20",
            desc: t("features.library.desc"),
            icon: BookOpen,
            subFeatures: [
                { icon: BookOpen, title: t("features.library.sub1.title"), desc: t("features.library.sub1.desc") },
                { icon: Download, title: t("features.library.sub2.title"), desc: t("features.library.sub2.desc") }
            ]
        },
        {
            id: 4,
            title: t("features.history_pol.title"),
            highlight: t("features.history_pol.highlight"),
            color: "#A855F7",
            accentColor: "from-purple-500/20",
            desc: t("features.history_pol.desc"),
            icon: Globe,
            subFeatures: [
                { icon: Landmark, title: t("features.history_pol.sub1.title"), desc: t("features.history_pol.sub1.desc") },
                { icon: Globe, title: t("features.history_pol.sub2.title"), desc: t("features.history_pol.sub2.desc") }
            ]
        },
        {
            id: 5,
            title: t("features.debates.title"),
            highlight: t("features.debates.highlight"),
            color: "#EF4444",
            accentColor: "from-red-500/20",
            desc: t("features.debates.desc"),
            icon: MessageCircle,
            subFeatures: [
                { icon: MessageCircle, title: t("features.debates.sub1.title"), desc: t("features.debates.sub1.desc") },
                { icon: Users, title: t("features.debates.sub2.title"), desc: t("features.debates.sub2.desc") }
            ]
        },
        {
            id: 6,
            title: t("features.inventions.title"),
            highlight: t("features.inventions.highlight"),
            color: "#F59E0B",
            accentColor: "from-orange-500/20",
            desc: t("features.inventions.desc"),
            icon: Lightbulb,
            subFeatures: [
                { icon: Lightbulb, title: t("features.inventions.sub1.title"), desc: t("features.inventions.sub1.desc") },
                { icon: Globe, title: t("features.inventions.sub2.title"), desc: t("features.inventions.sub2.desc") }
            ]
        },
        {
            id: 7,
            title: t("features.scholars_sci.title"),
            highlight: t("features.scholars_sci.highlight"),
            color: "#06B6D4",
            accentColor: "from-cyan-500/20",
            desc: t("features.scholars_sci.desc"),
            icon: Users,
            subFeatures: [
                { icon: Users, title: t("features.scholars_sci.sub1.title"), desc: t("features.scholars_sci.sub1.desc") },
                { icon: BookOpen, title: t("features.scholars_sci.sub2.title"), desc: t("features.scholars_sci.sub2.desc") }
            ]
        },
        {
            id: 11, // Switched to unique ID to avoid conflict with internal features
            title: t("features.ai_assistant.title"),
            highlight: t("features.ai_assistant.highlight"),
            color: "#8B5CF6",
            accentColor: "from-violet-500/20",
            desc: t("features.ai_assistant.desc"),
            icon: Bot,
            subFeatures: [
                { icon: Bot, title: t("features.ai_assistant.sub1.title"), desc: t("features.ai_assistant.sub1.desc") },
                { icon: BookOpen, title: t("features.ai_assistant.sub2.title"), desc: t("features.ai_assistant.sub2.desc") }
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
                    <span className="text-[#FFD84D] text-sm font-medium">{t("features_page.badge")}</span>
                </motion.div>
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl font-bold text-white mb-6"
                >
                    {t("features_page.title").split("Features")[0]} <span className="text-gradient">Features</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-[#B3B3B3] text-lg max-w-3xl mx-auto"
                >
                    {t("features_page.description")}
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
                                    {t("features.learn_more")}
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
                                {t("features_page.download.title").split("Deen Sphere")[0]} <span className="text-[#F5B400]">Deen Sphere</span> {t("features_page.download.title").split("Deen Sphere")[1]}
                            </h2>
                            <p className="text-[#B3B3B3] mb-8">
                                {t("features_page.download.description")}
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
