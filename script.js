var navOn = false;

function display() {
    document.getElementById("navbar").style = "display: " + (navOn ? "static;" : "none;");
    navOn = !navOn;
}

window.onload = function() {
    display();
};
