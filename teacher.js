
//objects are visiable to its own file only. and other files cannot see this class. In other words the objects are private to all other objects in other files unless we export/import them.
// unless we export them and then wherever we need it , we import it. we export it by using 'export' keyword
//for specific name , we use '{}' and it is important we us the full name of the file including .js extension.




import { Person } from "./person.js";

// when we add 'default' after export, we make the Teacher class as default export for this file. so when we import it in modules.js file, we don't need curly bracker
export default class Teacher  extends Person{
    constructor(name, degree){
        super(name);
        this.degree = degree;
    }

    teach(){
        console.log('teach');
    }
}

// if we add a function() then this is not visible to moodule object because we only export the Teacher object . unless we add 'export' in front of it.  
export function promote() {}