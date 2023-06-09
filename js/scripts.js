//Business Logic 
let form = document.getElementById("numberCountForm")
let number = form.number.value; 


function numberCount(number) {
    let array = [];
    for (let i = 0; i <= number; i++) {
        if (String(i).includes("1") || String(i).includes("2") || String(i).includes("3")) {
            if (String(i).includes("1")) {
                array.push("Beep!");
            } else if (String(i).includes("2")) {
                array.push("boop!");
            } else {
                array.push("won't you be my neighbor");
            }
        } else {
            array.push(i);
        }
    }
    return array;
}