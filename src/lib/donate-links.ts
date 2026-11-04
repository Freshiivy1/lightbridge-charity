/** Stripe Payment Links for LightBridge Foundation donations (AUD). */
export const STRIPE_LINKS: Record<string, string> = {
  '$20': 'https://buy.stripe.com/fZu7sN2LJ8au9Ee4T618c00',
  '$50': 'https://buy.stripe.com/cNifZj5XVgH05nYadq18c01',
  '$100': 'https://buy.stripe.com/eVq4gB4TRfCW6s25Xa18c02',
  '$150': 'https://buy.stripe.com/aFa9AV8630I2dUu5Xa18c03',
  custom: 'https://buy.stripe.com/00wfZj0DBfCWeYy2KY18c04',
}

export const STRIPE_LINKS_MONTHLY: Record<string, string> = {
  '$20': 'https://buy.stripe.com/8x23cxaebeySg2C2KY18c05',
  '$50': 'https://buy.stripe.com/cNi00lcmj0I2aIi5Xa18c06',
  '$100': 'https://buy.stripe.com/3cI3cx8638au3fQ2KY18c07',
  '$150': 'https://buy.stripe.com/6oU14p2LJfCW03E0CQ18c08',
  custom: 'https://buy.stripe.com/bJefZj0DBgH0bMm1GU18c09',
}

/**
 * Thank-you messages shown after a completed donation.
 * A different one is picked each visit (no immediate repeats).
 */
export const THANK_YOU_MESSAGES: { title: string; body: string }[] = [
  {
    title: 'You just built a bridge.',
    body: 'Thank you. Your generosity becomes food on a table, a listening ear, and a brighter day for a family in Western Sydney. We are so grateful you chose to give today.',
  },
  {
    title: 'Your kindness is already at work.',
    body: 'Because of you, our volunteers can keep showing up for our neighbours, week after week. Thank you for standing with our community.',
  },
  {
    title: 'A little light goes a long way.',
    body: 'Your donation helps turn hardship into hope for families across Western Sydney. Thank you for lighting the way with us.',
  },
  {
    title: 'Community looks like you.',
    body: 'For community, by community is not just our motto, it is exactly what you did today. Thank you for your beautiful generosity.',
  },
  {
    title: 'Hope just got stronger.',
    body: 'Every dollar you gave goes directly to charitable programs run by our volunteers. Thank you for believing in this work.',
  },
  {
    title: 'You made someone’s day.',
    body: 'Somewhere in Western Sydney, a family will feel the impact of what you just did. Thank you for caring so generously.',
  },
  {
    title: 'Together, we carry each other.',
    body: 'I am because we are. Your gift strengthens the whole community, and we could not do this without people like you. Thank you.',
  },
  {
    title: 'Thank you for walking with us.',
    body: 'From our Holroyd hub to every family we serve, your generosity travels far. We are honoured to have you beside us.',
  },
  {
    title: 'This is how change begins.',
    body: 'One act of kindness at a time, one family at a time. Thank you for being the start of something good today.',
  },
  {
    title: 'You are part of the story now.',
    body: 'Every hamper packed, every young person mentored, every family supported carries a little of your kindness in it. Thank you.',
  },
  {
    title: 'Generosity like yours keeps us going.',
    body: 'As a 100% volunteer-run charity, gifts like yours are the fuel behind everything we do. Thank you, from all of us.',
  },
  {
    title: 'What a gift you are.',
    body: 'Thank you for choosing compassion today. Your donation helps us serve culturally diverse families with dignity, care and love.',
  },
]
