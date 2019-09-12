const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("h1");

function getTime() {
    const date = new Date();
    const seconds = date.getSeconds();
    const minutes = date.getMinutes();
    const hours = date.getHours();

    clockTitle.innerText =  `${hours < 10 ? `am0${hours}` :
        hours < 12 ? `am${hours}` : hours == 12 ? `pm${hours}` :
        hours < 22 ? `pm0${hours-12}`
        : `pm${hours-12}`}:${
        minutes < 10?`0${minutes}`: minutes}:${
        seconds < 10?`0${seconds}`: seconds}`;
}

function init() {
    getTime();
    setInterval(getTime, 1000);
}

init();