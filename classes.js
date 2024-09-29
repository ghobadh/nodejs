const person = {
    name : 'Gargamel',
    walk(){ 
        console.log ("walk method");
    }
};

//if we have person2, the problem is we have a method 'walk()' which is called repeatly. 
// now if we want to change walk() method , we need to go to each object and change it accordingly

const person2 = {
    name : 'John',
    walk(){ 
        console.log ("walk method");
    }
};


//new we define a class with Pascal notation (the first letter is always capital)
// now since we have Person class, we don't need to repreat walk () method and we just need to change it in one location
class Person {

    // constructor is a reserved keyword 
    constructor(name){
        this.name = name;
    }
    walk(){ 
        console.log ("walk method");
    }
}

const person3 = new Person('Gargamel'); // here we need to pass name 'Gargamel' to Person class
const person4 = new Person('John'); // here we need to pass name 'john' to Person class
console.log(person3.name)


//INHERITANCE in CLASSES


// Assume we have teacher class,and want to add a teacher that can walk() also. For this approach, we either use inheritance or composition.
//For inherit we use keyword 'extends'
class Teacher  extends Person{
    constructor(name, degree){
        super(name);
        this.degree = degree;
    }

    teach(){
        console.log('teach');
    }
}

const teacher = new Teacher('Gavin' ,'BS');
teacher.walk();