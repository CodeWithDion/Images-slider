const nextEl = document.querySelector(".next");
const imageContainerEl = document.querySelector(".image-container")
const imgEl = document.querySelectorAll("img");
const prevEL = document.querySelector(".prev");

let currentImg = 1;
let timeout;

nextEl.addEventListener("click", () => {
    currentImg++;
    clearTimeout(timeout);
    updateImg();
})

prevEL.addEventListener("click", () => {
    currentImg--;
    clearTimeout(timeout);
    updateImg();
})

function updateImg() {
    if (currentImg > imgEl.length) {
        currentImg = 1;
    } else if (currentImg < 1) {
        currentImg = imgEl.length;
    }
    imageContainerEl.style.transform = `translateX(-${(currentImg - 1) * 500}px)`;

    timeout = setTimeout(() => {
        currentImg++;
        updateImg();
    }, 8000);
}

updateImg()