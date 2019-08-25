const title = document.querySelector("#title");

const CLICK_CLASS = "clicked";

function handleClick() {
    const currentClass = title.className;
    if(currentClass !== CLICK_CLASS){
        title.className = CLICK_CLASS;
    } else {
        title.className = "";
    }
}

function init() {
    title.addEventListener("click", handleClick);
}

init();