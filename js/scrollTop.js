//Get the button:
mybutton = document.getElementById("scrollTopBtn");

var rootElement = document.documentElement
let whenToFade;

if(screen.width < 600) {
    whenToFade = 0.3;
} else if(screen.width < 1200) {
    whenToFade = 0.45;
} else {
    whenToFade = 0.6;
}
function handleScroll() {
    // Do something on scroll
    var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight

    if ((rootElement.scrollTop / scrollTotal ) > whenToFade ) {
        // Show button
        mybutton.classList.remove("fade")
        console.log("shwon")
    } else {
        // Hide button
        mybutton.classList.add("fade")
    }
}

document.addEventListener("scroll", handleScroll)