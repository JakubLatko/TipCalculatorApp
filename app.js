
// function calculateBill(){
  
//     let billValue = Number(bill.value)
//     let percentageValue = Number(customPercentage.value)
//     let peopleValue = Number(numberOfPeople.value)
//     let tip = billValue * percentageValue / 100
//     let tipPerPerson = tip / peopleValue
//     let totalPerPerson =billValue + tip / numberOfPeople
//     console.log(typeof billValue)
//     console.log(typeof peopleValue)
//     console.log(typeof tip)
//     console.log(tip + " tip")
//     console.log(tipPerPerson + " tipPerPerson")
//     console.log(totalPerPerson + " totalPerPerson")


//     tipPerPerson = tipPerPersonOutput.innerHTML
//     totalPerPerson = totalPerPersonOutput.innerHTML
// }
let bill = document.querySelector("#bill")
let customPercentage = document.querySelector("#customPercentage")
let numberOfPeople = document.querySelector("#numberPeopleInput")
let tipPerPersonOutput = document.querySelector("#tipPerPersonOutput")
let totalPerPersonOutput = document.querySelector("#billPerPersonOutput")


 bill.addEventListener("input", ()=>{
   
   let billValue = Number(bill.value)
   let percentageValue = Number(customPercentage.value)
   let peopleString = JSON.stringify(numberOfPeople.value)
   let peopleValue = parseInt(peopleString,10)
   let tip = billValue * percentageValue / 100
   let tipPerPerson = tip / peopleValue
   let totalPerPerson = billValue + tip / peopleValue
//    console.log(typeof billValue)
//    console.log(typeof peopleValue)
//    console.log(typeof tip)
//    console.log(billValue)
//    console.log(percentageValue)
//    console.log(peopleValue)
//    console.log(numberOfPeople.value)
   
   console.log(peopleValue)
   console.log(peopleValue.value)
   console.log(typeof peopleValue)
   console.log(peopleString)
   console.log(peopleString.value)
   console.log(typeof peopleString)
   console.log(tip + " tip")
   console.log(tipPerPerson + " tipPerPerson")
   console.log(totalPerPerson + " totalPerPerson")


//    tipPerPerson = tipPerPersonOutput.innerHTML
//    totalPerPerson = totalPerPersonOutput.innerHTML
})
customPercentage.addEventListener("input", ()=>{
    
    
   let billValue = Number(bill.value)
   let percentageValue = Number(customPercentage.value)
   let peopleString = JSON.stringify(numberOfPeople.value)
   let peopleValue = Number(peopleString.value)
   let tip = billValue * percentageValue / 100
   let tipPerPerson = tip / peopleValue.value
   let totalPerPerson =billValue + tip / peopleValue.value
   JSON.stringify(numberOfPeople)
   console.log(typeof billValue)
   console.log(typeof peopleValue)
   console.log(typeof tip)
   console.log(tip + " tip")
   console.log(tipPerPerson + " tipPerPerson")
   console.log(totalPerPerson + " totalPerPerson")


//    tipPerPerson = tipPerPersonOutput.innerHTML
//    totalPerPerson = totalPerPersonOutput.innerHTML
})
numberOfPeople.addEventListener("input", ()=>{

    
   let billValue = Number(bill.value)
   let percentageValue = Number(customPercentage.value)
   let peopleString = JSON.stringify(numberOfPeople.value)
   let peopleValue = Number(peopleString.value)
   let tip = billValue * percentageValue / 100
   let tipPerPerson = tip / peopleValue.value
   let totalPerPerson =billValue + tip / peopleValue.value
   JSON.stringify(numberOfPeople)
   console.log(typeof billValue)
   console.log(typeof peopleValue)
   console.log(typeof tip)
   console.log(tip + " tip")
   console.log(tipPerPerson + " tipPerPerson")
   console.log(totalPerPerson + " totalPerPerson")


//    tipPerPerson = tipPerPersonOutput.innerHTML
//    totalPerPerson = totalPerPersonOutput.innerHTML
})