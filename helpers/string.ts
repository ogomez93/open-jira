export const shorten = (string: string, limit: number = 20): string => {
  return string.length > limit ? `${string.substring(0, limit)}...` : string
}
