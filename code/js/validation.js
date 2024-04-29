export function isEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export function isUsername(username) {
  const usernameRegex = /^[a-zA-Z0-9_]+$/
  return usernameRegex.test(username)
}

export function isPassword(password) {
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
  return passwordRegex.test(password)
}

export function isHexColor(color) {
  const hexColorRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/
  return hexColorRegex.test(color)
}

export function isURL(url) {
  const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/
  return urlRegex.test(url)
}

export function isPhoneNumber(phoneNumber) {
  const phoneNumberRegex = /^\d{10}$/
  return phoneNumberRegex.test(phoneNumber)
}

export function isZipCode(zipCode) {
  const zipCodeRegex = /^\d{5}$/
  return zipCodeRegex.test(zipCode)
}

export function isCreditCard(creditCard) {
  const creditCardRegex = /^\d{16}$/
  return creditCardRegex.test(creditCard)
}

export function isCVV(cvv) {
  const cvvRegex = /^\d{3}$/
  return cvvRegex.test(cvv)
}

export function isIPv4(ip) {
  const ipRegex =
    /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
  return ipRegex.test(ip)
}
