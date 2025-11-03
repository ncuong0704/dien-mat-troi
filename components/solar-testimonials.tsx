"use client"

import { useState } from "react"
import {
  StarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ShieldCheckIcon,
  ClockIcon,
  CheckBadgeIcon,
} from "@heroicons/react/24/solid"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "Nguyễn Văn An",
    role: "Chủ nhà tại Hà Nội",
    quote: "Tiết kiệm 40% hóa đơn điện mỗi tháng. Đội ngũ tư vấn nhiệt tình, lắp đặt nhanh chóng và chuyên nghiệp.",
    customerImage: "https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_640.jpg",
    projectImage: "https://cdn.pixabay.com/photo/2024/01/10/16/11/solar-8499901_640.jpg",
    rating: 5,
    savings: "40%",
  },
  {
    id: 2,
    name: "Trần Thị Bình",
    role: "Doanh nghiệp tại TP.HCM",
    quote: "Tiết kiệm 45% chi phí điện cho nhà máy. Hệ thống hoạt động ổn định, dịch vụ hậu mãi tuyệt vời.",
    customerImage: "https://cdn.pixabay.com/photo/2018/10/29/21/46/human-3782189_640.jpg",
    projectImage: "https://cdn.pixabay.com/photo/2016/06/23/21/17/solar-1476224_640.jpg",
    rating: 5,
    savings: "45%",
  },
  {
    id: 3,
    name: "Lê Minh Cường",
    role: "Chủ khách sạn tại Đà Nẵng",
    quote: "Tiết kiệm 38% điện năng cho khách sạn. Đầu tư xứng đáng, thu hồi vốn nhanh hơn dự kiến.",
    customerImage: "https://cdn.pixabay.com/photo/2016/05/03/16/10/morning-1369446_640.jpg",
    projectImage: "https://cdn.pixabay.com/photo/2015/11/03/08/57/solar-power-1019830_640.jpg",
    rating: 5,
    savings: "38%",
  },
]

const trustBadges = [
  { icon: ShieldCheckIcon, text: "Bảo hành 25 năm" },
  { icon: ClockIcon, text: "Lắp đặt 3-5 ngày" },
  { icon: CheckBadgeIcon, text: "Chứng nhận quốc tế" },
]

export function SolarTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="relative py-8 overflow-hidden">
      {/* Background with faint green leaf pattern */}
      <div className="absolute inset-0 opacity-5">
        <Image src="/placeholder.svg?height=800&width=1600" alt="" fill className="object-cover" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-2" style={{ color: "#1092CF" }}>
            Khách hàng tin tưởng
          </h2>
          <p className="text-gray-600">Hơn 1000+ khách hàng hài lòng trên toàn quốc</p>
        </div>

        {/* Testimonial Slider */}
        <div className="relative max-w-4xl mx-auto">
          <Card className="p-4 m-2 bg-white shadow-lg">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left: Customer Info & Quote */}
              <div className="flex flex-col gap-4">
                {/* Customer Photo */}
                <div className="flex items-center gap-4">
                  <div
                    className="relative w-20 h-20 rounded-full overflow-hidden border-4"
                    style={{ borderColor: "#FFE205" }}
                  >
                    <Image
                      src={currentTestimonial.customerImage || "/placeholder.svg"}
                      alt={currentTestimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl" style={{ color: "#1092CF" }}>
                      {currentTestimonial.name}
                    </h3>
                    <p className="text-gray-600 text-sm">{currentTestimonial.role}</p>
                  </div>
                </div>

                {/* 5-Star Rating */}
                <div className="flex gap-1">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="w-6 h-6" style={{ color: "#FFE205" }} />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-gray-700 text-lg leading-relaxed">"{currentTestimonial.quote}"</blockquote>

                {/* Savings Badge */}
                <div
                  className="inline-flex items-center gap-2 self-start px-4 py-2 rounded-lg"
                  style={{ backgroundColor: "#FFE205" }}
                >
                  <span className="font-bold text-2xl" style={{ color: "#1092CF" }}>
                    {currentTestimonial.savings}
                  </span>
                  <span className="text-sm font-semibold text-gray-700">Tiết kiệm</span>
                </div>
              </div>

              {/* Right: Project Image */}
              <div className="relative h-64 md:h-full rounded-lg overflow-hidden">
                <Image
                  src={currentTestimonial.projectImage || "/placeholder.svg"}
                  alt="Solar installation project"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </div>
          </Card>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <Button
              onClick={prevTestimonial}
              size="lg"
              className="rounded-lg text-white font-semibold"
              style={{ backgroundColor: "#1092CF" }}
            >
              <ChevronLeftIcon className="w-5 h-5 mr-2" />
              Trước
            </Button>
            <Button
              onClick={nextTestimonial}
              size="lg"
              className="rounded-lg text-white font-semibold"
              style={{ backgroundColor: "#1092CF" }}
            >
              Tiếp theo
              <ChevronRightIcon className="w-5 h-5 ml-2" />
            </Button>
          </div>

          {/* Slider Indicators */}
          <div className="flex justify-center gap-2 mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className="w-3 h-3 rounded-full transition-all"
                style={{
                  backgroundColor: index === currentIndex ? "#1092CF" : "#d1d5db",
                }}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-8 flex flex-wrap justify-center gap-8">
          {trustBadges.map((badge, index) => (
            <div key={index} className="flex items-center gap-2">
              <badge.icon className="w-6 h-6" style={{ color: "#FFE205" }} />
              <span className="text-gray-700 font-medium">{badge.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
