const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const questionContainer = document.getElementById("questionContainer");
const resultContainer = document.getElementById("resultContainer");

// Nein flieht
noBtn.addEventListener("mouseover", () => {
  const container = questionContainer.getBoundingClientRect();
  const btn = noBtn.getBoundingClientRect();

  const x = Math.random() * (container.width - btn.width);
  const y = Math.random() * (container.height - btn.height);

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});


// Ja klick
yesBtn.addEventListener("click", () => {
  questionContainer.style.display = "none";   // ❌ alles weg
  resultContainer.style.display = "block";    // ✅ Ergebnis rein
});
