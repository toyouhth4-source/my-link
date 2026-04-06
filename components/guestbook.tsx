"use client"

import { useState, useEffect } from "react"
import { auth, db, googleProvider } from "@/lib/firebase"
import { signInWithPopup, signOut, onAuthStateChanged, User } from "firebase/auth"
import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  serverTimestamp,
  deleteDoc,
  doc,
} from "firebase/firestore"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MessageSquare, LogOut, Trash2 } from "lucide-react"

interface Comment {
  id: string
  text: string
  user: {
    name: string
    image: string
    uid: string
  }
  createdAt: {
    seconds: number
    nanoseconds: number
  } | null
}

export function Guestbook() {
  const [user, setUser] = useState<User | null>(null)
  const [comment, setComment] = useState("")
  const [comments, setComments] = useState<Comment[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
    })

    const q = query(collection(db, "guestbook"), orderBy("createdAt", "desc"))
    const unsubscribeFirestore = onSnapshot(q, (snapshot) => {
      const docs = snapshot.docs.map((doc) => {
        const data = doc.data()
        return {
          id: doc.id,
          ...data,
          // Firestore Timestamp를 클린하게 관리
          createdAt: data.createdAt ? {
            seconds: data.createdAt.seconds,
            nanoseconds: data.createdAt.nanoseconds
          } : null
        }
      }) as Comment[]
      setComments(docs)
    }, (error) => {
      console.error("Firestore snapshot error:", error)
    })

    return () => {
      unsubscribeAuth()
      unsubscribeFirestore()
    }
  }, [])

  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider)
    } catch (error) {
      console.error("Login failed:", error)
    }
  }

  const handleLogout = async () => {
    try {
      await signOut(auth)
    } catch (error) {
      console.error("Logout failed:", error)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!user || !comment.trim()) return

    setLoading(true)
    try {
      await addDoc(collection(db, "guestbook"), {
        text: comment,
        user: {
          name: user.displayName || "Anonymous",
          image: user.photoURL || "",
          uid: user.uid,
        },
        createdAt: serverTimestamp(),
      })
      setComment("")
    } catch (error) {
      console.error("Failed to add comment:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id: string, authorUid: string) => {
    if (user?.uid !== authorUid) {
      alert("본인의 댓글만 삭제할 수 있습니다.")
      return
    }
    if (!window.confirm("정말 삭제하시겠습니까?")) return
    
    try {
      await deleteDoc(doc(db, "guestbook", id))
    } catch (error) {
      console.error("Failed to delete comment:", error)
      alert("삭제에 실패했습니다.")
    }
  }

  return (
    <div className="grid gap-6">
      <div className="flex items-center gap-2 border-b-4 border-black pb-2">
        <h3 className="text-2xl font-black uppercase italic tracking-tighter">Guestbook</h3>
        <div className="h-4 w-4 bg-accent" />
      </div>

      <Card className="border-4 border-black bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:bg-card">
        <CardContent className="p-6">
          {!user ? (
            <div className="flex flex-col items-center justify-center py-8 text-center">
              <MessageSquare className="mb-4 h-12 w-12 text-muted-foreground" />
              <p className="font-bold">로그인 후 방명록을 남겨주세요!</p>
              <Button
                onClick={handleLogin}
                className="mt-4 rounded-none border-2 border-black bg-primary font-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px]"
              >
                Google 로그인
              </Button>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="flex items-center justify-between gap-4 border-b-2 border-black pb-4">
                <div className="flex items-center gap-2">
                  <Avatar className="h-8 w-8 rounded-none border-2 border-black">
                    <AvatarImage src={user.photoURL || ""} />
                    <AvatarFallback>{user.displayName?.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <span className="font-black text-sm uppercase">{user.displayName}</span>
                </div>
                <Button variant="ghost" size="sm" onClick={handleLogout} className="font-bold hover:bg-destructive/10">
                  <LogOut className="mr-2 h-4 w-4" /> 로그아웃
                </Button>
              </div>

              <form onSubmit={handleSubmit} className="flex gap-2">
                <Input
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="따뜻한 한마디를 남겨주세요!"
                  className="rounded-none border-2 border-black bg-muted font-bold focus:ring-0 focus:ring-offset-0"
                />
                <Button
                  disabled={loading || !comment.trim()}
                  className="rounded-none border-2 border-black bg-accent font-black text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-none"
                >
                  작성
                </Button>
              </form>
            </div>
          )}

          <div className="mt-8 space-y-4">
            {comments.map((item) => (
              <div
                key={item.id}
                className="group relative border-2 border-black bg-white p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all dark:bg-muted"
              >
                <div className="flex items-start gap-3">
                  <Avatar className="h-10 w-10 rounded-none border-2 border-black">
                    <AvatarImage src={item.user.image} />
                    <AvatarFallback>{item.user.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black uppercase tracking-tight">{item.user.name}</span>
                      {user?.uid === item.user.uid && (
                        <button
                          onClick={() => handleDelete(item.id, item.user.uid)}
                          className="opacity-0 transition-opacity group-hover:opacity-100"
                        >
                          <Trash2 className="h-4 w-4 text-destructive hover:scale-110" />
                        </button>
                      )}
                    </div>
                    <p className="text-sm font-bold leading-tight">{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
