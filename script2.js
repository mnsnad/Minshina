// Скрипт для нажатия на логотип
document.addEventListener("DOMContentLoaded", function() {
    const headerImg = document.querySelector(".logo");
    let rotated = false;

    // Обработчик события завершения анимации bounceInLeft
    headerImg.addEventListener("animationend", function() {
        headerImg.classList.remove("animate__bounceInLeft");
    }, { once: true });

    // Обработчик события нажатия на логотип
    headerImg.addEventListener("click", function() {
        const currentRotation = rotated ? "rotateY(0deg)" : "rotateY(720deg)";
        headerImg.style.transition = "transform 2s ease";
        headerImg.style.transform = currentRotation;

        const header = document.querySelector("header");
        header.style.background = rotated
            ? "linear-gradient(to bottom, #7db9e8, #2e7be8)"
            : "linear-gradient(to bottom, #fa6bfc, #ec57f4, #b043ef)";

        rotated = !rotated;
    });
});


// Скрипт для нажатия на телефон
document.addEventListener("DOMContentLoaded", function() {
    const headerImg = document.querySelector(".logo.animate__animated.animate__fadeInTopRight");
    let rotated = false;

    // Обработчик события завершения анимации bounceInRight
    headerImg.addEventListener("animationend", function() {
        headerImg.classList.remove("animate__fadeInTopRight");
    }, { once: true });    

    // Обработчик события нажатия на телефон
    headerImg.addEventListener("click", function() {
        const currentRotation = rotated ? "rotateX(0deg)" : "rotateX(360deg)";
        headerImg.style.transition = "transform 1s ease";
        headerImg.style.transform = currentRotation;

        const body = document.querySelector("body");
        body.style.color = rotated ? "black" : "MediumBlue";

        const titleSpan = document.querySelector(".offer");
        titleSpan.style.color = rotated ? "white" : "MidnightBlue";

        rotated = !rotated;
    });
});
