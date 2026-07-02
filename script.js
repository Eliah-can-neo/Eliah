let score = 0;

// Quiz Fragen
function q1(correct){
  if(correct){
    document.getElementById("r1").innerText = "✔ Richtig!";
    score++;
  } else {
    document.getElementById("r1").innerText = "✖ Falsch";
  }
  check();
}

function q2(correct){
  if(correct){
    document.getElementById("r2").innerText = "✔ Richtig!";
    score++;
  } else {
    document.getElementById("r2").innerText = "✖ Falsch";
  }
  check();
}

function q3(correct){
  if(correct){
    document.getElementById("r3").innerText = "✔ Richtig!";
    score++;
  } else {
    document.getElementById("r3").innerText = "✖ Falsch";
  }
  check();
}

// Ergebnis anzeigen
function check(){
  document.getElementById("result").innerText =
    "Dein Punktestand: " + score + " / 3";
}


// 🌟 Scroll Animation (Sections erscheinen)
const sections = document.querySelectorAll("section");

function showSections(){
  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if(top < window.innerHeight - 100){
      sec.classList.add("show");
    }
  });
}

window.addEventListener("scroll", showSections);
window.addEventListener("load", showSections);


// 🔝 Smooth Scroll für Navigation
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function(e){
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
  });
});
