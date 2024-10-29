let timer = 60;
let point = 10;
let score = 0;
let finalScore = document.querySelector(".box h1").innerHTML;
function makeBubble() {
  var clutter = "";

  for (var i = 1; i <= 13600; i++) {
    let number = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${number}</div>`;
  }
  let btm = (document.querySelector("#pbottom").innerHTML = clutter);
}

function createHit() {
  let hit = document.querySelectorAll(".box")[0];
  let value = Math.floor(Math.random() * 10);
  hit.innerHTML = value;
  point = value;
}
function increaseScore() {
  score += 10;
  document.querySelector("#score").textContent = score;
}
function runTimer() {
  let bubble = document.querySelectorAll(".box")[1];
  let time = setInterval(() => {
    if (timer > 0) {
      timer--;
      bubble.innerHTML = timer;
    } else {
      clearInterval(time);
      let textl = document.querySelector("#pbottom");
      textl.textContent = "GAME OVER YOUR SCORE IS ";
      textl.style.fontSize = "70px";
    }
  }, 1000);
}
document.querySelector("#pbottom").addEventListener("click", function (dets) {
  if (point === Number(dets.target.textContent)) {
    increaseScore();
    makeBubble();
    createHit();
  }
});

createHit();
runTimer();
makeBubble();
