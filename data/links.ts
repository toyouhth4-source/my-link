import { Github, Linkedin, BookOpen, FileText, Globe } from "lucide-react"

export interface Link {
  id: string
  title: string
  url: string
  icon?: any
}

export const links: Link[] = [
  {
    id: "github",
    title: "GitHub",
    url: "https://github.com/hataehyun",
    icon: Github,
  },
  {
    id: "linkedin",
    title: "LinkedIn",
    url: "https://linkedin.com/in/hataehyun",
    icon: Linkedin,
  },
  {
    id: "blog",
    title: "Tech Blog",
    url: "https://velog.io/@hataehyun",
    icon: BookOpen,
  },
  {
    id: "resume",
    title: "Resume (Google Drive)",
    url: "https://drive.google.com/file/d/REPLACEME", // PRD v1.4 지침에 따라 드라이브 공유 링크로 매핑
    icon: FileText,
  },
  {
    id: "portfolio",
    title: "Official Portfolio",
    url: "https://hataehyun.com",
    icon: Globe,
  },
]
