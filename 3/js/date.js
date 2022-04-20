//ACTIVITY 3.
//Write a JavaScript program to get the current date and show the date in the expected format.  
//Expected Output :
//mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy


//realizamos la declaracion de variables

var today = new Date();
var dd = today.getDate();

var mm = today.getMonth()+1; 
var yyyy = today.getFullYear();
if(dd<10) 
{
    dd='0'+dd;
} 

if(mm<10) 
{
    mm='0'+mm;
} 
today = mm+'-'+dd+'-'+yyyy;
document.write(today+ "<br>");
today = mm+'/'+dd+'/'+yyyy;
document.write(today +"<br>");
today = dd+'-'+mm+'-'+yyyy;
document.write(today +"<br>");
today = dd+'/'+mm+'/'+yyyy;
document.write(today +"<br>");