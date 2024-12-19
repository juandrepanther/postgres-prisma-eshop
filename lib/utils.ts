import ms from 'ms'

export const timeAgo = (timestamp: Date, timeOnly?: boolean): string => {
  if (!timestamp) return 'never'
  return `${ms(Date.now() - new Date(timestamp).getTime())}${timeOnly ? '' : ' ago'}`
}

export const calculateDiscountPercentage = (price: number, previousPrice: number): number => {
  return Math.round((previousPrice * 100) / price - 100)
}
