'use client'

interface SkeletonProps {
  className?: string
  variant?: 'text' | 'circular' | 'rectangular'
  width?: string | number
  height?: string | number
}

export default function Skeleton({
  className = '',
  variant = 'rectangular',
  width,
  height,
}: SkeletonProps) {
  const baseClasses = 'animate-pulse bg-secondary-200/50'

  const variantClasses = {
    text: 'rounded',
    circular: 'rounded-full',
    rectangular: 'rounded-lg',
  }

  const style: React.CSSProperties = {}
  if (width) style.width = typeof width === 'number' ? `${width}px` : width
  if (height) style.height = typeof height === 'number' ? `${height}px` : height

  return (
    <div
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      style={style}
      aria-hidden="true"
    />
  )
}

// Pre-built skeleton components for common use cases
export function CardSkeleton() {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4">
      <Skeleton variant="circular" className="w-12 h-12" />
      <Skeleton variant="text" className="h-6 w-3/4" />
      <Skeleton variant="text" className="h-4 w-full" />
      <Skeleton variant="text" className="h-4 w-5/6" />
    </div>
  )
}

export function HeroSkeleton() {
  return (
    <div className="min-h-[70vh] bg-secondary-950 flex items-center">
      <div className="container-custom">
        <div className="max-w-3xl space-y-6">
          <Skeleton variant="text" className="h-4 w-32 bg-white/10" />
          <Skeleton variant="text" className="h-16 w-full bg-white/10" />
          <Skeleton variant="text" className="h-16 w-3/4 bg-white/10" />
          <Skeleton variant="text" className="h-6 w-full bg-white/10" />
          <Skeleton variant="text" className="h-6 w-2/3 bg-white/10" />
          <div className="flex gap-4 pt-4">
            <Skeleton variant="rectangular" className="h-14 w-40 rounded-full bg-white/10" />
            <Skeleton variant="rectangular" className="h-14 w-40 rounded-full bg-white/10" />
          </div>
        </div>
      </div>
    </div>
  )
}

export function ImageSkeleton({ className = '' }: { className?: string }) {
  return (
    <div className={`relative overflow-hidden bg-secondary-200/50 ${className}`}>
      <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </div>
  )
}
