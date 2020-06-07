//1. Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:
var num=10

document.write("Result")
document.write("<br>The value of a is "+num)
document.write("<br>..........................")
document.write("<br><br>The value of a++ is "+ ++num)
document.write("<br>The value of a is "+num)
document.write("<br><br>The value of a++ is "+ ++num)
document.write("<br>The value of a is "+num)
document.write("<br><br>The value of a-- is "+ --num)
document.write("<br>The value of a is "+num)
document.write("<br><br>The value of a-- is "+ --num)
document.write("<br>The value of a is "+num)

//2. What will be the output in variables a, b & result after execution of the following script: var a = 2, b = 1; var result = --a - --b + ++b + b--; Explain the output at each stage: --a; --a - --b; --a - --b + ++b; --a - --b + ++b + b--;


//3. Write a program that takes input a name from user & greet the user.
var name=prompt("Enter Name")

alert("Welcome " +name)

//4. Write a program to take input a number from user & display it’s multiplication table on your browser. If user does not enter a new number, multiplication table of 5 should be displayed by default.
var num =  prompt("Enter Num1")
num=num*1
if(num!=0){
document.write("Table of "+num+"<br>")
for( var i=1;i<11;i++)
{
    document.write(num+" x "+i+" = "+(num*i)+"<br>")
}
}
else
{
    document.write("Table of 5<br>")
    for( var i=1;i<11;i++)
    {
        document.write("5 x "+i+" = "+(5*i)+"<br>")
    }
}

//5.Take
//a) Take three subjects name from user and store them in 3 different variables.
//b) Total marks for each subject is 100, store it in another variable.
//c) Take obtained marks for first subject from user and stored it in different variable.
//d) Take obtained marks for remaining 2 subjects from user and store them in variables.
//e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user table)
var sub1 = prompt("Enter Subject Name")
var sub2 = prompt("Enter Subject Name")
var sub3 = prompt("Enter Subject Name")
var total = 100
var mSub1 = prompt("Enter Subject Marks for "+sub1)
var mSub2 = prompt("Enter Subject Marks for" +sub2)
var mSub3 = prompt("Enter Subject Marks for "+sub3)

var percSub1 =(mSub1/total)*100
var percSub2 =(mSub2/total)*100
var percSub3 =(mSub3/total)*100
var subt=++mSub1 + ++mSub3 + ++mSub2
var subt=subt-3
--mSub1
--mSub2
--mSub3
var subtperc=(subt/300)*100

document.write("<table><tr> <td>"+sub1+"</td> <td>"+total+"</td> <td>"+mSub1+"</td> <td>"+percSub1+"%</td> </tr>   <tr> <td>"+sub2+"</td> <td>"+total+"</td> <td>"+mSub2+"</td> <td>"+percSub2+"%</td> </tr>   <tr> <td>"+sub3+"</td> <td>"+total+"</td> <td>"+mSub3+"</td> <td>"+percSub3+"%</td> </tr> <tr> <td></td> <td>"+total*3+"</td> <td>"+subt+"</td> <td>"+subtperc+"%</td> </tr> </table>")
