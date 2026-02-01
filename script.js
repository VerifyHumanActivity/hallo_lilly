const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const questionContainer = document.getElementById("questionContainer");
const resultContainer = document.getElementById("resultContainer");

// Nein flieht
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 200;
  const y = Math.random() * 200;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

// Ja klick
yesBtn.addEventListener("click", () => {
  questionContainer.style.display = "none";   // ❌ alles weg
  resultContainer.style.display = "block";    // ✅ Ergebnis rein
});
