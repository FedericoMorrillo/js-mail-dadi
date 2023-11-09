'use strict'

// input utente dove inserisce la sua email
const email = prompt("inserisci la tua email");

// array email verificate
const emailVerificate = ["mariorossi@gmail.com","Francescofederico@gmail.com","federicomorrillo@gmail.com","prova"];

// ciclo per attraversare l' array  (i < 4 è in questo caso lo stesso di scrivere i < emailVerificate.lenght)
for(let i = 0 ; i < 4 ; i++){
    //console.log(emailVerificate[i] +" "+ i);


    //condizioni
    if(email === emailVerificate[i]){
        console.log("L' email è verificata");
        alert("L' email è verificata")
        break
    }
    else {
        console.log("L' email non è verificata");
    }
}

