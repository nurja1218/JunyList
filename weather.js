const API_KEY = "608449381b066643c5471b4fa0413394";

const CORDS = "coords";

function saveCoords(coordsObj) {
  localStorage.setItem(CORDS, stringify(coordsObj));
}

function handleGeoSucces(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitude,
    longitude
  };
  saveCoords(coordsObj);
}

function handleGeoError() {
  console.log("Can't access geo location");
}

function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoords() {
  const loadedCords = localStorage.getItem(CORDS);
  if (loadedCords === null) {
    askForCoords();
  } else {
    //getWeather
  }
}

function init() {
  loadCoords();
}

init();
