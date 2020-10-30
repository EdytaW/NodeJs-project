const fs = require('fs');

const genders=['M', 'F'];

const maleNames=['Piotr', 'Kamil'];

const femaleNames=['Kasia', 'Ola'];

const lastNames=['Nowak', 'Kowalski'];

function randChoice(arr) {
    const random = Math.floor(Math.random() * arr.length);
    return arr[random];
};

const people = [];

for(i=0; i<20; i++){
    
    var person = {};

    person.gender = randChoice(genders);

    if(person.gender == 'M') {
       person.firstName = randChoice(maleNames); 
    } else {
        person.firstName = randChoice(femaleNames);
    }
    
    person.lastName = randChoice(lastNames)
    person.age = Math.floor(Math.random() * (18 - 1)) + 1;

    people.push(person);
}
console.log(people)

fs.writeFile('people.json', people, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
