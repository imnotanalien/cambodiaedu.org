const calculatorBtn = document.getElementById("calculatorBtn");
const calculatorBox = document.getElementById("calculatorBox");
const calculatorCloseBtn = document.getElementById("calculatorCloseBtn");
const calculatorFullscreenBtn = document.getElementById("calculatorFullscreenBtn");

calculatorBtn.addEventListener("click", () => {
    calculatorBox.style.display = "block";
    calculatorBox.style.transform = "translate(0px, 0px)";
})

calculatorFullscreenBtn.addEventListener("click", () => {
    calculatorBox.style.top = "0";
    calculatorBox.style.width = "100%";
    calculatorBox.style.height = "100vh";

    let stateObj = {
        id: "100"
    };
    window.history.replaceState(stateObj, "Fullscreen", "#fullscreen");
})

calculatorCloseBtn.addEventListener("click", () => {
    calculatorBox.style.display = "none";
    calculatorBox.style.transform = "translate(0px, 100%)";
})
