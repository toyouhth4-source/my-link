"use client"

import * as React from "react"
import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
  Moon,
  Sun,
  Github,
  FileText,
} from "lucide-react"

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import { useTheme } from "next-themes"

export function CommandMenu() {
  const [open, setOpen] = React.useState(false)
  const { setTheme, theme } = useTheme()

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  return (
    <>
      <p className="fixed bottom-4 left-4 z-50 hidden text-xs font-black uppercase tracking-tighter sm:block bg-white border-2 border-black px-2 py-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:bg-card">
        Press <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border-2 border-black bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100">
          <span className="text-xs">⌘</span>K
        </kbd> for Command Palette
      </p>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <div className="border-4 border-black bg-white dark:bg-card">
          <CommandInput placeholder="무엇을 도와드릴까요? (Type a command...)" className="font-bold" />
          <CommandList className="border-t-4 border-black">
            <CommandEmpty>결과를 찾을 수 없습니다.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem onSelect={() => setTheme(theme === "light" ? "dark" : "light")}>
                {theme === "light" ? <Moon className="mr-2 h-4 w-4" /> : <Sun className="mr-2 h-4 w-4" />}
                <span>다크모드 토글</span>
                <CommandShortcut>⌘T</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <FileText className="mr-2 h-4 w-4" />
                <span>이력서 다운로드</span>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator className="bg-black h-1" />
            <CommandGroup heading="Socials">
              <CommandItem>
                <Github className="mr-2 h-4 w-4" />
                <span>Github 프로필</span>
              </CommandItem>
              <CommandItem>
                <User className="mr-2 h-4 w-4" />
                <span>프로필 카드 보기</span>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </div>
      </CommandDialog>
    </>
  )
}
