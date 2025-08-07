// js/main.js

// 1. Fade-in animation on page load
document.addEventListener("DOMContentLoaded", () => {
    document.body.style.opacity = 0;
    document.body.style.transition = "opacity 0.8s ease-in-out";
    requestAnimationFrame(() => {
        document.body.style.opacity = 1;
    });
});

// 2. Mobile nav toggle (hamburger menu)
const nav = document.querySelector("nav");
const menuButton = document.createElement("div");
menuButton.className = "menu-btn";
menuButton.innerHTML = "☰"; // Hamburger icon
menuButton.style.cursor = "pointer";
menuButton.style.fontSize = "24px";
menuButton.style.marginLeft = "auto";
menuButton.style.padding = "10px";

nav.appendChild(menuButton);

menuButton.addEventListener("click", () => {
    document.querySelector(".nav-links").classList.toggle("active");
});

// 3. Button ripple effect
document.querySelectorAll(".btn").forEach(button => {
    button.style.position = "relative";
    button.style.overflow = "hidden";

    button.addEventListener("click", e => {
        const circle = document.createElement("span");
        const diameter = Math.max(button.clientWidth, button.clientHeight);
        const radius = diameter / 2;

        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${e.clientX - button.offsetLeft - radius}px`;
        circle.style.top = `${e.clientY - button.offsetTop - radius}px`;
        circle.style.position = "absolute";
        circle.style.borderRadius = "50%";
        circle.style.background = "rgba(255,255,255,0.4)";
        circle.style.transform = "scale(0)";
        circle.style.animation = "ripple 0.6s linear";

        button.appendChild(circle);

        circle.addEventListener("animationend", () => {
            circle.remove();
        });
    });
});

// 4. Scroll reveal for sections
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll("section").forEach(section => {
    section.classList.add("hidden");
    observer.observe(section);
});

// 5. Back to top button
const topBtn = document.createElement("button");
topBtn.textContent = "↑";
topBtn.style.position = "fixed";
topBtn.style.bottom = "20px";
topBtn.style.right = "20px";
topBtn.style.padding = "10px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.fontSize = "20px";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.zIndex = 999;
topBtn.style.backgroundColor = "#444";
topBtn.style.color = "#fff";
topBtn.title = "Back to top";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});

topBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// 6. Easter egg (Konami code)
const konamiCode = [
    "ArrowUp", "ArrowUp",
    "ArrowDown", "ArrowDown",
    "ArrowLeft", "ArrowRight",
    "ArrowLeft", "ArrowRight",
    "b", "a"
];
let keyIndex = 0;

window.addEventListener("keydown", (e) => {
    if (e.key === konamiCode[keyIndex]) {
        keyIndex++;
        if (keyIndex === konamiCode.length) {
            alert("💥 YOU FOUND THE CLOSET SECRET!");
            keyIndex = 0;
        }
    } else {
        keyIndex = 0;
    }
});
