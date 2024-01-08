var person={
    name:"Archit",
    sname:"Pal",
    age:"22",
    getID:function (){return 22}
};
person.sname="kumar"
console.log(person)
delete person.sname
console.log(person)
console.log(person.getID())


//----------------------------------------------------------------------//
//Deep Copy(...spread operator)
var car={
    name:"LEXUS",
    model:"L24",
    color:"Red"
}
var car1={...car}  //Deep Copy
car.color="Blue"
console.log(car)
console.log(car1)


//--------------------------------------------------------------------------//
//rest operator(for unknown number of arguments)
function fun(...num)//converts to array of arguments
{
    console.log(num)
};
fun(1,2)
