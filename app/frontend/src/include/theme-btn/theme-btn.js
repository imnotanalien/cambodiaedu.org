// ================= Theme light and dark mode =================
// https://github.com/coding-in-public/light-dark/tree/main
const themeSwitcherBtn = document.querySelector(".theme-btn");

function getCurrentTheme() {
    let theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    // localStorage.getItem('canabrey.theme') ? theme = localStorage.getItem('canabrey.theme') : null;
    localStorage.getItem("theme_mode") ? theme = JSON.parse(localStorage.getItem("theme_mode")).value : null; // New line
    return theme;
}

function loadTheme(theme) {
    const root = document.querySelector(":root");
    if (theme === "light") {
        themeSwitcherBtn.innerHTML = `
            <svg class="svg-dark-mode" xmlns="http://www.w3.org/2000/svg" height="34" viewBox="0 -960 960 960" width="34">
                <path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z"/>
            </svg>
        `;
    } else {
        themeSwitcherBtn.innerHTML = `
            <svg class="svg-light-mode" xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" width="30">
                <path d="M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Zm326-268Z"/>
            </svg>
        `;
    }
    root.setAttribute("color-scheme", `${theme}`);
}

themeSwitcherBtn.addEventListener("click", (event) => {
    event.preventDefault(); // new
    let theme = getCurrentTheme();
    let audio;
    if (theme === "dark") {
        audio = document.querySelector(".theme-audio--light-on");
        theme = "light";
    } else {
        audio = document.querySelector(".theme-audio--light-off");
        theme = "dark";
    }
    audio.currentTime = 0;
    audio.play();
    // localStorage.setItem('canabrey.theme', `${theme}`);
    // Syntax: ("key", "value", expiry) | 1 day = 86,400,000 milliseconds | 30 days = 2,592,000,000 ms.
    setThemeLocalStorageWithExpiry("theme_mode", `${theme}`, 2592000000);
    loadTheme(theme);
})

window.addEventListener("DOMContentLoaded", () => {
    loadTheme(getCurrentTheme());
})


// Set LocalStorage key expiring date.
// https://www.sohamkamani.com/javascript/localstorage-with-ttl-expiry/
function setThemeLocalStorageWithExpiry(key, value, ttl) {
    const now = new Date()

    // `item` is an object which contains the original value
    // as well as the time when it's supposed to expire
    const item = {
        value: value,
        expiry: now.getTime() + ttl,
    }
    localStorage.setItem(key, JSON.stringify(item))
}

// This function is to check if LocalStorage key expired or not, if expired will delete/or remove that key.
function getThemeLocalStorageWithExpiry(key) {
    const itemStr = localStorage.getItem(key)

    // if the item doesn't exist, return null
    if (!itemStr) {
        return null
    }

    const item = JSON.parse(itemStr)
    const now = new Date()

    // compare the expiry time of the item with the current time
    if (now.getTime() > item.expiry) {
        // If the item is expired, delete the item from storage
        // and return null
        localStorage.removeItem(key)
        return null
    }
    return item.value
}
getThemeLocalStorageWithExpiry("theme_mode");
