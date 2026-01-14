"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Mail, CheckCircle, Loader2 } from "lucide-react"

interface WaitlistModalProps {
    isOpen: boolean
    onClose: () => void
}

const WaitlistModal = ({ isOpen, onClose }: WaitlistModalProps) => {
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!email || !name) return

        setIsSubmitting(true)
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500))
        setIsSubmitting(false)
        setIsSubmitted(true)

        // Reset after 3 seconds
        setTimeout(() => {
            setIsSubmitted(false)
            setEmail("")
            setName("")
            onClose()
        }, 3000)
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md"
                    >
                        <div className="bg-[#141414] border border-[#2A2A2A] rounded-2xl p-8 relative">
                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 text-[#888] hover:text-white transition-colors"
                            >
                                <X size={24} />
                            </button>

                            {!isSubmitted ? (
                                <>
                                    {/* Header */}
                                    <div className="text-center mb-6">
                                        <div className="w-16 h-16 gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                                            <Mail size={32} className="text-black" />
                                        </div>
                                        <h2 className="text-2xl font-bold text-white mb-2">Join the Waitlist</h2>
                                        <p className="text-[#B3B3B3] text-sm">
                                            Be among the first to access DeenSphere when we launch.
                                        </p>
                                    </div>

                                    {/* Form */}
                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                                                Your Name
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                placeholder="Enter your name"
                                                required
                                                className="w-full px-4 py-3 bg-[#1C1C1C] border border-[#2A2A2A] rounded-lg text-white placeholder-[#666] focus:outline-none focus:border-[#F5B400] transition-colors"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                                                Email Address
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                placeholder="your@email.com"
                                                required
                                                className="w-full px-4 py-3 bg-[#1C1C1C] border border-[#2A2A2A] rounded-lg text-white placeholder-[#666] focus:outline-none focus:border-[#F5B400] transition-colors"
                                            />
                                        </div>
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full py-3 gradient-gold text-black font-bold rounded-lg hover:shadow-lg hover:shadow-[#F5B400]/30 transition-all disabled:opacity-70 flex items-center justify-center gap-2"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <Loader2 size={20} className="animate-spin" />
                                                    Joining...
                                                </>
                                            ) : (
                                                "Join Waitlist"
                                            )}
                                        </button>
                                    </form>

                                    <p className="text-[#666] text-xs text-center mt-4">
                                        We respect your privacy. No spam, ever.
                                    </p>
                                </>
                            ) : (
                                /* Success State */
                                <div className="text-center py-8">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4"
                                    >
                                        <CheckCircle size={40} className="text-emerald-500" />
                                    </motion.div>
                                    <h2 className="text-2xl font-bold text-white mb-2">You're on the list!</h2>
                                    <p className="text-[#B3B3B3]">
                                        We'll notify you when DeenSphere launches.
                                    </p>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}

export default WaitlistModal
