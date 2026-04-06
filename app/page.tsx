import { TopNav } from "@/components/top-nav"
import { Marquee } from "@/components/marquee"
import { ProfileCard } from "@/components/profile-card"
import { GithubWidget } from "@/components/github-widget"
import { ProjectCard } from "@/components/project-card"
import { Guestbook } from "@/components/guestbook"
import { CommandMenu } from "@/components/command-menu"
import { Button } from "@/components/ui/button"
import { FileText } from "lucide-react"

import { projects } from "@/data/projects"

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col bg-background font-mono selection:bg-primary selection:text-white">
      <TopNav />
      <Marquee />

      <main className="container mx-auto flex-grow px-4 py-8">
        <div className="grid gap-8">
          {/* 아이덴티티 영역 */}
          <section className="grid gap-8">
            <ProfileCard />
            <GithubWidget />
          </section>

          {/* 프로젝트 아카이브 보드 */}
          <section className="grid gap-6">
            <div className="flex items-center gap-2 border-b-4 border-black pb-2">
              <h3 className="text-2xl font-black uppercase italic tracking-tighter">Archive Board</h3>
              <div className="h-4 w-4 bg-primary" />
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {projects.map((project) => (
                <ProjectCard key={project.title} {...project} />
              ))}
            </div>
          </section>

          {/* 이력서 다운로드 버튼 */}
          <section className="flex justify-center py-4">
            <Button
              size="lg"
              className="group h-16 w-full max-w-md rounded-none border-4 border-black bg-secondary text-xl font-black uppercase tracking-widest text-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
            >
              <FileText className="mr-3 h-6 w-6" />
              Download Resume
            </Button>
          </section>

          {/* 방명록 섹션 */}
          <section>
            <Guestbook />
          </section>
        </div>
      </main>

      <footer className="border-t-4 border-black bg-muted p-8 text-center text-sm font-bold">
        <p>© 2026 HATAEHYUN. ALL RIGHTS RESERVED.</p>
        <p className="mt-2 text-primary">BUILT WITH NEXT.JS & NEUR-BRUTALISM</p>
      </footer>

      <CommandMenu />
    </div>
  )
}
