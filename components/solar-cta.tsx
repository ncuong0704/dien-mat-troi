"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/outline"
import { cn } from "@/lib/utils"

export function SolarCTA() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section className="relative py-16 sm:py-24 overflow-hidden">
      {/* Background gradient with pattern */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "linear-gradient(135deg, #1092CF 0%, #FFE205 100%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231092CF' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl font-bold mb-4 uppercase tracking-tight" style={{ color: "#1092CF" }}>
            Sẵn sàng lắp đặt?
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            Liên hệ với chúng tôi ngay hôm nay để nhận tư vấn miễn phí và báo giá chi tiết
          </p>
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left: Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10 border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
            <div className="mb-6">
              <h3 className="text-xl sm:text-2xl font-bold mb-2" style={{ color: "#1092CF" }}>
                Gửi yêu cầu tư vấn
              </h3>
              <p className="text-gray-600 text-sm">Điền thông tin để chúng tôi liên hệ với bạn</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Họ và tên <span className="text-red-500">*</span>
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Nhập họ và tên của bạn"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full h-12 border-gray-300 focus:border-[#1092CF] focus:ring-[#1092CF] transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full h-12 border-gray-300 focus:border-[#1092CF] focus:ring-[#1092CF] transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Tin nhắn <span className="text-red-500">*</span>
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Mô tả nhu cầu của bạn..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full border-gray-300 focus:border-[#1092CF] focus:ring-[#1092CF] transition-colors resize-none"
                />
              </div>

              <Button
                type="submit"
                className={cn(
                  "w-full text-base sm:text-lg font-semibold rounded-xl py-6",
                  "hover:scale-[1.02] active:scale-[0.98] transition-transform duration-200",
                  "shadow-lg hover:shadow-xl"
                )}
                style={{ backgroundColor: "#FFE205", color: "#000" }}
              >
                Gửi yêu cầu
              </Button>
            </form>

            {/* Contact Info */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h4 className="text-base sm:text-lg font-bold mb-4" style={{ color: "#1092CF" }}>
                Thông tin liên hệ
              </h4>
              <div className="space-y-4">
                <a
                  href="tel:+84123456789"
                  className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                >
                  <div className="p-3 rounded-full shadow-md group-hover:scale-110 transition-transform" style={{ backgroundColor: "#1092CF" }}>
                    <PhoneIcon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 group-hover:text-[#1092CF] transition-colors">Điện thoại</p>
                    <p className="text-gray-600 text-sm">+84 123 456 789</p>
                  </div>
                </a>

                <a
                  href="mailto:contact@solarvn.com"
                  className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                >
                  <div className="p-3 rounded-full shadow-md group-hover:scale-110 transition-transform" style={{ backgroundColor: "#1092CF" }}>
                    <EnvelopeIcon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 group-hover:text-[#1092CF] transition-colors">Email</p>
                    <p className="text-gray-600 text-sm">contact@solarvn.com</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-3 rounded-lg">
                  <div className="p-3 rounded-full shadow-md" style={{ backgroundColor: "#1092CF" }}>
                    <MapPinIcon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Địa chỉ</p>
                    <p className="text-gray-600 text-sm">123 Đường Năng Lượng, Hà Nội</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: 3-Image Gallery */}
          <div className="space-y-6">
            {/* Team Image */}
            <div className="relative h-56 sm:h-64 lg:h-72 rounded-2xl overflow-hidden shadow-xl group cursor-pointer">
              <Image
                src="https://cdn.pixabay.com/photo/2020/03/30/01/56/solar-panels-4982779_640.jpg"
                alt="Đội ngũ chuyên nghiệp"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <h4 className="text-white font-bold text-base sm:text-lg mb-1">Đội ngũ chuyên nghiệp</h4>
                <p className="text-white/90 text-sm">Kinh nghiệm lâu năm trong lĩnh vực năng lượng mặt trời</p>
              </div>
            </div>

            {/* Office Image */}
            <div className="relative h-56 sm:h-64 lg:h-72 rounded-2xl overflow-hidden shadow-xl group cursor-pointer">
              <Image
                src="https://cdn.pixabay.com/photo/2017/03/13/07/34/photovoltaic-2138992_1280.jpg"
                alt="Văn phòng hiện đại"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <h4 className="text-white font-bold text-base sm:text-lg mb-1">Văn phòng hiện đại</h4>
                <p className="text-white/90 text-sm">Không gian làm việc chuyên nghiệp và tiện nghi</p>
              </div>
            </div>

            {/* Map Location Card */}
            <div className="relative h-64 sm:h-72 lg:h-80 rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-[#1092CF] to-[#0a7ba8]">
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="text-center text-white">
                  <div className="mb-6 animate-bounce">
                    <MapPinIcon className="w-16 h-16 mx-auto" style={{ color: "#FFE205" }} />
                  </div>
                  <h4 className="font-bold text-base sm:text-xl mb-2">Vị trí của chúng tôi</h4>
                  <p className="text-white/90 font-medium mb-1">123 Đường Năng Lượng</p>
                  <p className="text-white/80 text-sm">Hà Nội, Việt Nam</p>
                </div>
              </div>
              {/* Decorative map pins */}
              <div className="absolute top-6 left-6 animate-pulse">
                <MapPinIcon className="w-8 h-8" style={{ color: "#FFE205" }} />
              </div>
              <div className="absolute bottom-6 right-6 animate-pulse" style={{ animationDelay: "0.5s" }}>
                <MapPinIcon className="w-8 h-8" style={{ color: "#FFE205" }} />
              </div>
              {/* Decorative circles */}
              <div className="absolute top-1/4 right-1/4 w-32 h-32 rounded-full border-2 border-white/20" />
              <div className="absolute bottom-1/4 left-1/4 w-24 h-24 rounded-full border-2 border-white/20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
