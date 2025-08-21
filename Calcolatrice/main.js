const numbers = document.querySelectorAll(".number");
const display = document.querySelector(".display")






//function clickNumber() {

numbers.forEach(number => {

    number.addEventListener("click", () => {

        if (number.textContent === "C") {

            display.innerHTML = ""

        } else {

            let operation = display.innerText += number.textContent

            if (!/[+\-*/]$/.test(operation)) {



                let prova = eval(String(operation))

                console.log(prova)

            }



        }
    })
})

//}

