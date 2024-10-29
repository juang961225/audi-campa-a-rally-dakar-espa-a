var adDiv;
var step = 0;

function preloadImages(srcs, imgs, callback) {
    var img;
    var remaining = srcs.length;
    for (var i = 0; i < srcs.length; i++) {
        img = new Image();
        img.onload = function () {
            --remaining;
            if (remaining <= 0) {
                callback();
            }
        };
        img.src = srcs[i];
        imgs.push(img);
    }
}

var imageSrcs = [
    "bg1.jpg",
    "logo.png",
    "logos_audi.png",
    "txt2.png",
    "txt3.png",
    "txt3a.png",
];
var images = [];
function init_preload() {
    preloadImages(imageSrcs, images, startAd);
}

function startAd() {
    addEventListeners();
    init_banner();
}

function init_banner() {
    var delay = 0;
    setTimeout(function () {}, delay);

    delay += 500;
    setTimeout(function () {
        document.getElementById("txt2").classList.add("visible");
    }, delay);

    delay += 1300;

    setTimeout(function () {
        document.getElementById("txt3").classList.add("visible");
    }, delay);

    delay += 5000;

    setTimeout(function () {
        document.getElementById("txt3").classList.remove("visible");
    }, delay);

    delay += 200;
    setTimeout(function () {
        document.getElementById("txt3a").classList.add("visible");
    }, delay);

    delay += 5000;
    setTimeout(function () {
        document.getElementById("txt3a").classList.remove("visible");
    }, delay);

    setTimeout(function () {
        init_banner();
    }, delay + 200);
}

function addEventListeners() {
    document.getElementById("buttons").addEventListener("click", allclick);
    document.getElementById("cta1").addEventListener("click", click_cta1);
}

function allclick() {
    Enabler.exit("allclick");
}
function click_cta1(e) {
    e.preventDefault();
    e.stopPropagation();
    Enabler.exit("Escuchalo");
}

window.addEventListener("load", init_preload);
