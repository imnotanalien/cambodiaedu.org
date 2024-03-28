// ======== Get cookies. ========
function getCookie(cname) {
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

// ========== Check user is logged in OR not ==========
function checkUserLoggedIn() {
    // let isAuthenticated = localStorage.getItem("authenticated") ? JSON.parse(localStorage.getItem("authenticated")) : null;
    let isAuthenticated = getCookie("authenticated");
    
    if (isAuthenticated === "34785315311302319036") {
        console.log("login successful");
    } else {
        console.log("login failed");
    }
}
checkUserLoggedIn();


// Function to get the CSRF token from the cookie
function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
const csrftoken = getCookie('csrftoken');


// Function to send a POST request with CSRF token
const loginPage = document.getElementById("loginForm");
const formData = {
    email: document.querySelector("#email"),
    password: document.querySelector("#password"),
};

loginPage.addEventListener("submit", async (e) => {
    e.preventDefault();
    const url = "/api/user/login/";
    
    try {
        const response = await fetch(url, {
            method: "POST",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
                "X-Requested-With": "XMLHttpRequest", // AJAX
                "X-CSRFToken": csrftoken,
            },
            body: JSON.stringify(
                {
                    "email": formData.email.value,
                    "password": formData.password.value,
                }
            )
        });

        const data = await response.json();

        if (response.status === 200) {
            console.log("Logged in was successful!");
            // Store "access token" in localStorage.
            // window.localStorage.setItem("authTokens", JSON.stringify(data));
            // window.localStorage.setItem("authenticated", true);
            window.location.href = "/calculator/";
        } else {
            // window.localStorage.setItem("authenticated", false);
            alert("Wrong email or password!");
        }
    } catch (error) {
        alert("Wrong email or password!");
    }
});
