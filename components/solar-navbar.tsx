"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Sun, Home, Building2, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

type MenuLink = {
  href: string
  label: string
  children?: Array<MenuLink>
}

interface LanguageOption {
  code: string
  label: string
  flag:string
}

const MENU_ITEMS: MenuLink[] = [
  {
    href: "/",
    label: "Trang chủ",
  },
  {
    href: "/about",
    label: "Về chúng tôi",
  },
  {
    href: "/services",
    label: "Dịch vụ",
    children: [
      {
        href: "/services/residential",
        label: "Điện mặt trời dân dụng",
      },
      {
        href: "/services/commercial",
        label: "Điện mặt trời thương mại",
      },
    ],
  },
  {
    href: "/projects",
    label: "Dự án",
    children: [
      {
        href: "/projects/residential",
        label: "Điện mặt trời dân dụng",
      },
      {
        href: "/projects/commercial",
        label: "Điện mặt trời thương mại",
      },
    ],
  },
  {
    href: "/blog",
    label: "Tin tức",
  },
  {
    href: "/contact",
    label: "Liên hệ",
  },
]

const LANGUAGE_OPTIONS: LanguageOption[] = [
  { code: "vi", label: "Tiếng Việt", flag: "https://cdn.pixabay.com/photo/2012/04/10/23/04/vietnam-26834_1280.png" },
  { code: "en", label: "English", flag: "https://cdn.pixabay.com/photo/2020/11/12/05/21/american-flag-5734426_1280.png" },
  { code: "ko", label: "한국어", flag: "https://cdn.pixabay.com/photo/2016/05/30/15/33/julia-roberts-1424985_1280.png" },
]

export function SolarNavbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [openDropdowns, setOpenDropdowns] = useState<Set<string>>(new Set())
  const pathname = usePathname()

  const toggleDropdown = (itemLabel: string) => {
    setOpenDropdowns((prev) => {
      const next = new Set(prev)
      if (next.has(itemLabel)) {
        next.delete(itemLabel)
      } else {
        next.add(itemLabel)
      }
      return next
    })
  }

  const isActiveLink = (href: string) => {
    if (!pathname) return false
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  const isGroupActive = (item: MenuLink) =>
    !!item.children && item.children.some((child) => isActiveLink(child.href))

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Sun className="h-8 w-8 text-[#FFE205] transition-transform group-hover:rotate-90 duration-300" />
            <span className="text-xl font-bold text-[#FFE205]">SolarVN</span>
          </Link>

          {/* Desktop Navigation - Simple Links + Dropdown */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-2">
              {MENU_ITEMS.map((item) => {
                const hasChildren = !!item.children && item.children.length > 0
                if (!hasChildren) {
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "relative px-3 py-2 text-sm font-medium rounded-md transition-colors text-foreground hover:text-[#1092CF] hover:bg-gray-200",
                      )}
                    >
                      {item.label}
                    </Link>
                  )
                }

                return (
                  <div key={item.label} className="relative group">
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md cursor-pointer transition-colors text-foreground hover:text-[#1092CF] hover:bg-gray-200",
                      )}
                      aria-haspopup="menu"
                    >
                      {item.label}
                      <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                    </Link>
                    <ul
                      className={cn(
                        "absolute left-0 z-20 w-72 rounded-md border border-border bg-background/95 shadow-lg backdrop-blur p-2",
                        "invisible opacity-0 translate-y-1 transition-all duration-200 ease-out",
                        "group-hover:visible group-hover:opacity-100 group-hover:translate-y-0",
                      )}
                    >
                      {item.children?.map((child) => {
                        return (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              className={cn(
                                "block rounded-md p-3 text-sm transition-colors hover:text-[#1092CF] hover:bg-gray-200",
                              )}
                            >
                              {child.label}
                            </Link>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                )
              })}
            </div>
            {/* Language Selector (UI only) */}
            <details className="hidden md:block relative">
              <summary className="list-none flex items-center gap-2 rounded-md border border-border px-3 py-2 text-sm font-medium cursor-pointer bg-background/80 hover:text-[#1092CF] hover:bg-gray-200 transition-colors">
                <img
                  src={LANGUAGE_OPTIONS[0].flag}
                  alt=""
                  aria-hidden="true"
                  className="h-4 w-6 object-cover rounded-sm"
                  loading="lazy"
                />
                <span>Tiếng Việt</span>
              </summary>
              <ul className="absolute right-0 mt-2 w-40 rounded-md border border-border bg-background/95 shadow-lg backdrop-blur">
                {LANGUAGE_OPTIONS.map((language) => (
                  <li key={language.code}>
                    <button
                      type="button"
                      className="w-full flex items-center gap-2 px-3 py-2 text-sm hover:text-[#1092CF] hover:bg-gray-200 transition-colors text-left"
                    >
                      <img
                        src={language.flag}
                        alt=""
                        aria-hidden="true"
                        className="h-4 w-6 object-cover rounded-sm"
                        loading="lazy"
                      />
                      <span>{language.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </details>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-4 mt-16">
                {/* Language Selector (UI only) */}
                <details className="relative px-2">
                  <summary className="list-none flex items-center gap-2 rounded-md border border-border px-3 py-2 text-sm font-medium cursor-pointer bg-background/80 hover:bg-accent/10 transition-colors">
                    <img
                      src={LANGUAGE_OPTIONS[0].flag}
                      alt=""
                      aria-hidden="true"
                      className="h-4 w-6 object-cover rounded-sm"
                      loading="lazy"
                    />
                    <span>Tiếng Việt</span>
                  </summary>
                  <ul className="absolute left-2 right-2 mt-2 rounded-md border border-border bg-background shadow-lg">
                    {LANGUAGE_OPTIONS.map((language) => (
                      <li key={language.code}>
                        <button
                          type="button"
                          className="w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-accent/10 transition-colors text-left"
                        >
                          <img
                            src={language.flag}
                            alt=""
                            aria-hidden="true"
                            className="h-4 w-6 object-cover rounded-sm"
                            loading="lazy"
                          />
                          <span>{language.label}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </details>

                {MENU_ITEMS.map((item) => {
                  const hasChildren = !!item.children && item.children.length > 0
                  const isDropdownOpen = openDropdowns.has(item.label)
                  
                  return (
                    <div key={item.href} className="px-2">
                      {hasChildren ? (
                        <>
                          <button
                            type="button"
                            className={cn(
                              "w-full flex items-center justify-between text-lg font-medium transition-colors py-2 px-4 rounded-md hover:text-[#1092CF]",
                            )}
                            onClick={() => toggleDropdown(item.label)}
                          >
                            <span>{item.label}</span>
                            <ChevronDown
                              className={cn(
                                "h-4 w-4 transition-transform duration-200",
                                isDropdownOpen && "rotate-180"
                              )}
                            />
                          </button>
                          {isDropdownOpen && (
                            <ul className="ml-4 mt-1 space-y-1">
                              {item.children?.map((child) => {
                                return (
                                  <li key={child.href}>
                                    <Link
                                      href={child.href}
                                      className={cn(
                                        "block text-base transition-colors py-2 px-4 rounded-md hover:text-[#1092CF]",
                                      )}
                                      onClick={() => setIsOpen(false)}
                                    >
                                      {child.label}
                                    </Link>
                                  </li>
                                )
                              })}
                            </ul>
                          )}
                        </>
                      ) : (
                        <Link
                          href={item.href}
                          className={cn(
                            "block text-lg font-medium transition-colors py-2 px-4 rounded-md hover:text-[#1092CF]",
                          )}
                          onClick={() => setIsOpen(false)}
                        >
                          {item.label}
                        </Link>
                      )}
                    </div>
                  )
                })}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
