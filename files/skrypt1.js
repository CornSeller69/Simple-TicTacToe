let barag = document.getElementById("p1");
let gameStarted = false;

let starter = function () {
    if (gameStarted) { alert("Gra obecnie już trwa!"); } else if (!gameStarted) {
        gameStarted = true;
        checkNames();
    }
}

let checkNames = function () {
    let a = prompt("Podaj nazwę Pierwszego gracza");
    let b = prompt("Podaj nazwę Drugiego gracza");
    if (!a || !b) { checkNames(); } else if (a && b) { startGame(); }
    console.log("Player1: " + a + ", Player2: " + b);
    barag.textContent = "Gracz 1: " + a + " | " + "Gracz 2: " + b;
}

let startGame = function () {
    console.log("startGame(): Jak narazie jest wszystko git!");
    
}