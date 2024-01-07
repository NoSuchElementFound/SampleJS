
console.log(Number(undefined))
console.log(parseInt("10 year"))


//next code Palindrome
function isPalindrome(n) {
    var rem,num=0
    while(n>0){
        rem=n%10
        num=num*10+rem
        n=Math.floor(n/10)
    }
    return num
}
console.log((isPalindrome(121)===121))


//next String code
var str="Hello I am Archit"
console.log(str.slice(2,5))
console.log(str.slice(-4,-1))  //takes negative
console.log(str.substring(2,5))  //dosen't take negative
console.log(str.substr(2,5))
console.log((str.replace("Hello","Hi")))
console.log(str.concat("Pal","Pal"))
console.log(str.charAt(1))

//next code String Interpolation
console.log(`Hello 
I
Am
"Hero"`)
var name="Archit"
console.log(`Hello I am ${name}`)


//next code JSON
var car={
    name:"BMW",
    model:"M3",
    engine:"V8"
};
console.log(car)
console.log(car.model)
console.log(car["model"])
for(properties in car)
{
    console.log(`${properties}:${car[properties]}`)
}


//next code anonymous function
var age=function (){return 16}
console.log(age())










