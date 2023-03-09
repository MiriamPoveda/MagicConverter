"use strict";

function fromMuggleToWizard() {
  const muggle = document.getElementById("muggle").value;
  const euro = document.getElementById("euro").checked;
  const pound = document.getElementById("pound").checked;
  const dollar = document.getElementById("dollar").checked;

  // Define conversion rate
  let galleonRate = 0;
  if (euro) {
    galleonRate = 1 / 5.9;
  } else if (pound) {
    galleonRate = 1 / 4.93;
  } else if (dollar) {
    galleonRate = 1 / 7.35;
  }

  // Perform conversion
  const magicalConversion = muggle * galleonRate;

  // Limiting decimals
  const moneyMagic = magicalConversion.toFixed(2);

  // Add currency symbol
  const currencySymbol = "ʛ";
  const moneyWithSymbol = `${moneyMagic} ${currencySymbol}`;

  // Update the value of the disabled input with the conversion
  document.getElementById("magic").value = moneyWithSymbol;
}

const button = document.getElementById("button");
button.addEventListener("click", fromMuggleToWizard);
