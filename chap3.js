//1. Declare a variable called age & assign to it your age. Show your age in an alert box.
var age;
age = 22;
alert("I am "+age+" years old")

//2. Declare & initialize a variable to keep track of how many times a visitor has visited a web page. Show his/her number of visits on your web page. For example: “You have visited this site N times”.


//3. Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser:
var birthyear = 1997;

//4. A visitor visits an online clothing store www.xyzClothing.com . Write a script to store in variables the following information: 
//a. Visitor’s name 
//b. Product title 
//c. Quantity i.e. how many products a visitor wants to order 
//Show the following message in your browser: “John Doe ordered 5 T-shirt(s) on XYZ Clothing store”.
var name = prompt("Enter Name")
var prod = prompt("Enter Product")
var quat = prompt("Enter Quantity")
document.write(name+" ordered "+quat+" "+prod+" on XYZ Clothing store")
