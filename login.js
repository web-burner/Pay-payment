const mobile = Number("01161373829");
const pin = 1234;

document.getElementById("login-btn").addEventListener("click", (e) => {
  e.preventDefault()
  const mobileNumber = Number(document.getElementById("mobile-number").value);
  const pinNumber = Number(document.getElementById("pin-number").value);
  if (mobileNumber === mobile && pin === pinNumber) {
    window.location.href = "./home.html";
  } else {
    if (mobile !== mobileNumber && pin !== pinNumber) {
      alert("Incorrect Credentials, Try Again");
    } else if (mobile !== mobileNumber) {
      alert("Incorrect Mobile Number");
    } else if (pin !== pinNumber) {
      alert("Incorrect Pin Number");
    }
  }
});
