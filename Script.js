function showCongrats() {
    document.body.innerHTML = `
        <div class="wrapper">
            <h2>Congratulations! 🎉🎊</h2>
            <p>I Love You too Sanu 💖</p>
        </div>
        <canvas class="confetti"></canvas>
    `;
    startConfetti();
}

function moveNoButton() {
    let noBtn = document.getElementById("noBtn");
    let x = Math.random() * 500 - 250; 
    let y = Math.random() * 300 - 150;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

function startConfetti() {
    const canvas = document.querySelector(".confetti");
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const confetti = [];
    for (let i = 0; i < 100; i++) {
        confetti.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 6 + 2,
            speedX: Math.random() * 2 - 1,
            speedY: Math.random() * 3 + 2,
            color: `hsl(${Math.random() * 360}, 100%, 50%)`
        });
    }

    function animateConfetti() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        confetti.forEach((c, i) => {
            c.x += c.speedX;
            c.y += c.speedY;
            if (c.y > canvas.height) confetti[i].y = 0;
            ctx.fillStyle = c.color;
            ctx.beginPath();
            ctx.arc(c.x, c.y, c.size, 0, Math.PI * 2);
            ctx.fill();
        });
        requestAnimationFrame(animateConfetti);
    }

    animateConfetti();
}