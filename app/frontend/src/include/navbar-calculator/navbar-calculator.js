// Active menu
const navbarCalculatorLinks = document.querySelectorAll(".navbar-calculator-links");
const activePage = window.location.pathname;

// https://stackoverflow.com/questions/6680825/return-string-without-trailing-slash
const fullLink = activePage.replace(/^[\\/]+|[\\/]+$/g, "");

navbarCalculatorLinks.forEach(link => {
    if (link.href.includes(`${activePage}`)) {
        link.classList.add("active");

        // Remove active, if value is equal to "/en/calculator/" of home.
        if ((`${activePage}` === "/en/calculator/") || (`${activePage}` === "/km/calculator/")) {
            link.classList.remove("active");
        }
    }
});
