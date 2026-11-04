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
      className={cn('flex shrink-0 items-center', className)}
    >
      <img
        src="/images/uploads/lightbridge-profile-picture-047ffd.png"
        alt="LightBridge Foundation logo"
        className="block h-14 w-auto max-w-[180px] object-contain"
      />
    </Link>
  )
}
