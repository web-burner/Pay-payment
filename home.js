const validAccountNumber = 12345678901;
const validPin = 1234;
const validCoupon = "GetBonus";
// get the current balance
function currentBalance() {
  const balance = Number(document.getElementById("current-balance").innerText);
  return balance;
}
// get innerText value
function getInnerTextValue(id) {
  const innerTextValue = Number(document.getElementById(id).innerText);
  return innerTextValue;
}
// get input form input field
function getInputValue(id) {
  const input = Number(document.getElementById(id).value);
  return input;
}
// get inputText
function getInputText(id) {
  const input = document.getElementById(id).value;
  return input;
}
// set innerText value
function setInnerText(value) {
  document.getElementById("current-balance").innerText = value;
}
// show active form 
function showActive (id){
  const menuItems = document.getElementsByClassName('menu-items');
  for ( let item of menuItems){
    item.classList.remove("bg-sky-100","border-blue-400")
    item.classList.add("border-gray-300")
  }
  const element = document.getElementById(id);
  element.classList.remove("border-gray-300")
  element.classList.add("bg-sky-100", "border-blue-400")
}
// show forms
function showForms(id) {
  const forms = document.getElementsByClassName("form");
  for (let form of forms) {
    // console.log(form)
    form.classList.add("hidden");
  }
  document.getElementById(id).classList.remove("hidden");
}
// add balance
function addAmount(value) {
  const balance = currentBalance();
  if (!isNaN(value) && value > 0) {
    const newBalance = balance + value;
    setInnerText(newBalance);
  } else if (value <= 0 || isNaN(value)) {
    alert("Invalid Amount");
  }
}
// deduct balance
function deduct(value) {
  const balance = currentBalance();
  const amount = value;

  if (!isNaN(value) && value > 0) {
    if (balance > 0 && value <= balance) {
      const newBalance = balance - amount;
      setInnerText(newBalance);
    } else if (value > balance || balance === 0) {
      alert("Insufficient Fond");
    }
  } else if (isNaN(value)) {
    alert("Invalid Amount");
  }
}
// set input value 
function setInputValue (val1, val2, val3 , val4){
  document.getElementById(val1).value = '';
  document.getElementById(val2).value = '';
  document.getElementById(val3).value = '';
  document.getElementById(val4).value = 'Not Yet Select'
}
// add money form
document.getElementById("add-money").addEventListener("click", () => {
  showForms("add-money-form");
  showActive("add-money")

});

// add money feature
document.getElementById("add-money-btn").addEventListener("click", (e) => {
  e.preventDefault();

  const card = document.getElementById("cards").value;
  const accountNumber = getInputValue("card-number");
  const amount = getInputValue("add-amount");
  const pin = getInputValue("pin-number");

  // validation
  if (validAccountNumber === accountNumber && validPin === pin) {
    addAmount(amount);
    setInputValue('card-number','add-amount','pin-number','cards')
  } else {
    if (validAccountNumber !== accountNumber && validPin !== pin) {
      alert("Invalid Credentials");
    } else if (validAccountNumber !== accountNumber) {
      alert("Invalid Account Number");
    } else if (pin !== validPin) {
      alert("Invalid Pin");
    }
  }
});

// cash out form
document.getElementById("cashout").addEventListener("click", () => {
  showForms("cashout-form");
  showActive("cashout")
});
// cash out feature
document.getElementById("cashout-btn").addEventListener("click", (e) => {
  e.preventDefault();
  const card = document.getElementById("cards").value;
  const agentNumber = getInputValue("agent-number");
  const cashOutAmount = getInputValue("cashout-amount");
  const cashOutPin = getInputValue("cashout-pin");

  // validation

  if (validAccountNumber === agentNumber && validPin === cashOutPin) {
    deduct(cashOutAmount);
    setInputValue('agent-number','cashout-amount','cashout-pin','cards')
  } else if (validAccountNumber !== agentNumber && validPin !== cashOutPin) {
    alert("Invalid Credentials");
  } else if (validAccountNumber !== agentNumber) {
    alert("Invalid Agent Number");
  } else if (validPin !== cashOutPin) {
    alert("Invalid Pin Number");
  }
});

// transfer money form
document.getElementById("transfer-money").addEventListener("click", () => {
  showForms("transfer-money-form");
  showActive("transfer-money")
});

// transfer money feature
document.getElementById("Transfer-btn").addEventListener("click", (e) => {
  e.preventDefault();
  const userCard = getInputValue("user-number");
  const transferAmount = getInputValue("transfer-amount");
  const pin = getInputValue("transfer-pin");
  if (validAccountNumber === userCard && validPin === pin) {
    deduct(transferAmount);
    setInputValue('user-number','transfer-amount','transfer-pin','cards')
  } else if (validAccountNumber !== userCard && validPin !== pin) {
    alert("Invalid Credentials");
  } else if (validPin !== pin) {
    alert("Invalid Pin");
  } else if (validAccountNumber !== userCard) {
    alert("Invalid User Card Number");
  }
});

// bonus form

document.getElementById("bonus").addEventListener("click", () => {

  showForms("bonus-form");
  showActive("bonus")
});
// bonus features
document.getElementById("bonus-btn").addEventListener("click", (e) => {
  e.preventDefault();
  const coupon = getInputText("bonus-coupon").trim();
  if (validCoupon === coupon) {
    addAmount(200);
    setInputValue('bonus-coupon','add-amount','pin-number','cards')
    alert("You Have Got $200 Bonus");
  } else {
    alert("Invalid Coupon Code");
  }
});

// pay form
document.getElementById("pay-bill").addEventListener("click", () => {
  showForms("pay-bill-form");
  showActive("pay-bill")
});

// pay features
document.getElementById("pay-btn").addEventListener("click", (e) => {
  e.preventDefault();
  const accountNumber = getInputValue("pay-card-number");
  const payAmount = getInputValue("pay-amount");
  const pin = getInputValue("pay-pin");
  if (validAccountNumber === accountNumber && validPin === pin) {
    deduct(payAmount);
    setInputValue('pay-card-number','pay-amount','pay-pin','pay-cards')
  } else if (validAccountNumber !== accountNumber && validPin !== pin) {
    alert("Invalid Credentials");
  } else if (validPin !== pin) {
    alert("Invalid Pin");
  } else if (validAccountNumber !== accountNumber) {
    alert("Invalid Payment Card Number");
  }
});

// transaction 

document.getElementById('transaction').addEventListener('click',()=>{
  // console.log('hello')
  showForms('home')
  showActive("transaction")
})

document.getElementById('log-out').addEventListener('click',()=>{
  window.location.href = "./index.html"
})