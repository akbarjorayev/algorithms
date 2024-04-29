export async function hash(str) {
  if (typeof str !== 'string' || str.length === 0) {
    throw new Error('HASH: Input must be a non-empty string')
  }

  try {
    const encoder = new TextEncoder()
    const data = encoder.encode(str)
    const hashBuffer = await crypto.subtle.digest('SHA-256', data)
    const hashArray = Array.from(new Uint8Array(hashBuffer))
    const hashHex = hashArray
      .map((byte) => byte.toString(16).padStart(2, '0'))
      .join('')
    return hashHex
  } catch (error) {
    throw new Error('Hashing failed: ' + error.message)
  }
}
