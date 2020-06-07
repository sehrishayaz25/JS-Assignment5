var city=prompt("Enter current city")

if(city=="Karachi"||"karachi"){

    alert("Welcome to the city of lights")
}


var Gender=prompt("Enter Gender")

if(Gender=="male"){

    alert("Good Morning Sir ")
}
else if(Gender=="female"){

    alert("Good Morning Ma'am ")
}


var Color=prompt("Enter Color")

if(Color=="red"){

    alert("Must Stop ")
}
else if(Color=="yellow"){

    alert("Ready to move")
}
else if(Color=="green"){

    alert(" move now")
}



var fuel=prompt("Enter fuel in L")

if(fuel<0.25){

    alert("Please refill the fuel in your car")
}


var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}

var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}

var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}


if (true){
    alert("True");
    }
    else if (false){
    alert("False");
    }

    if("car" < "cat"){
        alert("car is smaller than cat");
        }    




var total = 300
var mSub1 = prompt("Enter Subject Marks" )
var mSub2 = prompt("Enter Subject Marks ")
var mSub3 = prompt("Enter Subject Marks" )


var subt=++mSub1 + ++mSub3 + ++mSub2
var subt=subt-3
--mSub1
--mSub2
--mSub3
var subtperc=(subt/300)*100
var remakrs
var Grade
if(subtperc>=80){

    remakrs="Excellent"
    Grade="A-one"

}
else if(subtperc>=70)
{

    remakrs="Good"
    Grade="A"

}
else if(subtperc>=60)
{

    remakrs="you need to improve"
    Grade="B "

}
else{

    remakrs="Sorry"
    Grade="Fail"

}

document.write("Total Marks : "+total+"<br>Marks Obtained : "+subt+"<br>Percentage : "+subtperc+"<br>Grade : "+Grade+"<br>Remarks : "+remakrs)



var a =3

var guess=prompt("Enter number b/w 1-10")

if(a==guess){

    document.write("Bingo! Correct answer")
}
else if(a==(guess-1)||a==(guess+1)){

    document.write("Close enough to the correct answer")


}

var a =prompt("Enter number")

var b=a%3

if(b==0){
document.write(a+"is  divisible by 3")
}
else{
    document.write(a+"is not divisible by 3")
}


var a =prompt("Enter number")

var b=a%2

if(b==0){
document.write(a+"is even")
}
else{
    document.write(a+"is odd")
}

var T=prompt("Enter temp")

if(T>40){

    alert("It is too hot outside")
}
else if(T>30){
    alert("The Weather today is Normal.")
}
else if(T>20){
    alert("Today’s Weather is cool")
}
else if(T>10){
    alert("OMG! Today’s weather is so Cool.")
}


var num1 =  prompt("Enter Num1")
num1++
num1--
var num2 = prompt("Enter Num2")
num2++
num2--
var opp = prompt("Enter Operator")
if(opp=="+"){

    document.write(num1+num2)
}
else if(opp=="-"){
    document.write(num1-num2)
}
else if(opp=="*"){
    document.write(num1*num2)
}
else if(opp=="/"){
    document.write(num1/num2)
}
else if(opp=="%"){
    document.write(num1%num2)
}