//we can get Undefined about 7-8 ways
// if you declare a variable with var or let keyword and never assign any vlaue, the value of this variable will be undefined

// if we do not return any value from a function we'll get undefined

// if we call a function and do not pass the same number of parameter value, we will get undefined for the unpassed parameter

// if you want to access a property of an obj that don't exist in the object, then you'll get undefined

let name;

function add(n1, n2) {
    console.log(n1 + n2);
}

function add2(a, b) {
    console.log(a, b); // b is undefined
    const result = add2(5)
}

const student = {
    name: 'Jisan',
    age: 18
}
console.log(student.roll);

let fun = undefined;
console.log(fun);

let ages = [5, 6, 2];
console.log(ages[11])

//null means this does not exist
let value = null
