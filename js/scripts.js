let form = document.getElementById("numberCountForm")
let number = form.number.value; 
let countList = [];

function numberCount() { 
    for (let i = 0; i <= number; i++){
        countList.push(i)}
}