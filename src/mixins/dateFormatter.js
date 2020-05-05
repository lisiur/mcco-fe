/**
 * @param {string} formateString
 */
function dateFormatter(dateString, formateString = 'YYYY/MM/DD HH:mm:ss') {
  const date = new Date(dateString)
  const year = String(date.getFullYear())
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const monthDate = String(date.getDate()).padStart(2, '0')
  const hours = String(date.getHours()).padStart(2, '0')
  const minutes = String(date.getMinutes()).padStart(2, '0')
  const seconds = String(date.getSeconds()).padStart(2, '0')
  return formateString
    .replace(/YYYY/g, year)
    .replace(/MM/g, month)
    .replace(/DD/g, monthDate)
    .replace(/HH/g, hours)
    .replace(/mm/g, minutes)
    .replace(/ss/g, seconds)
}
export default {
  filters: {
    dateFormatter
  }
}