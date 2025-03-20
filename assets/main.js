const taglines = document.querySelectorAll(".fade-text");
let index = 0;

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(() => {
        document.getElementById("main-heading").classList.add("show");
        setTimeout(() => {
            taglines[index].classList.add("show");
            setTimeout(startTaglineLoop, 5000); // Wait before starting loop
        }, 1500);
    }, 500);
});

function startTaglineLoop() {
    setInterval(() => {
        taglines[index].classList.remove("show");
        index = (index + 1) % taglines.length;
        taglines[index].classList.add("show");
    }, 6000); // Change tagline every 6 seconds
}