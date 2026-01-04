window.onscroll = function () {
    if (window.scrollY > 50) {
        document.getElementById("menu").style.backgroundColor = "gray";
    } else {
        document.getElementById("menu").style.backgroundColor = "lightblue";
    }
};