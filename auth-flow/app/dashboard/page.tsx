"use client"

import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { useAuthStore } from "@/lib/store"
import { Logo } from "@/components/logo"

export default function DashboardPage() {
  const { isAuthenticated, user, logout } = useAuthStore()
  const router = useRouter()

  useEffect(() => {
    // Redirect to login if not authenticated
    if (!isAuthenticated) {
      router.push("/login")
    }
  }, [isAuthenticated, router])

  // If not authenticated, don't render anything while redirecting
  if (!isAuthenticated) {
    return null
  }

  const handleLogout = () => {
    logout()
    router.push("/login")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <Logo />
          <Button onClick={handleLogout} variant="outline">
            Logout
          </Button>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl py-12 sm:px-6 lg:px-8">
          <div className="bg-white shadow rounded-lg p-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Dashboard</h1>
            <p className="text-gray-600 mb-6">Welcome, you're logged in as {user}.</p>
            <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-100">
              <p className="text-indigo-700">
                This is a protected route. You can only see this page if you're authenticated.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
