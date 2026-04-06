"use client"

import { GitHubCalendar } from "react-github-calendar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Github } from "lucide-react"

export function GithubWidget() {
  const calendarTheme = {
    light: ["#fdfbf7", "#ffccff", "#ff99ff", "#ff66ff", "#ff00ff"],
    dark: ["#1e1e1e", "#003300", "#006600", "#00aa00", "#00ff00"],
  }

  return (
    <Card className="border-4 border-black bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:bg-card dark:shadow-[0_0_15px_rgba(0,255,0,0.1)]">
      <CardHeader className="flex flex-row items-center justify-between border-b-4 border-black p-4">
        <CardTitle className="text-xl font-black uppercase italic tracking-tighter flex items-center gap-2">
          <Github className="h-5 w-5" />
          Contribution Grid
        </CardTitle>
        <span className="text-xs font-bold text-muted-foreground uppercase">@hataehyun</span>
      </CardHeader>
      <CardContent className="p-4 flex justify-center">
        <div className="w-full max-w-full overflow-hidden">
          <GitHubCalendar 
            username="hataehyun" 
            theme={calendarTheme}
            fontSize={12}
            blockSize={12}
            blockMargin={4}
          />
        </div>
      </CardContent>
    </Card>
  )
}
