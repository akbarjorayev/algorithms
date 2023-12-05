function add(htmlStr, pEl) {
  const template = document.createElement('template')

  template.innerHTML += htmlStr.trim()

  const child = template.content.firstElementChild
  pEl.appendChild(child)

  return child
}

export { add }
