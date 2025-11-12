import { AboutHero } from "@/components/about-hero"
import { SolarCTA } from "@/components/solar-cta"
import { SolarFooter } from "@/components/solar-footer"
import { SolarNavbar } from "@/components/solar-navbar"
import { SolarProjects } from "@/components/solar-projects"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Về chúng tôi - SolarVN",
  description:
    "Tìm hiểu về SolarVN - Tiên phong trong lĩnh vực năng lượng mặt trời tại Việt Nam với hơn 10 năm kinh nghiệm",
}

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <SolarNavbar />
      <AboutHero />
      <SolarProjects />
      <SolarCTA />
      <SolarFooter />
    </main>
  )
}
