// src/components/ui/Badge.tsx
import React from "react"
import { cn } from "../../lib/utils"

type BadgeVariant =
  | "default"
  | "secondary"
  | "destructive"
  | "outline"
  | "inStock"
  | "lowStock"
  | "outOfStock"

interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement> {
  variant?: BadgeVariant  // ← FIX INI
}

function Badge({ 
  className, 
  variant = "default" as BadgeVariant,  // ← FIX INI
  ...props 
}: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        variant === "default" && "bg-primary text-primary-foreground hover:bg-primary/80",
        variant === "secondary" && "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        variant === "destructive" && "bg-destructive text-destructive-foreground hover:bg-destructive/80",
        variant === "outline" && "border text-foreground",
        variant === "inStock" && "bg-green-100 text-green-800 border border-green-200",
        variant === "lowStock" && "bg-yellow-100 text-yellow-800 border border-yellow-200",
        variant === "outOfStock" && "bg-red-100 text-red-800 border border-red-200",
        className
      )}
      {...props}
    />
  )
}

Badge.displayName = "Badge"

export { Badge }
