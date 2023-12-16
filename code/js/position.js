import * as Fetch from './fetch.js'

function getLocation() {
  return new Promise((res, rej) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        const url = `https://geocode.maps.co/reverse?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}`
        Fetch.get(url)
          .then((data) => data)
          .then((data) => {
            const userLocation = {
              latitude: pos.coords.latitude,
              longitude: pos.coords.longitude,
              country: data.address.country,
              city: data.address.city,
              data: data,
            }
            res(userLocation)
          })
      })
    } else {
      rej(new Error('Geolocation is not supported by this browser.'))
    }
  })
}
// const location = getLocation().then((res) => res)

export { getLocation }
