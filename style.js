const playButton = document.getElementById("play-button");
playButton.addEventListener("click", () => {
  const textInput = document.getElementById("text-input").value;
  const selectedLanguage = document.getElementById("select-language").value;
  
  const speech = new SpeechSynthesisUtterance(textInput);
  speech.lang = selectedLanguage;
  window.speechSynthesis.speak(speech);
});