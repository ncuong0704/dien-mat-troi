"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { SparklesIcon, RocketLaunchIcon, HeartIcon, ShieldCheckIcon } from "@heroicons/react/24/outline"
import Image from "next/image"

const values = [
  {
    title: "Bền vững",
    icon: SparklesIcon,
    image: "/placeholder.svg?height=300&width=400",
    description: "Cam kết bảo vệ môi trường và phát triển bền vững cho thế hệ tương lai",
    points: ["Giảm phát thải CO2", "Năng lượng tái tạo 100%", "Bảo vệ hệ sinh thái"],
  },
  {
    title: "Đổi mới",
    icon: RocketLaunchIcon,
    image: "/placeholder.svg?height=300&width=400",
    description: "Không ngừng cải tiến công nghệ để mang đến giải pháp tốt nhất",
    points: ["Công nghệ tiên tiến", "Nghiên cứu liên tục", "Giải pháp sáng tạo"],
  },
  {
    title: "Khách hàng",
    icon: HeartIcon,
    image: "/placeholder.svg?height=300&width=400",
    description: "Đặt lợi ích khách hàng lên hàng đầu trong mọi quyết định",
    points: ["Tư vấn tận tâm", "Hỗ trợ 24/7", "Cam kết chất lượng"],
  },
  {
    title: "Chất lượng",
    icon: ShieldCheckIcon,
    image: "/placeholder.svg?height=300&width=400",
    description: "Đảm bảo tiêu chuẩn cao nhất trong từng sản phẩm và dịch vụ",
    points: ["Chứng nhận quốc tế", "Kiểm tra nghiêm ngặt", "Bảo hành dài hạn"],
  },
]

export function AboutValues() {
  return (
    <section className="relative py-8 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <Image src="/placeholder.svg?height=800&width=1600" alt="Values background" fill className="object-cover" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-[#1092CF] mb-4">Giá trị cốt lõi</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Những giá trị định hướng mọi hoạt động của chúng tôi</p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon
            return (
              <Card
                key={index}
                className="p-4 m-2 bg-white hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
              >
                {/* Image with Icon Overlay */}
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <Image src={value.image || "/placeholder.svg"} alt={value.title} fill className="object-cover" />
                  {/* Icon Overlay with Pulse Animation */}
                  <div className="absolute top-4 right-4 bg-[#FFE205] p-3 rounded-full group-hover:animate-pulse">
                    <IconComponent className="h-6 w-6 text-[#1092CF]" />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-[#1092CF]">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>

                  {/* Bullet Points */}
                  <ul className="space-y-2">
                    {value.points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="text-[#FFE205] mt-1">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button className="w-full bg-[#FFE205] hover:bg-[#FFE205]/90 text-[#1092CF] font-semibold text-lg rounded-lg py-6">
                    Áp dụng ngay
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
