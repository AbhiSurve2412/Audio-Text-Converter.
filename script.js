const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.lang = 'hi-IN';

const Textbox = document.querySelector("#textarea");
const instructions = document.querySelector("#instructions");

let Content = "";

recognition.continuous = true;

recognition.onresult = (event) => {
  const current = event.resultIndex;
  const transcript = event.results[current][0].transcript;
  Content += transcript;
  Textbox.value = Content;
};

document.querySelector("#start").addEventListener("click", () => {
  if (document.querySelector("#start").textContent === "Click here to Stop Recording") {
    document.querySelector("#start").textContent = "Click here to Start Recording";
    instructions.textContent = "";
    recognition.stop();
  } else {
    document.querySelector("#start").textContent = "Click here to Stop Recording";
    instructions.textContent = "Try Speaking, Voice Recognition is On, Contents will be displayed below";
    if (Content.length) {
      Content += " ";
    }
    recognition.start();
  }
});

Textbox.addEventListener("input", () => {
  Content = Textbox.value;
});
