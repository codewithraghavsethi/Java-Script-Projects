let speech = new SpeechSynthesisUtterance();

let voices = []

let vociceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    voices.forEach((voice, i) => (vociceSelect.options[i]) = new Option( voice.name, i))
}

vociceSelect.addEventListener("change", () =>{
    speech.voice = voices[vociceSelect.value];
})

document.querySelector("button").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
})


