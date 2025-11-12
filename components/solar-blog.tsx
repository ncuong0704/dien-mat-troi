"use client"

import { CalendarIcon, BookOpenIcon } from "@heroicons/react/24/outline"
import { Button } from "@/components/ui/button"

export function SolarBlog() {
  const blogPosts = [
    {
      id: 1,
      title: "Pin mặt trời 2025: Công nghệ mới",
      excerpt:
        "Khám phá những công nghệ pin mặt trời tiên tiến nhất năm 2025, giúp tăng hiệu suất và giảm chi phí lắp đặt.",
      date: "15 Tháng 1, 2025",
      image: "https://cdn.pixabay.com/photo/2017/11/16/17/56/solar-2955323_640.jpg",
      category: "Công nghệ",
    },
    {
      id: 2,
      title: "Tiết kiệm điện với năng lượng mặt trời",
      excerpt: "Hướng dẫn chi tiết cách tối ưu hóa hệ thống điện mặt trời để tiết kiệm tối đa hóa đơn điện hàng tháng.",
      date: "12 Tháng 1, 2025",
      image: "https://cdn.pixabay.com/photo/2017/11/16/17/56/solar-2955323_640.jpg",
      category: "Tiết kiệm",
    },
    {
      id: 3,
      title: "Chính sách hỗ trợ điện mặt trời",
      excerpt: "Cập nhật các chính sách và ưu đãi mới nhất từ chính phủ cho việc lắp đặt hệ thống điện mặt trời.",
      date: "10 Tháng 1, 2025",
      image: "https://cdn.pixabay.com/photo/2017/11/16/17/56/solar-2955323_640.jpg",
      category: "Chính sách",
    },
  ]

  return (
    <section className="relative py-16 sm:py-24 overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "url(https://cdn.pixabay.com/photo/2019/12/16/08/31/daisy-4698867_640.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-4xl font-bold mb-2 uppercase" style={{ color: "#1092CF" }}>
            Tin tức mới nhất
          </h2>
          <p className="text-gray-600">Cập nhật thông tin và xu hướng năng lượng mặt trời</p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow p-4 m-2"
            >
              {/* Thumbnail */}
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
                {/* Yellow Date Badge */}
                <div
                  className="absolute top-4 right-4 px-3 py-1 rounded-full flex items-center gap-2 text-sm font-semibold"
                  style={{ backgroundColor: "#FFE205", color: "#1F2937" }}
                >
                  <CalendarIcon className="w-4 h-4" />
                  {post.date}
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                {/* Category with Book Icon */}
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <BookOpenIcon className="w-4 h-4" />
                  <span>{post.category}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold leading-tight" style={{ color: "#1092CF" }}>
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 leading-relaxed">{post.excerpt}</p>

                {/* Read More Button */}
                <Button
                  className="w-full text-base sm:text-lg rounded-lg"
                  style={{
                    backgroundColor: "#1092CF",
                    color: "white",
                  }}
                >
                  Đọc thêm
                </Button>
              </div>
            </article>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-8">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-base sm:text-lg font-semibold hover:underline"
            style={{ color: "#1092CF" }}
          >
            Xem tất cả bài viết
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
