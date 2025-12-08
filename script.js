/* ---------------------- */
/* DARK / LIGHT MODE */
/* ---------------------- */
const themeToggle = document.getElementById("themeToggle");

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    themeToggle.classList.add("active");
}

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    themeToggle.classList.toggle("active");

    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});

/* ---------------------- */
/* MENU MOBILE */
/* ---------------------- */
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

/* ---------------------- */
/* MODALES ACTUALITÉS */
/* ---------------------- */
document.querySelectorAll(".news-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const modalId = btn.dataset.modal;
        document.getElementById(modalId).classList.add("show");
    });
});

document.querySelectorAll(".modal-close").forEach(closeBtn => {
    closeBtn.addEventListener("click", () => {
        closeBtn.parentElement.parentElement.classList.remove("show");
    });
});

/* ---------------------- */
/* AVIS GOOGLE – VERSION PRO */
/* ---------------------- */

async function loadGoogleReviews() {
    try {
        const response = await fetch("getReviews.php");
        const data = await response.json();

        const reviews = data.result?.reviews;
        if (!reviews) {
            console.warn("Aucun avis Google trouvé.");
            return;
        }

        const container = document.getElementById("google-reviews");
        container.innerHTML = "";

        reviews.slice(0, 6).forEach(review => {
            // étoiles stylées
            const stars = "★".repeat(review.rating) + "☆".repeat(5 - review.rating);

            const card = `
                <div class="review-card">
                    <div class="review-header">
                        <img src="${review.profile_photo_url}" class="review-photo">
                        <div class="review-author">${review.author_name}</div>
                    </div>
                    <div class="review-rating">${stars}</div>
                    <p class="review-text">"${review.text}"</p>
                </div>
            `;

            container.innerHTML += card;
        });

    } catch (error) {
        console.error("Erreur chargement avis Google :", error);
    }
}

loadGoogleReviews();

/* ---------------------- */
/* ANNÉE AUTOMATIQUE */
/* ---------------------- */
document.getElementById("year").textContent = new Date().getFullYear();
