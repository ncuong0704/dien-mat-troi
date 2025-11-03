"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/outline"

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
    <section className="relative py-8 overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "linear-gradient(135deg, #1092CF 0%, #FFE205 100%)",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-2" style={{ color: "#1092CF" }}>
            Sẵn sàng lắp đặt?
          </h2>
          <p className="text-gray-600 text-lg">Liên hệ với chúng tôi ngay hôm nay để nhận tư vấn miễn phí</p>
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left: Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-4 m-2">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Họ và tên
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Nhập họ và tên"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Nhập email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Tin nhắn
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Nhập tin nhắn của bạn"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full"
                />
              </div>

              <Button
                type="submit"
                className="w-full text-lg font-semibold rounded-lg py-6"
                style={{ backgroundColor: "#FFE205", color: "#000" }}
              >
                Gửi yêu cầu
              </Button>
            </form>

            {/* Contact Info */}
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-4">
                <div className="p-2 rounded-full" style={{ backgroundColor: "#1092CF" }}>
                  <PhoneIcon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Điện thoại</p>
                  <p className="text-gray-600">+84 123 456 789</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-2 rounded-full" style={{ backgroundColor: "#1092CF" }}>
                  <EnvelopeIcon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Email</p>
                  <p className="text-gray-600">contact@solarvn.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-2 rounded-full" style={{ backgroundColor: "#1092CF" }}>
                  <MapPinIcon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Địa chỉ</p>
                  <p className="text-gray-600">123 Đường Năng Lượng, Hà Nội</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: 3-Image Gallery */}
          <div className="space-y-4">
            {/* Team Image */}
            <div className="relative h-48 rounded-lg overflow-hidden shadow-lg m-2">
              <img
                src="https://cdn.pixabay.com/photo/2020/03/30/01/56/solar-panels-4982779_640.jpg"
                alt="Solar team"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Office Image */}
            <div className="relative h-48 rounded-lg overflow-hidden shadow-lg m-2">
              <img
                src="https://cdn.pixabay.com/photo/2017/03/13/07/34/photovoltaic-2138992_1280.jpg"
                alt="Solar office"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Map Embed */}
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg m-2 bg-gray-100">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPinIcon className="w-16 h-16 mx-auto mb-4" style={{ color: "#1092CF" }} />
                  <p className="text-gray-600 font-medium">123 Đường Năng Lượng</p>
                  <p className="text-gray-500">Hà Nội, Việt Nam</p>
                </div>
              </div>
              {/* Decorative map pins */}
              <div className="absolute top-4 left-4">
                <MapPinIcon className="w-6 h-6" style={{ color: "#FFE205" }} />
              </div>
              <div className="absolute bottom-4 right-4">
                <MapPinIcon className="w-6 h-6" style={{ color: "#FFE205" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
