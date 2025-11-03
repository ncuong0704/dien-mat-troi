"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { HomeIcon, BuildingOfficeIcon } from "@heroicons/react/24/outline"
import Image from "next/image"

type FilterType = "all" | "residential" | "commercial"

interface Project {
  id: number
  title: string
  type: "residential" | "commercial"
  image: string
  capacity: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "Dự án 10kW",
    type: "residential",
    image: "https://cdn.pixabay.com/photo/2022/09/06/21/51/solar-system-7437557_640.jpg",
    capacity: "10kW",
  },
  {
    id: 2,
    title: "Dự án 50kW",
    type: "commercial",
    image: "https://cdn.pixabay.com/photo/2022/09/06/21/51/solar-system-7437557_640.jpg",
    capacity: "50kW",
  },
  {
    id: 3,
    title: "Dự án 15kW",
    type: "residential",
    image: "https://cdn.pixabay.com/photo/2022/09/06/21/51/solar-system-7437557_640.jpg",
    capacity: "15kW",
  },
  {
    id: 4,
    title: "Dự án 100kW",
    type: "commercial",
    image: "https://cdn.pixabay.com/photo/2022/09/06/21/51/solar-system-7437557_640.jpg",
    capacity: "100kW",
  },
  {
    id: 5,
    title: "Dự án 8kW",
    type: "residential",
    image: "https://cdn.pixabay.com/photo/2022/09/06/21/51/solar-system-7437557_640.jpg",
    capacity: "8kW",
  },
  {
    id: 6,
    title: "Dự án 75kW",
    type: "commercial",
    image: "https://cdn.pixabay.com/photo/2022/09/06/21/51/solar-system-7437557_640.jpg",
    capacity: "75kW",
  },
]

export function SolarProjects() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all")

  const filteredProjects = projects.filter((project) => (activeFilter === "all" ? true : project.type === activeFilter))

  return (
    <section className="py-8 px-4 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <Image src="/placeholder.svg?height=800&width=1600" alt="" fill className="object-cover" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <h2 className="text-4xl font-bold text-center mb-8" style={{ color: "#1092CF" }}>
          Dự án thực tế
        </h2>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Button
            onClick={() => setActiveFilter("all")}
            variant={activeFilter === "all" ? "default" : "outline"}
            className={`text-lg px-6 py-6 rounded-lg transition-all ${
              activeFilter === "all" ? "text-white" : "border-2 text-gray-700 hover:border-[#1092CF]"
            }`}
            style={activeFilter === "all" ? { backgroundColor: "#1092CF" } : {}}
          >
            Tất cả
          </Button>
          <Button
            onClick={() => setActiveFilter("residential")}
            variant={activeFilter === "residential" ? "default" : "outline"}
            className={`text-lg px-6 py-6 rounded-lg transition-all flex items-center gap-2 ${
              activeFilter === "residential" ? "text-white" : "border-2 text-gray-700 hover:border-[#1092CF]"
            }`}
            style={activeFilter === "residential" ? { backgroundColor: "#1092CF" } : {}}
          >
            <HomeIcon className="w-5 h-5" />
            Dân dụng
          </Button>
          <Button
            onClick={() => setActiveFilter("commercial")}
            variant={activeFilter === "commercial" ? "default" : "outline"}
            className={`text-lg px-6 py-6 rounded-lg transition-all flex items-center gap-2 ${
              activeFilter === "commercial" ? "text-white" : "border-2 text-gray-700 hover:border-[#1092CF]"
            }`}
            style={activeFilter === "commercial" ? { backgroundColor: "#1092CF" } : {}}
          >
            <BuildingOfficeIcon className="w-5 h-5" />
            Thương mại
          </Button>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-105 m-2"
            >
              {/* Project image */}
              <div className="relative h-80 w-full">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <h3 className="text-2xl font-bold mb-2" style={{ color: "#1092CF" }}>
                    {project.title}
                  </h3>
                  <p className="text-white mb-4">Công suất: {project.capacity}</p>
                  <Button
                    className="w-full text-lg py-6 rounded-lg font-semibold transition-all hover:opacity-90"
                    style={{ backgroundColor: "#FFE205", color: "#000" }}
                  >
                    Chi tiết
                  </Button>
                </div>
              </div>

              {/* Static title badge */}
              <div
                className="absolute top-4 left-4 px-4 py-2 rounded-lg font-semibold"
                style={{ backgroundColor: "#1092CF", color: "white" }}
              >
                {project.capacity}
              </div>
            </div>
          ))}
        </div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">Không có dự án nào trong danh mục này</p>
          </div>
        )}
      </div>
    </section>
  )
}
