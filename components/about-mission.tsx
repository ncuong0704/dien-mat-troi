"use client"

import { LightBulbIcon, SparklesIcon } from "@heroicons/react/24/outline"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function AboutMission() {
  return (
    <section className="relative py-8 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <Image src="/placeholder.svg?height=800&width=1920" alt="Background" fill className="object-cover opacity-5" />
      </div>

      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-[#1092CF] mb-2">Sứ mệnh của chúng tôi</h2>
          <div className="w-24 h-1 bg-[#FFE205] mx-auto"></div>
        </div>

        {/* Two-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Mission Card */}
          <div className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] p-4 m-2">
            <div className="relative h-64 mb-4 overflow-hidden rounded-lg">
              <Image src="/placeholder.svg?height=400&width=600" alt="Sứ mệnh" fill className="object-cover" />
              {/* Icon Overlay */}
              <div className="absolute top-4 right-4 bg-[#FFE205] p-3 rounded-full shadow-lg">
                <LightBulbIcon className="h-8 w-8 text-[#1092CF]" />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-[#1092CF]">Sứ mệnh</h3>
              <p className="text-gray-600 leading-relaxed">
                Mang năng lượng sạch đến mọi nhà, góp phần xây dựng một tương lai bền vững cho Việt Nam. Chúng tôi cam
                kết cung cấp giải pháp năng lượng mặt trời chất lượng cao với chi phí hợp lý.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#FFE205] mt-1">●</span>
                  <span>Giảm thiểu tác động môi trường</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FFE205] mt-1">●</span>
                  <span>Tiết kiệm chi phí điện năng</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FFE205] mt-1">●</span>
                  <span>Nâng cao chất lượng cuộc sống</span>
                </li>
              </ul>
              <Button className="w-full bg-[#1092CF] hover:bg-[#0d7ab8] text-white rounded-lg text-lg py-6">
                Tìm hiểu thêm
              </Button>
            </div>
          </div>

          {/* Vision Card */}
          <div className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] p-4 m-2">
            <div className="relative h-64 mb-4 overflow-hidden rounded-lg">
              <Image src="/placeholder.svg?height=400&width=600" alt="Tầm nhìn" fill className="object-cover" />
              {/* Icon Overlay */}
              <div className="absolute top-4 right-4 bg-[#FFE205] p-3 rounded-full shadow-lg">
                <SparklesIcon className="h-8 w-8 text-[#1092CF]" />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-[#1092CF]">Tầm nhìn</h3>
              <p className="text-gray-600 leading-relaxed">
                Trở thành đơn vị hàng đầu Việt Nam trong lĩnh vực năng lượng mặt trời, tiên phong trong việc chuyển đổi
                năng lượng xanh và phát triển bền vững cho cộng đồng.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#FFE205] mt-1">●</span>
                  <span>Dẫn đầu thị trường năng lượng sạch</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FFE205] mt-1">●</span>
                  <span>Đổi mới công nghệ liên tục</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FFE205] mt-1">●</span>
                  <span>Mở rộng phủ sóng toàn quốc</span>
                </li>
              </ul>
              <Button className="w-full bg-[#1092CF] hover:bg-[#0d7ab8] text-white rounded-lg text-lg py-6">
                Tìm hiểu thêm
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
