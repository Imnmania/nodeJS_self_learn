// Methods with curly brackets
const person = {
    name: 'Sax',
    age: 24,
    greet() {
        console.log('Hi, I am ' + this.name);
    }
};

// Arrays with square brackets
const hobbies = ['Sports', 'Cooking', 'Fapping', 1, true];
//  for (let hobby of hobbies) {
//      console.log(hobby);
//  }
// console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
// console.log(hobbies.map(hobby => hobby));
// console.log(hobbies);

hobbies.push('Programming');
// hobbies.pop();
console.log(hobbies);