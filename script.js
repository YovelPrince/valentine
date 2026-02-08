const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const card = document.getElementById("proposalCard");
const gallery = document.getElementById("gallery");

// Place NO button outside card initially
noBtn.style.left = "60%";
noBtn.style.top = "70%";

// NO button runs away
noBtn.addEventListener("mouseover", () => {
  const btnWidth = noBtn.offsetWidth;
  const btnHeight = noBtn.offsetHeight;

  const x = Math.random() * (window.innerWidth - btnWidth);
  const y = Math.random() * (window.innerHeight - btnHeight);

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});

// YES button action
yesBtn.addEventListener("click", () => {
  startConfetti();
  card.classList.add("hidden");
  gallery.classList.remove("hidden");
});

// Confetti animation
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let confetti = [];

function startConfetti() {
  confetti = [];
  for (let i = 0; i < 300; i++) {
    confetti.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 6 + 2,
      d: Math.random() * 6 + 2,
      color: `hsl(${Math.random() * 360}, 100%, 50%)`
    });
  }
  animateConfetti();
}

function animateConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  confetti.forEach(c => {
    ctx.beginPath();
    ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
    ctx.fillStyle = c.color;
    ctx.fill();
    c.y += c.d;
    if (c.y > canvas.height) c.y = 0;
  });
  requestAnimationFrame(animateConfetti);
}
