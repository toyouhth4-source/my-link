import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { profile } from "@/data/profile"

export function ProfileCard() {
  return (
    <Card className="relative overflow-hidden border-4 border-black bg-[#FFFFF0] p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:bg-card dark:shadow-[0_0_20px_rgba(0,255,0,0.2)]">
      <CardContent className="flex flex-col items-center gap-6 p-0 sm:flex-row sm:items-start">
        <div className="relative">
          <div className="absolute -right-2 -top-2 z-10 bg-accent px-2 py-1 border-2 border-black font-black text-xs uppercase">
            {profile.status}
          </div>
          <Avatar className="h-32 w-32 rounded-none border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <AvatarImage src={profile.avatarUrl} alt={profile.name} />
            <AvatarFallback>{profile.fallback}</AvatarFallback>
          </Avatar>
        </div>

        <div className="flex flex-col items-center gap-2 text-center sm:items-start sm:text-left">
          <div className="flex flex-wrap justify-center gap-2 sm:justify-start">
            {profile.badges.map((badge) => (
              <Badge
                key={badge.label}
                className={`rounded-none border-2 border-black font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] ${
                  badge.variant === "primary" ? "bg-primary text-white" : "bg-secondary text-black"
                }`}
              >
                {badge.label}
              </Badge>
            ))}
          </div>
          <h2 className="text-3xl font-black uppercase tracking-tighter sm:text-4xl">
            {profile.name} <span className="text-primary italic">{profile.englishName}</span>
          </h2>
          <p className="text-lg font-bold leading-tight">
            {profile.school} <br className="sm:hidden" />
            <span className="bg-accent px-1 border-b-2 border-black">{profile.major}</span>
          </p>
          <p className="mt-2 max-w-xs text-sm font-medium text-muted-foreground">
            {profile.bio}
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
