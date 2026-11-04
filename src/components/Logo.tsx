import { Link } from 'react-router'
import { cn } from '@/lib/utils'

interface LogoProps {
  /** Reversed = white wordmark for navy backgrounds */
  reversed?: boolean
  className?: string
}

export default function Logo({ reversed = false, className }: LogoProps) {
  return (
    <Link
      to="/"
      aria-label="LightBridge Foundation, home"
      className={cn('flex items-center gap-3', className)}
    >
      <span
        className={cn(
          'flex items-center',
          reversed && 'rounded-xl bg-white px-2 py-1 shadow-card',
        )}
      >
        <img
          src="/images/uploads/img-6592-2b9a9d.jpg"
          alt="LightBridge Foundation logo"
          className="h-14 w-auto object-contain"
        />
      </span>
    </Link>
  )
}
