/**
 * Donation settings.
 *
 * STRIPE_DONATION_LINK: paste your Stripe Payment Link here
 * (e.g. 'https://donate.stripe.com/xxxxxxxx'). Create it in the Stripe
 * dashboard with "Let customers choose what to pay" so donors can enter any
 * amount, and under "After payment" choose "Don't show confirmation page"
 * and redirect to: https://YOUR-SITE/?donation=thanks
 *
 * While this is empty, donate buttons fall back to emailing the foundation.
 */
export const STRIPE_DONATION_LINK = ''

export const DONATION_MAILTO =
  'mailto:info@lightbridgefoundation.org.au?subject=Donation%20to%20LightBridge%20Foundation'

/** Query string Stripe redirects back with after a successful donation. */
export const DONATION_THANKS_PARAM = 'donation'
export const DONATION_THANKS_VALUE = 'thanks'