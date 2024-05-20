// =========== This code must be the top of contents | Light/dark mode avoid flickering/glitch on reload. ===========
const themeVar = localStorage.getItem("theme_mode") ? theme = JSON.parse(localStorage.getItem("theme_mode")).value : null;
// Check if theme is not set yet is null.
if (themeVar !== null) {
    const root = document.querySelector(":root");
    root.setAttribute("color-scheme", `${theme}`);
}
