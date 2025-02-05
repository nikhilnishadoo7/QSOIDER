

// let n = prompt("Enter a number: ");
// console.log(typeof n);
// let nw =Number(n);
// console.log(typeof nw);

// if(nw%2==0){
//     console.log(true);
    
// }
// else{
//     console.log(false); 
// }

let package = Number(prompt("Enter the package: "));
if(package<1){
    console.log("No party");
}
else if(package<=5 && package>=1){
    console.log("Small Party");
}
else if(package<=7 && package>=5){
    console.log("Medium Party");
}
else {
    console.log("Large Party");
}


// OPERATORS
// operator are used to perform operations
// types
// 1. Arithmetic Operators(+,-,*,/,%,++,--)
// 2. Assignment Operators(=,+=,-=,*=,/=,%=)
// 3. Comparison Operators(==,!=,>,<,>=,<=,===,!==)
// 4. Logical Operators(&&,||,!) 
// -------------------------------------------------------------------------------------------
// note:
// 1. == is used to compare the values not the data type
//eg 5=="5" // true
// "5"=="5" // false
// 2. === is used to check value as well as data type
//eg 5==="5" // false

// conditional statements
// conditional statements basicly are used to ckeck the condition and execute the code accordingly
// types
// 1. if
// 2. else if 
// 3. else 
// 4.switch case
// ******************************************************************************************
// syntax of if
// if(condition){ block of code }
// syntax of else if
// else if(condition){ block of code }
// syntax of else
// else{ block of code}
// ******************************************************************************************
// syntax of switch case
// switch(expression){
//     case value1:
//         block of code
//         break;
//     case value2:
//         block of code
//         break;
//     default:
//         block of code
//         break;
// }