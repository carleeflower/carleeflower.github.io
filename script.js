window.onscroll = function() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    if(scrolled > document.getElementById("Health").scrollHeight / height * 10) {
        setColor("HealthNav", "red");
    }

    if(scrolled < document.getElementById("Health").scrollHeight / height * 10) {
        setColor("HealthNav", "white");
    }
    console.log(document.getElementById("Health").scrollHeight / height * 100);
};

function setColor(id, c) {
    document.getElementById(id).style = "color: " + c + ";";
}

function setScroll(id) {
    document.documentElement.scrollTop = 50;
}
