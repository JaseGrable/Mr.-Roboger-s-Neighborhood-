//Business Logic 
let form = document.getElementById("numberCountForm")
let number = form.number.value; 


function numberCount(number) {
    let array = [];
    for (let i = 0; i <= number; i++) {
        if (String(i).includes("1")) {
            array.push("Beep!");
        } else {
            array.push(i);
        }
    }
    return array;
}