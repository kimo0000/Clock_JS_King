const hoursEl = document.querySelector(".hours");
const minutesEl = document.querySelector(".minutes");
const secondesEl = document.querySelector(".secondes");

let displayCount = null;

function getTimer() {
  const time = new Date();

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const secondes = time.getSeconds();

  const hourDeg = (hours / 12) * 360;
  const minuteDeg = (minutes / 60) * 360;
  const secondsDeg = (secondes / 60) * 360;

  hoursEl.style.transform = `rotate(${hourDeg}deg)`;
  minutesEl.style.transform = `rotate(${minuteDeg}deg)`;
  secondesEl.style.transform = `rotate(${secondsDeg}deg)`;
}

displayCount = setInterval(getTimer, 1000);
