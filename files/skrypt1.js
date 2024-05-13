let p1 = document.getElementById("p1").value;
let p2 = document.getElementById("p2").value;
let p1a = null;
let p2a = null;

let checkNames = function() {
    let a = prompt("Podaj nazwę Pierwszego gracza:");
    let b = prompt("Podaj nazwę Drugiego gracza:");
    if (!a || !b) {startGame()} else {startGame()}
    console.log("Player1: " + a + ", Player2: " + b);
    p1 = "Gracz 1: " + a;
    p2 = "Gracz 2: " + b;
    p1a = a;
    p2a = b;
}

let startGame = function() {}