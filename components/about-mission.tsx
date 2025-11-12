"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { type LucideIcon, Lightbulb, Sparkles } from "lucide-react"
import Image from "next/image"

interface MissionCard {
  title: string
  description: string
  image: string
  highlights: string[]
  icon: LucideIcon
}

const missionCards: MissionCard[] = [
  {
    title: "Sứ mệnh",
    description:
      "Đưa năng lượng mặt trời đến gần hơn với mọi gia đình và doanh nghiệp Việt Nam, giúp tối ưu chi phí vận hành và giảm tải áp lực lên lưới điện quốc gia.",
    image: "/images/about/mission.svg",
    highlights: ["Giảm phát thải CO₂ cho cộng đồng", "Tối ưu chi phí lên đến 40%", "Vận hành an toàn & bền vững"],
    icon: Lightbulb,
  },
  {
    title: "Tầm nhìn",
    description:
      "Trở thành đơn vị tiên phong kiến tạo hệ sinh thái năng lượng tái tạo toàn diện, đồng hành cùng Việt Nam trên hành trình chuyển dịch năng lượng.",
    image: "/images/about/vision.svg",
    highlights: ["Đối tác công nghệ hàng đầu", "Đổi mới liên tục", "Phủ sóng dịch vụ trên 25 tỉnh thành"],
    icon: Sparkles,
  },
]

export function AboutMission() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  return (
    <section className="relative overflow-hidden py-20 sm:py-24">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#E6F4FF]/70 to-white" />
        <div className="absolute left-1/2 top-10 h-64 w-64 -translate-x-1/2 rounded-full bg-[#FFE205]/30 blur-[120px]" />
      </div>
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl sm:text-4xl font-bold mb-2 uppercase" style={{ color: "#1092CF" }}>
            Sứ mệnh và tầm nhìn
          </h2>
          <p className="mt-4 text-base text-slate-600 sm:text-lg">
            SolarVN kết hợp đội ngũ kỹ sư dày dặn kinh nghiệm, công nghệ theo chuẩn quốc tế và dịch vụ trọn gói để mang
            tới trải nghiệm liền mạch cho khách hàng xuyên suốt vòng đời dự án.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-6xl gap-6 sm:gap-8 lg:grid-cols-2">
          {missionCards.map((card) => {
            const Icon = card.icon
            const isHovered = hoveredCard === card.title
            return (
              <article
                key={card.title}
                className={`relative overflow-hidden rounded-3xl border border-white/60 bg-white/80 p-1 shadow-sm backdrop-blur transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl`}
                onMouseEnter={() => setHoveredCard(card.title)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="relative h-56 w-full overflow-hidden rounded-3xl">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    sizes="(min-width: 1024px) 50vw, (min-width: 640px) 60vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#031B2C]/90 via-[#031B2C]/40 to-transparent" />
                  <div className="absolute top-6 right-6 rounded-full bg-[#FFE205] p-4 text-[#031B2C] shadow-lg">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="absolute bottom-6 left-6 right-6 text-left">
                    <h3 className="text-2xl font-semibold text-white">{card.title}</h3>
                  </div>
                </div>

                <div className="space-y-5 px-6 pb-6 pt-8">
                  <p className="text-sm leading-relaxed text-slate-600 sm:text-base">{card.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {card.highlights.map((item) => (
                      <Badge
                        key={item}
                        variant="secondary"
                        className="px-3 py-1 text-xs font-semibold sm:text-sm"
                        style={{
                          backgroundColor: isHovered ? "#FFE205" : "#E6F4FF",
                          color: isHovered ? "#031B2C" : "#1092CF",
                        }}
                      >
                        {item}
                      </Badge>
                    ))}
                  </div>
                  <Button
                    className="w-full rounded-full border border-[#1092CF] bg-[#1092CF] py-5 text-base font-semibold text-white transition-transform hover:-translate-y-0.5 hover:bg-[#0D7AB8]"
                  >
                    Tư vấn giải pháp phù hợp
                  </Button>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
