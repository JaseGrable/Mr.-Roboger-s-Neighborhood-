describe numberCount():

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

Describe reverseNumber()]

Test: "The array should return from largest number first to smallest"
Code: reverseNumber(100)
Expected Output: [100,99,98,97,96...]
