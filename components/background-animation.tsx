"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const BackgroundAnimation = () => {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768)
        checkMobile()
        window.addEventListener("resize", checkMobile)
        return () => window.removeEventListener("resize", checkMobile)
    }, [])

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {/* Islamic Geometric Patterns - Subtle rotating shapes */}
            <motion.div
                className="absolute top-20 left-10 w-32 h-32 border border-[#F5B400]/10 rounded-full will-change-transform"
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            />
            {!isMobile && (
                <>
                    <motion.div
                        className="absolute top-40 right-20 w-24 h-24 border border-[#F5B400]/10 will-change-transform"
                        style={{ transform: "rotate(45deg)" }}
                        animate={{ rotate: [45, 135, 45] }}
                        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.div
                        className="absolute bottom-40 left-20 w-20 h-20 border border-[#F5B400]/10 will-change-transform"
                        animate={{ rotate: [0, 90, 0], scale: [1, 1.1, 1] }}
                        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
                    />
                </>
            )}
            <motion.div
                className="absolute top-1/3 left-1/4 w-16 h-16 border border-[#F5B400]/5 rounded-full will-change-transform"
                animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Crescent Moon - Islamic Symbol */}
            <motion.div
                className="absolute top-32 right-1/4 w-12 h-12 border-4 border-[#F5B400]/10 rounded-full"
                style={{ clipPath: "inset(0 50% 0 0)" }}
                animate={{ opacity: [0.1, 0.3, 0.1] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Gradient Orbs - Knowledge spreading like light */}
            <motion.div
                className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-[#F5B400]/5 to-transparent rounded-full blur-3xl will-change-[transform,opacity]"
                animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />
            {!isMobile && (
                <motion.div
                    className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-tr from-[#E6A800]/5 to-transparent rounded-full blur-3xl will-change-[transform,opacity]"
                    animate={{ scale: [1.2, 1, 1.2], opacity: [0.15, 0.3, 0.15] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                />
            )}
            <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-[#F5B400]/3 to-transparent rounded-full blur-3xl will-change-transform"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Connecting Lines - Community/Unity */}
            {!isMobile && (
                <svg className="absolute inset-0 w-full h-full opacity-5">
                    <motion.line
                        x1="5%" y1="15%" x2="25%" y2="35%"
                        stroke="#F5B400" strokeWidth="1"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: [0, 1, 0] }}
                        transition={{ duration: 8, repeat: Infinity }}
                    />
                    <motion.line
                        x1="75%" y1="25%" x2="95%" y2="55%"
                        stroke="#F5B400" strokeWidth="1"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: [0, 1, 0] }}
                        transition={{ duration: 10, repeat: Infinity, delay: 2 }}
                    />
                    <motion.line
                        x1="15%" y1="65%" x2="45%" y2="45%"
                        stroke="#FFD84D" strokeWidth="1"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: [0, 1, 0] }}
                        transition={{ duration: 12, repeat: Infinity, delay: 4 }}
                    />
                    <motion.line
                        x1="55%" y1="75%" x2="85%" y2="85%"
                        stroke="#F5B400" strokeWidth="1"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: [0, 1, 0] }}
                        transition={{ duration: 9, repeat: Infinity, delay: 3 }}
                    />
                </svg>
            )}

            {/* Floating Stars/Dots - Guidance/Light */}
            {[...Array(isMobile ? 8 : 15)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1.5 h-1.5 bg-[#F5B400]/20 rounded-full"
                    style={{
                        left: `${5 + (i * (isMobile ? 12 : 6.5))}%`,
                        top: `${15 + ((i * 11) % 70)}%`
                    }}
                    animate={{
                        y: [0, -15, 0],
                        opacity: [0.2, 0.5, 0.2]
                    }}
                    transition={{
                        duration: 4 + (i * 0.3),
                        repeat: Infinity,
                        delay: i * 0.4
                    }}
                />
            ))}

            {/* Eight-pointed Star - Islamic Art Pattern */}
            <motion.div
                className="absolute bottom-20 right-32 w-16 h-16 will-change-transform"
                animate={{ rotate: 360, opacity: [0.1, 0.2, 0.1] }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            >
                <div className="absolute inset-0 border border-[#F5B400]/10 rotate-0"></div>
                <div className="absolute inset-0 border border-[#F5B400]/10 rotate-45"></div>
            </motion.div>
        </div>
    )
}

export default BackgroundAnimation
