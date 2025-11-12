export function formatDate(dateString: string): string {
  try {
    const date = dateString ? new Date(dateString) : new Date()
    if (isNaN(date.getTime())) throw new Error("Invalid date string")
    const day = String(date.getDate()).padStart(2, "0")
    const month = String(date.getMonth() + 1).padStart(2, "0")
    const year = date.getFullYear()
    return `${day}/${month}/${year}`
  } catch (error) {
    console.error(`Error formatting date: ${dateString}`, error)
    return "Invalid date"
  }
}