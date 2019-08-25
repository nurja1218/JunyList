const title = document.querySelector("#title");

const CLICK_CLASS = "clicked";

function handleClick() {
    const hasClass = title.classList.contains(CLICK_CLASS);
    if(hasClass === false){
        title.classList.add(CLICK_CLASS);
    } else {
        title.classList.remove(CLICK_CLASS);
    }
}

function init() {
    title.addEventListener("click", handleClick);
}

init();