let display=(argument)=>{console.log(argument)}
display("Hello")

let show=argument=>`I am ${argument}`  //no braces and return is needed for one line arrow function
console.log(show("Archit"))    //no brackets for one argument


//---------------------------------------------------------------------------//
//Lexical Scoping
var car={
    name:"LEXUS",
    model:"L24",
    getColor:function (){
        console.log(this.name+" "+this.model)
        let temp=()=>{
            console.log(this.name+" "+this.model)    //arrow function binds the function scope to the object
        }
        temp()
    }
}
car.getColor()