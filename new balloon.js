document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("balloon-container");

    for (let i = 0; i < 10; i++) {
        let balloon = document.createElement("div");
        balloon.classList.add("balloon");
        balloon.style.left = `${Math.random() * 90}vw`;
        container.appendChild(balloon);

        animateBalloon(balloon);
    }
});

function animateBalloon(balloon) {
    let size = 50;
    let colors = ["red", "blue", "green", "yellow", "purple", "orange", "pink", "cyan"];
    let colorIndex = 0;
    let position = window.innerHeight;

    function move() {
        if (position <= 0) {
            position = window.innerHeight;
            size = 50;
            colorIndex = 0;
            balloon.style.backgroundColor = colors[colorIndex];
        } else {
            position -= 2;
            size += 0.2;
            colorIndex = (colorIndex + 1) % colors.length;
            balloon.style.backgroundColor = colors[colorIndex];
        }

        balloon.style.transform = `translateY(${position}px) scale(${size / 50})`;
        requestAnimationFrame(move);
    }

    move();
}
