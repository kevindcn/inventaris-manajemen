// src/components/layout/Navbar.tsx
"use client"

import React from "react"
import Link from "next/link"
import { Button } from "../ui/Button"
import { Badge } from "../ui/Badge"

export default function Navbar() {
  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold text-xl tracking-tight">
              📦 Inventaris
            </span>
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-end space-x-2 md:ml-10">
          <Badge variant="secondary">Demo</Badge>
          <Button variant="ghost" size="sm">
            Logout
          </Button>
        </div>
      </div>
    </nav>
  )
}
