"use client"

import { SunIcon, PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/outline"
import Link from "next/link"

export function SolarFooter() {
  const quickLinks = [
    { name: "Trang chủ", href: "#" },
    { name: "Dịch vụ", href: "#services" },
    { name: "Dự án", href: "#projects" },
    { name: "Tin tức", href: "#blog" },
    { name: "Liên hệ", href: "#contact" },
  ]

  const socialLinks = [
    {
      name: "Facebook",
      icon: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
      href: "#",
    },
    {
      name: "Twitter",
      icon: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z",
      href: "#",
    },
    {
      name: "LinkedIn",
      icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
      href: "#",
    },
  ]

  return (
    <footer className="relative bg-gray-900 text-white">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "url(https://cdn.pixabay.com/photo/2018/01/05/07/16/person-3062271_640.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 py-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Column 1: Logo & Quick Links */}
          <div className="p-4">
            <div className="flex items-center gap-2 mb-4">
              <SunIcon className="h-8 w-8 text-[#FFE205]" />
              <span className="text-2xl font-bold text-[#FFE205]">SolarVN</span>
            </div>
            <nav className="space-y-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block text-gray-300 hover:text-[#FFE205] transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 2: Contact Info */}
          <div className="p-4">
            <h3 className="text-lg font-semibold text-[#1092CF] mb-4">Liên hệ</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPinIcon className="h-5 w-5 text-[#1092CF] flex-shrink-0 mt-1" />
                <p className="text-gray-300 text-sm">
                  123 Đường Năng Lượng Mặt Trời
                  <br />
                  Quận 1, TP. Hồ Chí Minh
                </p>
              </div>
              <div className="flex items-center gap-3">
                <PhoneIcon className="h-5 w-5 text-[#1092CF] flex-shrink-0" />
                <a href="tel:+84123456789" className="text-gray-300 hover:text-[#FFE205] transition-colors text-sm">
                  +84 123 456 789
                </a>
              </div>
              <div className="flex items-center gap-3">
                <EnvelopeIcon className="h-5 w-5 text-[#1092CF] flex-shrink-0" />
                <a
                  href="mailto:info@solarvn.com"
                  className="text-gray-300 hover:text-[#FFE205] transition-colors text-sm"
                >
                  info@solarvn.com
                </a>
              </div>
              <div className="mt-4">
                <img
                  src="https://cdn.pixabay.com/photo/2022/04/13/06/36/solar-logo-7129625_640.png"
                  alt="SolarVN Team"
                  className="rounded-lg w-full max-w-[200px] h-auto"
                />
              </div>
            </div>
          </div>

          {/* Column 3: Social Media */}
          <div className="p-4">
            <h3 className="text-lg font-semibold text-[#1092CF] mb-4">Mạng xã hội</h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-[#1092CF] transition-colors flex items-center justify-center group"
                  aria-label={social.name}
                >
                  <svg className="w-5 h-5 fill-gray-300 group-hover:fill-white transition-colors" viewBox="0 0 24 24">
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Column 4: Newsletter/Additional Info */}
          <div className="p-4">
            <h3 className="text-lg font-semibold text-[#1092CF] mb-4">Về chúng tôi</h3>
            <p className="text-gray-300 text-sm mb-4">
              SolarVN - Đối tác tin cậy trong giải pháp năng lượng mặt trời tại Việt Nam.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <SunIcon className="h-4 w-4 text-[#FFE205]" />
              <span>Năng lượng xanh cho tương lai</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#1092CF] opacity-30 mb-6" />

        {/* Bottom Bar - Copyright */}
        <div className="text-center">
          <p className="text-gray-400 text-sm">© 2025 SolarVN. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
