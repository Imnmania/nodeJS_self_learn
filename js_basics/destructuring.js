const person = {
    name: 'Sax',
    age: 24,
    greet() {
        console.log('Hi, I am ' + this.name);
    }
};

// This is the old way
// const printName = (personData) => {
//     console.log(personData.name);
// };

// This is the destructuring way (curly brace)
const printName = ({ name }) => {
    console.log(name);
}

printName(person);

// another way
const { name, age } = person;
console.log(name, age);

// destructuring array
const hobbies = ['Sports', 'Cooking'];
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);