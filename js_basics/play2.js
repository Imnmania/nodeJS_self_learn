const name = 'Niloy';
let age = 24;
const hasHobby = true;

//name = 'Biswas';
age = 30;

function summarizeUser(userName, userAge, userHobby)
{
    return (
        'Name is ' + userName
        + ', Age is ' + userAge
        + ', Is there a hobby? ' + userHobby
    );
}

console.log(summarizeUser(name, age, hasHobby));