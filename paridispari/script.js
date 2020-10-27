/*
Ex 2 -Pari e Dispari
L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

// definisco le variabili
var evenOdd;
var userNumber;
var myNumber = Math.floor(Math.random() * (5 - 1 + 1) + 1);
console.log('myNumber', myNumber);

// ricerca dell'elemento 'tasto gioca'
var play = document.getElementById('gioca');


//al click del tasto 'gioca':
play.addEventListener('click', function(){
  //prelevo i valori inseriti dall'utente
  evenOdd = document.getElementById('paridispari').value;
  userNumber = parseInt(document.getElementById('number').value);
  console.log('evenOdd', evenOdd);
  console.log('userNumber', userNumber);

  //mostro all'utente il numero estratto randomicamente
  document.getElementById('myNumber').innerHTML += myNumber;

  //faccio la somma dei 2 numeri e vado a definire le condizioni del gioco
  var somma = myNumber + userNumber;
  console.log('somma', somma);

  if ((somma % 2 == 0) && (evenOdd == 'even')){
    document.getElementById('result').innerHTML = 'Pari! Hai Vinto!';
  } else if ((somma % 2 == 0) && (evenOdd == 'odd')){
    document.getElementById('result').innerHTML = 'Pari! Hai Perso!';
  } else if ((somma % 2 == 1) && (evenOdd == 'odd')){
    document.getElementById('result').innerHTML = 'Dispari! Hai Vinto!';
  } else {
    document.getElementById('result').innerHTML = 'Dispari! Hai Perso!';
  }
})
