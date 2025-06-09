import type { LucideIcon } from "lucide-react"

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  className?: string
}

export function FeatureCard({ icon: Icon, title, className }: FeatureCardProps) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <div className="bg-red-600 rounded-lg p-3 flex items-center justify-center">
        <Icon className="h-6 w-6 text-white" />
      </div>
      <span className="text-white text-sm md:text-base">{title}</span>
    </div>
  )
}
