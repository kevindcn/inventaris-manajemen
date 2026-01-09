import LoginForm from "@/components/auth/LoginForm"
import LoginCarousel from "@/components/auth/LoginCarousel"

export const metadata = {
  title: "Login - Inventaris Manajemen",
  description: "Login to your inventory management system",
}

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-white flex">
      {/* Left Side - Carousel (40%) */}
      <div className="hidden lg:flex w-2/5 bg-gradient-to-br from-blue-50 to-blue-100">
        <LoginCarousel />
      </div>

      {/* Right Side - Login Form (60%) */}
      <div className="w-full lg:w-3/5 flex items-center justify-center p-6 lg:p-12">
        <div className="w-full max-w-sm">
          {/* Mobile Logo (Hidden on Desktop) */}
          <div className="flex lg:hidden justify-center mb-6">
            <div className="text-2xl font-bold text-blue-600">
              📦 INVENTARIS
            </div>
          </div>

          {/* Title */}
          <h1 className="text-2xl font-bold text-center text-gray-900 mb-1.5">
            Welcome back!
          </h1>
          <p className="text-center text-gray-600 text-xs mb-6">
            Start managing your finance faster and better
          </p>

          {/* Login Form */}
          <LoginForm />

          {/* Footer */}
          <p className="text-center text-xs text-gray-400 mt-6">
            © 2022 All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  )
}
