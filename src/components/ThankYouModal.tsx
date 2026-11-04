import { useCallback, useEffect, useRef } from 'react'
import { useLocation, useNavigate } from 'react-router'
import { AnimatePresence, motion } from 'framer-motion'
import { Heart, X } from 'lucide-react'
import { DONATION_THANKS_PARAM, DONATION_THANKS_VALUE } from '@/lib/donate'

/**
 * Shown when a donor returns from Stripe checkout with ?donation=thanks.
 */
export default function ThankYouModal() {
  const { pathname, search, hash } = useLocation()
  const navigate = useNavigate()
  const closeRef = useRef<HTMLButtonElement>(null)

  const isOpen =
    new URLSearchParams(search).get(DONATION_THANKS_PARAM) === DONATION_THANKS_VALUE

  const close = useCallback(() => {
    const params = new URLSearchParams(search)
    params.delete(DONATION_THANKS_PARAM)
    const query = params.toString()
    navigate({ pathname, search: query ? `?${query}` : '', hash }, { replace: true })
  }, [search, pathname, hash, navigate])

  useEffect(() => {
    if (!isOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [isOpen, close])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="thanks-backdrop"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-navy-900/70 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={close}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="thanks-modal-title"
            className="relative w-full max-w-[560px] overflow-hidden rounded-[20px] bg-white shadow-card-hover"
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 320, damping: 28 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-20 overflow-hidden bg-navy-900">
              <svg
                viewBox="0 0 560 100"
                className="absolute inset-x-0 bottom-0 h-full w-full"
                aria-hidden="true"
                preserveAspectRatio="none"
              >
                <path
                  d="M-20 95 Q280 -30 580 95"
                  fill="none"
                  stroke="#E3A63F"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
                <circle cx="280" cy="34" r="4" fill="#E3A63F" />
                <circle cx="180" cy="52" r="3" fill="#E3A63F" opacity="0.7" />
                <circle cx="380" cy="52" r="3" fill="#E3A63F" opacity="0.7" />
              </svg>
              <div className="absolute left-6 top-5 flex items-center gap-2 text-gold-400">
                <Heart className="h-5 w-5" aria-hidden="true" />
                <span className="font-inter text-[0.78rem] font-bold uppercase tracking-[0.22em]">
                  Thank you
                </span>
              </div>
            </div>

            <button
              ref={closeRef}
              type="button"
              onClick={close}
              aria-label="Close thank-you message"
              className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full text-white/80 transition-colors hover:bg-white/10 hover:text-white"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>

            <div className="px-8 py-8 sm:px-10">
              <h2
                id="thanks-modal-title"
                className="font-fraunces text-3xl font-semibold text-navy-800"
              >
                Thank you for crossing the{' '}
                <span className="italic text-gold-500">bridge</span> with us.
              </h2>
              <p className="mt-4 leading-[1.7] text-grey-500">
                Your gift has been received, and it means more than we can say.
                Because LightBridge is 100% volunteer-run, every dollar goes
                straight to food relief, youth programs and support for
                families across Western Sydney.
              </p>
              <p className="mt-4 leading-[1.7] text-grey-500">
                A receipt is on its way to your inbox. From all of us at
                LightBridge Foundation, thank you for lighting the way.
              </p>

              <button
                type="button"
                onClick={close}
                className="mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-gold-500 px-8 py-3.5 font-inter text-[0.95rem] font-semibold tracking-[0.01em] text-navy-900 transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-400 hover:shadow-gold-glow active:scale-[0.97]"
              >
                Back to the site
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}