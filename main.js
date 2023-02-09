 speed = 0;
 const options = {
  enableHighAccuracy: true,
  timeout: 2500,
  maximumAge: 0
};

function showSpeed(position) {
  speed = Math.round(position.coords.speed * 3.6);
  document.getElementById('speed').textContent = `Current speed: ${speed} km/h`;
  console.log(speed)
}

function error(err) {
  document.getElementById('speed').textContent ="Unable to retrieve your location: " + err.message;
}

if (navigator.geolocation) {
  navigator.geolocation.watchPosition(showSpeed, error, options);
} else {
  console.error("Geolocation is not supported by this browser.");
}

