import { useMemo } from 'react'
import { Link } from 'react-router'
import { motion } from 'framer-motion'
import { ArrowRight, HeartHandshake, House } from 'lucide-react'
import { THANK_YOU_MESSAGES } from '@/lib/donate-links'

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]
const STORAGE_KEY = 'lb-last-thankyou'

function pickMessage() {
  const last = Number(sessionStorage.getItem(STORAGE_KEY) ?? -1)
  let idx = Math.floor(Math.random() * THANK_YOU_MESSAGES.length)
  if (THANK_YOU_MESSAGES.length > 1) {
    while (idx === last) idx = Math.floor(Math.random() * THANK_YOU_MESSAGES.length)
  }
  sessionStorage.setItem(STORAGE_KEY, String(idx))
  return THANK_YOU_MESSAGES[idx]
}

export default function DonationSuccess() {
  const message = useMemo(pickMessage, [])

  return (
    <section className="navy-gradient texture-dots relative flex min-h-[calc(100vh-72px)] items-center justify-center px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 32, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: EASE }}
        className="w-full max-w-[640px] rounded-[24px] bg-white p-10 text-center shadow-card-hover sm:p-14"
      >
        <motion.span
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 260, damping: 18, delay: 0.25 }}
          className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gold-100"
        >
          <HeartHandshake className="h-8 w-8 text-gold-500" aria-hidden="true" />
        </motion.span>

        <p className="mt-6 font-inter text-[0.78rem] font-bold uppercase tracking-[0.22em] text-gold-500">
          Donation received
        </p>
        <h1 className="mt-3 font-fraunces text-[clamp(1.9rem,4vw,2.6rem)] font-semibold leading-[1.15] text-navy-800">
          {message.title}
        </h1>
        <p className="mx-auto mt-5 max-w-[46ch] leading-[1.75] text-grey-500">
          {message.body}
        </p>
        <p className="mt-6 text-[0.85rem] font-medium text-grey-500">
          A receipt has been emailed to you by Stripe. LightBridge Foundation is
          an ACNC-registered charity and Public Benevolent Institution.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/"
            className="inline-flex min-h-11 items-center gap-2 rounded-full bg-gold-500 px-7 py-3 font-inter text-[0.95rem] font-semibold text-navy-900 transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-400 hover:shadow-gold-glow"
          >
            <House className="h-4 w-4" aria-hidden="true" />
            Back to home
          </Link>
          <Link
            to="/programs"
            className="group inline-flex min-h-11 items-center gap-1.5 font-inter text-[0.95rem] font-semibold text-navy-800 transition-colors hover:text-navy-600"
          >
            See what your gift supports
            <ArrowRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </div>
      </motion.div>
    </section>
  )
}
