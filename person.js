//new we define a class with Pascal notation (the first letter is always capital)
// now since we have Person class, we don't need to repreat walk () method and we just need to change it in one location
export class Person {
    lastname = "Gargamel";
    // constructor is a reserved keyword 
    constructor(arg1){
        //name property for class Person will created in here while we assign it.
        this.name = arg1;

    }
    walk(who){ 
        //since the name is populated dynamically , we need to put 'this' for 'name' otherwise, the js engine cannot see the property correct.visual code mentions "name is deprecated"!!
        console.log (`${who} is walking and his name is ${this.name} ${this.lastname}` );
    }
}
