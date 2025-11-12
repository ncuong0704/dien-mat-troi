import { Button } from "@/components/ui/button"
import { Users, Sun } from "lucide-react"
import Image from "next/image"

interface TimelineItem {
  url: string
  year: string
  title: string
  description: string
}

const timelineImages: TimelineItem[] = [
  {
    url: "/images/about/timeline-2014.svg",
    year: "2014",
    title: "Khởi đầu SolarVN",
    description: "Thành lập đội ngũ kỹ sư với sứ mệnh phổ cập năng lượng mặt trời",
  },
  {
    url: "/images/about/timeline-2018.svg",
    year: "2018",
    title: "Mở rộng toàn quốc",
    description: "Hoàn thành hơn 500 hệ thống cho hộ gia đình và doanh nghiệp",
  },
  {
    url: "/images/about/timeline-2024.svg",
    year: "2024",
    title: "Đối tác chiến lược",
    description: "Trở thành đối tác của các tập đoàn năng lượng hàng đầu tại Việt Nam",
  },
] 

export function AboutHero() {
  return (
    <section className="relative h-[70vh] overflow-hidden mt-16">
      <div className="absolute inset-0 z-10">
        <Image
          src="/images/about/hero-team.svg"
          alt="Đội ngũ SolarVN"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-black/65 to-black/85 transition-transform duration-[1200ms] ease-out will-change-transform lg:scale-105" />
      </div>

      <div className="absolute inset-0 z-10">
        <div className="mx-auto flex h-full max-w-6xl flex-col items-center justify-center gap-6 px-4 text-center text-white sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-6">
            <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur transition-all duration-700">
              <Sun className="h-10 w-10 text-[#FFE205]" />
            </div>
          </div>

          <div className="space-y-6">
            <h1 className="text-balance text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Đồng hành cùng Việt Nam chuyển dịch năng lượng bền vững
            </h1>
            <p className="text-balance text-base text-white/80 sm:text-lg">
              Từ những hệ thống đầu tiên tại miền Trung cho đến hàng ngàn dự án trên toàn quốc, chúng tôi luôn đặt khách
              hàng ở trung tâm để mang lại giải pháp tối ưu, an toàn và tiết kiệm dài hạn.
            </p>
          </div>
        </div>
      </div>

    </section>
  )
}
