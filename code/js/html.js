export function add(htmlStr, pEl) {
  if (typeof htmlStr != 'string' || !(pEl instanceof HTMLElement)) {
    throw new Error('Invalid parameters')
  }

  const template = document.createElement('template')
  template.innerHTML += htmlStr.trim()

  pEl.appendChild(template.content)
  return template
}
