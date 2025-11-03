"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Sun, Leaf, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"

const carouselImages = [
  {
    url: "https://cdn.pixabay.com/photo/2024/01/10/16/11/solar-8499901_640.jpg",
    title: "Installation Process",
    icon: Sun,
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/03/09/21/26/solar-cell-4045029_640.jpg",
    title: "Energy Savings",
    icon: Leaf,
  },
  {
    url: "https://cdn.pixabay.com/photo/2015/04/05/16/26/solar-cells-708178_640.jpg",
    title: "Modern Solutions",
    icon: Sun,
  },
]

export function SolarHero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  })

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Form submitted:", formData)
    // Handle form submission
  }

  return (
    <section className="relative min-h-[100vh] flex items-center justify-center pt-16">
      {/* Background with Gradient Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url(https://cdn.pixabay.com/photo/2017/03/19/18/14/solar-energy-2157212_640.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-background/85 to-background/90" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 py-8">
        {/* Heading */}
        <div className="text-center lg:text-left mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 text-balance">
            Tiết kiệm 30% hóa đơn điện
          </h1>
          <p className="text-lg md:text-xl text-gray-200 text-pretty">
            Giải pháp năng lượng mặt trời hiện đại cho ngôi nhà của bạn
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Left Column: Heading + Gallery */}
          <div className="animate-fade-in flex flex-col justify-between gap-8">
            {/* 3-Image Carousel Gallery */}
            <Card className="relative overflow-hidden bg-white/10 backdrop-blur-sm border-white/20 rounded-xl shadow-lg py-0">
              <div className="relative h-64 md:h-80">
                {carouselImages.map((image, index) => {
                  const Icon = image.icon
                  return (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-opacity duration-500 ${index === currentSlide ? "opacity-100" : "opacity-0"
                        }`}
                    >
                      <img
                        src={image.url || "/placeholder.svg"}
                        alt={image.title}
                        className="w-full h-full object-cover"
                      />
                      {/* Icon Overlay */}
                      <div className="absolute top-4 right-4 bg-accent p-3 rounded-lg shadow">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                        <p className="text-white font-medium">{image.title}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
              {/* Carousel Controls */}
              <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between p-4 pointer-events-none">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={prevSlide}
                  className="pointer-events-auto bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white rounded-full shadow focus-visible:ring-ring/50"
                  aria-label="Slide trước"
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={nextSlide}
                  className="pointer-events-auto bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white rounded-full shadow focus-visible:ring-ring/50"
                  aria-label="Slide tiếp theo"
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>
              </div>
              {/* Dots Indicator */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    aria-label={`Chuyển tới slide ${index + 1}`}
                    className={`h-2 rounded-full transition-all ${index === currentSlide ? "bg-accent w-6" : "bg-white/50 w-2"
                      }`}
                  />
                ))}
              </div>
            </Card>

            {/* Feature Cards with Icons */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-4 bg-white/30 hover:bg-white/50 backdrop-blur-sm border-white/20 ring-1 ring-white/10 shadow-md transition-colors rounded-xl">
                <Sun className="h-8 w-8 text-accent mb-2 drop-shadow" />
                <h3 className="font-semibold text-white mb-1 drop-shadow-md">Clean Energy</h3>
                <p className="text-sm text-white/90 drop-shadow">100% renewable power</p>
              </Card>
              <Card className="p-4 bg-white/30 hover:bg-white/50 backdrop-blur-sm border-white/20 ring-1 ring-white/10 shadow-md transition-colors rounded-xl">
                <Leaf className="h-8 w-8 text-accent mb-2 drop-shadow" />
                <h3 className="font-semibold text-white mb-1 drop-shadow-md">Eco-Friendly</h3>
                <p className="text-sm text-white/90 drop-shadow">Reduce carbon footprint</p>
              </Card>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="animate-fade-in animation-delay-200 h-full">
            <Card className="p-8 bg-white/95 backdrop-blur-sm border-white/20 rounded-xl shadow-lg h-full">
              <div className="flex items-center gap-2 mb-6">
                <ArrowRight className="h-6 w-6 text-accent" />
                <h2 className="text-2xl font-bold text-primary">Nhận báo giá miễn phí</h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground/80 mb-2">
                    Họ và tên
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Nguyễn Văn A"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full p-4 rounded-lg border-input"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground/80 mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full p-4 rounded-lg border-input"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground/80 mb-2">
                    Số điện thoại
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="0912 345 678"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full p-4 rounded-lg border-input"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full text-white text-lg font-medium py-6 rounded-lg group"
                >
                  Nhận báo giá
                  <ArrowRight className="ml-2 h-5 w-5 text-accent group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
              {/* Trust Stats */}
              {/* <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-3">
                  <p className="text-2xl font-bold text-accent">30%</p>
                  <p className="text-xs text-white/80">Tiết kiệm hóa đơn</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-3">
                  <p className="text-2xl font-bold text-accent">500+</p>
                  <p className="text-xs text-white/80">Dự án hoàn thành</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-3">
                  <p className="text-2xl font-bold text-accent">24/7</p>
                  <p className="text-xs text-white/80">Hỗ trợ kỹ thuật</p>
                </div>
              </div> */}
              <p className="text-sm text-gray-600 text-center mt-4">Miễn phí tư vấn và khảo sát</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
