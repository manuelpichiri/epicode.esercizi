/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/*
I principali dataType in javascript sono:

numb= va a indicare una variabile che può contenere un numero qualsiasi (intero o decimale) tra e-(253-1) e+(253-1).
string= va a indicare una variabile che può contenere un qualsiasi numero di caratteri ( il tutto fra " " o ' ').
null= indica una variabile senza alcun valore (vuota).
undefined= indica una variabile che non ha ancora un valore o un tipo.
boolean= è una variabile che restituisce true o false in base alla condizione richiesta.
bigInt= indica una variabile che può contenere numeri grandi (interi) oltre il limite massimo di numb.
*/
let numb = 7
let string = "Ciao"
let numb2 = null
let string2;
let isBoolean = true
let bigInt = 9223372036854775807
/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/

/* un'oggetto è una rappresentazione di un qualcosa di concreto che ha degli attributi e dei metodi*/

const dog = {
    age: 11,
    name: "Kira",
    color: "white"
}

/* ESERCIZIO 3
 Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let a = 12
let b = 20
let sum = a + b


/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12


/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let name = "Manuel"


/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let subtraction = x - 4

/* ESERCIZIO 6 [SLIDE]
 Crea un oggetto di javascript che ti rappresenti [come proprietà usa nome,cognome e hobby] */

const me = {
    name: "Manuel",
    surname: "Pichiri",
    hobby: "videogames"

}


/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/
let name1 = "john"
let name2 = "John"

let different = name1 !== name2

console.log(different)

let isTheSame = name1 === name2.toLowerCase

console.log(isTheSame)


