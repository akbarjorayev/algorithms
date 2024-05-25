import {
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth'
import { auth } from './firebase'

export async function authUser(email, password) {
  return createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      return true
    })
    .catch(() => {
      return false
    })
}

export async function authUserWithEmail(email, password) {
  return signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      return true
    })
    .catch(() => {
      return true
    })
}

export async function authUserWithGoogle() {
  const provider = new GoogleAuthProvider()

  return signInWithPopup(auth, provider)
    .then((res) => {
      const credential = GoogleAuthProvider.credentialFromResult(res)
      console.log(credential)
      return true
    })
    .catch(() => {
      return false
    })
}
