// function enforceLandscape() {
//     if (window.innerHeight > window.innerWidth) {
//         document.body.style.transform = "rotate(90deg)";
//         document.body.style.width = "100vh";
//         document.body.style.height = "100vw";
//         document.body.style.overflow = "hidden";
//         document.body.style.position = "fixed";
//     } else {
//         document.body.style.transform = "";
//         document.body.style.width = "";
//         document.body.style.height = "";
//         document.body.style.overflow = "";
//         document.body.style.position = "";
//     }
// }
// window.addEventListener("resize", enforceLandscape);
// document.addEventListener("DOMContentLoaded", enforceLandscape);

// Function to enforce landscape mode and show a modal if needed
function enforceLandscape() {
    let modal = document.getElementById("orientationModal");

    if (window.innerHeight > window.innerWidth) {
        // Show the modal if the device is in portrait mode
        if (!modal) {
            modal = document.createElement("div");
            modal.id = "orientationModal";
            modal.style.position = "fixed";
            modal.style.top = "0";
            modal.style.left = "0";
            modal.style.width = "100vw";
            modal.style.height = "100vh";
            modal.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
            modal.style.color = "white";
            modal.style.display = "flex";
            modal.style.justifyContent = "center";
            modal.style.alignItems = "center";
            modal.style.zIndex = "9999";
            modal.style.fontSize = "1.5em";
            modal.style.textAlign = "center";
            modal.innerText = "Please rotate your device to landscape mode.";
            document.body.appendChild(modal);
        }
    } else {
        // Remove the modal if the device is in landscape mode
        if (modal) {
            modal.remove();
        }
    }
}



// Function to add click event to elements with class 'platbutton'
function initializePlatButtonTransformation() {
    const platButtons = document.querySelectorAll(".platbutton");
    platButtons.forEach(button => {
        // on hover, transform the button
        button.addEventListener("mouseenter", () => {
            button.style.transform = "scale(1.2)";
        });
        button.addEventListener("mouseleave", () => {
            button.style.transform = "";
        });

        // button click play sound https://www.myinstants.com/media/sounds/clickar.mp3
        button.addEventListener("click", () => {
            const audio = new Audio("./Ln/clickar.mp3");
            audio.play();
        });
    });
}

document.addEventListener("click", () => {
    const audio = new Audio("./Ln/clickar.mp3");
    // alert("click");
    audio.play();
});


// Add event listeners to enforce landscape mode on resize and load
window.addEventListener("resize", enforceLandscape);
document.addEventListener("DOMContentLoaded", enforceLandscape);
initializePlatButtonTransformation();