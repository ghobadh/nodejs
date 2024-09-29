const person = {
    name: 'Gargamle',
    // old way to define a function
    talk : function(){},
    // this is new way to define a function
    walk(){},
    sleep(){
        console.log(this);
    }
};

//the 'this' in the sleep function, will return person object.
person.sleep();

//note: the method is an object itself (itself has properties and methods) , that is why sleep() has many methods and properties after dot . (line 18)
// if we just call sleep() then, sleepvar will not work as 'this' in the method cannot point directly to any object
//but if we bind the sleep method to an object it will work fine
const sleepvar = person.sleep.bind(person);
console.log(sleepvar);
sleepvar();