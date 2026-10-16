
function scrollToProjects() {
    document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
}

const text = [
    "Computer Science Student",
    "Data Analyst",
    "Software Engineer",
    "IT Support Specialist"
];

let index = 0;
let charIndex = 0;
const typingElement = document.querySelector(".typing-text");

function typeEffect() {
    if (!typingElement) return;

    if (charIndex < text[index].length) {
        typingElement.textContent += text[index].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 100);
    } else {
        setTimeout(eraseEffect, 1500);
    }
}

function eraseEffect() {
    if (!typingElement) return;

    if (charIndex > 0) {
        typingElement.textContent = text[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseEffect, 50);
    } else {
        index = (index + 1) % text.length;
        setTimeout(typeEffect, 500);
    }
}

function toggleMode() {
    document.body.classList.toggle("light-mode");
    const btn = document.querySelector(".mode-toggle");
    if (btn) {
        btn.textContent = document.body.classList.contains("light-mode") ? "☀️" : "🌙";
    }
}

window.addEventListener("DOMContentLoaded", () => {
    if (typingElement) {
        typeEffect();
    }

    const modeToggle = document.querySelector(".mode-toggle");
    if (modeToggle) {
        modeToggle.addEventListener("click", toggleMode);
    }
});