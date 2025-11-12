"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sun, Leaf, Building2, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"

interface HeroSlide {
  id: string
  title: string
  description: string
  ctaLabel: string
  ctaHref: string
  backgroundImage: string
  icon: typeof Sun
}

const heroSlides: HeroSlide[] = [
  {
    id: "residential",
    title: "Giải pháp điện mặt trời cho gia đình",
    description:
      "Thiết kế và lắp đặt hệ thống điện mặt trời tối ưu theo nhu cầu sử dụng, đảm bảo an toàn và thẩm mỹ cho không gian sống.",
    ctaLabel: "Khám phá dịch vụ dân dụng",
    ctaHref: "/services/residential",
    backgroundImage: "https://cdn.pixabay.com/photo/2017/03/19/18/14/solar-energy-2157212_1280.jpg",
    icon: Sun,
  },
  {
    id: "commercial",
    title: "Tối ưu chi phí cho doanh nghiệp",
    description:
      "Lắp đặt hệ thống quy mô lớn, giám sát từ xa và bảo trì định kỳ giúp doanh nghiệp chủ động nguồn năng lượng sạch, giảm chi phí vận hành.",
    ctaLabel: "Dịch vụ cho doanh nghiệp",
    ctaHref: "/services/commercial",
    backgroundImage: "https://cdn.pixabay.com/photo/2015/04/05/16/26/solar-cells-708178_1280.jpg",
    icon: Building2,
  },
  {
    id: "sustainability",
    title: "Phát triển bền vững cùng SolarVN",
    description:
      "Cam kết chất lượng, bảo hành linh kiện chính hãng và đồng hành dài hạn để tối ưu hiệu suất, nâng cao giá trị bền vững cho khách hàng.",
    ctaLabel: "Tìm hiểu về SolarVN",
    ctaHref: "/about",
    backgroundImage: "https://cdn.pixabay.com/photo/2015/04/05/16/26/solar-cells-708178_1280.jpg",
    icon: Leaf,
  },
]

export function SolarHero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [dragStartX, setDragStartX] = useState<number | null>(null)
  const [dragDeltaX, setDragDeltaX] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    setDragStartX(e.clientX)
  }

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (dragStartX === null) return
    setDragDeltaX(e.clientX - dragStartX)
  }

  const resetDrag = () => {
    setDragStartX(null)
    setDragDeltaX(0)
  }

  const handlePointerUp = () => {
    if (dragStartX === null) return
    const threshold = 60
    if (Math.abs(dragDeltaX) > threshold) {
      if (dragDeltaX > 0) prevSlide()
      else nextSlide()
    }
    resetDrag()
  }

  return (
    <section
      className="relative h-screen overflow-hidden"
      style={{ touchAction: "pan-y" }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={resetDrag}
      onPointerLeave={resetDrag}
      aria-roledescription="carousel"
      aria-label="SolarVN hero carousel"
    >
      {heroSlides.map((slide, index) => {
        const Icon = slide.icon
        const isActive = index === currentSlide
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 h-full w-full transition-opacity duration-700 ease-out ${isActive ? "opacity-100" : "opacity-0"}`}
            style={{
              backgroundImage: `url(${slide.backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            aria-hidden={!isActive}
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/70 transition-transform duration-[1200ms] ease-out will-change-transform ${
                isActive ? "scale-110" : "scale-100"
              }`}
            />
            <div
              className={`absolute inset-0 flex flex-col items-center justify-center mx-auto max-w-3xl px-4 text-center transition-all duration-700 ${
                isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              aria-hidden={!isActive}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} trên ${heroSlides.length}`}
            >
              <div
                className={`mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-white/10 backdrop-blur border border-white/20 shadow-lg transition-all duration-700 ${
                  isActive ? "opacity-100 translate-y-0 delay-150" : "opacity-0 translate-y-2"
                }`}
              >
                <Icon className="h-10 w-10 text-[#FFE205]" />
              </div>
              <h1
                className={`text-4xl font-bold text-white md:text-5xl lg:text-6xl text-balance mb-6 transition-all duration-700 ${
                  isActive ? "opacity-100 translate-y-0 delay-300" : "opacity-0 translate-y-2"
                }`}
              >
                {slide.title}
              </h1>
              <p
                className={`text-lg md:text-xl text-white/80 leading-relaxed mb-8 transition-all duration-700 ${
                  isActive ? "opacity-100 translate-y-0 delay-500" : "opacity-0 translate-y-2"
                }`}
              >
                {slide.description}
              </p>
              <Button
                asChild
                size="lg"
                className={`bg-[#1092CF] hover:bg-[#0d7ab8] text-lg font-semibold px-8 py-6 inline-flex items-center gap-2 transition-all duration-700 ${
                  isActive ? "opacity-100 translate-y-0 delay-700" : "opacity-0 translate-y-2"
                }`}
              >
                <Link href={slide.ctaHref}>
                  {slide.ctaLabel}
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        )
      })}
      <div className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2">
        {heroSlides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Chuyển tới slide ${index + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${index === currentSlide ? "w-8 bg-[#FFE205]" : "w-2 bg-white/50 hover:bg-white/70"
              }`}
          />
        ))}
      </div>
    </section>
  )
}
