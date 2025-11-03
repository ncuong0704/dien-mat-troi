"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Sun, Home, Building2 } from "lucide-react"
import { cn } from "@/lib/utils"

export function SolarNavbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Sun className="h-8 w-8 text-[#FFE205] transition-transform group-hover:rotate-90 duration-300" />
            <span className="text-xl font-bold text-[#FFE205]">SolarVN</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent/10 hover:text-foreground focus:bg-accent/10 focus:text-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 relative",
                      )}
                    >
                      Trang chủ
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FFE205] transition-all duration-300 group-hover:w-full" />
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/about" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent/10 hover:text-foreground focus:bg-accent/10 focus:text-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 relative",
                      )}
                    >
                      Về chúng tôi
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FFE205] transition-all duration-300 group-hover:w-full" />
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="relative group">
                    Dịch vụ
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FFE205] transition-all duration-300 group-hover:w-full" />
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/services/residential"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/10 hover:text-accent-foreground focus:bg-accent/10 focus:text-accent-foreground group"
                          >
                            <div className="flex items-center gap-3">
                              <Home className="h-5 w-5 text-[#1092CF]" />
                              <div>
                                <div className="text-sm font-medium leading-none mb-1">Điện mặt trời dân dụng</div>
                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                  Giải pháp năng lượng mặt trời cho gia đình
                                </p>
                              </div>
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/services/commercial"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/10 hover:text-accent-foreground focus:bg-accent/10 focus:text-accent-foreground group"
                          >
                            <div className="flex items-center gap-3">
                              <Building2 className="h-5 w-5 text-[#1092CF]" />
                              <div>
                                <div className="text-sm font-medium leading-none mb-1">Điện mặt trời thương mại</div>
                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                  Lắp đặt năng lượng mặt trời quy mô doanh nghiệp
                                </p>
                              </div>
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/projects" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent/10 hover:text-foreground focus:bg-accent/10 focus:text-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 relative",
                      )}
                    >
                      Dự án
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FFE205] transition-all duration-300 group-hover:w-full" />
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/blog" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent/10 hover:text-foreground focus:bg-accent/10 focus:text-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 relative",
                      )}
                    >
                      Tin tức
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FFE205] transition-all duration-300 group-hover:w-full" />
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/contact" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent/10 hover:text-foreground focus:bg-accent/10 focus:text-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 relative",
                      )}
                    >
                      Liên hệ
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FFE205] transition-all duration-300 group-hover:w-full" />
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Button
              size="lg"
              className="bg-[#1092CF] hover:bg-[#0d7ab8] text-white rounded-lg text-base font-medium px-6"
            >
              Nhận báo giá
            </Button>
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
              <div className="flex flex-col gap-4 mt-8">
                <Link
                  href="/"
                  className="flex items-center gap-2 text-lg font-medium hover:text-[#1092CF] transition-colors p-2"
                  onClick={() => setIsOpen(false)}
                >
                  <Sun className="h-5 w-5 text-[#FFE205]" />
                  Trang chủ
                </Link>

                <Link
                  href="/about"
                  className="flex items-center gap-2 text-lg font-medium hover:text-[#1092CF] transition-colors p-2"
                  onClick={() => setIsOpen(false)}
                >
                  <Sun className="h-5 w-5 text-[#FFE205]" />
                  Về chúng tôi
                </Link>

                <div className="space-y-2">
                  <div className="text-lg font-medium p-2 text-muted-foreground">Dịch vụ</div>
                  <Link
                    href="/services/residential"
                    className="flex items-center gap-3 text-base hover:text-[#1092CF] transition-colors p-2 pl-4"
                    onClick={() => setIsOpen(false)}
                  >
                    <Home className="h-5 w-5 text-[#1092CF]" />
                    Điện mặt trời dân dụng
                  </Link>
                  <Link
                    href="/services/commercial"
                    className="flex items-center gap-3 text-base hover:text-[#1092CF] transition-colors p-2 pl-4"
                    onClick={() => setIsOpen(false)}
                  >
                    <Building2 className="h-5 w-5 text-[#1092CF]" />
                    Điện mặt trời thương mại
                  </Link>
                </div>

                <Link
                  href="/projects"
                  className="flex items-center gap-2 text-lg font-medium hover:text-[#1092CF] transition-colors p-2"
                  onClick={() => setIsOpen(false)}
                >
                  <Sun className="h-5 w-5 text-[#FFE205]" />
                  Dự án
                </Link>

                <Link
                  href="/blog"
                  className="flex items-center gap-2 text-lg font-medium hover:text-[#1092CF] transition-colors p-2"
                  onClick={() => setIsOpen(false)}
                >
                  <Sun className="h-5 w-5 text-[#FFE205]" />
                  Tin tức
                </Link>

                <Link
                  href="/contact"
                  className="flex items-center gap-2 text-lg font-medium hover:text-[#1092CF] transition-colors p-2"
                  onClick={() => setIsOpen(false)}
                >
                  <Sun className="h-5 w-5 text-[#FFE205]" />
                  Liên hệ
                </Link>

                <Button
                  size="lg"
                  className="bg-[#1092CF] hover:bg-[#0d7ab8] text-white rounded-lg text-lg font-medium mt-4 w-full"
                  onClick={() => setIsOpen(false)}
                >
                  Nhận báo giá
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
