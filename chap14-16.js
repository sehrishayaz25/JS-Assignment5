studentName = new Array();
studentname=[]
Name=["Table","Books"]
Numbers=[1,2,3]
bol=[true,false]
mixarry=["Cars",1,true]
eduQual=["SSC","HSC","BCS","BS","BCOM","MS","M.Phil","PhD"]
document.write("Qualifications<br>")
for(i=0;i<8;i++){

    t=i+1
    document.write(t +")"+eduQual[i]+"<br>")
}



Name=[]
marks=[]
for(i=0;i<3;i++){

        name[i]=prompt("Enter Name")
        marks[i]=prompt("Enter marks")
        
}
    
for(i=0;i<3;i++){

    
    document.write("Score of "+name[i]+" is "+marks[i]+". Percentage : "+((marks[i]/500)*100)+"%<br>")
    
}

color=["red","blue"]

alert(color)
var temp =prompt("Enter color to add in front")
color.unshift(temp)
alert(color)
var temp =prompt("Enter color to add in back")
color.push(temp)
alert(color)
var temp =prompt("Enter color to add in front")
color.unshift(temp)
var temp =prompt("Enter color to add in front")
color.unshift(temp)
alert(color)
color.shift()
alert(color)
color.pop()
alert(color)
var pos=0
pos=prompt("Enter index to add")
temp=prompt("enter color")
color.splice(pos,0,temp)
alert(color)

pos=prompt("Enter index to delete")
var del=0
del=prompt("how many to delete?")
color.splice(pos,del)
alert(color)

var score=[320,230,480,120]
document.write(score+"<br>")
for(i=0;i<5;i++)
{
    for(j=i+1;j<5;j++){
        if(score[i]>score[j]){
            temp=score[j]
            score[j]=score[i]
            score[i]=temp

        }
    }
}
document.write(score+"<br>")

var citiesList=["karachi","Lahore","Islamabad","Quetta","Peshawar"]
var cities =[]
alert(citiesList)
pos=prompt("Enter index to extract to cities")
cities=citiesList.splice(pos,3)
alert(cities)

document.write("Cities List :<br> "+citiesList+"<br><br>Selected Cities List : <br> "+cities)

var arr = ["This" , "is" ,  "my" ,  "cat"];
document.write(arr+"<br>")
var st=""
for(i=0;i<arr.length;i++){

    st=st+" "+arr[i]

}
document.write(st)


var arr = ["Keyboard" , "mouse" ,  "printer" ,  "moniter"];
document.write("Devices <br>"+arr+"<br>")

for(i=0;i<arr.length;i++){

    document.write("Out:<br>"+arr[i]+"<br>")

}

var arr = ["Keyboard" , "mouse" ,  "printer" ,  "moniter"];
document.write("Devices <br>"+arr+"<br>")

for(i=arr.length+1;i>=0;i--){

    document.write("Out:<br>"+arr[i]+"<br>")

}

   


var arr = ["Apple" , "Samsung" ,  "Motorola" ,  "Nokia","Sony","Haier"];


for(i=0;i<arr.length;i++){

    document.write("<br>"+arr[i]+"<br>")

}



