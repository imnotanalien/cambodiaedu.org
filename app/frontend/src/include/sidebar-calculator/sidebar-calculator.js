// Get link/url
const sidebarActivePage = window.location.pathname;

// https://stackoverflow.com/questions/6680825/return-string-without-trailing-slash
const sidebarFullLink = sidebarActivePage.replace(/^[\\/]+|[\\/]+$/g, "");

// Remove active, if value is equal to "/en/calculator/" of home.
if ((sidebarFullLink === "en/calculator" || sidebarFullLink === "km/calculator")
    || (sidebarFullLink === "en/calculator/basic" || sidebarFullLink === "km/calculator/basic")
    || (sidebarFullLink === "en/calculator/graphing" || sidebarFullLink === "km/calculator/graphing")
    || (sidebarFullLink === "en/calculator/geometry" || sidebarFullLink === "km/calculator/geometry")
    || (sidebarFullLink === "en/calculator/probability" || sidebarFullLink === "km/calculator/probability")
) {
    const output = `
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
            <path d="M160-120v-480l320-240 320 240v480H560v-280H400v280H160Z"/>
        </svg>
    `
    document.getElementById("svgSidebarHome").innerHTML = output;
} else {
    const output = `
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
            <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/>
        </svg>
    `
    document.getElementById("svgSidebarHome").innerHTML = output;
}

// Active info
if ((sidebarFullLink === "en/calculator/about") || (sidebarFullLink === "km/calculator/about")) {
    const output = `
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
            <path d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/>
        </svg>
    `
    document.getElementById("svgSidebarAbout").innerHTML = output;
} else {
    const output = `
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
            <path d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>
        </svg>
    `
    document.getElementById("svgSidebarAbout").innerHTML = output;
}
