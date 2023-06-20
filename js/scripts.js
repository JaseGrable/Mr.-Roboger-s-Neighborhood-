//Business Logic 
function numberCount(number) {
    let array = [];
    for (let i = 0; i <= number; i++) {
        let str = i.toString();
        let newStr = str;
        if (newStr.includes("2") && !newStr.includes("3")) {
            newStr = "boop!";
        } else if (newStr.includes("1") && !newStr.includes("2") && !newStr.includes("3")) {
            newStr = "beep!";
        } else if (newStr.includes("3") || newStr.includes("2")) {
            newStr = "wont you be my neighbor";
        }
        array.push(newStr);
    }
    return array;
}


// function reverseNumber(number) {
//     let arrayReverse = [];
//     for (let i = number; i >= 0; i--) {
//       let strReverse = i.toString();
//       let newStrReverse = strReverse;
//       if (newStrReverse.includes("2") && !newStrReverse.includes("3")) {
//         newStrReverse = "boop!";
//       } else if (newStrReverse.includes("1") && !newStrReverse.includes("2") && !newStrReverse.includes("3")) {
//         newStrReverse = "beep!";
//       } else if (newStrReverse.includes("3") || newStrReverse.includes("2")) {
//         newStrReverse = "wont you be my neighbor";
//       }
//       arrayReverse.push(newStrReverse);
//     }
//     return arrayReverse;
//   }

// UI Logic
function handleForm(event) {
  event.preventDefault();
  const numToCount = document.getElementById("numberInput").value;
  const newNumber = numberCount(numToCount);
  const results = document.getElementById("results");

  // Clear existing results
  results.innerHTML = "";

  // Display new results
  for (let i = 0; i < newNumber.length; i++) {
      const pElement = document.createElement("p");
      pElement.innerText = newNumber[i];
      results.appendChild(pElement);
  }
}

window.addEventListener("load", function () {
  const form = document.getElementById("questionForm");
  form.addEventListener("submit", handleForm);
});