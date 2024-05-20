// ================ Dropdown languages ================
const langDropdownVar = document.getElementById("langDropdown");

function changeLanguageFunc() {
    langDropdownVar.classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it.
window.onclick = function (e) {
    if (!e.target.matches(".btn-lang-dropdown")) {
        if (langDropdownVar.classList.contains("show")) {
            langDropdownVar.classList.remove("show");
        }
    }
}
