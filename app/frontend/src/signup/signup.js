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
const signUpForm = document.getElementById("signUpForm");
const formData = {
    first_name: document.querySelector("#firstName"),
    last_name: document.querySelector("#lastName"),
    email: document.querySelector("#email"),
    password: document.querySelector("#password"),
    confirm_pass: document.querySelector("#confirmPass"),
    date_of_birth: document.querySelector("#dateOfBirth"),
};


signUpForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const url = "/api/user/signup/";
    
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
                    "first_name": formData.first_name.value,
                    "last_name": formData.last_name.value,
                    "email": formData.email.value,
                    "password": formData.password.value,
                    "confirm_pass": formData.confirm_pass.value,
                    "date_of_birth": formData.date_of_birth.value,
                }
            )
        });

        const data = await response.json();

        if (response.status === 200) {
            alert("Sign up was successful!");
            // Store "access token" in localStorage.
            // window.localStorage.setItem("authTokens", JSON.stringify(data));
            window.location.href = "/login/";
        } else {
            alert("Something went wrong!");
        }
    } catch (error) {
        alert("Something went wrong!");
    }
});
