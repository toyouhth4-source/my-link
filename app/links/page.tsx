import Link from "next/link"
import { links } from "@/data/links"
import { Card, CardContent } from "@/components/ui/card"
import { TopNav } from "@/components/top-nav"
import { Marquee } from "@/components/marquee"

export const metadata = {
  title: "Links | MyLink",
  description: "하태현의 소셜 및 프로젝트 링크 모음입니다.",
  robots: "noindex, nofollow", // PRD 지침에 따라 검색 엔진 배제
}

export default function LinksPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background font-mono selection:bg-primary selection:text-white">
      <TopNav />
      <Marquee />

      <main className="container mx-auto flex-grow px-4 py-16">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-8">
          <div className="mb-4 text-center">
            <h1 className="text-4xl font-black uppercase italic tracking-tighter sm:text-6xl">
              Connect <span className="text-primary">Me</span>
            </h1>
            <p className="mt-2 text-lg font-bold text-muted-foreground">
              하태현의 전문성 증명을 위한 링크 모음입니다.
            </p>
          </div>

          <div className="grid w-full gap-5">
            {links.map((link) => {
              const Icon = link.icon
              return (
                <Link
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <Card className="border-4 border-black bg-white transition-all shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none dark:bg-muted dark:shadow-[0_0_20px_rgba(0,255,0,0.1)]">
                    <CardContent className="flex items-center gap-6 p-6">
                      <div className="flex h-12 w-12 items-center justify-center border-4 border-black bg-accent shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:bg-primary group-hover:text-white group-hover:shadow-none">
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="text-xl font-black uppercase tracking-tight">
                        {link.title}
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              )
            })}
          </div>
        </div>
      </main>

      <footer className="border-t-4 border-black bg-muted p-8 text-center text-sm font-bold">
        <p>© 2026 HATAEHYUN. ALL RIGHTS RESERVED.</p>
        <p className="mt-2 text-primary">BUILT WITH NEXT.JS & NEUR-BRUTALISM</p>
      </footer>
    </div>
  )
}
