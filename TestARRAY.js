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

