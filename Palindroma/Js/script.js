//Creo la variabile
let parolaDaTestare;

//Creo un ciclo do-while tal e valido
do {
    parolaDaTestare = prompt("Inserisci la parola!");
} while (!isNaN(parolaDaTestare));
alert(palindromoCheck(parolaDaTestare));

//Creo la funzione 
function palindromoCheck(parola) {
    let parolaInversa = "";
    parola = parola.toLowerCase();
    for (i = parola.length - 1; i >= 0; i--) {
        parolaInversa += parola.charAt(i);
    }
    if (parola == parolaInversa) {
        return "La parola è palindroma";
    } else {
        return "La parola non è palindroma";
    }
}