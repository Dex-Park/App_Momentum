const body = document.querySelector("body");

const IMG_NUM = 6;

function paintImage(imgNumber) {
    const image = new Image();
    image.src = `images/img${imgNumber+1}.jpg`
    image.classList.add('bgImage');
    body.appendChild(image);
}

function getRandom() {
    const num = Math.floor(Math.random() * IMG_NUM);
    return num;
}

function init() {
    const randomNumber = getRandom();
    paintImage(randomNumber);
}

init();