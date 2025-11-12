"use client"

import { ChatBubbleLeftRightIcon, DocumentChartBarIcon, WrenchScrewdriverIcon } from "@heroicons/react/24/outline"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function SolarProcess() {
  const steps = [
    {
      number: "01",
      title: "Tư vấn",
      description: "Chuyên gia tư vấn miễn phí, khảo sát địa điểm và đánh giá nhu cầu điện năng của bạn",
      icon: ChatBubbleLeftRightIcon,
      images: ["https://cdn.pixabay.com/photo/2024/06/12/14/42/businessman-8825634_640.jpg", "https://cdn.pixabay.com/photo/2024/01/10/16/11/solar-8499901_640.jpg"],
      buttonText: "Đặt lịch tư vấn",
    },
    {
      number: "02",
      title: "Thiết kế",
      description: "Thiết kế hệ thống tối ưu, tính toán công suất và lập phương án chi tiết cho ngôi nhà",
      icon: DocumentChartBarIcon,
      images: ["https://cdn.pixabay.com/photo/2016/06/24/22/24/solar-panels-1477987_640.jpg", "https://cdn.pixabay.com/photo/2020/02/12/15/40/solar-power-4843112_640.jpg"],
      buttonText: "Xem thiết kế mẫu",
    },
    {
      number: "03",
      title: "Lắp đặt",
      description: "Đội ngũ kỹ thuật chuyên nghiệp lắp đặt nhanh chóng, an toàn và đảm bảo chất lượng",
      icon: WrenchScrewdriverIcon,
      images: ["https://cdn.pixabay.com/photo/2024/01/10/16/05/solar-8499874_640.jpg", "https://plus.unsplash.com/premium_photo-1682148205811-e8a8ce759f4b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c29sYXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500"],
      buttonText: "Xem quy trình",
    },
  ]

  return (
    <section className="relative py-16 sm:py-24 overflow-hidden ">
      {/* Background workflow pattern */}
      <div className="absolute inset-0 opacity-5">
        <img src="https://cdn.pixabay.com/photo/2016/05/01/21/20/earth-1365995_960_720.jpg" alt="" className="w-full h-full object-cover" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Header */}
        <h2 className="text-2xl sm:text-4xl font-bold text-center mb-12 sm:mb-16 uppercase" style={{ color: "#1092CF" }}>
          Quy trình 3 bước
        </h2>

        {/* Timeline Container */}
        <div className="relative">
          {/* Connecting Line - Hidden on mobile, shown on desktop */}
          <div
            className="hidden lg:block absolute top-16 left-0 right-0 h-1 mx-auto"
            style={{ width: "calc(100% - 200px)", marginLeft: "100px", backgroundColor: "#1092CF" }}
          >
            <div
              className="absolute inset-0 flex justify-between items-center"
              style={{ width: "calc(100% + 200px)", left: "-100px" }}
            >
              {steps.map((_, index) => (
                <div key={index} className="w-4 h-4 rounded-full" style={{ backgroundColor: "#1092CF" }} />
              ))}
            </div>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <Card key={index} className="p-4 bg-white hover:shadow-xl transition-shadow duration-300 relative">
                  {/* Number Badge */}
                  <div
                    className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold shadow-lg z-10"
                    style={{ backgroundColor: "#FFE205", color: "#1092CF" }}
                  >
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="flex justify-center mt-6 mb-4">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: "#1092CF" }}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-center mb-4" style={{ color: "#1092CF" }}>
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-center mb-6 leading-relaxed">{step.description}</p>

                  {/* Mini Gallery - 2 images */}
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {step.images.map((image, imgIndex) => (
                      <div key={imgIndex} className="relative aspect-video rounded overflow-hidden group">
                        <img
                          src={image || "/placeholder.svg"}
                          alt={`${step.title} ${imgIndex + 1}`}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        {/* Icon overlay */}
                        <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <Icon className="w-8 h-8" style={{ color: "#FFE205" }} />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Button */}
                  <Button
                    className="w-full text-base sm:text-lg font-semibold rounded-lg py-6 hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: "#FFE205", color: "#1092CF" }}
                  >
                    {step.buttonText}
                  </Button>
                </Card>
              )
            })}
          </div>

          {/* Vertical connecting line for mobile */}
          <div
            className="lg:hidden absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 -z-10"
            style={{ backgroundColor: "#1092CF", opacity: 0.3 }}
          />
        </div>
      </div>
    </section>
  )
}
