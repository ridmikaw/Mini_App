"use client"

import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { useAuthStore } from "@/lib/store"

export default function DashboardPage() {
  const { isAuthenticated, logout } = useAuthStore()
  const router = useRouter()

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login")
    }
  }, [isAuthenticated, router])

  if (!isAuthenticated) {
    return null
  }

  const handleLogout = () => {
    logout()
    router.push("/login")
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md rounded-lg border bg-white p-8 shadow-md">
        <h1 className="mb-6 text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="mb-8 text-gray-600">Welcome, you're logged in.</p>
        <Button onClick={handleLogout} className="w-full">
          Logout
        </Button>
      </div>
    </div>
  )
}

