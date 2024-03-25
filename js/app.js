// Palidroma
// Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma. Questa funzione deve ricevere come input la parola inserita dall’utente e ritornare true se la parola è palindroma e false se la parola non è palindroma

//chiedo all'utente una parola
const parola = prompt('Inserisci una parola e ti dirò se è palindroma') //string
const risultato = isPalindroma(parola)
//verifico se la parola invertita è uguale a quella inserita 
if(risultato === true){
    console.log('La parola ' + parola + ' è palindroma');
} else {
    console.log('La parola ' + parola + ' non è palindroma');
}
//funzione che ritorna true o false se palindroma
function isPalindroma(parola){
    const parolaMinuscola = parola.toLowerCase() //string
    const risultato = invertiParola(parolaMinuscola)   //string
    let Palindroma = false    //boolean
    if(parolaMinuscola === risultato){
        Palindroma = true
        return true
        } else {
        return false
    }
}


//funzione per invertire la parola
function invertiParola(text){
    let parolaInvertita = ''    //string
    //ciclo text dall'ultima lettera alla prima e ricompongo la parola al contrario
    for(let i = text.lenght - 1; i >= 0; i--){
        let lettera = text.charAt[i]
        parolaInvertita += lettera
    }
    return parolaInvertita  //string
}


// Pari e Dispari
// L’utente sceglie pari o dispari (tramite prompt) e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione provate a scrivervela voi altrimenti copiatevela da mdn).
// Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.