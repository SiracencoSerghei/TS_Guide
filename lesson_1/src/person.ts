// js function

// function greet(person) {
//   return 'Hello, ' + person.firstName + ' ' + person.lastName;
// }

// let user = { firstName: 'John', lastName: 'Doe' };

// console.log(greet(user)); // "Hello, John Doe"


// TS function

type Person = {
  firstName: string;
  lastName: string;
};

function greet(person: Person) {
  return 'Hello, ' + person.firstName + ' ' + person.lastName;
}

let user = { firstName: 'John', lastName: 'Doe' };

console.log(greet(user)); // "Hello, John Doe"

export {};