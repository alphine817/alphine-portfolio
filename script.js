
function scrollToProjects() {
    document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
}

const text = [
    "Frontend Developer",
    "UI/UX Designer",
    "Creative Coder"
];

let index = 0;
let charIndex = 0;
const typingElement = document.querySelector(".typing-text");

function typeEffect() {

    if (charIndex < text[index].length) {
        typingElement.textContent += text[index].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 100);
    } else {
        setTimeout(eraseEffect, 1500);
    }
}

function eraseEffect() {
    if (charIndex > 0) {
        typingElement.textContent = text[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseEffect, 50);
    } else {
        index++;
        if (index >= text.length) index = 0;
        setTimeout(typeEffect, 500);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    typeEffect();
});

function toggleMode() {
    document.body.classList.toggle("light-mode");
}
const sliders = document.querySelectorAll('.slider');

sliders.forEach(slider => {
    const slides = slider.querySelectorAll('.slide');
    const next = slider.querySelector('.next');
    const prev = slider.querySelector('.prev');

    let index = 0;

    function showSlide(i) {
        slides.forEach(slide => slide.classList.remove('active'));
        slides[i].classList.add('active');
    }

    next.addEventListener('click', () => {
        index = (index + 1) % slides.length;
        showSlide(index);
    });

    prev.addEventListener('click', () => {
        index = (index - 1 + slides.length) % slides.length;
        showSlide(index);
    });
});