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


function reverseNumber(number) {
    let arrayReverse = [];
    for (let i = number; i >= 0; i--) {
      let strReverse = i.toString();
      let newStrReverse = strReverse;
      if (newStrReverse.includes("2") && !newStrReverse.includes("3")) {
        newStrReverse = "boop!";
      } else if (newStrReverse.includes("1") && !newStrReverse.includes("2") && !newStrReverse.includes("3")) {
        newStrReverse = "beep!";
      } else if (newStrReverse.includes("3") || newStrReverse.includes("2")) {
        newStrReverse = "wont you be my neighbor";
      }
      arrayReverse.push(newStrReverse);
    }
    return arrayReverse;
  }





  window.addEventListener("load", function(){
    const form = document.getElementById("questionForm");
    form.addEventListener("submit", handleForm)
  })
  // document.getElementById('questionForm').addEventListener('submit', function(event) {
  //   event.preventDefault(); // Prevent form submission and page reload

  //   var inputNumber = document.getElementById('numberInput').value;
  //   var results = numberCount(inputNumber);
  //   document.getElementById('results').textContent = results.join(', ');
// });
// function handleFormSubmission(event) {
//   event.preventDefault();
//   const number = Number(document.querySelector("#number").value);
//   const results = numberCount(number);
//   const pElement = document.createElement("p");
//   pElement.innerText = results.join(', ');
//   document.getElementById("results").appendChild(pElement);
// }

// window.onload = function () {
//   const questionForm = document.getElementById('questionForm');
//   const submitButton = document.getElementById('submitButton');
//   submitButton.addEventListener("click", handleFormSubmission);
// };