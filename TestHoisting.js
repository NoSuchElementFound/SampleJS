///////////////////////////////////////////////////////////////////////////////////
//Hoisting(JS by default shifts the declaration of variable to the top of that particular scope)
//let and const don't allow hoisting

console.log(a)     //this code runs because of hoisting
var a=5

//////////////////////////////////////////////////////////////////////////////////
//Hoisting in funtion
add(5,4)
function add(a,b)
{
    return a+b
}

///////////////////////////////////////////////////////////////////////////////////
//Hoisting in Anonymous Function(Does work for anonymous)
var add=undefined
add(5,4)
console.log(typeof add)
var add=function(a,b){
    return a+b
};
console.log(typeof add)
