function getPosition() {
  return new Promise((res, rej) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => res(pos), rej)
    } else {
      rej(new Error('Geolocation is not supported by this browser.'))
    }
  })
}
// getPosition().then((res) => res)

export { getPosition }
