function add(keyName, value) {
  localStorage.setItem(keyName, JSON.stringify(value))

  const newData = get(keyName)
  return newData
}

function remove(keyName) {
  const oldData = get(keyName)
  localStorage.removeItem(keyName)

  return oldData
}

function change(keyName, value) {
  const oldData = get(keyName)
  add(keyName, value)
  const newData = get(keyName)

  return {
    old: oldData,
    new: newData,
  }
}

function get(keyName) {
  return JSON.parse(localStorage.getItem(keyName))
}

export { add, remove, change, get }
