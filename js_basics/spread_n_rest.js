// Methods with curly brackets
const person = {
    name: 'Sax',
    age: 24,
    greet() {
        console.log('Hi, I am ' + this.name);
    }
};

person.greet();
const copiedPerson = {...person};
console.log(copiedPerson);

// Arrays with square brackets
const hobbies = ['Sports', 'Cooking', 'Fapping', 1, true];

// const copiedArray = hobbies.slice();
const copiedArray1 = [hobbies]; // this creates nested array
console.log(copiedArray1);

// spreads are ... (3 dots) we use before an array or object
// spreads pull out data from array or object and puts it into whatever they are encapsulated with
// in this case which is [] that indicates array
const copiedArray2 = [...hobbies];
console.log(copiedArray2);


const toArray = (arg1, arg2, arg3) => {
    return [arg1, arg2, arg3];
};

console.log(toArray(1, 2, 3, 4));

// Rest looks just like spread, but acts opposite
// here Rest is used to take as many arguments putting them to array
const toArrayRest = (...args) => {
    return args;
};

console.log(toArrayRest(1, 3, 3, 4));