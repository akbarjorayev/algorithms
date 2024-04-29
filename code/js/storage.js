export function add(keyName, value) {
  localStorage.setItem(keyName, JSON.stringify(value))

  const newData = get(keyName)
  return newData
}

export function remove(keyName) {
  const oldData = get(keyName)
  localStorage.removeItem(keyName)

  return oldData
}

export function change(keyName, value) {
  const oldData = get(keyName)
  add(keyName, value)
  const newData = get(keyName)

  return {
    old: oldData,
    new: newData,
  }
}

export function get(keyName) {
  return JSON.parse(localStorage.getItem(keyName))
}
