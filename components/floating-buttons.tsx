"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, ArrowUp } from "lucide-react"

const FloatingButtons = () => {
    const [showScrollTop, setShowScrollTop] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 400)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3">
            {/* WhatsApp Button - Always visible, moves up when scroll-top appears */}
            <motion.a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ scale: 0 }}
                animate={{
                    scale: 1,
                    y: showScrollTop ? -10 : 0
                }}
                transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-[#25D366]/50 transition-shadow"
                title="Chat on WhatsApp"
            >
                <MessageCircle size={24} fill="white" />
            </motion.a>

            {/* Scroll to Top Button - Below WhatsApp, appears on scroll */}
            <AnimatePresence>
                {showScrollTop && (
                    <motion.button
                        initial={{ opacity: 0, y: 20, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.8 }}
                        transition={{ type: "spring", stiffness: 260, damping: 20 }}
                        onClick={scrollToTop}
                        className="w-12 h-12 bg-[#F5B400] rounded-full flex items-center justify-center text-black hover:bg-[#FFD84D] transition-all shadow-lg hover:shadow-[#F5B400]/50"
                    >
                        <ArrowUp size={20} />
                    </motion.button>
                )}
            </AnimatePresence>
        </div>
    )
}

export default FloatingButtons
