'use strict'

//utente
const dadoUtente = Number(prompt("inserisci un numero da 1 a 6")); 

//avversario
const avversario = Number(Math.floor(Math.random()*(6 -1)+1));

//condizione
if(dadoUtente > avversario){
    console.log("Hai vinto")
}
else if(avversario > dadoUtente){
    console.log("Hai perso")
}
else {
    console.log("Pareggio")
}
