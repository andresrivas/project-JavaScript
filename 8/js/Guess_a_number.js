//Write a JavaScript program where the program takes a random 
//integer between 1 to 10, the user is then prompted 
//to input a guess number. If the user input matches with guess number, the program will display a message "Good Work" otherwise display a message "Not matched".


// Get a random integer from 1 to 10 inclusive

const num = Math.ceil(Math.random() * 10);
document.write( num);
 const gnum = prompt('Guess the number between 1 and 10 inclusive');
 if (gnum == num)
 document.write('  Matched');
  else
  document.write('  Not matched, the number was '+ gnum);
   