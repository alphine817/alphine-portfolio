
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
    const body = document.body;
    const btn = document.querySelector(".mode-toggle");
    const isLight = body.classList.toggle("light-mode");

    if (btn) {
        btn.textContent = isLight ? "☀️" : "🌙";
        btn.setAttribute("aria-label", isLight ? "Switch to dark mode" : "Switch to light mode");
    }
}

const projectGallery = {
    attendance: [
        { src: "assets/images/qr1.jpg", alt: "Smart Offline Attendance System home screen" },
        { src: "assets/images/qr2.jpg", alt: "QR code attendance generation screen" },
        { src: "assets/images/qr3.jpg", alt: "Attendance verification screen" },
        { src: "assets/images/qr4.jpg", alt: "Attendance record overview" }
    ],
    propstat: [
        { src: "assets/images/prostat1.jpg", alt: "PropStat Pro dashboard" },
        { src: "assets/images/prostat2.jpg", alt: "Property listing overview" },
        { src: "assets/images/prostat3.jpg", alt: "Inspection form and tracking" },
        { src: "assets/images/prostat4.jpg", alt: "Property report page" }
    ],
    vault: [
        { src: "assets/images/vault1.jpg", alt: "Vault OS wallet dashboard" },
        { src: "assets/images/vault2.jpg", alt: "Vault OS transaction flow" },
        { src: "assets/images/vault3.jpg", alt: "Vault OS security and account screen" }
    ],
    portfolio: [
        { src: "assets/images/project1-1.png", alt: "Portfolio landing page" },
        { src: "assets/images/project1-2.png", alt: "Portfolio work section" },
        { src: "assets/images/project1-3.png", alt: "Portfolio mobile version" }
    ],
    ecommerce: [
        { src: "assets/images/project1-1.png", alt: "E-commerce storefront preview" },
        { src: "assets/images/project1-2.png", alt: "E-commerce product list" },
        { src: "assets/images/project1-3.png", alt: "E-commerce mobile view" }
    ],
    salon: [
        { src: "assets/images/salon-1.png", alt: "Glow & Go Salon homepage" },
        { src: "assets/images/salon-2.png", alt: "Glow & Go Salon services section" },
        { src: "assets/images/salon-3.png", alt: "Glow & Go Salon booking view" },
        { src: "assets/images/salon-4.png", alt: "Glow & Go Salon responsive view" }
    ]
};

const modal = document.getElementById("projectModal");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");
const closeModalBtn = document.querySelector(".modal-close");
const prevBtn = document.querySelector(".gallery-arrow.prev");
const nextBtn = document.querySelector(".gallery-arrow.next");

let currentProjectKey = "";
let currentImageIndex = 0;

function openProjectGallery(projectKey) {
    const images = projectGallery[projectKey];
    if (!images || !modal || !modalImage) return;

    currentProjectKey = projectKey;
    currentImageIndex = 0;
    renderGalleryImage();
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
}

function renderGalleryImage() {
    const images = projectGallery[currentProjectKey];
    if (!images || !modalImage) return;

    const currentImage = images[currentImageIndex];
    modalImage.src = currentImage.src;
    modalImage.alt = currentImage.alt;

    const projectNames = {
        attendance: "Smart Offline Dynamic QR Code Attendance System",
        propstat: "PropStat Pro",
        vault: "Vault OS",
        portfolio: "Personal Portfolio Web Application",
        ecommerce: "E-commerce Website",
        salon: "Glow & Go Salon"
    };

    modalTitle.textContent = projectNames[currentProjectKey] || "Project Gallery";
    modalText.textContent = `${currentImageIndex + 1} / ${images.length} screenshots`;
}

function closeProjectGallery() {
    if (!modal) return;
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
}

function changeGalleryImage(direction) {
    const images = projectGallery[currentProjectKey];
    if (!images) return;

    currentImageIndex = (currentImageIndex + direction + images.length) % images.length;
    renderGalleryImage();
}

window.addEventListener("DOMContentLoaded", () => {
    if (typingElement) {
        typeEffect();
    }

    const modeToggle = document.querySelector(".mode-toggle");
    if (modeToggle) {
        modeToggle.textContent = "☀️";
        modeToggle.setAttribute("aria-label", "Switch to dark mode");
        modeToggle.addEventListener("click", toggleMode);
    }

    document.querySelectorAll(".project-card[data-project]").forEach((card) => {
        card.addEventListener("click", () => openProjectGallery(card.dataset.project));
    });

    if (closeModalBtn) {
        closeModalBtn.addEventListener("click", closeProjectGallery);
    }

    if (prevBtn) {
        prevBtn.addEventListener("click", () => changeGalleryImage(-1));
    }

    if (nextBtn) {
        nextBtn.addEventListener("click", () => changeGalleryImage(1));
    }

    if (modal) {
        modal.addEventListener("click", (event) => {
            if (event.target === modal) {
                closeProjectGallery();
            }
        });
    }

    document.addEventListener("keydown", (event) => {
        if (!modal || !modal.classList.contains("open")) return;

        if (event.key === "Escape") {
            closeProjectGallery();
        }

        if (event.key === "ArrowRight") {
            changeGalleryImage(1);
        }

        if (event.key === "ArrowLeft") {
            changeGalleryImage(-1);
        }
    });
});