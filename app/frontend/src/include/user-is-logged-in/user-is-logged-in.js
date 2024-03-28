// =============== Logout =============== //
const logoutForm = document.getElementById("logoutForm");
logoutForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const url = "/api/user/logout/";

    await fetch(url, {
        method: "POST",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json",
            "X-CSRFToken": csrftoken,
        },
    });

    window.localStorage.removeItem('authenticated');
    window.location.href = "/logout";
});

// ============= Get cookies from client browser =============
function getCookieInclude(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}


// Check user is logged in or not.
function includeCheckUserLoggedIn() {
    let isAuthenticated = getCookieInclude("authenticated");

    if (isAuthenticated === "34785315311302319036") {
        // If user is authenticated so display text "You are already logged in!".
        document.getElementById("msgUserLoggedIn").style.display = "block";
    }
}
includeCheckUserLoggedIn();
