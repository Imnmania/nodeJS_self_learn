const name = 'Niloy';
let age = 24;
const hasHobby = true;

age = 30;

const summarizeUser = (userName, userAge, userHobby) => {
    return (
        'Name is ' + userName
        + ', Age is ' + userAge
        + ', Is there a hobby? ' + userHobby
    );
}

const add = (a, b) => {
    return a + b;
}

const sub = (a, b) => a - b;

const addOne = a => a+1;

const addRandom = () => 6+6;

console.log(addRandom());
console.log(addOne(5));
console.log(sub(3, 2));
console.log(add(1, 2));
console.log(summarizeUser(name, age, hasHobby));