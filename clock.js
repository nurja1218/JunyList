const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("h1");

function getTime() {
    const date = new Date();
    const seconds = date.getSeconds();
    const minutes = date.getMinutes();
    const housrs = date.getHours();
    clockTitle.innerText = `${housrs}:${minutes}:${seconds < 10?`0${seconds}`:seconds}`;
}

function init() {
    getTime();
    setInterval(getTime, 1000);
}

init();