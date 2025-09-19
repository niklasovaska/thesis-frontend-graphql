import { cn } from "@/lib/utils"

interface LoaderProps {
  size?: "sm" | "md" | "lg"
  className?: string
}

export default function Loader({ size = "md", className }: LoaderProps) {
  const sizes = {
    sm: "h-4 w-4 border-2",
    md: "h-6 w-6 border-2",
    lg: "h-8 w-8 border-4",
  }

  return (
    <div
      className={cn(
        "animate-spin rounded-full border-t-transparent border-primary",
        sizes[size],
        className
      )}
    />
  )
}