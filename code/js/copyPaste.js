export function copy(str) {
  navigator.clipboard.writeText(`${str}`)
}

export async function getText() {
  const txt = await navigator.clipboard.readText()
  return txt
}

export async function getImage() {
  try {
    const dataURL = await getText()
    const image = new Image()
    image.src = dataURL
    return image
  } catch (error) {
    return false
  }
}
