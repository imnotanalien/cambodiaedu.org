// This code must be the top of contents | Light/dark mode avoid flickering/glitch on reload.
localStorage.getItem("theme_mode") ? theme = JSON.parse(localStorage.getItem("theme_mode")).value : null;
const root = document.querySelector(":root");
root.setAttribute("color-scheme", `${theme}`);
// End
