function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("mySidenav").style.left = "0";
    document.getElementById("hideOnClick").style.display = "none";
    // document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "60px";
    document.getElementById("mySidenav").style.left = "-250px";
    document.getElementById("hideOnClick").style.display = "flex";
    // document.getElementById("main").style.marginLeft= "0";
}

// const navLinks = document.querySelectorAll(".nav-links");
const activePage = window.location.pathname;
const navLinks = document.querySelectorAll(".links");
const textItems = document.querySelector(".links span");

navLinks.forEach(link => {
    if (link.href.includes(`${activePage}`)) {
        link.classList.add("active");
    }
});
