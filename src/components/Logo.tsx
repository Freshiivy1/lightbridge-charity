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
      <span className="block h-16 w-16 overflow-hidden rounded-lg bg-[#111111]">
        <img
          src="/images/uploads/lightbridge-logo-white-gold-on-black-d42b83.png"
          alt="LightBridge Foundation logo"
          className="block h-full w-full scale-[1.4] object-contain"
        />
      </span>
    </Link>
  )
}
