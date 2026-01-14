import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react"
import { MessageCircle } from "lucide-react" // WhatsApp icon

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0B0B0B] border-t border-[#2A2A2A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 gradient-gold rounded-lg flex items-center justify-center font-bold text-black">
                D
              </div>
              <span className="text-xl font-bold text-white">DeenSphere</span>
            </div>
            <p className="text-[#B3B3B3] text-sm leading-relaxed">
              A global platform for Islamic knowledge, community, and spiritual growth.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Platform</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#about" className="text-[#B3B3B3] hover:text-[#FFD84D] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#features" className="text-[#B3B3B3] hover:text-[#FFD84D] transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#app" className="text-[#B3B3B3] hover:text-[#FFD84D] transition-colors">
                  Mobile App
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-[#B3B3B3] hover:text-[#FFD84D] transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#B3B3B3] hover:text-[#FFD84D] transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#B3B3B3] hover:text-[#FFD84D] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold text-white mb-4">Connect</h3>
            <div className="flex gap-4">
              <a href="#" className="text-[#B3B3B3] hover:text-[#FFD84D] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-[#B3B3B3] hover:text-[#FFD84D] transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-[#B3B3B3] hover:text-[#FFD84D] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://youtube.com/@deensphere" target="_blank" rel="noopener noreferrer" className="text-[#B3B3B3] hover:text-[#FFD84D] transition-colors">
                <Youtube size={20} />
              </a>
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="text-[#B3B3B3] hover:text-[#25D366] transition-colors" title="WhatsApp: Replace with your number">
                <MessageCircle size={20} />
              </a>
              <a href="#" className="text-[#B3B3B3] hover:text-[#FFD84D] transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#2A2A2A] pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#B3B3B3] text-sm">© {currentYear} DeenSphere. All rights reserved.</p>
            <div className="flex gap-6 text-sm">
              <Link href="#" className="text-[#B3B3B3] hover:text-[#FFD84D] transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-[#B3B3B3] hover:text-[#FFD84D] transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
