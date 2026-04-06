"use client"

import * as React from "react"
import { Moon, Sun, Settings } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function TopNav() {
  const { setTheme, theme } = useTheme()

  return (
    <nav className="sticky top-0 z-50 w-full border-b-4 border-black bg-background p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[0_0_15px_rgba(0,255,0,0.3)]">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <div className="bg-primary p-1 border-2 border-black">
            <span className="text-xl font-black italic tracking-tighter text-white">ML</span>
          </div>
          <h1 className="hidden text-xl font-black uppercase tracking-tight sm:block">
            MyLink <span className="text-primary italic">.v1.4</span>
          </h1>
        </div>

        <div className="flex items-center gap-4">
          {/* 관리자 버튼 (가정) */}
          <Button
            variant="outline"
            size="icon"
            className="border-2 border-black bg-accent shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none active:translate-x-[2px] active:translate-y-[2px]"
          >
            <Settings className="h-5 w-5" />
          </Button>

          {/* 테마 스위처 */}
          <Button
            variant="outline"
            size="icon"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="border-2 border-black bg-secondary shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none active:translate-x-[2px] active:translate-y-[2px]"
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">테마 전환</span>
          </Button>
        </div>
      </div>
    </nav>
  )
}
