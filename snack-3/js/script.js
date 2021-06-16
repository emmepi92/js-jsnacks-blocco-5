//Snack 3 - 1^ parte.
//Creare un array con tre numeri, calcolare la media di questi tre numeri.

var numbs = [2,4,6];
var somma = 0;
var media = 0;

for ( var x = 0; x < numbs.length; x++) {
    somma += numbs[x];
}

media = (somma / numbs.length);

console.log('media dei 3 numeri',media)

//Snack 3 - 2^ parte.
//Costruiamo un array di tre giocatori di basket. Ogni giocatore avrà le seguenti proprietà:
// nome
// cognome
// anno
// punteggio
// Calcolare il punteggio medio dei tre giocatori.

var squadra = [
    {nome: 'Aldo',
    cognome: 'Bianco',
    anno: 1990,
    punteggio:100},

    {nome: 'Giovanni',
    cognome: 'Rossi',
    anno: 1980,
    punteggio:75},

    {nome: 'Giocomo',
    cognome: 'Verdi',
    anno: 1985,
    punteggio: 50}
]
var somma2 = 0;
var media2 = 0;
var result = '';
var outputHtml = document.getElementsByClassName('players');

for ( var i = 0; i < squadra.length; i++) {
    somma2 += squadra[i].punteggio;
}

media2 = somma2 / squadra.length;
console.log ('media dei 3 punteggi',media2);

for (var x = 0; x < squadra.length; x++) {

    result = '';
    
    for ( var key in squadra[x]) {
        result += '<td>' + squadra[x][key] + '</td>'
    }

    outputHtml[x].innerHTML += result;

}

