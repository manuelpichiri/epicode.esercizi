function newTitle() {
    let titleChange = document.querySelector('h1')
    titleChange.innerText = "Benvenuto"

}

function restore() {
    let restoreH1 = document.querySelector('h1')
    restoreH1.innerText = "L'Emporio Errante"

}

let h1Change = document.querySelector('h1')

h1Change.addEventListener("mouseenter", newTitle);

h1Change.addEventListener("mouseleave", restore);


function background() {

    let newColor = document.querySelector('body')
    const colorBack = newColor.style.backgroundColor = "#398981"
}

function footerAddressChange() {

    let address = document.querySelector('.address')

    address.innerText = "Via dei Garofani 57"

}

function addNewClass() {
    let link = document.querySelectorAll('.link')

    link.forEach(link => {
        link.classList.toggle('test-class')
    })
}



function addClass() {

    let addImgClass = document.querySelectorAll('.img-product')

    addImgClass.forEach(addImgClass => {


        addImgClass.classList.toggle('img-newClass')

    })
}


function changeColor() {
    let prices = document.querySelectorAll('.product-price')

    const genereatedColor = '#' + Math.floor(Math.random() * 16777215).toString(16)
    console.log(genereatedColor)
    console.log(prices)

    prices.forEach(price => {

        price.style.color = genereatedColor
    })



}