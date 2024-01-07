var arr=[1,2,3,4,5]
arr[2]=7
arr.push(9)
console.log(arr)
console.log(arr.pop())
delete arr[arr.length-1]
console.log(arr)
arr.unshift(0)      //insert element at 0 index
arr.shift()               //delete element at 0 index
console.log(arr)

arr1=[10,11,12]
console.log(arr.toString())
console.log(arr.join("-"))
strcon=arr.concat(arr1)
console.log(strcon)


var names=["A","b","c","d","e","g"]
names.splice(5,0,"f")
console.log(names)
names.splice(2,2)
console.log(names)
names.splice(4)
console.log(names)
names.sort()    //sort method is ok for string but it creates string for numbers and compare them letter by letter
var num=[4,36,21,9,19]
console.log(num.sort())


// how to sort numbers using sort method
num.sort(function (a,b){
    return a-b
})
console.log(num)



//Object Array
var obj=[
    {
        name:"Archit",
        age:22},
    {
        name:"Anshu",
        age:23
    },
    {
        name:"Arpit",
        age:22
    },
    {
        name:"Abhinav",
        age:21
    }]
console.log(obj.sort(function(a,b){return a.age-b.age==0?a.name-b.name:a.age-b.age}))


//for each loop
numbers=[1,12,3,46,5,66]
numbers.forEach(function (number)
{
    console.log(number)
})

//filter function
var grt10=numbers.filter(function (num){
    return num>10
})
console.log(grt10)

//every function(compare all items present on the given condition)(gives boolean)
var result=numbers.every(function (num){
    return num>10
})
console.log(result)

//some function(finds atleast one if available item to follow condition)
var result1=numbers.some(function (num){
    return num>10
})
console.log(result1)


