/////////////////////////////////////////////////////////////////////////////
//Asynchronous JavaScript
setTimeout(function (){
    console.log("Wait")
},4000)  //timeout works for a specific block of code
console.log("Above code is paused not others")


/////////////////////////////////////////////////////////////////////////////
//Higher order function(if a function has another function as argument or returns a function then it is Higher order function
function calculation(operation,num1,num2)
{
    return operation(num1, num2)
}
function add(x,y)
{
    return x+y
}
function sub(x,y)
{
    return x-y
}
console.log(calculation(add,5,5))
console.log(calculation(sub,5,5))