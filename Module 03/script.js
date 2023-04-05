function startTime() {
  const d = new Date();
  let time = d.toLocaleTimeString();

  let [timeString, notation] = time.split(" ");
  let [hour, minute, second] = timeString.split(":");

  document.querySelector(".hour").textContent = hour;
  document.querySelector(".minute").textContent = minute;
  document.querySelector(".second").textContent = second;
  document.querySelector(".notation").textContent = notation;

  setTimeout(startTime, 1000);
}

