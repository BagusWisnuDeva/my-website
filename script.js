// === AOS (Animate On Scroll) ===
AOS.init({
  duration: 1000,
  once: true,
});

// === Typing Text Effect ===
const texts = [
  "Hello, It's me I Made Bagus Wisnu Deva Manik",
  "You can call me Bagus Wisnu",
  "Welcome to my portfolio!",
  "Enjoy exploring 😄"
];

const typingElement = document.querySelector(".typing");
let index = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
  const currentText = texts[index];
  if (!deleting && charIndex < currentText.length) {
    typingElement.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;
    setTimeout(typeEffect, 100);
  } else if (deleting && charIndex > 0) {
    typingElement.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;
    setTimeout(typeEffect, 50);
  } else {
    if (!deleting) {
      deleting = true;
      setTimeout(typeEffect, 1500);
    } else {
      deleting = false;
      index = (index + 1) % texts.length;
      setTimeout(typeEffect, 300);
    }
  }
}
document.addEventListener("DOMContentLoaded", typeEffect);

const toTop = document.getElementById("toTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});

toTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// === Optional: Navbar Shadow on Scroll ===
const navbar = document.querySelector("nav");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("shadow-lg");
  } else {
    navbar.classList.remove("shadow-lg");
  }
});

const form = document.getElementById('contactForm');
const messagesList = document.getElementById('messagesList');
const contactWrapper = document.getElementById('contactWrapper');

// Pindahkan form ke kiri saat user mulai mengetik
form.addEventListener('input', () => {
  contactWrapper.classList.add('active');
});

// Submit form
form.addEventListener('submit', function(e){
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if(!name || !email || !message){
    alert("Please fill all fields!");
    return;
  }

  const li = document.createElement('li');
  li.classList.add('new-message');
  li.innerHTML = `<strong>${name} (${email}):</strong> ${message}`;
  messagesList.appendChild(li);

  form.reset();
});

// === DARK MODE TOGGLE (Navbar Button Bulat) ===
const darkToggle = document.getElementById("darkToggle");

// Cek mode sebelumnya (disimpan di localStorage)
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  darkToggle.textContent = "☀️"; // tampilkan matahari saat dark mode aktif
}

// Saat tombol diklik
darkToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    darkToggle.textContent = "☀️";
    localStorage.setItem("theme", "dark");
  } else {
    darkToggle.textContent = "🌙";
    localStorage.setItem("theme", "light");
  }
});
