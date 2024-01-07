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
