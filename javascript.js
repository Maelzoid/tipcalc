console.log('JS activated........')

let total = document.getElementById('total')
let people = document.getElementById('people')
let result = document.getElementById('result')
let tip = 1

let vTotal = total.value
let vPeople = people.value

const calc = document.getElementById('calc')
calc.addEventListener('click', errorCheck)

const clear = document.getElementById('clear')
clear.addEventListener('click', clearForm)

function errorCheck(){
    let vTotal = parseFloat(total.value)
    let vPeople = parseInt(people.value)
    if (isNaN(vPeople)  ||  isNaN(vTotal)  ){
        tryAgain()
    }else{
        checkTip()
    }
}

function checkTip(){
    
    
    if (document.querySelectorAll('input[name="tip"]:checked').length > 0) {
        tip = document.querySelector('input[name="tip"]:checked').value
        doWork()}
    else{
        if(confirm("No tip... Are you sure?") == true) {
        tip = 1
        doWork()
        }
    }

}

function tryAgain(){
    result.textContent = "Form filled out incorrectly. Try again."
}

function doWork(){
    
    let toPay = (total.value * tip).toFixed(2)
    let eachPay = (toPay / parseInt(people.value)).toFixed(2)
   result.textContent = "The total bill will be £"+toPay+" and each person should pay £"+eachPay
}

function clearForm(){
    result.textContent = "Form cleared"
    total.value = null
    people.value = null
    document.querySelector('input[name="tip"]:checked').checked = false
    tip = 1
}

