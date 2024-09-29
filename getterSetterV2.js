

const person = {
    firstName : 'Gavin',
    lastName : 'Gargamel',
    fullName () {
        return `${person.firstName} ${person.lastName}`
    }

};

// We have implement fullName function to print the full name 
// But this approach has 2 issues
//1- We cannot pass the first and last name to the object (no getter)
//2- we using the full name as a function rather than a property.
console.log(person.fullName())

//Here is the way we fix those 2 issues
// we add 'get' so the function is act as a getter


const person2 = {
    firstName : 'Gavin',
    lastName : 'Gargamel',
    get fullName () {
        return `${person2.firstName} ${person2.lastName}`
    },
    set fullName(value){
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
        console.log("JAJSDFS");
    }

};

//with difining setter, we can pass the argument to the object
person2.fullName = 'John Wick';

//so now we don't need paranthesis in front of fullname
console.log(person2.fullName)

