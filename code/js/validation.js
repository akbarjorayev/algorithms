function isEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

function isUsername(username) {
  const usernameRegex = /^[a-zA-Z0-9_]+$/
  return usernameRegex.test(username)
}

function isPassword(password) {
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
  return passwordRegex.test(password)
}

function isHexColor(color) {
  const hexColorRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/
  return hexColorRegex.test(color)
}

function isURL(url) {
  const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/
  return urlRegex.test(url)
}

function isPhoneNumber(phoneNumber) {
  const phoneNumberRegex = /^\d{10}$/
  return phoneNumberRegex.test(phoneNumber)
}

function isZipCode(zipCode) {
  const zipCodeRegex = /^\d{5}$/
  return zipCodeRegex.test(zipCode)
}

function isCreditCard(creditCard) {
  const creditCardRegex = /^\d{16}$/
  return creditCardRegex.test(creditCard)
}

function isCVV(cvv) {
  const cvvRegex = /^\d{3}$/
  return cvvRegex.test(cvv)
}

function isIPv4(ip) {
  const ipRegex =
    /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
  return ipRegex.test(ip)
}

export {
  isEmail,
  isUsername,
  isPassword,
  isHexColor,
  isURL,
  isPhoneNumber,
  isZipCode,
  isCreditCard,
  isCVV,
  isIPv4,
}
