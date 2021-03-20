// tady je místo pro náš program

let palindrom = document.querySelector("p");
function tucny () {
    palindrom.style.fontWeight = "bold";
}

function noBold() {
    palindrom.style.fontWeight = "normal";
}

function cerveny () {
    palindrom.classList.toggle("red-text");
}

function vetsiPismo() {
    let odstavec = document.querySelector("p");
    let vypocitany = window.getComputedStyle(odstavec);
    let velikost = vypocitany.getPropertyValue("font-size");
    console.log(velikost);
    let novaVelikost = parseInt(velikost) + 1;
    console.log(novaVelikost);
    odstavec.style.fontSize = novaVelikost + "px";
}

function prehraj(elementSelector) {
    let audioElement = document.querySelector(elementSelector);
    audioElement.play();
}

function zastav(elementSelector) {
    let audioElement = document.querySelector(elementSelector);
    audioElement.pause();
}

function opakovat(elementSelector) {
    let audioElement = document.querySelector(elementSelector);
    audioElement.load();
}

function ztisit(elementSelector){
    let audio = document.getElementById("js-audio");
    audio.volume = 0;
}

function hlasitostNormal(elementSelector){
    let audio = document.getElementById("js-audio");
    audio.volume = 0.5;
}

function naPlnyPecky(elementSelector){
    let audio = document.getElementById("js-audio");
    audio.volume = 1;
}
