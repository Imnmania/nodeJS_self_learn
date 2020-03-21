// Object allow us to group data together

const person = {
    name: 'Max',
    age: 32,
    // greet: () => will ask for global 'this'
    // greet: function() this will work
    // or greet() in short works as well
    greet() {
        console.log('Hi, I am ' + this.name);
    }
};

console.log(person);
person.greet();