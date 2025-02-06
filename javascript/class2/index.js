// let num = "      NIKH ILs";
// let Len = num.length;
// if(Len%2==0){
//     let up = num.toUpperCase();
// console.log(up);
// }
// else{
//     let lw =num.toLowerCase();
//     console.log(lw);
// }
// // console.log("nikhil");


// console.log(num.charAt(0)+num.charAt(num.length-1));

// let trm = num.trim()
// console.log(trm);

// let Name = prompt("Enter your name: ");
// let len = Name.length;
// console.log(Name.repeat(len));

// let ad = prompt("Enter the ad: ");
// let len = ad.length;
// const f_to_et =ad.slice(0,8);
// let splt = (ad.slice(8,13));
// let x ="XXXX XXXX ";
// let y = x.concat(splt);
// console.log(f_to_et); 
//  console.log(y);
 

let mb = prompt("Enter the mobile number: ");
let splt = mb.slice(0,8);
let last = mb.slice(8,11);
let cross= "X".repeat(8);
console.log(cross+last);

