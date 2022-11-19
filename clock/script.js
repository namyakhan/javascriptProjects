setInterval(setClock, 1000);

const hourHand = document.querySelector("[data-hour-hand]");
const minuteHand = document.querySelector("[data-minute-hand]");
const secondHand = document.querySelector("[data-second-hand]");

//setting the clock
function setClock() {
  const currentDate = new Date();
  const seconds = currentDate.getSeconds() / 60;
  const minutes = (seconds + currentDate.getMinutes()) / 60;
  const hours = (minutes + currentDate.getHours()) / 12;
  clockRotation(secondHand, seconds);
  clockRotation(minuteHand, minutes);
  clockRotation(hourHand, hours);
}

//for rotating the elements
function clockRotation(element, rotationRatio) {
  element.style.setProperty("--rotation", rotationRatio * 360);
}
s;
setClock();
