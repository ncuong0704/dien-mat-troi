import { SolarNavbar } from "@/components/solar-navbar"
import { SolarHero } from "@/components/solar-hero"
import { SolarBenefits } from "@/components/solar-benefits"
import { SolarProcess } from "@/components/solar-process"
import { SolarTestimonials } from "@/components/solar-testimonials"
import { SolarServices } from "@/components/solar-services"
import { SolarProjects } from "@/components/solar-projects"
import { SolarBlog } from "@/components/solar-blog"
import { SolarCTA } from "@/components/solar-cta"
import { SolarFooter } from "@/components/solar-footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <SolarNavbar />
      <SolarHero />
      <SolarBenefits />
      <SolarServices />
      <SolarProjects />
      <SolarProcess />
      <SolarTestimonials />
      <SolarBlog />
      <SolarCTA />
      <SolarFooter />
    </div>
  )
}
