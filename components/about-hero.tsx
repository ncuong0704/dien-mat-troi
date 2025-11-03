"use client"

import { Button } from "@/components/ui/button"
import { SunIcon, UserGroupIcon } from "@heroicons/react/24/outline"
import { useEffect, useState } from "react"

export function AboutHero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const timelineImages = [
    {
      url: "/placeholder.svg?height=400&width=600",
      year: "2014",
      title: "Thành lập",
    },
    {
      url: "/placeholder.svg?height=400&width=600",
      year: "2018",
      title: "Phát triển",
    },
    {
      url: "/placeholder.svg?height=400&width=600",
      year: "2024",
      title: "Thành công",
    },
  ]

  return (
    <section className="relative w-full h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img src="/placeholder.svg?height=1080&width=1920" alt="SolarVN Team" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1092CF]/80 via-[#1092CF]/70 to-[#1092CF]/90" />
      </div>

      {/* Content */}
      <div
        className={`relative z-10 container mx-auto px-4 py-8 transition-opacity duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex flex-col items-center text-center gap-8">
          {/* Icons */}
          <div className="flex items-center gap-4">
            <div className="p-4 bg-white/10 backdrop-blur-sm rounded-full">
              <SunIcon className="h-12 w-12 text-[#FFE205]" />
            </div>
            <div className="p-4 bg-white/10 backdrop-blur-sm rounded-full">
              <UserGroupIcon className="h-12 w-12 text-white" />
            </div>
          </div>

          {/* Main Heading */}
          <div className="space-y-4 max-w-4xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Về SolarVN - Tiên phong năng lượng sạch
            </h1>
            <p className="text-xl sm:text-2xl text-gray-200 font-medium">Hơn 10 năm kinh nghiệm lắp đặt</p>
          </div>

          {/* Timeline Gallery */}
          <div className="w-full max-w-6xl mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {timelineImages.map((image, index) => (
                <div
                  key={index}
                  className="relative group overflow-hidden rounded-lg bg-white/10 backdrop-blur-sm p-2 m-2 transition-transform duration-300 hover:scale-105"
                  style={{
                    animationDelay: `${index * 200}ms`,
                  }}
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                    <img
                      src={image.url || "/placeholder.svg"}
                      alt={image.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1092CF]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-left">
                    <div className="inline-block px-3 py-1 bg-[#FFE205] text-[#1092CF] font-bold rounded-full text-sm mb-2">
                      {image.year}
                    </div>
                    <h3 className="text-white font-bold text-lg">{image.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <Button
            size="lg"
            className="bg-[#FFE205] hover:bg-[#FFE205]/90 text-[#1092CF] font-bold text-lg px-8 py-6 rounded-lg transition-all duration-300 hover:scale-105 mt-4"
          >
            Tìm hiểu thêm
          </Button>
        </div>
      </div>
    </section>
  )
}
