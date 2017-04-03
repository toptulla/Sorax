//throw "Hello";

//10 = "string";

var myError = new Error("My error Message");
console.log(myError.name);
console.log(myError.message);
console.log(myError.stack);

console.log("");

try {
    throw myError;
} catch (error) {
    console.error(error.message);
} finally  {
    console.log("finally message");
}

console.log("");

try {
    throw 42;
} catch (error) {
    console.error(error);
} finally  {
    console.log("finally message");
}