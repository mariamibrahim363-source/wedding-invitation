/* ==========================
   LOADER
========================== */

window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("loader").style.opacity = "0";
        setTimeout(() => {
            document.getElementById("loader").style.display = "none";
        }, 800);
    }, 1800);
});

/* ==========================
   OPEN INVITATION
========================== */

const openBtn = document.getElementById("openInvitation");
const intro = document.getElementById("intro");
const invitation = document.getElementById("invitation");
const music = document.getElementById("bgMusic");

openBtn.addEventListener("click", () => {

    openBtn.style.transform = "translate(-50%,-50%) scale(0)";
    openBtn.style.opacity = "0";

    setTimeout(() => {

        intro.style.opacity = "0";

        setTimeout(() => {

            intro.style.display = "none";

            invitation.classList.remove("hidden");

            invitation.style.display = "block";

            invitation.style.animation = "fadeIn 1.5s ease";

            music.play().catch(() => {
                console.log("Autoplay blocked until user interaction.");
            });

        }, 800);

    }, 400);

});

/* ==========================
   COUNTDOWN
========================== */

const weddingDate = new Date("September 4, 2026 19:00:00").getTime();

const countdown = setInterval(() => {

    const now = new Date().getTime();

    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60)) /
        1000
    );

    document.getElementById("days").textContent = String(days).padStart(2, "0");
    document.getElementById("hours").textContent = String(hours).padStart(2, "0");
    document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
    document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");

    if (distance <= 0) {

        clearInterval(countdown);

        document.getElementById("timer").innerHTML =
            "<h2>Today is our Wedding Day ❤️</h2>";

    }

}, 1000);

/* ==========================
   SCROLL REVEAL
========================== */

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: .15
});

document.querySelectorAll(".countdown, .details, footer").forEach(el => {

    el.classList.add("hidden-section");

    observer.observe(el);

});

/* ==========================
   FLOATING EFFECT
========================== */

document.querySelectorAll(".card").forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-8px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0px)";

    });

});

/* ==========================
   MUSIC TOGGLE
========================== */

const musicBtn = document.createElement("button");

musicBtn.innerHTML = "♫";

musicBtn.id = "musicBtn";

document.body.appendChild(musicBtn);

musicBtn.style.position = "fixed";
musicBtn.style.right = "20px";
musicBtn.style.bottom = "20px";
musicBtn.style.width = "55px";
musicBtn.style.height = "55px";
musicBtn.style.borderRadius = "50%";
musicBtn.style.border = "none";
musicBtn.style.cursor = "pointer";
musicBtn.style.fontSize = "22px";
musicBtn.style.background = "#C8A96A";
musicBtn.style.color = "white";
musicBtn.style.boxShadow = "0 10px 25px rgba(0,0,0,.25)";
musicBtn.style.zIndex = "999";

musicBtn.onclick = () => {

    if (music.paused) {

        music.play();

        musicBtn.innerHTML = "♫";

    } else {

        music.pause();

        musicBtn.innerHTML = "🔇";

    }

};

/* ==========================
   FADE ANIMATION
========================== */

const style = document.createElement("style");

style.innerHTML = `

@keyframes fadeIn{

from{
opacity:0;
transform:translateY(40px);
}

to{
opacity:1;
transform:translateY(0);
}

}

.hidden{
display:none;
}

.hidden-section{

opacity:0;

transform:translateY(60px);

transition:1s;

}

.show{

opacity:1;

transform:translateY(0);

}

`;

document.head.appendChild(style);
