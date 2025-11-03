import { AboutHero } from "@/components/about-hero"
import { AboutMission } from "@/components/about-mission"
import { AboutValues } from "@/components/about-values"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Về chúng tôi - SolarVN",
  description:
    "Tìm hiểu về SolarVN - Tiên phong trong lĩnh vực năng lượng mặt trời tại Việt Nam với hơn 10 năm kinh nghiệm",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <AboutHero />
      <AboutMission />
      <AboutValues />
    </main>
  )
}
