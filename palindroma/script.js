/*
Ex 1 -Palidroma
Chiedere all'utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

//dichiearo le variabili
var inputString;
var test = document.getElementById('test');

// definisco la funzione che inverte la stringa
function inverse(inputString){
  var stringChar = inputString.split('');
  stringChar.reverse();
  return stringChar.join('');
}

//definisco la funzione che confronta la stirnga con la rispettiva stringa invertita

function isPalindroma(inputString){
  var palindroma = false;
  if (inputString == inverse(inputString)){
    palindroma = true
  }
  return palindroma;
}

//al cliccare del tasto 'test' viene eseguita la funzione che mi dice se la parola è palindroma e mi restituisce il risultato

test.addEventListener('click', function(){
  document.getElementById('result').innerHTML = 'La parola è palindroma? ';
  inputString = document.getElementById('string').value;
  console.log('inputString',inputString);
  console.log('inverseString', inverse(inputString));
  console.log('result', isPalindroma(inputString));

  document.getElementById('result').innerHTML += isPalindroma(inputString);
})
