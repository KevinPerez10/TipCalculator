const billEl = document.getElementById("bill-el")
const numEl = document.getElementById("num-people-el")
const customBtnEL = document.getElementById("custom-btn-el")
const resultEl = document.getElementById("result-el")
const totalEl = document.getElementById("total-el")

function computeFive() {
    let product = (billEl.value * (5 * 0.01)) / numEl.value
    let total = (billEl.value / numEl.value) + product
    resultEl.innerHTML = `$${product.toFixed(2)}`
    totalEl.innerHTML = `$${total.toFixed(2)}`
}

function computeTen() {
    let product = (billEl.value * (10 * 0.01)) / numEl.value
    let total = (billEl.value / numEl.value) + product
    resultEl.innerHTML = `$${product.toFixed(2)}`
    totalEl.innerHTML = `$${total.toFixed(2)}`
}

function computeFifteen() {
    let product = (billEl.value * (15 * 0.01)) / numEl.value
    let total = (billEl.value / numEl.value) + product
    resultEl.innerHTML = `$${product.toFixed(2)}`
    totalEl.innerHTML = `$${total.toFixed(2)}`
}

function computeTwentyFive() {
    let product = (billEl.value * (25 * 0.01)) / numEl.value
    let total = (billEl.value / numEl.value) + product
    resultEl.innerHTML = `$${product.toFixed(2)}`
    totalEl.innerHTML = `$${total.toFixed(2)}`
}

function computeFifty() {
    let product = (billEl.value * (50 * 0.01)) / numEl.value
    let total = (billEl.value / numEl.value) + product
    resultEl.innerHTML = `$${product.toFixed(2)}`
    totalEl.innerHTML = `$${total.toFixed(2)}`
}

function computeCustom() {
    let product = (billEl.value * (customBtnEL.value * 0.01)) / numEl.value
    let total = (billEl.value / numEl.value) + product
    resultEl.innerHTML = `$${product.toFixed(2)}`
    totalEl.innerHTML = `$${total.toFixed(2)}`
}


function reset() {
    billEl.value = ""
    numEl.value = ""
    customBtnEL.value = ""
    resultEl.innerHTML = "$0.00"
    totalEl.innerHTML = "$0.00"
}