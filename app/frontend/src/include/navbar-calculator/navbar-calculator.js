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


// ========== Dropdown menu ==========
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (e) {
    if (!e.target.matches('.dropbtn')) {
        var myDropdown = document.getElementById("myDropdown");
        if (myDropdown.classList.contains('show')) {
            myDropdown.classList.remove('show');
        }
    }
}


// ============= Get cookies from client browser =============
function getCookieJS(cname) {
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

// ================ Check user is loggged in or not ================
function headerCheckUserLoggedIn() {
    // let isAuthenticated = localStorage.getItem("authenticated") ? JSON.parse(localStorage.getItem("authenticated")) : null;
    let isAuthenticated = getCookieJS("authenticated");

    if (isAuthenticated === "34785315311302319036") {
        // If user is authenticated so display text "You are already logged in!".
        document.getElementById("userLogin").style.display = "none";
        document.getElementById("userSignUp").style.display = "none";
    } else {
        document.getElementById("userProfile").style.display = "none";
        document.getElementById("userLogout").style.display = "none";
    }
}
headerCheckUserLoggedIn();


// ================== Start user profile dropdown menu ================== //
let profileDropdownList = document.querySelector(".profile-dropdown-list");
let btnUserProfile = document.querySelector(".profile-dropdown-btn");

/* This function display or hide profile dropdown list */
const toggle = () => profileDropdownList.classList.toggle("active");

document.addEventListener("click", function (e) {
    // Hide dropdown list if user click outside dropdown button.
    if (!btnUserProfile.contains(e.target)) {
        profileDropdownList.classList.remove("active");
    }
});


// ============ Get Django CSRF token from form HTML tag ============
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


// ============ Fetch API user logged in ============
async function getUserLoggedIn() {
    const url = "/api/user/user/";
    const response = await fetch(url, {
        method: "GET",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json",
            "X-CSRFToken": csrftoken,
        },
    })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            // User profile dropdown menu.
            let checkUserAvailable = data["profile"];
            if (checkUserAvailable === null) {
                // FUNCTION TO DELETE  COOKIE BY NAME
                function deleteCookie(cookiname) {
                    var d = new Date();
                    d.setDate(d.getDate() - 1);
                    var expires = ";expires=" + d;
                    var value = "";
                    document.cookie = cookiname + "=" + value + expires + "; path=/";
                }
                deleteCookie("authenticated");

                // Show
                document.getElementById("userLogin").style.display = "block";
                document.getElementById("userSignUp").style.display = "block";
                // Hide
                document.getElementById("userProfile").style.display = "none";
                document.getElementById("userLogout").style.display = "none";
                document.getElementById("postArticle").style.display = "none";

                userProfile = `
                    <svg xmlns="http://www.w3.org/2000/svg" height="36" viewBox="0 -960 960 960" width="36">
                        <path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z"/>
                    </svg>
                `;
            } else if (checkUserAvailable !== undefined) {
                userProfile = `
                    <img src="${data.profile}" alt="user profile">
                `;
            } else {
                userProfile = `
                    <svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 -960 960 960" width="32">
                        <path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z"/>
                    </svg>
                `;
            }
            document.getElementById("UserProfileDropdownBtn").innerHTML = userProfile;

            userNameAndProfile = `
                <a href="/${data.username}">
                    <img style="width: 30px; height: 30px; margin-right: .6rem;" src="${data.profile}" alt="user profile">
                    <span>${data.first_name} ${data.last_name}</span>
                </a>
            `;
            document.getElementById("userProfile").innerHTML = userNameAndProfile;
        })
};
getUserLoggedIn();


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
