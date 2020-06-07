//1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.
var num1 =  prompt("Enter Num1")
var num2 = prompt("Enter Num2")
var sum = (+num1)+(+num2)
document.write("sum of "+num1+" and "+num2+" is " +sum+"<br>")

//2. Repeat task1 for subtraction, multiplication, division & modulus.
var num1 =  prompt("Enter Num1")
var num2 = prompt("Enter Num2")
var sum = num1-num2

document.write("sum of "+num1+" and "+num2+" is " +sum+"<br>")

var num1 =  prompt("Enter Num1")
var num2 = prompt("Enter Num2")
var sum = num1*num2

document.write("multiply of "+num1+" and "+num2+" is " +sum+"<br>")


var num1 =  prompt("Enter Num1")
var num2 = prompt("Enter Num2")
var sum = num1/num2

document.write("division of "+num1+" and "+num2+" is " +sum+"<br>")

var num1 =  prompt("Enter Num1")
var num2 = prompt("Enter Num2")
var sum = num1%num2

document.write("modul of "+num1+" and "+num2+" is " +sum+"<br>")

//3. Do the following using JS Mathematic Expressions a. Declare a variable. b. Show the value of variable in your browser like “Value after variable declaration is: ??”. c. Initialize the variable with some number. d. Show the value of variable in your browser like “Initial value: 5”. e. Increment the variable. f. Show the value of variable in your browser like “Value after increment is: 6”. g. Add 7 to the variable. h. Show the value of variable in your browser like “Value after addition is: 13”. i. Decrement the variable. j. Show the value of variable in your browser like “Value after decrement is: 12”. k. Show the remainder after dividing the variable’s value by 3.
//l. Output : “The remainder is : 0”.
var a=5
document.write("Valueafter variable declaration is undefined <br>")
document.write("Initialvalue: "+a+"<br>")
a++
document.write("Value after increment is: "+a+"<br>")
a=a+7
document.write("Value after addition is:  "+a+"<br>")
a--
document.write("Value after decrement is:  "+a+"<br>")
a=a%3
document.write("The remainder is :  "+a+"<br>")

//4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie. Example output:
var price =600
var qua=5

document.write("Total cost to buy "+qua+" tickets o a movie is "+(price*qua)+"PKR")

//5. Write a script to display multiplication table of any number in your browser. E.g
var num =  prompt("Enter Num1")
document.write("Table of "+num+"<br>")
for( var i=1;i<11;i++){

    document.write(num+" x "+i+" = "+(num*i)+"<br>")}

//6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
//a. Store a Celsius temperature into a variable.
//b. Convert it to Fahrenheit & output “NNoC is NNoF”.
//c. Now store a Fahrenheit temperature into a variable.
//d. Convert it to Celsius & output “NNoF is NNoC”.
//Conversion Formulae:
var c=35
var f=75

document.write(c+"oC is"+((c*(9/5))+32)+"oF<br>")
document.write(f+"oF is"+((f-32)*(5/9))+"oC")

//7. Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables
//MATH EXPRESSIONS | JAVASCRIPT
//a. Price of item 1 b. Price of item 2 c. Ordered quantity of item 1 d. Ordered Quantity of item 2 e. Shipping charges
//Compute the total cost & show the receipt in your browser.
var price1 =650

var qua1=3
var price2 =100
var qua2=7
var charges=100
var sum = ((price1*qua1)+(price2*qua2)+charges)
document.write("price of item 1 is "+price1+"<br>Quantity of item 1 is "+qua1+"<br>price of item 2 is "+price2+"<br>Quantity of item 2 is "+qua2+"<br> Shipping Charges"+charges+"<br> Total cost of your order is "+sum)

//8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser
var tMark = prompt("Total Marks")
var oMark = prompt("Obtained Marks")
var perc =(oMark/tMark)*100

document.write("Total Marks : "+tMark+"<br>Marks Obtained : "+oMark+"<br> Percentage : "+perc)

//9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression. (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee)
var total =(10*104.80)+(25*28)

document.write("Total Currency in PKR : "+total)

//10. Write a program to initialize a variable with some number and do arithmetic in following sequence: a. Add 5 b. Multiply by 10 c. Divide the result by 2 Perform all calculations in a single expression
var total = ((5+5)*10)/2

//11. The Age Calculator: Forgot how old someone is? Calculate it! a. Store the current year in a variable. b. Store their birth year in a variable. c. Calculate their 2 possible ages based on the stored values.
//Output them to the screen like so: “They are either NN or NN years old”.
var cYear = prompt("Current Year")
var bYear = prompt("Birth Year")
document.write("Current Year :"+cYear)
document.write("<br>Birth Year :"+bYear)
document.write("<br>Your age is :"+(cYear-bYear))

//12. The Geometrizer: Calculate properties of a circle. a. Store a radius into a variable.
//b. Calculate the circumference based on the radius, and output “The circumference is NN”. (Hint : Circumference of a circle = 2 π r , π = 3.142) Calculate the area based on the radius, and output “The area is NN”. (Hint : Area of a circle = π r2, π = 3.142)
var radius = prompt("Enter radius")
var v = 3.142
document.write("Radius of the cirsle :"+radius)
document.write("<br>Circumference of the cirsle :"+(radius*2*v))
document.write("<br>Area of the cirsle :"+(radius*radius*v))

//13. The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? Wonder no more. a. Store your favorite snack into a variable b. Store your current age into a variable. c. Store a maximum age into a variable. d. Store an estimated amount per day (as a number). e. Calculate how many would you eat total for the rest of your life.
//Output the result to the screen like so: “You will need NNNN to last you until the ripe old age of NN”.
var snack ="hotdog"
var age =20
var maxAge=200
var est = 5
var total=(5*365)*(200-20)
document.write("Favorite snack: "+snack)
document.write("<br>Current age: "+age)
document.write("<br>Estimated age: "+maxAge)
document.write("<br>Amount of snack per day: "+est)
document.write("<br>You will need "+total+ " to last you until the ripe old age of "+maxAge)


