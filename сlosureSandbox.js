function logPerson() {
    console.log(this.name);
}

const person1 = {name: "Danyil"};

function bind(person, func) {
    return function() {
        func.call(person)
    }
}