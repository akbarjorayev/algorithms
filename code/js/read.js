const synth = window.speechSynthesis
let utterance

function read(text, lang = 'en-US') {
  if (!text.trim()) return
  const sentences = text.trim().split('.')

  for (let i = 0; i < sentences.length; i++) {
    utterance = new SpeechSynthesisUtterance(sentences[i])
    utterance.lang = lang
    synth.speak(utterance)
  }

  return utterance
}

function stop() {
  synth.cancel()
}

export { read, stop }
