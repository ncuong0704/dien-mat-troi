import { Card } from "@/components/ui/card"

interface StatItem {
  label: string
  value: string
  description: string
}

const stats: StatItem[] = [
  {
    label: "Dự án đã hoàn thành",
    value: "1,200+",
    description: "Hệ thống dân dụng và thương mại trên 25 tỉnh thành",
  },
  {
    label: "Tổng công suất",
    value: "95 MWp",
    description: "Đóng góp vào lưới điện quốc gia & giảm tải giờ cao điểm",
  },
  {
    label: "Khí thải giảm mỗi năm",
    value: "18.500 tấn",
    description: "Tương đương trồng mới hơn 820.000 cây xanh",
  },
  {
    label: "Điểm hài lòng khách hàng",
    value: "4.9/5",
    description: "Đánh giá trung bình trên hơn 700 phản hồi sau dự án",
  },
]

export function AboutStats() {
  return (
    <section className="relative overflow-hidden px-4 py-16 sm:py-24">
       {/* Background workflow pattern */}
       <div className="absolute inset-0 opacity-90">
        <img src="https://cdn.pixabay.com/photo/2016/05/01/21/20/earth-1365995_960_720.jpg" alt="" className="w-full h-full object-cover" />
      </div>

      <div className="mx-auto max-w-7xl relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-2xl font-bold uppercase tracking-[0.2em] text-white sm:text-4xl">
            Dấu ấn SolarVN
          </h2>
          <p className="text-base text-white sm:text-lg">
            Những con số phản ánh niềm tin của khách hàng và tác động thực tế của SolarVN đối với cộng đồng năng lượng
            sạch.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-6 sm:grid-cols-2">
          {stats.map((stat) => (
            <Card
              key={stat.label}
              className="group relative overflow-hidden rounded-3xl border border-white/20 bg-white/80 p-8 shadow-sm backdrop-blur transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#1092CF]/10 via-transparent to-transparent transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-[#FFE205]/40 blur-3xl transition-transform duration-300 group-hover:-translate-y-3 group-hover:translate-x-3" />
              <div className="relative flex flex-col gap-4 text-left">
                <span className="inline-flex w-fit items-center rounded-full bg-[#1092CF]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#1092CF]">
                  {stat.label}
                </span>
                <span className="text-4xl font-semibold text-[#031B2C] sm:text-5xl">{stat.value}</span>
                <p className="text-sm text-slate-600 sm:text-base">{stat.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

