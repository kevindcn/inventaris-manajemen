import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Inventory Management System",
  description: "Professional inventory management with real-time analytics",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-background text-foreground">
        {children}
      </body>
    </html>
  )
}
