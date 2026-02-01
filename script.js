const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const questionContainer = document.getElementById("questionContainer");
const resultContainer = document.getElementById("resultContainer");
const resultText = document.getElementById("resultText");
const heartSound = document.getElementById("heartSound");

let speed = 1;

/* 😈 NEIN flieht – PC + HANDY */
function moveNoBtn() {
  speed += 0.2;

  const container = questionContainer.getBoundingClientRect();
  const btn = noBtn.getBoundingClientRect();

  const x = Math.random() * (container.width - btn.width);
  const y = Math.random() * (container.height - btn.height);

  noBtn.style.transition = `all ${0.25 / speed}s ease`;
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
}

/* 🖱️ Desktop */
noBtn.addEventListener("mouseover", moveNoBtn);

/* 📱 Mobile */
noBtn.addEventListener("touchstart", (e) => {
  e.preventDefault();   // 🔥 verhindert Festhängen
  moveNoBtn();
});

/* 💖 JA klick */
yesBtn.addEventListener("click", () => {

  if (heartSound){
    heartSound.play().catch(() => {});
  }
  
  questionContainer.style.opacity = 0;

  setTimeout(() => {
    questionContainer.style.display = "none";
    resultText.textContent = "💖 Ich wusste es! 💖";
    resultContainer.style.display = "block";
    resultContainer.style.opacity = 1;
  }, 600);
});
