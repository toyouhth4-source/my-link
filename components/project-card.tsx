import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  techStack: string[]
  githubUrl?: string
  liveUrl?: string
  thumbnailUrl?: string
}

export function ProjectCard({
  title,
  description,
  techStack,
  githubUrl,
  liveUrl,
  thumbnailUrl,
}: ProjectCardProps) {
  return (
    <Card className="group flex h-full flex-col border-4 border-black bg-white transition-all shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] dark:bg-card dark:shadow-[0_0_15px_rgba(0,255,0,0.2)]">
      <div className="relative h-48 w-full border-b-4 border-black bg-muted overflow-hidden">
        {thumbnailUrl ? (
          <img
            src={thumbnailUrl}
            alt={title}
            className="h-full w-full object-cover grayscale transition-all group-hover:grayscale-0"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-secondary font-black text-2xl italic uppercase text-black/20">
            No Thumbnail
          </div>
        )}
        <div className="absolute top-2 left-2 flex gap-1">
          {techStack.slice(0, 3).map((tech) => (
            <Badge key={tech} className="rounded-none border-2 border-black bg-accent text-[10px] text-black">
              {tech}
            </Badge>
          ))}
        </div>
      </div>

      <CardHeader>
        <CardTitle className="text-2xl font-black uppercase tracking-tight">{title}</CardTitle>
      </CardHeader>

      <CardContent className="flex-grow">
        <p className="text-sm font-medium leading-relaxed text-muted-foreground">{description}</p>
      </CardContent>

      <CardFooter className="flex gap-2 border-t-4 border-black p-4">
        {githubUrl && (
          <Button
            variant="outline"
            size="sm"
            asChild
            className="flex-1 rounded-none border-2 border-black bg-white font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none active:translate-x-[2px] active:translate-y-[2px]"
          >
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" /> Github
            </a>
          </Button>
        )}
        {liveUrl && (
          <Button
            variant="default"
            size="sm"
            asChild
            className="flex-1 rounded-none border-2 border-black bg-primary font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none active:translate-x-[2px] active:translate-y-[2px]"
          >
            <a href={liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" /> Live
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
