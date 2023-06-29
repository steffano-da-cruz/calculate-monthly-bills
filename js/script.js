//Acquires the page elements
const frm = document.querySelector("form");
//Indicates where the result is gonna be shown
const result1 = document.querySelector("#outResult1");
const result2 = document.querySelector("#outResult2");

//Global Variables (outside the block)
let response = ""; //string with the result to be shown
let numBills = 0;
let billsTotal = 0;

frm.addEventListener("submit", (e) => {
  e.preventDefault(); //Avoid sending the form
  const billDescription = frm.inBillDescription.value; //Acquires the name of the bill
  const billValue = Number(frm.inBillValue.value); //Acquires the value of the bill

  numBills++; //numBills = numBills + 1 (counter)
  billsTotal += billValue; //billsTotal = billsTotal + billValue (accumulator)
  response =
    response + billDescription + " - $: " + billValue.toFixed(2) + "\n";

  result1.innerText = `${response}-----------------------------------`;
  result2.innerText = `${numBills} Bill(s) - Total $: ${billsTotal.toFixed(2)}`;

  frm.inBillDescription.value = ""; //Cleans the bill description field
  frm.inBillValue.value = ""; //Cleans the bill value field
  frm.inBillDescription.focus(); //Returns to the bill description field
});
