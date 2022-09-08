let passwordInput = document.querySelector("#password");


passwordInput.addEventListener("input", function () {
  if (passwordInput.value) {
    if (eightCharacters(passwordInput.value)) {
      
    }
    if (specialCharacter(passwordInput.value)) {
      console.log("special character");
    }
    if (uppercaseLetter(passwordInput.value)) {
      console.log("UppercaseLetter");
    }
    if (number(passwordInput.value)) {
        console.log("number");
      }
  }
});

function eightCharacters(val) {
  if (val.length >= 8) {
    return true;
  }
}

function specialCharacter(val) {
  for (var i = 0; i < val.length; i++) {
    if (val.charCodeAt(i) >= 33 && val.charCodeAt(i) <= 38) {
      return true;
    }
  }
}

function uppercaseLetter(val) {
  for (var i = 0; i < val.length; i++) {
    if (val.charCodeAt(i) >= 65 && val.charCodeAt(i) <= 90) {
      return true;
    }
  }
}

function number(val) {
    for (var i = 0; i < val.length; i++) {
      if (Number(val[i])) {
        return true;
      }
    }
  }
