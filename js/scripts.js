//Business Logic 
let form = document.getElementById("numberCountForm")
let number = form.number.value; 


// function numberCount(number) {
//     let array = [];
//     for (let i = 0; i <= number; i++) {
//         if (String(i).includes("1") || String(i).includes("2") || String(i).includes("3")) {
//             if (String(i).includes("1")) {
//                 array.push("Beep!");
//             } else if (String(i).includes("2")) {
//                 array.push("boop!");
//             } else {
//                 array.push("won't you be my neighbor");
//             }
//         } else {
//             array.push(i);
//         }
//     }
//     return array;
// }



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
    let array = [];
    for (let i = number; i >= 0; i--) {
      let str = String(i);
      let newStr = str;
     array.push(newStr);
    }
    return array;
  }