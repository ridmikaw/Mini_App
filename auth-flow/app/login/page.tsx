import { LoginForm } from "@/components/login-form"
import { Logo } from "@/components/logo"
import { Testimonial } from "@/components/testimonial"

export default function LoginPage() {
  return (
    <div className="flex min-h-screen bg-black">
      {/* Left side - Login form */}
      <div className="flex w-full flex-col p-8 md:w-1/2 md:p-12 lg:p-16">
        <div className="mb-8">
          <Logo />
        </div>
        <div className="flex flex-1 flex-col justify-center">
          <h1 className="mb-4 text-4xl font-bold text-white">Welcome back to Room.me!</h1>
          <p className="mb-8 text-lg text-gray-400">
            Room.me is an innovative video conference product that revolutionizes virtual meetings.
          </p>
          <LoginForm />
        </div>
      </div>

      {/* Right side*/}
      <div className="hidden relative md:block md:w-1/2">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/30 z-10" />
        <Testimonial />
        <img
          src="/placeholder.svg?height=1080&width=1920"
          alt="Team collaboration"
          className="h-full w-full object-cover"
        />
        <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-2 z-20">
          <div className="h-1.5 w-8 rounded-full bg-indigo-500"></div>
          <div className="h-1.5 w-8 rounded-full bg-white/40"></div>
          <div className="h-1.5 w-8 rounded-full bg-white/40"></div>
          <div className="h-1.5 w-8 rounded-full bg-white/40"></div>
          <div className="h-1.5 w-8 rounded-full bg-white/40"></div>
        </div>
      </div>
    </div>
  )
}
