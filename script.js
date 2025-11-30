/* MENU MOBILE */
function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("active");
}

/* POPUP NEWS */
function openNewsPopup(image, title, text) {
    document.getElementById("modalImage").src = image;
    document.getElementById("modalTitle").textContent = title;
    document.getElementById("modalText").textContent = text;

    document.getElementById("newsModal").classList.add("show");
    document.body.style.overflow = "hidden";
}

function closeNewsPopup() {
    document.getElementById("newsModal").classList.remove("show");
    document.body.style.overflow = "auto";
}

/* DARK / LIGHT MODE */
const themeToggle = document.getElementById("themeToggle");
const body = document.body;

themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark");
    themeToggle.classList.toggle("active");
    localStorage.setItem("theme", body.classList.contains("dark") ? "dark" : "light");
});

// Charger le thème
if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark");
    themeToggle.classList.add("active");
}
