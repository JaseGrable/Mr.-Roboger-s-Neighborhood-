//Business Logic 
let form = document.getElementById("numberCountForm")
let number = form.number.value; 

function numberCount(number) {
    let array = [];
    for (let i = 0; i <= number; i++) {
        let str = String(i);
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
      let strReverse = String(i);
      let newStrReverse = strReverse;
     arrayReverse.push(newStrReverse);
     if (newStr.includes("1") && !newStr.includes("2") && !newStr.includes("3")) {
        newStr = "beep!";
        else return arrayReverse;
    }
    return arrayReverse;
  }

