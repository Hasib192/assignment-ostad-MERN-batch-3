const html = document.getElementsByTagName("html");
const modes = document.querySelectorAll(".bs-theme");

modes.forEach((mode) => {
  mode.addEventListener("click", () => {
    const theme = html[0].getAttribute("data-bs-theme");

    if (theme === "light") {
      document.getElementById("logo").src = "img/logo-white.png";
    }
  });
});

// // switch mode
// mode.addEventListener("click", () => {
//   const mode = html[0].getAttribute("data-bs-theme");
//   if (mode === "light") {
//     html[0].setAttribute("data-bs-theme", "dark");
//     header.style.background = "#000";
//   } else {
//     html[0].setAttribute("data-bs-theme", "light");
//     header.style.background = "#edf2fc";
//   }
// });
