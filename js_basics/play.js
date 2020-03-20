var name = 'nil';
var age = 24;
var hasHobbies = true;

function summarizeUser(username, userage, userhobby)
{
    return (
    'name is ' + username 
    + ', age is ' + userage 
    + ", and hobby is " + userhobby
    );
}

console.log(summarizeUser(name, age, hasHobbies));