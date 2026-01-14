"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Features", href: "/features" },
    { label: "Speakers", href: "/speakers" },
    { label: "Lectures", href: "/lectures" },
    { label: "About", href: "/about" },
    { label: "Community", href: "/community" },
    { label: "Contact", href: "/contact" },
  ]

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-[#0B0B0B]/95 backdrop-blur-md border-b border-[#2A2A2A]" : "bg-transparent"
        }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-16 h-16 group-hover:scale-110 transition-transform duration-300">
              <Image
                src="/logo.png"
                alt="DeenSphere Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-xl font-bold text-white hidden sm:inline group-hover:text-[#FFD84D] transition-colors duration-300">
              DeenSphere
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[#B3B3B3] hover:text-[#FFD84D] transition-colors duration-300 text-sm font-medium relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#F5B400] to-[#FFD84D] group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <button className="hidden md:block px-6 py-2 gradient-gold text-black font-semibold rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 text-sm">
            Get Notified
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-[#F5B400] hover:text-[#FFD84D] transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            className="md:hidden mt-4 pb-4 space-y-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-[#B3B3B3] hover:text-[#FFD84D] transition-colors duration-300 text-sm hover:translate-x-2 transition-transform"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <button className="w-full px-4 py-2 gradient-gold text-black font-semibold rounded-lg hover:shadow-lg transition-all duration-300 text-sm">
              Get Notified
            </button>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}

export default Navbar
