"use client"

import React, { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Globe, Check, ChevronDown } from "lucide-react"
import { useLanguage } from "@/context/language-context"

const languages = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "ur", name: "Urdu", flag: "🇵🇰" },
    { code: "ar", name: "Arabic", flag: "🇸🇦" },
]

export const LanguageSwitcher = () => {
    const { locale, setLocale } = useLanguage()
    const [isOpen, setIsOpen] = useState(false)
    const dropdownRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    const currentLang = languages.find((l) => l.code === locale) || languages[0]

    return (
        <div className="relative group" ref={dropdownRef}>
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="px-4 py-2 bg-[#1C1C1C]/80 backdrop-blur-md border-2 border-[#2A2A2A] text-white font-bold rounded-lg hover:border-[#F5B400] transition-all flex items-center justify-center gap-2 w-full sm:w-auto min-w-[140px]"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
            >
                <span className="text-xl">{currentLang.flag}</span>
                <span>{currentLang.name}</span>
                <ChevronDown size={18} className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        className="absolute top-full mt-2 left-0 w-full bg-[#1C1C1C] border border-[#2A2A2A] rounded-xl overflow-hidden shadow-2xl z-[60]"
                    >
                        {languages.map((lang) => (
                            <button
                                key={lang.code}
                                onClick={() => {
                                    setLocale(lang.code as any)
                                    setIsOpen(false)
                                }}
                                className={`w-full px-4 py-3 flex items-center justify-between hover:bg-[#F5B400]/10 transition-colors ${locale === lang.code ? "text-[#F5B400] bg-[#F5B400]/5" : "text-[#B3B3B3]"
                                    }`}
                            >
                                <div className="flex items-center gap-3">
                                    <span className="text-xl">{lang.flag}</span>
                                    <span className="font-medium">{lang.name}</span>
                                </div>
                                {locale === lang.code && <Check size={16} />}
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default LanguageSwitcher
