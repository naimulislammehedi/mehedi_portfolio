// Initialize Lucide Icons
lucide.createIcons();

// 1. Typing Animation
const typingTextElement = document.getElementById("typing-text");
const phrases = [
  "Web Developer",
  "Building End-to-End Apps",
  "Performance Specialist",
];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function type() {
  const currentPhrase = phrases[phraseIndex];

  if (isDeleting) {
    typingTextElement.textContent = currentPhrase.substring(0, charIndex - 1);
    charIndex--;
    typingSpeed = 50;
  } else {
    typingTextElement.textContent = currentPhrase.substring(0, charIndex + 1);
    charIndex++;
    typingSpeed = 100;
  }

  if (!isDeleting && charIndex === currentPhrase.length) {
    isDeleting = true;
    typingSpeed = 2000; // Pause at end
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    typingSpeed = 500;
  }

  setTimeout(type, typingSpeed);
}

// 2. Scroll Reveal Animation
function reveal() {
  const reveals = document.querySelectorAll(".reveal");
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 100;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    }
  }
}

// 3. Navbar background on scroll
window.addEventListener("scroll", () => {
  const nav = document.getElementById("navbar");
  if (window.scrollY > 50) {
    nav.classList.add(
      "bg-[#0a0a0a]/80",
      "backdrop-blur-md",
      "py-4",
      "border-b",
      "border-white/5",
    );
    nav.classList.remove("py-6");
  } else {
    nav.classList.remove(
      "bg-[#0a0a0a]/80",
      "backdrop-blur-md",
      "py-4",
      "border-b",
      "border-white/5",
    );
    nav.classList.add("py-6");
  }
  reveal();
});

// Initialize
window.onload = () => {
  type();
  reveal();
  document.getElementById("year").textContent = new Date().getFullYear();
};
