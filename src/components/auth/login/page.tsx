import LoginForm from "@/components/auth/LoginForm"

export const metadata = {
  title: "Login - Inventaris Manajemen",
  description: "Login to your inventory management system",
}

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="text-2xl font-bold text-blue-600">
            📦 INVENTARIS
          </div>
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold text-center text-gray-900 mb-2">
          Welcome back!
        </h1>
        <p className="text-center text-gray-600 text-sm mb-8">
          Start managing your inventory faster and better
        </p>

        {/* Login Form */}
        <LoginForm />

        {/* Footer */}
        <p className="text-center text-xs text-gray-500 mt-8">
          © 2026 All Rights Reserved
        </p>
      </div>
    </div>
  )
}
