//Scrivo le variabili
let sceltaUtente = "";
let numeroUtente = 0;
let numeroRandom = 0;


//Creo un primo ciclo do-while tale che la domanda venga posta almeno una volta
do {
    sceltaUtente = prompt("Scegli \"pari\" oppure \"dispari\"?");
} while (sceltaUtente !== "pari" && sceltaUtente !== "dispari");

//Creo un secondo ciclo in cui faccio scegliere un numero da 1 a 5 
do {
    numeroUtente = prompt("Scegli un numero da 1 a 5");
    numeroUtente = parseInt(numeroUtente);
} while ((numeroUtente < 1 || numeroUtente > 5) || isNaN(numeroUtente));

//Genero un numero randomico da 1 a 5
numeroRandom = randomGenerator1_5();

//Creo la variabile somma
let somma = numeroUtente + numeroRandom;

//Creo le condizioni per capire chi ha vinto
if (numeroUtente == isPariOrDispari(somma)) {
    alert("Hai vinto!");
} else {
    alert("Hai perso!");
}

//Creo le funzioni
function randomGenerator1_5() {
    return Math.floor(Math.random() * 5) + 1;
}

function isPariOrDispari(somma) {
    if (somma % 2 == 0) {
        return "pari";
    } else {
        return "dispari";
    }
}