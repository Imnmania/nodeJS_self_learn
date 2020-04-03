const fetchData = callback =>{
    setTimeout(() => {
        callback('Donee!');
    }, 1500);
};

setTimeout(() => {
    console.log('Timer is done!');
    fetchData(text => {
        console.log(text);
    });
}, 2000);

console.log('Hello');
console.log('Gello');
console.log('mello')