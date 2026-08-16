//Asynchronous it means first do one task and complete it and go for net task.
console.log("Task 1");
console.log("Task 2");
console.log("Task 3");

//our react app
    // |
//reuest data
  // |
// backend
 // |
//  database
//server send the data
// If JavaScript waited and completely stopped during that time, your application could become unresponsive.

//So JavaScript allows some operations to happen in the background while other code continues.       



//Asynchronous

console.log("Start");

setTimeout(() => { //here we setTimeout it will come again again after 2 sec
    console.log("Hello");
}, 2000);

console.log("End");

//callback

function greet(name, callback1, callback2) {
    console.log("Hello " + name);

    callback1();
    callback2();
}

function sayBye() {
    console.log("Goodbye");
}

function Hello() {
    console.log("welcome");
}

greet("Gokul", sayBye, Hello);