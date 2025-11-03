"use client"

import { useState } from "react"
import { HomeIcon, BuildingOfficeIcon, WrenchScrewdriverIcon } from "@heroicons/react/24/outline"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function SolarServices() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const services = [
    {
      id: 1,
      title: "Dân dụng",
      icon: HomeIcon,
      mainImage: "https://cdn.pixabay.com/photo/2021/05/08/20/42/photovoltaic-6239403_640.jpg",
      galleryImages: ["https://cdn.pixabay.com/photo/2016/06/24/22/24/solar-panels-1477987_640.jpg", "https://cdn.pixabay.com/photo/2016/06/24/22/24/solar-panels-1477987_640.jpg"],
      bullets: ["Hệ thống hòa lưới tiết kiệm", "Công suất 3-10 kW", "Bảo hành 25 năm", "Lắp đặt nhanh 1-2 ngày"],
    },
    {
      id: 2,
      title: "Thương mại",
      icon: BuildingOfficeIcon,
      mainImage: "https://cdn.pixabay.com/photo/2021/05/08/20/42/photovoltaic-6239403_640.jpg",
      galleryImages: ["https://cdn.pixabay.com/photo/2016/06/24/22/24/solar-panels-1477987_640.jpg", "https://cdn.pixabay.com/photo/2016/06/24/22/24/solar-panels-1477987_640.jpg"],
      bullets: ["Giải pháp quy mô lớn", "Công suất 50-500 kW", "Tối ưu chi phí vận hành", "Hỗ trợ tài chính linh hoạt"],
    },
    {
      id: 3,
      title: "Bảo trì",
      icon: WrenchScrewdriverIcon,
      mainImage: "https://cdn.pixabay.com/photo/2021/05/08/20/42/photovoltaic-6239403_640.jpg",
      galleryImages: ["https://cdn.pixabay.com/photo/2016/06/24/22/24/solar-panels-1477987_640.jpg", "https://cdn.pixabay.com/photo/2016/06/24/22/24/solar-panels-1477987_640.jpg"],
      bullets: ["Vệ sinh định kỳ 6 tháng", "Kiểm tra hiệu suất", "Sửa chữa nhanh chóng", "Gói bảo trì linh hoạt"],
    },
  ]

  return (
    <section className="relative py-8 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1092CF] to-[#FFE205]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-[#1092CF] mb-2">Dịch vụ chính</h2>
          <p className="text-gray-600 text-lg">Giải pháp năng lượng mặt trời toàn diện</p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon
            const isHovered = hoveredCard === service.id

            return (
              <Card
                key={service.id}
                className="group relative overflow-hidden bg-white border-2 border-gray-100 hover:border-[#1092CF] transition-all duration-300 hover:scale-105"
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="p-4">
                  {/* Icon and Title */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-[#FFE205] rounded-lg">
                      <Icon className="w-8 h-8 text-[#1092CF]" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#1092CF]">{service.title}</h3>
                  </div>

                  {/* Main Image */}
                  <div className="relative h-64 mb-4 rounded-lg overflow-hidden">
                    <img
                      src={service.mainImage || "/placeholder.svg"}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    {/* Yellow overlay on hover */}
                    <div className="absolute inset-0 bg-[#FFE205] opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                  </div>

                  {/* Hover Gallery */}
                  <div
                    className={`grid grid-cols-2 gap-2 mb-4 transition-all duration-300 ${
                      isHovered ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                    } overflow-hidden`}
                  >
                    {service.galleryImages.map((img, idx) => (
                      <div key={idx} className="relative h-24 rounded-lg overflow-hidden">
                        <img
                          src={img || "/placeholder.svg"}
                          alt={`${service.title} gallery ${idx + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Bullet Points */}
                  <ul className="space-y-2 mb-4">
                    {service.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-700">
                        <span className="text-[#FFE205] mt-1">●</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Learn More Button */}
                  <Button className="w-full bg-[#FFE205] hover:bg-[#FFE205]/90 text-[#1092CF] font-bold text-lg rounded-lg py-6">
                    Tìm hiểu thêm
                  </Button>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
