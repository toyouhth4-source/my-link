export interface Project {
  title: string
  description: string
  techStack: string[]
  githubUrl: string
  liveUrl: string
}

export const projects: Project[] = [
  {
    title: "Project A",
    description: "이 프로젝트는 네오 브루탈리즘 스타일의 UI를 탐구하기 위해 제작되었습니다. Next.js와 Tailwind CSS를 사용하여 빠른 성능과 독특한 디자인을 결합했습니다.",
    techStack: ["Next.js", "Tailwind", "Framer Motion"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Project B",
    description: "Firebase를 활용한 실시간 데이터 동기화 시스템입니다. 사이버펑크 테마의 다크 모드를 지원하며, 사용자 경험을 극대화하기 위한 물리적 인터랙션이 포함되어 있습니다.",
    techStack: ["Firebase", "TypeScript", "React"],
    githubUrl: "#",
    liveUrl: "#",
  },
]
