"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SunIcon, CurrencyDollarIcon, SparklesIcon } from "@heroicons/react/24/outline"

const benefits = [
  {
    id: 1,
    title: "Tiết Kiệm Chi Phí",
    description: "Giảm 1 tấn CO2 mỗi năm và tiết kiệm đến 30% hóa đơn điện hàng tháng",
    image: "https://cdn.pixabay.com/photo/2021/05/08/20/45/photovoltaic-6239423_640.jpg",
    icon: CurrencyDollarIcon,
    stats: [
      { label: "Tiết kiệm", value: "30%" },
      { label: "Hoàn vốn", value: "5-7 năm" },
    ],
  },
  {
    id: 2,
    title: "Thân Thiện Môi Trường",
    description: "Giảm 1 tấn CO2 và bảo vệ hành tinh xanh cho thế hệ tương lai",
    image: "https://cdn.pixabay.com/photo/2017/09/12/13/21/photovoltaic-system-2742302_640.jpg",
    icon: SparklesIcon,
    stats: [
      { label: "Giảm CO2", value: "1 tấn/năm" },
      { label: "Năng lượng sạch", value: "100%" },
    ],
  },
  {
    id: 3,
    title: "Bảo Vệ Ngôi Nhà",
    description: "Giảm 1 tấn CO2 và tăng giá trị bất động sản với hệ thống năng lượng hiện đại",
    image: "https://cdn.pixabay.com/photo/2017/11/11/17/08/solar-system-2939560_640.jpg",
    icon: SunIcon,
    stats: [
      { label: "Tăng giá trị", value: "+15%" },
      { label: "Bảo hành", value: "25 năm" },
    ],
  },
]

export function SolarBenefits() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <section className="relative w-full py-16 sm:py-24 overflow-hidden">
      {/* Background with sun rays pattern */}
      <div className="absolute inset-0 -z-10">
        <img src="/placeholder.svg?height=800&width=1920" alt="" className="h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white/80" />
      </div>

      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8 sm:mb-12 text-center">
          <h2 className="text-2xl sm:text-4xl font-bold mb-2 uppercase" style={{ color: "#1092CF" }}>
            Lợi ích nổi bật
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Khám phá những lợi ích vượt trội khi sử dụng năng lượng mặt trời
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {benefits.map((benefit) => {
            const IconComponent = benefit.icon
            return (
              <Card
                key={benefit.id}
                className="relative overflow-hidden p-4 m-2 transition-transform duration-300 hover:scale-105 bg-white shadow-lg"
                onMouseEnter={() => setHoveredCard(benefit.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Image with icon overlay */}
                <div className="relative h-48 sm:h-56 mb-4 rounded-lg overflow-hidden">
                  <img
                    src={benefit.image || "/placeholder.svg"}
                    alt={benefit.title}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                  {/* Yellow icon overlay */}
                  <div className="absolute top-4 right-4 p-3 rounded-full" style={{ backgroundColor: "#FFE205" }}>
                    <IconComponent className="h-6 w-6 sm:h-8 sm:w-8 text-gray-900" />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold" style={{ color: "#1092CF" }}>
                    {benefit.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{benefit.description}</p>

                  {/* Stats badges */}
                  <div className="flex flex-wrap gap-2">
                    {benefit.stats.map((stat, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="px-3 py-1 text-xs sm:text-sm font-semibold"
                        style={{
                          backgroundColor: hoveredCard === benefit.id ? "#FFE205" : "#f3f4f6",
                          color: hoveredCard === benefit.id ? "#000" : "#1092CF",
                        }}
                      >
                        {stat.label}: {stat.value}
                      </Badge>
                    ))}
                  </div>

                  {/* Learn More button */}
                  <Button
                    className="w-full text-base sm:text-lg font-semibold rounded-lg py-5 sm:py-6 transition-colors"
                    style={{
                      backgroundColor: "#1092CF",
                      color: "white",
                    }}
                  >
                    Đọc thêm
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
