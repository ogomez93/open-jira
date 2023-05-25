import { formatDistanceToNow } from 'date-fns'

export const getFormattedDistanceToNow = (date: number) => {
  const fromNow = formatDistanceToNow(date)
  return `${fromNow} ago`
}
