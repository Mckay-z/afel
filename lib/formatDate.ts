export function formatDate(dateString: string, short = false): string {
  if (!dateString) return ''
  const date = new Date(dateString)
  if (short) {
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    }).toUpperCase()
  }
  return date.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).toUpperCase()
}
