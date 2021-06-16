/*Snack 4 - 
Creare un array di 3 studenti (3 oggetti in un array, quindi) con queste proprietà:
(per nome, cognome ed age assegnate direttamente nel codice i valori che volete. 
ATTENZIONE: la descrizione invece sarà l’unico valore vuoto, stringa vuota.)

{
  nome: 'Pippo',
  cognome: 'Baudo',
  age: 80,
  descrizione: ''
} 

Successivamente, con dei prompt chiediamo di volta in volta all’utente la descrizione di ciascun studente, salviamola quindi all’interno della sua proprietà. 

Nota bene: questo naturalmente, in un ciclo, per ciascun studente. ;) 

Stampiamo con un console.log il risultato di questo array di studenti aggiornato.

Bonus
Visualizzare nell’html questi dati in una forma tabellare.*/

var result = '';
var outputHtml = document.querySelectorAll('.students');
var outputHtml2 = document.getElementById('result');
var classe = [
  {
    nome: 'Pippo',
    cognome: 'Baudo',
    age: 80,
    descrizione: ''
  },
  {
    nome: 'Claudio',
    cognome: 'Bisio',
    age: 50,
    descrizione: ''
  },
  {
    nome: 'Mario',
    cognome: 'Rossi',
    age: 65,
    descrizione: ''
  }
];

for (var x = 0; x < classe.length; x++) {
  classe[x].descrizione = prompt('Inserisci una descrizione per ' + classe[x].nome + ' ' + classe[x].cognome);
}

// i due for si possono anche unire 
// soluzione da 'spacconi'
for (var x = 0; x < classe.length; x++) {
  result = '';
  for ( var key in classe[x]) {
    result += '<td>' + classe[x][key] + '</td>';
  }
  outputHtml[x].innerHTML += result;
}

// soluzione easy, ma più dinamica 
// for (var x = 0; x < classe.length; x++) {
//   result += '<tr>';
//   for ( var key in classe[x]) {
//     result += '<td>' + classe[x][key] + '</td>';
//   }
//   result += '</tr>';
// }

// outputHtml2.innerHTML += result;