"use client"

import { ArrowUp, Phone, X } from "lucide-react"
import { useMemo, useState } from "react"
import { StrapiImage } from "./renderer/StrapiImage"

interface ContactQuickItem {
  id: number
  label: string
  url: string
  bgColor?: string
  icon?: { url?: string; alternativeText?: string }
}

interface ContactQuickLink {
  id: number
  label: string
  href: string
  bgColor?: string
  icon?: { url?: string; alternativeText?: string }
}

interface QuickContactProps {
  contactQuickData: { data?: ContactQuickItem[] }
  locale: string
}

export default function QuickContact({ contactQuickData, locale }: QuickContactProps) {
  void locale

  const [isExpanded, setIsExpanded] = useState(false)

  const contactItems = useMemo<ContactQuickLink[]>(() => {
    const items = Array.isArray(contactQuickData?.data) ? contactQuickData.data : []

    return items.map((item) => ({
      id: item.id,
      label: item.label,
      href: item.url || "#",
      bgColor: item.bgColor,
      icon: item.icon,
    }))
  }, [contactQuickData])

  const renderContactItem = (
    item: ContactQuickLink,
    index: number,
    options: { variant: "desktop" | "mobile"; expanded?: boolean },
  ) => {
    const { variant, expanded = false } = options
    const isExternalLink = /^https?:/i.test(item.href)

    const baseClasses =
      variant === "desktop"
        ? "text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full transition-all duration-300 hover:scale-125 hover:shadow-2xl flex items-center justify-center relative group border-2 border-white/30 animate-fade-in hover:z-10 animate-float"
        : `text-white w-12 h-12 sm:w-14 sm:h-14 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-xl flex items-center justify-center relative group border-2 border-white/20 ${
            expanded ? "animate-fade-in-up" : "animate-fade-out-down"
          }`

    const style =
      variant === "desktop"
        ? {
            backgroundColor: item.bgColor || "#BB3031",
            animationDelay: `${index * 150}ms`,
            animationDuration: `${2 + (index % 3) * 0.5}s`,
          }
        : {
            backgroundColor: item.bgColor || undefined,
            animationDelay: `${index * 100}ms`,
            transitionDelay: `${index * 50}ms`,
          }

    const sizeClass = variant === "desktop" ? "w-6 h-6 sm:w-7 sm:h-7" : "w-8 h-8"

    return (
      <a
        key={item.id ?? index}
        href={item.href}
        target={isExternalLink ? "_blank" : "_self"}
        rel={isExternalLink ? "noopener noreferrer" : undefined}
        className={baseClasses}
        title={item.label}
        aria-label={`Liên hệ qua ${item.label}`}
        style={style}
      >
        {item.icon?.url ? (
          <StrapiImage
            src={item.icon.url || "/uploads/placeholder_e86d890455.svg"}
            alt={item.icon.alternativeText || item.label}
            width={variant === "desktop" ? 36 : 48}
            height={variant === "desktop" ? 36 : 48}
            className={`${sizeClass} rounded-sm ${variant === "desktop" ? "group-hover:animate-wiggle" : ""}`}
            sizes={variant === "desktop" ? "36px" : "48px"}
            quality={70}
          />
        ) : (
          <span className="text-sm font-bold">{item.label?.charAt(0) || "?"}</span>
        )}

        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-2 bg-gray-800 text-white text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none z-50 shadow-lg">
          {item.label}
          <div className="absolute left-full top-1/2 -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-l-4 border-transparent border-l-gray-800" />
        </div>

        {variant === "desktop" ? (
          <>
            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 bg-white/20 transition-opacity duration-300 group-hover:animate-pulse" />
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-full blur opacity-0 group-hover:opacity-30 transition-opacity duration-300 animate-spin-slow -z-10" />
            <div className="absolute top-0 right-0 w-2 h-2 bg-white rounded-full animate-ping opacity-70" />
          </>
        ) : null}
      </a>
    )
  }

  if (contactItems.length === 0) {
    return null
  }

  return (
    <div className="fixed right-4 top-3/4 lg:top-1/2 -translate-y-1/2 z-50 flex flex-col items-end gap-3">
      <div className="hidden lg:flex flex-col gap-2.5 bg-black/5 p-2 rounded-full backdrop-blur-sm border border-white/10 shadow-lg">
        {contactItems.map((item, index) => renderContactItem(item, index, { variant: "desktop" }))}
      </div>

      <div
        className={`absolute right-0 bottom-full mb-3 flex flex-col gap-2 transition-all duration-500 ease-in-out lg:hidden ${
          isExpanded ? "opacity-100 visible translate-y-0 scale-100" : "opacity-0 invisible translate-y-4 scale-95 pointer-events-none"
        }`}
      >
        {contactItems.map((item, index) => renderContactItem(item, index, { variant: "mobile", expanded: isExpanded }))}
      </div>

      <button
        type="button"
        onClick={() => setIsExpanded((prev) => !prev)}
        className={`lg:hidden w-14 h-14 sm:w-16 sm:h-16 rounded-full transition-all duration-500 ease-in-out flex items-center justify-center shadow-xl hover:shadow-2xl transform hover:scale-110 cursor-pointer relative overflow-hidden ${
          isExpanded
            ? "bg-gradient-to-br from-red-500 to-red-700 hover:from-red-600 hover:to-red-800"
            : "bg-gradient-to-br from-red-500 via-red-600 to-red-700 hover:from-red-600 hover:via-red-700 hover:to-red-800 animate-attention-pulse animate-float"
        }`}
        aria-label={isExpanded ? "Đóng menu liên hệ" : "Mở menu liên hệ"}
        aria-expanded={isExpanded}
      >
        {!isExpanded ? <div className="absolute inset-0 rounded-full border-2 border-red-300/50 animate-ping" /> : null}
        <div className="absolute inset-0 rounded-full bg-red-200/30 scale-0 animate-pulse" />

        {isExpanded ? (
          <X className="w-6 h-6 sm:w-7 sm:h-7 text-white transition-transform duration-300 rotate-180 relative z-10" />
        ) : (
          <div className="relative z-10 flex items-center justify-center">
            <div className="relative w-6 h-6 sm:w-7 sm:h-7 transition-all duration-400 ease-in-out overflow-hidden">
              <Phone className="w-6 h-6 sm:w-7 sm:h-7 text-white transition-all duration-500 ease-in-out animate-wiggle" />
            </div>
            <ArrowUp className="w-4 h-4 text-white absolute -top-1 -right-1 animate-notification-bounce z-20" />
          </div>
        )}

        {!isExpanded ? (
          <>
            <div className="absolute -top-2 -right-2 w-2 h-2 bg-red-400 rounded-full animate-notification-bounce z-10" style={{ animationDelay: "0.5s" }} />
            <div className="absolute -top-3 -right-3 w-1 h-1 bg-red-500 rounded-full animate-notification-bounce z-10" style={{ animationDelay: "1s" }} />
            <div className="absolute -top-4 -right-4 w-0.5 h-0.5 bg-red-600 rounded-full animate-notification-bounce z-10" style={{ animationDelay: "1.5s" }} />
          </>
        ) : null}

        {!isExpanded ? <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-400/40 via-red-500/30 to-red-600/40 blur-sm animate-pulse" /> : null}
      </button>
    </div>
  )
}