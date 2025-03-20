const taglines = document.querySelectorAll(".fade-text");
let index = 0;

function startTaglineLoop() {
    setInterval(() => {
        taglines[index].classList.remove("show");
        index = (index + 1) % taglines.length;
        taglines[index].classList.add("show");
    }, 6000); // Change tagline every 6 seconds
}

function appHeight(){
    const doc = document.documentElement;
    doc.style.setProperty('--app-height', `${window.innerHeight}px`);
}

function debounce(func, wait) {
    let timeout;
    return function() {
        const context = this;
        const args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), wait);
    };
}

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(() => {
        document.getElementById("main-heading").classList.add("show");
        setTimeout(() => {
            document.querySelector(".fade-container").classList.add("on");
            taglines[index].classList.add("show");
            setTimeout(startTaglineLoop, 5000); // Wait before starting loop
        }, 1500);
    }, 500);
});

window.addEventListener('resize', debounce(appHeight, 250));