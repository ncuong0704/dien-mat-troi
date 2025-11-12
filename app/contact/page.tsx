import Image from "next/image"
import type { Metadata } from "next"
import { Phone, Mail, MapPin, Clock, MessageSquare, Leaf } from "lucide-react"

import { SolarNavbar } from "@/components/solar-navbar"
import { SolarFooter } from "@/components/solar-footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { AboutHero } from "@/components/about-hero"
import { SolarCTA } from "@/components/solar-cta"

export const metadata: Metadata = {
  title: "Liên hệ SolarVN",
  description:
    "Liên hệ SolarVN để được tư vấn giải pháp điện mặt trời dân dụng và thương mại. Đặt lịch khảo sát, nhận báo giá và hỗ trợ kỹ thuật nhanh chóng.",
}

const contactMethods = [
  {
    icon: Phone,
    title: "Hotline tư vấn",
    description: "Nhận tư vấn trực tiếp từ chuyên gia năng lượng mặt trời 24/7.",
    detail: "1900 636 899",
    action: "Gọi ngay",
    href: "tel:1900636899",
  },
  {
    icon: Mail,
    title: "Email",
    description: "Gửi yêu cầu báo giá hoặc nhận tài liệu giải pháp chi tiết.",
    detail: "hello@solarvn.vn",
    action: "Gửi email",
    href: "mailto:hello@solarvn.vn",
  },
  {
    icon: MapPin,
    title: "Văn phòng",
    description: "Tầng 12, Tòa nhà Solar Center, 25 Nguyễn Du, Quận 1, TP.HCM.",
    detail: "Xem bản đồ",
    action: "Chỉ đường",
    href: "https://maps.google.com?q=SolarVN",
  },
]

const supportHighlights = [
  "Tư vấn miễn phí, báo giá trong 24 giờ",
  "Đội ngũ kỹ thuật hỗ trợ toàn quốc",
  "Giải pháp tài chính linh hoạt",
  "Bảo hành hệ thống tới 25 năm",
]

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <SolarNavbar />
      <AboutHero />
      <div className="flex flex-col gap-20 pb-20 pt-16 sm:pt-20">
        <section className="container mx-auto px-4">
          <div className="mx-auto mt-12 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {contactMethods.map((method) => {
              const Icon = method.icon
              return (
                <Card
                  key={method.title}
                  className="group relative overflow-hidden rounded-3xl border border-[#DAECFA] bg-white/90 p-6 shadow-sm transition-transform duration-300 hover:-translate-y-2 hover:border-[#1092CF]/40 hover:shadow-xl"
                >
                  <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-[#FFE205]/25 blur-3xl" />
                  <div className="relative flex flex-col gap-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#1092CF]/10">
                      <Icon className="h-6 w-6 text-[#1092CF]" />
                    </span>
                    <div className="space-y-2">
                      <h2 className="text-xl font-semibold text-[#031B2C]">{method.title}</h2>
                      <p className="text-sm text-slate-600">{method.description}</p>
                      <p className="text-base font-semibold text-[#1092CF]">{method.detail}</p>
                    </div>
                    <a
                      href={method.href}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[#0D7AB8] transition-colors hover:text-[#094f76]"
                    >
                      {method.action}
                      <MessageSquare className="h-4 w-4" />
                    </a>
                  </div>
                </Card>
              )
            })}
          </div>
        </section>
      </div>
      <SolarCTA />
      <SolarFooter />
    </main>
  )
}

