// 1 - Declare and initialize an empty multidimensional array. (Array of arrays)
var matrix = [ [], [], [] ]


// 2 - Declare and initialize a multidimensional array representing the following matrix:
var matrix = [[0, 1, 2, 3],
              [1, 0, 1, 2],
              [2, 1, 0, 1] ]

        
// 3 - Write a program to print numeric counting from 1 to 10.

for (var i = 1; i <= 10; i++){
    document.write(i, "<br>");
}

// 4 - Write a program to print multiplication table of any number using for loop. Table number & length should be taken as an input from user.

var table = prompt("Enter the number to show its multiplication table:");
var length = prompt("Enter the length of the table:");

for (var  i = 1; i <= length; i++){
    document.write(table, "x", i, "=", table*i, "<br>");
}


// 5 - Write a program to print items of the following array using for loop:

var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
var len = fruits.length;
for (var i = 0; i < len; i++){
    document.write(fruits[i], "<br>");
}