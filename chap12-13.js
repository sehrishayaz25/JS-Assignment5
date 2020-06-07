var a =prompt("Enter char \n")

if(a<="Z" && a>="A"){

    document.write("it is upper case\n")
}
else if(a>="a" && a<="z"){

    document.write("it is Lower case \n")
}

var a =prompt("Enter Number \n")
var b =prompt("Enter Number \n")

if(a>b){
    document.write(a)
}
else if(a<b){
    document.write(b)
}else{
    document.write("\n Both are equal")
}



var a =prompt("\n Enter Number")


if(a>0){
    document.write("\n Number is positive ")
}
else if(a<0){
    document.write("\n Number is Negative")
   
}else{
    document.write("\n Number is 0")

}


var a =prompt("\n Enter Number")


if(a=="a"||a=="e"||a=="i"||a=="o"||a=="u"){
    document.write("\n True")
}
else{
    document.write("\n False")

}


var pass="Password123"

var Cpass = prompt("Enter Password")

if(Cpass==""){

    alert("Enter Pass")
}
else if(pass==Cpass){

    alert("Correct! The password you  entered matches the original password")
}
else{
    alert("Incorrect password")
}

var hour = 13;
if (hour < 18) {
greeting = "Good day"
}
else{
greeting = "Good evening"
}

var time = prompt("Enter Time")
if (time>=0000&&time<1200){

    alert("Good Morning")
}
else if(time>=1200&&time<1700){
    alert("Good Afternoon")
}
else if(time>=1700&&time<2100){
    alert("Good Evening")
}
else if(time>=2100&&time<2359){
    alert("Good Night")
}


