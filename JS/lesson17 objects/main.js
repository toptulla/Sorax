// {
//     имя:значение,
//     имя:значение,
//     имя:значение
// }

var person = {
    name:"Aleksey",
    age:28,
    gender:"male",
    sayHello:function(){
        return "Hello, i'm " + this.name + "!"
    }
};
person.Id = 1234;

console.log(person);
console.log(person.sayHello());
console.log("");

var object = new Object();
object.property = "value";

console.log(object);
console.log("");

var objectEC5 = Object.create(person);
objectEC5.Id = 12;
objectEC5.name = "Katya";
objectEC5.age = 26;
objectEC5.gender = "female";

console.log(objectEC5);
console.log(objectEC5.sayHello());
console.log("");