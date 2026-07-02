let score = 0;
let answered = [false, false, false, false, false];

// =======================
// QUIZ (10 FRAGEN SYSTEM)
// =======================

const answers = [
  true,  // 1
  true,  // 2
  true,  // 3
  false, // 4
  true,  // 5
  false, // 6
  true,  // 7
  true,  // 8
  false, // 9
  true   // 10
];

function answer(q, correct){
  if(answered[q]) return; // verhindert mehrfach Punkte

  answered[q] = true;

  if(correct){
    score++;
    document.getElementById("r"+q).innerText = "✔ Richtig";
  } else {
    document.getElementById("r"+q).innerText = "✖ Falsch";
  }

  updateResult();
}

function updateResult(){
  const res = document.getElementById("result");
  if(!res) return;

  let text = "Dein Ergebnis: " + score + " / 10 - ";

  if(score >= 8){
    text += "🏆 Sehr gut!";
  } else if(score >= 5){
    text += "👍 Gut!";
  } else {
    text += "📚 Du kannst es noch üben.";
  }

  res.innerText = text;
}

// =======================
// SCROLL ANIMATION
// =======================

const sections = document.querySelectorAll("section");

function reveal(){
  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if(top < window.innerHeight - 80){
      sec.classList.add("show");
    }
  });
}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);

// =======================
// SMOOTH NAVIGATION
// =======================

document.querySelectorAll("nav a").forEach(a => {
  a.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(a.getAttribute("href"));
    if(target){
      target.scrollIntoView({behavior:"smooth"});
    }
  });
});
