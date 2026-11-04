import { Link } from 'react-router'
import { cn } from '@/lib/utils'

interface LogoProps {
  /** Reversed = white wordmark for navy backgrounds */
  reversed?: boolean
  className?: string
}

export default function Logo({ className }: LogoProps) {
  return (
    <Link
      to="/"
      aria-label="LightBridge Foundation, home"
      className={cn('flex items-center gap-3', className)}
    >
      <span className="flex h-16 w-[86px] items-center justify-center overflow-hidden">
        <img
          src="/images/uploads/lightbridge-profile-picture-047ffd.png"
          alt="LightBridge Foundation logo"
          className="h-full w-full scale-[1.4] object-cover"
        />
      </span>
    </Link>
  )
}
