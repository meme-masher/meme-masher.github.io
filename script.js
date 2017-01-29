var wipe = {clicks: 0, points: 1, multiplier: 1};
var game = {clicks: 0, points: 1, multiplier: 1};
// You cannot believe how much I want to name that variable "markiplier".
// I'm so mature, right?

function clicked() {
    game.points = game.points + game.multiplier;
    game.clicks++;
    document.getElementById("button").src = "images/meme" + game.clicks % 4 + ".png";
}

function saveGame() {
    if (typeof(Storage) !== "undefined") {
        localStorage.setItem("gameData",JSON.stringify(game));
    } else {
        alert("Your browser does not support local storage. Please use text-based saving.");
    }
}

function loadGame() {
    if (typeof(Storage) !== "undefined") {
        game = JSON.parse(localStorage.getItem("gameData"));
    } else {
        alert("Your browser does not support local storage. Please use text-based loading.");
    }
}

function trueWipe() {
    wipeGame();
    if (typeof(Storage) !== "undefined") {
        localStorage.setItem("gameData",JSON.stringify(wipe));
    } else {
        alert("Your browser does not support local storage. Please use text-based saving.");
    }
}

function textSave() {
    alert("Copy-paste this text to your clipboard:\n" + JSON.stringify(game));
}

function textLoad() {
    game = JSON.parse(prompt("Paste your saved game here:"));
}

setInterval(function() {
    if (localStorage.getItem("gameData") !== JSON.stringify(wipe) || JSON.parse(localStorage.getItem) !== [Object object]) {
        document.getElementById("save").innerHTML = localStorage.getItem("gameData");
    } else {
        document.getElementById("save").innerHTML = "no saves";
    }
}, 0)

setInterval(function() {
    document.getElementById("counter").innerHTML = game.points;
}, 0);
