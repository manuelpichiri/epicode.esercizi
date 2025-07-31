/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/
let numb1;
let numb2;
function crazySum(numb1, numb2) {

    if (numb1 === numb2) {
        return (numb1 + numb2) * 3

    } else {
        return numb1 + numb2
    }

}

console.log(crazySum(5, 5))
console.log(crazySum(5, 15))

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/
let numb;
function boundary(numb) {

    if (numb >= 20 && numb <= 100 || numb === 400) {

        return true

    } else {
        return false
    }

}
console.log(boundary(400))
console.log(boundary(30))
console.log(boundary(300))

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

let string;

function reverseString(string) {

    const test = string.split("")
    test.reverse()
    return test.join("")

}

console.log(reverseString("Epicode"))






/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/


function upperFirst(string2) {


    const words = string2.split(" ")

    for (let i = 0; i < words.length; i++) {

        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1)

    }

    return console.log(words.join(" "))
}

console.log(upperFirst("ciao sono manuel"))

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

let n;

function giveMeRandom(n) {

    let array = []

    for (let i = 1; i <= n; i++) {

        let randomNumber;
        array.push(randomNumber = Math.floor(Math.random() * 11))

    }

    return array
}

console.log(giveMeRandom(7))

/* SCRIVI QUI LA TUA RISPOSTA */

//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/
let l1;
let l2;

function area(l1, l2) {

    const multi = l1 * l2

    return multi
}

console.log(area(12, 12))
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

let numb3;

function crazyDiff(numb3) {

    const diff = numb3 - 19

    if (diff > 19) {

        return diff * 3
    } else {
        return Math.abs(diff) // ho usato abs perchè hp visto che la differenza assoluta è sempre positiva
    }
}

console.log(crazyDiff(12))
console.log(crazyDiff(46))

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/
let string3;

function codify(string3) {

    const word = "code"
    if (string3.startsWith(word) === true) {

        return string3


    } else {
        return word.concat(string3)

    }

}
console.log(codify("code ciao sono manuel provo "))

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

let numb4;

function check3and7(numb4) {

    if (numb4 % 3 === 0 || numb4 % 7 === 0) {

        return true;
    } else {
        return false;
    }

}
console.log(check3and7(5))

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

let string4;

function cutString(string4) {

    return string4.slice(1, -1)

}

console.log(cutString("Epicode"))
/* SCRIVI QUI LA TUA RISPOSTA */
