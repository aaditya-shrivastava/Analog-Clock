let hour = document.getElementById("hours");
let minute = document.getElementById("min");
let sec = document.getElementById("sec");
let day = document.getElementById("Day");
function Timer() {
  let date = new Date();
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();
  let hRotation = 30 * hh + mm / 2;
  let mRotation = 6 * mm;
  let sRotation = 6 * ss;
  
  let keyDay = date.getDay();
  let Day = date.getDate();

  hour.style.transform = `rotate(${hRotation}deg)`;
  minute.style.transform = `rotate(${mRotation}deg)`;
  sec.style.transform = `rotate(${sRotation}deg)`;

  switch (keyDay) {
    case 1:
      day.innerHTML = "Mon-" + Day;
      break;
    case 2:
      day.innerHTML = "Tus-" + Day;
      break;
    case 3:
      day.innerHTML = "Wed-" + Day;
      break;
    case 4:
      day.innerHTML = "Thu-" + Day;
      break;
    case 5:
      day.innerHTML = "Fri-" + Day;
      break;
    case 6:
      day.innerHTML = "Sat-" + Day;
      break;
    default:
      day.innerHTML = "Sun-" + Day;
      break;
  }
}
setInterval(Timer, 100);
