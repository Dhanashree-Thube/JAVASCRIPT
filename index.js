//Difference between let and var:
//1.Redeclaration and Re-Initalization:
var name = "omkar";
var name = "tony";
name ="lolo";


let age = 25;
age =89;
//let age =90; --->not possible


//2 : Scope of var and let 
//var -->function and global
//let -->block and global

var a= 30;
function abc(){
    console.log(a);
    
}
abc();


if (true){
    console.log(a);
}

console.log(a);


//function scope:--->function chya aath kuthe pan but outside function we cant access:
function first(){
    var age =90;
    console.log(age);
    if (true){
        console.log(age);
    }
}



//let ==>global scope
var a= 30;
function abc(){
    console.log(a);
    
}


if (true){
    console.log(a);
}

console.log(a);

//let --> block scope:

if (true){
    let b =0;
    console.log(b);
}
//console.log(b);

function demo(){
    let name = "sonu";
    if(true){
        console.log(name);
    }
    console.log(name);
}
console.log(name);
demo();

