const findTheOldest = function(persons) {
    let person = { name: "", yearOfBirth: 0, yearOfDeath: 0,}

    const today = new Date().getFullYear()
    let ageOldest = person.yearOfDeath - person.yearOfBirth;
    
    const oldestPerson = persons.reduce((acc, curr) => {
        let age = 0;

        if('yearOfDeath' in curr) age = curr.yearOfDeath - curr.yearOfBirth;
        else age = today - curr.yearOfBirth;

        if (age > ageOldest){
            person = curr
            ageOldest = age
        }

        acc = person
        return acc

    }, {} )
    return oldestPerson
};

// Do not edit below this line
module.exports = findTheOldest;
