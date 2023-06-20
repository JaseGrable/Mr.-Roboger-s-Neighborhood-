# Program Language Suggestor

#### By Jase Grable

#### Epicodus Project 3 

## Technologies Used

* Git 
* CSS
* HTML
* VScode
* LearnHowToProgram.com
* javascript

## Description

* This is a website that I built for my coding bootcamp at Epicodus. The form allows you to input a number to count. On "submit" the page displays an array ending with the number you entered. Any instance of the number 1 is replaced with "beep," any number containing 2 is replaced with "boop," and any number with 3 is replaced with "won't you be my neighbor. The hierarchy of replacements is 3>2>1, example the number 321 would be replaced with "wont you be my neighbor?" 


## Setup/Installation Requirements

* Clone this repository to your desktop
* Navigate to top level directory
* open index.html in your browser
* answer yes or no questions in form to find out what you should learn


## Known Bugs

* none known 

## License

MIT

Copyright (c) Jase Grable


### Test Driven Development

- describe numberCount():

Test: "It should return a an array of numbers from 0 to the user's inputted number"
Code: numberCount(5);
Expected Output: [0,1,2,3,4,5]

Test: "It should replace every instance of the number 1 with the string "Beep!"
Code: numberCount(1);
Expected Output: [0,"Beep!",2,3,4,5]

Test: "It should replace every instance of the number 2 with "Boop!"
Code: numberCount(5)
Expected Output: [0,"Beep!", "Boop!",3,4,5]

Test: "It should replace every instance of the number 3 with "Won't you be my neighbor?""
Code: numberCount(5)
Expected Output: [0,"Beep!", "Boop!","Won't you be my neighbor?",4,5]

Test: "The substitution for 1 should only apply if 2 is not in the number"
Code: numberCount(12)
Expected output: [0,"Beep!", "Boop!","Won't you be my neighbor?",4,5....10,"boop!", "beep!"]

Test: "The substitution for 2 will occur in any number without the number 3"
code:

Test: "The substitution for 3 should apply even in numbers with 1 and 2"
Code: numberCount(23)
Expected output: [... "boop!", "boop!", "wont you be my neighbor"]

- Describe reverseNumber()]

Test: "The array should return from largest number first to smallest"
Code: reverseNumber(100)
Expected Output: [100,99,98,97,96...]

Test: "The array should return largest to smallest, and replace numbers with 1 with "beep!"
Code: reverseNumber(100)
Expected Output: ["beep!", 99, 98, 97, 96...]

Test: "The array should return largest to smallest and replace numbers with 2 with "boop!"
Code: reverseNumber(12)
Expected Output: ["boop", "beep", "beep", 9,...]

Test: "The array should return largest to smallest and replace numbers with 3 with "won't you be my neighbor"
Code: reverseNumber(13)
Expected Output: ["Won't you be my neighbor?", "boop!", "beep!", "beep!", 9, ...]
