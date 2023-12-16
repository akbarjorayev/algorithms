function copy(str) {
  navigator.clipboard.writeText(`${str}`)
}

async function getText() {
  const txt = await navigator.clipboard.readText()
  return txt
}

async function getImage() {
  try {
    const dataURL = await getText()
    const image = new Image()
    image.src = dataURL
    return image
  } catch (error) {
    return false
  }
}

export { copy, getText, getImage }
