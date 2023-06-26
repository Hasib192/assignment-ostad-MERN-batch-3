const html = document.getElementsByTagName("html");
const modes = document.querySelectorAll(".bs-theme");

modes.forEach((mode) => {
  mode.addEventListener("click", () => {
    const theme = html[0].getAttribute("data-bs-theme");

    if (theme === "light") {
    }
  });
});

const alertPlaceholder = document.getElementById("liveAlertPlaceholder");
const appendAlert = (message, type) => {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = [`<div class="alert alert-${type} alert-dismissible" role="alert">`, `   <div>${message}</div>`, '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>', "</div>"].join("");

  alertPlaceholder.append(wrapper);
};

const alertTrigger = document.getElementById("liveAlertBtn");
if (alertTrigger) {
  alertTrigger.addEventListener("click", () => {
    appendAlert("Nice, you triggered this alert message!", "success");
  });
}
