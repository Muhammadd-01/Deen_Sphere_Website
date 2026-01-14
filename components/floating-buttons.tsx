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
        <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
            {/* Scroll to Top Button */}
            <AnimatePresence>
                {showScrollTop && (
                    <motion.button
                        initial={{ opacity: 0, y: 20, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.8 }}
                        onClick={scrollToTop}
                        className="w-12 h-12 bg-[#1C1C1C] border border-[#2A2A2A] rounded-full flex items-center justify-center text-white hover:border-[#F5B400] hover:text-[#F5B400] transition-all shadow-lg"
                    >
                        <ArrowUp size={20} />
                    </motion.button>
                )}
            </AnimatePresence>

            {/* WhatsApp Button */}
            <motion.a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ scale: 0 }}
                animate={{
                    scale: 1,
                    y: showScrollTop ? 0 : 0
                }}
                transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-[#25D366]/50"
                title="Chat on WhatsApp"
            >
                <MessageCircle size={24} fill="white" />
            </motion.a>
        </div>
    )
}

export default FloatingButtons
