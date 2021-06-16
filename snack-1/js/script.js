// Snack 1.
// Creare un oggetto palla che abbia le seguenti proprietà.
// Nome = palla
// Peso = 10

var element = document.getElementById("result");

var palla = {
    name: 'palla',
    peso: 10
}

console.log(palla.name,palla.peso)

// Snack1. - la continua.
// Attraverso un prompt dare la possibilità all’utente di modificare il peso della palla.

palla.peso = parseInt(prompt('quanto pesa la palla?'));
while (isNaN(palla.peso)) {
    palla.peso = parseInt(prompt('inserisci un numero, quanto pesa la palla?'));
}
console.log(palla.peso);

//Inserire  l’oggetto palla in una array var giochi = [];

var giochi = [];

giochi.push(palla);
console.log(giochi[0]);

//Permettere all’utente di inserire un nuovo oggetto all’interno dell’array giochi

var newGioco = prompt('Nome del nuovo gioco');
while (!isNaN(newGioco)) { 
    newGioco = prompt('inserisci il nome del nuovo gioco');
}
var newPeso = parseInt(prompt('Peso del nuovo gioco?'));
while (isNaN(newPeso)) {
    newPeso = parseInt(prompt('inserisci un numero, quanto pesa ' + newGioco +'?'));
}
console.log(newGioco);
giochi.push ({
    name: newGioco,
    peso: newPeso
});
console.log(giochi[1]);