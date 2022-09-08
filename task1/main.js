let passwordInput = document.querySelector("#password");
let overlay = document.querySelector("img");

let initialBlur = 10;

passwordInput.addEventListener("input", function () {
  if (passwordInput.value) {
    if (eightCharacters(passwordInput.value)) {
      initialBlur = initialBlur - 2;
      overlay.style.filter = `blur(${initialBlur - 2}px)`;
    }
    if (specialCharacter(passwordInput.value[passwordInput.value.length-1])) {
      console.log("special character");
      initialBlur = initialBlur - 2;
      overlay.style.filter = `blur(${initialBlur - 2}px)`;
    }
    if (uppercaseLetter(passwordInput.value[passwordInput.value.length-1])) {
      console.log("UppercaseLetter");
      initialBlur = initialBlur - 2;
      overlay.style.filter = `blur(${initialBlur - 2}px)`;
    }
    if (number(passwordInput.value[passwordInput.value.length-1])) {
      console.log("number");
      initialBlur = initialBlur - 2;
      overlay.style.filter = `blur(${initialBlur - 2}px)`;
    }
  }
});

function eightCharacters(val) {
  if (val.length >= 8) {
    return true;
  }
}

function specialCharacter(val) {
    if (val.charCodeAt(0) >= 33 && val.charCodeAt(0) <= 38) {
      return true;
    }
}

function uppercaseLetter(val) {
    if (val.charCodeAt(0) >= 65 && val.charCodeAt(0) <= 90) {
      return true;
    }
}

function number(val) {
    if (Number(val)) {
      return true;
    }
}
