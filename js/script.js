"use strict";

//Global variables
let response = "";
let bills = 0;
let total = 0;

//Focus on the Bill Description field
document.querySelector(".bill-description").focus();
//Register button
document.querySelector(".register").addEventListener("click", function () {
  const billDescription = document.querySelector(".bill-description").value;
  const billValue = Number(document.querySelector(".bill-value").value);

  if (billDescription === "" || billValue < 1) {
    alert("Fill both fields correctly...");
  } else {
    bills++;
    total += billValue;
    response = `${response} ${billDescription} - $${billValue.toFixed(2)}\n`;
    document.querySelector(
      ".result1"
    ).textContent = `${response}-------------------------------`;
    document.querySelector(
      ".result2"
    ).textContent = `${bills} Bill(s) - Total: $${total.toFixed(2)}`;
  }
  document.querySelector(".bill-description").value = "";
  document.querySelector(".bill-value").value = "";
  document.querySelector(".bill-description").focus();
});

//Start over button
document.querySelector(".start-over").addEventListener("click", function () {
  document.querySelector(".bill-description").value = "";
  document.querySelector(".bill-value").value = "";
  document.querySelector(".bill-description").focus();
  response = "";
  bills = 0;
  total = 0;
  document.querySelector(".result1").textContent = response;
  document.querySelector(".result2").textContent = "";
});
