// ============================================
// PRELOADER
// ============================================
window.addEventListener("load", () => {
  setTimeout(() => {
    document.querySelector(".preloader").classList.add("hidden");
  }, 2000);
});

// ============================================
// CUSTOM CURSOR
// ============================================
const cursor = document.querySelector(".cursor");
const cursorFollower = document.querySelector(".cursor-follower");

let mouseX = 0,
  mouseY = 0;
let cursorX = 0,
  cursorY = 0;
let followerX = 0,
  followerY = 0;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animateCursor() {
  cursorX += (mouseX - cursorX) * 0.2;
  cursorY += (mouseY - cursorY) * 0.2;
  followerX += (mouseX - followerX) * 0.1;
  followerY += (mouseY - followerY) * 0.1;

  cursor.style.left = cursorX + "px";
  cursor.style.top = cursorY + "px";
  cursorFollower.style.left = followerX + "px";
  cursorFollower.style.top = followerY + "px";

  requestAnimationFrame(animateCursor);
}
animateCursor();

// Cursor hover effects
document.querySelectorAll("a, button, .glass-card").forEach((el) => {
  el.addEventListener("mouseenter", () => cursor.classList.add("active"));
  el.addEventListener("mouseleave", () => cursor.classList.remove("active"));
});

// ============================================
// NAVBAR SCROLL EFFECT
// ============================================
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// ============================================
// MOBILE MENU
// ============================================
const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
const navLinks = document.querySelector(".nav-links");

mobileMenuBtn.addEventListener("click", () => {
  mobileMenuBtn.classList.toggle("active");
  navLinks.classList.toggle("active");
});

// Close menu when link clicked
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenuBtn.classList.remove("active");
    navLinks.classList.remove("active");
  });
});

// ============================================
// TYPEWRITER EFFECT
// ============================================
const typewriterText = [
  "Custom Vehicles.",
  "Epic Heists.",
  "Gang Wars.",
  "Police Chases.",
  "Business Empire.",
  "Your Story.",
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typewriter = document.getElementById("typewriter");

function type() {
  const currentText = typewriterText[textIndex];

  if (isDeleting) {
    typewriter.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typewriter.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;
  }

  let typeSpeed = isDeleting ? 50 : 100;

  if (!isDeleting && charIndex === currentText.length) {
    typeSpeed = 2000;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    textIndex = (textIndex + 1) % typewriterText.length;
    typeSpeed = 500;
  }

  setTimeout(type, typeSpeed);
}

type();

// ============================================
// COUNTER ANIMATION
// ============================================
const counters = document.querySelectorAll(".stat-number");
let countersStarted = false;

function startCounters() {
  counters.forEach((counter) => {
    const target = +counter.getAttribute("data-target");
    const suffix = counter.textContent.replace(/[0-9]/g, "");
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;

    const updateCounter = () => {
      current += step;
      if (current < target) {
        counter.textContent = Math.ceil(current) + suffix;
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = target + suffix;
      }
    };

    updateCounter();
  });
}

// ============================================
// SCROLL REVEAL ANIMATION
// ============================================
const revealElements = document.querySelectorAll(".reveal");

function reveal() {
  revealElements.forEach((el) => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const revealPoint = 150;

    if (elementTop < windowHeight - revealPoint) {
      el.classList.add("active");

      // Start counters when stats section is visible
      if (el.classList.contains("stat-card") && !countersStarted) {
        countersStarted = true;
        startCounters();
      }
    }
  });
}

window.addEventListener("scroll", reveal);
reveal();

// ============================================
// RULES ACCORDION
// ============================================
const ruleItems = document.querySelectorAll(".rule-item");

ruleItems.forEach((item) => {
  const header = item.querySelector(".rule-header");

  header.addEventListener("click", () => {
    const isActive = item.classList.contains("active");

    // Close all
    ruleItems.forEach((i) => i.classList.remove("active"));

    // Open clicked if it wasn't active
    if (!isActive) {
      item.classList.add("active");
    }
  });
});

// ============================================
// SMOOTH SCROLL
// ============================================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// ============================================
// PARALLAX EFFECT FOR ORBS
// ============================================
document.addEventListener("mousemove", (e) => {
  const orbs = document.querySelectorAll(".bg-orb");
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;

  orbs.forEach((orb, index) => {
    const speed = (index + 1) * 20;
    orb.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
  });
});

console.log(
  "%c🎮 Vanguard Roleplay",
  "font-size: 24px; font-weight: bold; color: #00f0ff;",
);
console.log(
  "%cWebsite loaded successfully!",
  "font-size: 14px; color: #7b2fff;",
);
