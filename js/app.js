// Palidroma
// Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma. Questa funzione deve ricevere come input la parola inserita dall’utente e ritornare true se la parola è palindroma e false se la parola non è palindroma

// //chiedo all'utente una parola
// const parola = prompt('Inserisci una parola e ti dirò se è palindroma') //string
// const risultato = isPalindroma(parola)
// //verifico se la parola invertita è uguale a quella inserita
// if(risultato === true){
//     console.log('La parola ' + parola + ' è palindroma');
// } else {
//     console.log('La parola ' + parola + ' non è palindroma');
// }
// //funzione che ritorna true o false se palindroma
// function isPalindroma(parola){
//     const parolaMinuscola = parola.toLowerCase() //string
//     const risultato = invertiParola(parolaMinuscola)   //string
//     let Palindroma = false    //boolean
//     if(parolaMinuscola === risultato){
//         Palindroma = true
//         return true
//         } else {
//         return false
//     }
// }


// //funzione per invertire la parola
// function invertiParola(text){
//     let parolaInvertita = ''    //string
//     //ciclo text dall'ultima lettera alla prima e ricompongo la parola al contrario
//     for(let i = text.lenght - 1; i >= 0; i--){
//         let lettera = text.charAt[i]
//         parolaInvertita += lettera
//     }
//     return parolaInvertita  //string
// }


// Pari e Dispari
// L’utente sceglie pari o dispari (tramite prompt) e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione provate a scrivervela voi altrimenti copiatevela da mdn).
// Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

//chiedo all'utente di scegliere tra pari e dispari
//chiedo all'utente di scegliere un numero compreso tra 1 e 5

// const scelta = prompt('Scegli tra pari e dispari. Esprimi la tua scelta in minuscolo');
// const numeroInput = prompt('Scegli un numero compreso tra 1 e 5');
const today = new Date()
let date = today.getUTCMilliseconds()
console.log(typeof(date), date);    //number
const random = numberRandom(date)
console.log('numero casuale: ', random, typeof(random));

//funzione per generare un numero random compreso tra 1 e 99
function numberRandom(number){
    const numString = number.toString()   //string
    let numRandom = 0   //number 
    for(let i = 0; i < numString.lenght - 1; i++){
        let char = parseInt(numString.charAt[i]) 
        console.log(char, typeof(char));
        numRandom += char
    }
    return numRandom
}