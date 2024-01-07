var add=function (a,b){
    return a+b
}
var sub=function (a,b)
{
    return a-b
}
function printOp(sub){
    var result=sub(7,8)
    console.log(result)
}
printOp(sub)


/////////////////////////////////////////////////////////////////////////////////
//Closure(means holding the memory for caller function until called function is being used because it has a reference of caller)

function outerFunction(outerValue)
{
    return function(innerValue){
        console.log(outerValue)
        console.log(innerValue)
    }
}

var innerFunction=outerFunction("Outer")
console.log(innerFunction)
innerFunction("Inner")



