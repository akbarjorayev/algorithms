function add(htmlStr, pEl) {
  if (typeof htmlStr != 'string' || !(pEl instanceof HTMLElement)) {
    throw new Error('Invalid parameters')
  }

  const template = document.createElement('template')
  template.innerHTML += htmlStr.trim()

  const child = template.content.firstElementChild
  if (!child) throw new Error('No valid HTML was provided')

  pEl.appendChild(child)

  return child
}

export { add }
