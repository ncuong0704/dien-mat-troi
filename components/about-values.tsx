import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { HeartIcon, RocketLaunchIcon, ShieldCheckIcon, SparklesIcon } from "@heroicons/react/24/outline"
import Image from "next/image"

interface ValueItem {
  title: string
  description: string
  points: string[]
  icon: typeof SparklesIcon
  image: string
}

const coreValues: ValueItem[] = [
  {
    title: "Bền vững lâu dài",
    description: "Ưu tiên lựa chọn vật tư đạt chuẩn quốc tế, thân thiện môi trường và tối ưu hiệu suất trong 25 năm.",
    points: ["Tấm pin chuẩn Tier 1", "Giải pháp lưu trữ thông minh", "Bảo vệ hệ sinh thái địa phương"],
    icon: ShieldCheckIcon,
    image: "/images/about/value-sustain.svg",
  },
  {
    title: "Đổi mới liên tục",
    description: "Liên tục cập nhật công nghệ mới, thử nghiệm mô hình vận hành và bảo trì thông minh.",
    points: ["Giám sát IoT theo thời gian thực", "Tự động hóa bảo trì", "Cập nhật công nghệ định kỳ"],
    icon: RocketLaunchIcon,
    image: "/images/about/value-innovate.svg",
  },
  {
    title: "Khách hàng là trung tâm",
    description: "Cam kết đồng hành từ khâu tư vấn, thiết kế tới vận hành với chính sách minh bạch.",
    points: ["Chăm sóc 24/7", "Dự toán rõ ràng", "Đồng hành toàn dự án"],
    icon: HeartIcon,
    image: "/images/about/value-customer.svg",
  },
  {
    title: "Chuyên gia tận tâm",
    description: "Đội ngũ kỹ sư SolarVN có chứng chỉ quốc tế, dày dặn kinh nghiệm triển khai dự án quy mô lớn.",
    points: ["Quy trình chuẩn IEC", "Chứng nhận an toàn điện", "Đào tạo định kỳ"],
    icon: SparklesIcon,
    image: "/images/about/value-expert.svg",
  },
]

export function AboutValues() {
  return (
    <section className="relative overflow-hidden px-4 py-16 sm:py-24">
      <div className="absolute inset-0 -z-10 opacity-[0.15]">
        <Image
          src="/images/about/pattern.svg"
          alt="Solar pattern"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
      </div>
      <div className="absolute inset-0 -z-[8] bg-gradient-to-b from-white via-[#E6F4FF]/70 to-white" />
      <div className="absolute inset-x-0 top-0 -z-[7] h-40 bg-gradient-to-b from-[#1092CF]/15 via-transparent to-transparent" />

      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-8 text-2xl font-bold uppercase tracking-[0.2em] text-[#1092CF] sm:text-4xl">
            Giá trị cốt lõi
          </h2>
          <p className="text-base text-slate-600 sm:text-lg">
            Nền tảng dẫn dắt mọi quyết định của SolarVN, đảm bảo mỗi dự án đều mang lại hiệu quả bền vững và trải nghiệm
            vượt trội cho khách hàng.
          </p>
        </div>

        <div className="relative mt-16">
          <div className="hidden lg:block absolute left-16 right-16 top-14 h-1 rounded-full bg-[#1092CF]/20">
            <div className="absolute inset-0 flex items-center justify-between px-2">
              {coreValues.map((_, index) => (
                <span key={`connector-${index}`} className="h-3 w-3 rounded-full bg-[#1092CF]/40" />
              ))}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
            {coreValues.map((value, index) => {
              const Icon = value.icon
              const stepNumber = String(index + 1).padStart(2, "0")
              return (
                <Card
                  key={value.title}
                  className="group relative rounded-3xl border border-white/40 bg-white/80 p-6 shadow-lg backdrop-blur transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1092CF]/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="absolute -right-12 -top-12 h-24 w-24 rounded-full bg-[#FFE205]/35 blur-3xl transition-transform duration-300 group-hover:-translate-y-3 group-hover:translate-x-3" />

                  <div
                    className="absolute -top-6 left-1/2 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full text-lg font-bold shadow-lg"
                    style={{ backgroundColor: "#FFE205", color: "#1092CF" }}
                  >
                    {stepNumber}
                  </div>

                  <div className="mt-10 flex flex-col items-center gap-6">
                    <div
                      className="flex h-16 w-16 items-center justify-center rounded-full"
                      style={{ backgroundColor: "#1092CF" }}
                    >
                      <Icon className="h-8 w-8 text-white" />
                    </div>

                    <div className="relative h-32 w-full overflow-hidden rounded-2xl">
                      <Image
                        src={value.image}
                        alt={value.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(min-width: 1280px) 25vw, (min-width: 768px) 45vw, 100vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" />
                    </div>

                    <div className="flex w-full flex-col items-center gap-4 text-center">
                      <h3 className="text-xl font-semibold text-[#031B2C]">{value.title}</h3>
                      <p className="text-sm leading-relaxed text-slate-600 sm:text-base">{value.description}</p>
                    </div>

                    <div className="flex w-full flex-col gap-3 text-left text-sm text-slate-600 sm:text-base">
                      {value.points.map((point) => (
                        <div
                          key={point}
                          className="flex items-center gap-3 rounded-2xl border border-[#1092CF]/15 bg-[#F6FBFF] px-4 py-3 transition-colors group-hover:border-[#1092CF]/40"
                        >
                          <span className="h-2 w-2 rounded-full bg-[#1092CF]" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
