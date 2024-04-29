const synth = window.speechSynthesis
let utterance

export function read(text, lang = 'en-US') {
  if (!text.trim()) return
  const sentences = text.trim().split('.')

  for (let i = 0; i < sentences.length; i++) {
    utterance = new SpeechSynthesisUtterance(sentences[i])
    utterance.lang = lang
    synth.speak(utterance)
  }

  return utterance
}

export function stop() {
  synth.cancel()
}
