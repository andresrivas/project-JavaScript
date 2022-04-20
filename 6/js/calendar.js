//ACTIVIDAD 6

//Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.



function leapyear(year)
{
return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}
document.write(leapyear(2016 ) + "<br>");
document.write(leapyear(2000 )+ "<br>");
document.write(leapyear(1700)+ "<br>");
document.write(leapyear(1800)+ "<br>");
document.write(leapyear(100)+ "<br>");