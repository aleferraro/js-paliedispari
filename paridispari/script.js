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

// funzione che genera numero random da 1 a 5
function numberOneToFive (num){
  var num = Math.floor(Math.random() * (5 - 1 + 1) + 1);
  return num;
}

var myNumber = numberOneToFive(myNumber);
console.log('myNumber', myNumber);

// ricerca dell'elemento 'tasto gioca'
var play = document.getElementById('gioca');


//funzione che vede se la somma è pari o dispari
function evenOrOdd (num1, num2){
  var somma = num1 + num2;

  if ((somma % 2 == 0) && (evenOdd == 'even')){
    document.getElementById('result').innerHTML = 'Pari! Hai Vinto!';
  } else if ((somma % 2 == 0) && (evenOdd == 'odd')){
    document.getElementById('result').innerHTML = 'Pari! Hai Perso!';
  } else if ((somma % 2 == 1) && (evenOdd == 'odd')){
    document.getElementById('result').innerHTML = 'Dispari! Hai Vinto!';
  } else {
    document.getElementById('result').innerHTML = 'Dispari! Hai Perso!';
  }
  console.log('somma', somma);
  return
}

//al click del tasto 'gioca':
play.addEventListener('click', function(){
  //prelevo i valori inseriti dall'utente
  evenOdd = document.getElementById('paridispari').value;
  userNumber = parseInt(document.getElementById('number').value);
  console.log('evenOdd', evenOdd);
  console.log('userNumber', userNumber);

  //mostro all'utente il numero estratto randomicamente
  document.getElementById('myNumber').innerHTML += myNumber;


  //invoco la funzione per stabilire se è pari o dispari
  evenOrOdd(userNumber, myNumber);
})
