// Carrello e sconti particolari

/*
Oggi il tuo compito è creare la logica per un sito di e-commerce che deve supportare sconti extra per utenti speciali.
A partire da una lista di prezzi, un utente e un costo di spedizione l'algoritmo deve determinare il costo totale del carrello.
ATTENZIONE! Gli argomenti di questa settimana sono cruciali per lo svolgimento di un lavoro di un developer (il 90% del dati che maneggerai saranno array di oggetti!!) quindi 
assicurati di COMPRENDERE la logica. Se ti trovi in difficolta', scrivi ad un membro del teaching staff! :) 

Se l'utente ha la proprietà "isAmbassador" con valore true, il carrello deve venire scontato del 30%, PRIMA di calcolare la spedizione (anche gli utenti speciali pagano le spedizioni).
Se l'utente ha la proprietà "isAmbassador" con valore false, il carrello NON deve venire scontato.
In entrambi i casi, la spedizione è gratuita per ogni carrello con costo superiore a 100. Altrimenti, aggiungi il valore fornito per coprire il costo della spedizione.

In basso troverai degli esempi di utenti, una lista prezzi e un costo fisso di spedizione.
Crea un array di utenti (usando .push) e stampa, per ogni utente (quindi con un loop) la frase "NOMEUTENTE COGNOMEUTENTE e' / non e' un ambassador" basandoti sui dati contenuti nell'oggetto. 
ES. L'utente Marco Rossi e' un ambassador, quindi la frase dovrebbe essere "Marco Rossi e' un ambassador"
Infine, crea un SECONDO array in cui inserirai SOLO gli ambassador.
*/

const marco = {
    name: "Marco",
    lastName: "Rossi",
    isAmbassador: true,
    cart: [0, 10, 2]
}

const paul = {
    name: "Paul",
    lastName: "Flynn",
    isAmbassador: false,
    cart: [5, 55, 13]
}

const amy = {
    name: "Amy",
    lastName: "Reed",
    isAmbassador: false,
    cart: [343, 52, 12]
}

const shippingCost = 50

const userList = []
userList.push(paul, marco, amy)

const ambassador = []

let total;

for (let i = 0; i < userList.length; i++) {

    if (userList[i].isAmbassador === true) {

        ambassador.push(userList[i])

        total = userList[i].cart.reduce((acc, curr) => acc + curr, 0)

        let discount = (total * 30) / 100

        let subtraction = total - discount

        if (subtraction < 100) {

            let totalSum = subtraction + shippingCost;
            console.log(`${userList[i].name} ${userList[i].lastName} è un'ambassador, il costo totale  dell'ordine è ${totalSum}`)

        } else {

            console.log(`${userList[i].name} ${userList[i].lastName} è un'ambassador, il costo totale  dell'ordine è ${subtraction}`)

        }

    } else {

        total = userList[i].cart.reduce((acc, curr) => acc + curr, 0)


        if (total < 100) {
            let totalSumNoAmbass = total + shippingCost
            console.log(`${userList[i].name} ${userList[i].lastName} non è un'ambassador, il costo totale  dell'ordine è ${totalSumNoAmbass}`)
        } else {
            console.log(`${userList[i].name} ${userList[i].lastName} non è un'ambassador, il costo totale  dell'ordine è ${total}`)

        }

    }
}




for (let x = 0; x < ambassador.length; x++) {

    console.log(`Gli ambassador sono: ${ambassador[x].name}`)
}
