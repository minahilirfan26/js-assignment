//QUESTION#-01
//"Write a JavaScript program that accepts two numbers in two prompts and displays the larger one in the console."

//let num = prompt("Enter the first value //here!");
//let num2 = prompt("Enter the Second value //here!");
//if (num > num2){
//    console.log(+num);
//} else if (num2 > num){
//    console.log(+num2);
//} else{
//    console.log("Both r equals")
//}

//QUESTION#-02
//" Write a JavaScript conditional statement to find the sign of a number. Display an alert box with the specified sign."

//let num = prompt("Enter the number her");
//if (num > 0){
//console.log("The sign is +");
//} else if (num < 0){
//    console.log("The sign is -")
//} else{
//    console.log("zero")
//}

//QUESTION#-03
//". Write a JavaScript program that accepts five numbers in five prompts and displays the larger one in the console."

//let num1 = prompt("Enter Num1");
//let num2 = prompt("Enter Num2");
//let num3 = prompt("Enter Num3");
//let num4 = prompt("Enter Num4");
//let num5 = prompt("Enter Num5");
// if (num1 > num2 && num1 > num3 && num1 > num4 && num1 > num5) {
//    console.log(+num1);
//    
// } else if (num2 > num1 && num2 > num3 && num2 > num4 && num2 > num5) {
//    console.log(+num2);
//    
// } else if(num3 > num1 && num3 > num2 && num3 > num4 && num3 > num5) {
//    console.log(+num3);
//    
// } else if(num4 > num1 && num4 > num2 && num4 > num3 && num4 > num5) {
//    console.log(+num4);
//    
// } else if(num5 > num1 && num5 > num2 && num5 > num4 && num5 > num4) {
//    console.log(+num5);
//    
// } else{
//    console("all r equals");
// }

 //QUESTION#-04
 //"Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen."

//for (j = 0; j <= 15; j++){
//  
//  if(j % 2 === 0){
//     document.write(j + " is even ")
//  } else if (j % 2 !== 0){
//     document.write(j + " is odd ")
//  } 
//
//}

//QUESTION#-05
//"Write a JavaScript program which computes the average marks of the following students Then, this average is used to determine the corresponding grade."

//let user = prompt("Enter the Average //Marks");
//if (user <= 60){
//   console.log(+user + " Grade: F")
//} else if ( user <= 70){
//   console.log(+user + " Grade: D")
//} else if ( user <= 80){
//   console.log(+user + " Grade: C")
//} else if ( user <= 90){
//   console.log(+user + " Grade: B")
//} else if ( user <= 100){
//   console.log(+user + " Grade: A")
//} else{
//   console.log("invalid")
//}

//QUESTION#-06
//" Write a JavaScript program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz""

//for (i = 1; i <= 100; i++){
//  if(i % 3 == 0 && i % 5 == 0){
//     console.log(+i +" FizzBuzz")
//  }
//   else if(i % 5 == 0){
//     console.log(+i +" Buzz")
//  } if(i % 3 == 0){
//     console.log(+i +" Fizz")
//  }
//}

//QUESTION#-06
//" Write a JavaScript program to construct the following pattern, using a nested for loop."

for (let i = 1; i <= 5; i++){
   for(j = 1; j <= i; j++){
      document.write("*");
   }
   document.write("<br>")

}