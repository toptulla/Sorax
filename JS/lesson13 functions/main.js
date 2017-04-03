//function declaration statement
// function greet(name){
//     return "Hello " + name;
// }

//function defenition expression
// var greet = function(name){ //Анонимная функция, имя функции (его можно опустить)
//     console.log(arguments); // Это не массив, а просто объект
//     console.log(arguments[1]);
//     console.log(arguments.length);
//     return "Hello " + name;
// };

// console.log(greet("Aleksey", 1, 2, 3).toUpperCase());

// var func = function(callback){
//     callback("Aleksey");
// };

// func(function(name){
//     console.log("Hello " + name);
// });

// var func = function(){
//     return function(name){
//         console.log("Hello " + name);
//     }
// };

// var helloFunc = func();
// helloFunc("Aleksey");
//func()("Aleksey");

var greeting = function(name){
    return "Hello " + name;
}("Aleksey");
console.log(greeting.toUpperCase());