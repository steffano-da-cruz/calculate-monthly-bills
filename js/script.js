"use strict";

const registerBill = document.querySelector(".register-bill-btn");
const startOver = document.querySelector(".start-over-btn");
const billsNameIn = document.querySelector(".bills-name-input");
const billsValueIn = document.querySelector(".bills-value-input");
const billsContainer = document.querySelector(".container");
const billsResult = document.querySelector(".bills-result");

let billsList = "";
let billsTotal = 0;

const showResult = function () {
  billsContainer.classList.add("bills-result-on");
};

const removeResult = function () {
  billsContainer.classList.remove("bills-result-on");
  billsResult.textContent = "";
};

const resetFields = function () {
  billsNameIn.focus();
  billsNameIn.value = "";
  billsValueIn.value = "";
};

resetFields();

registerBill.addEventListener("click", function () {
  const billName = billsNameIn.value;
  const billValue = Number(billsValueIn.value);

  if (!billName || !billValue) {
    showResult();
    billsResult.textContent = "You must fill both fields!";
  } else {
    showResult();

    billsList += ` ${billName} = $${billValue.toFixed(2)}\n`;
    billsTotal += billValue;

    billsResult.textContent = `${billsList} Total = $${billsTotal.toFixed(2)}`;

    resetFields();
  }
});

billsNameIn.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    billsValueIn.focus();
  }
});

billsValueIn.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const billName = billsNameIn.value;
    const billValue = Number(billsValueIn.value);

    if (!billName || !billValue) {
      showResult();
      billsResult.textContent = "You must fill both fields!";
    } else {
      showResult();

      billsList += ` ${billName} = $${billValue.toFixed(2)}\n`;
      billsTotal += billValue;

      billsResult.textContent = `${billsList} Total = $${billsTotal.toFixed(
        2
      )}`;

      resetFields();
    }
  }
});

startOver.addEventListener("click", function () {
  billsList = "";
  billsTotal = 0;

  removeResult();
  resetFields();
});
