// lambda and 'this' example
const person = {
    talk(){
        // in here 'this' is pointing to person object, which is exmpected
        console.log("this in talk method", this);
        //setTimeout is a global function in js.


        //explenation of war is in line 106. We should not use var
        var self = this;
        setTimeout(function(){
        // now when  the function in the setTimeout is pointing to 'this' , the 'this' is not pointing to person object. it is pointing to window/global object .
        // remember the reason function() is pointing to window object is because it is stand alone object and not to the person.
        //    console.log("this", this); <-- This line is not going to work
        //In order to solve this problem we can use old style which is using var. in this way we declare var outside of the function and then we can point 'this' to it.
            console.log("self is a var in the talk method - deprecated", self);
        }, 1000);     
        
        
        // the second option to use 'this' is using lambda instead of using function(). Unlike function(), 'this' in lambda will point to the object itself.
        setTimeout( () => {
            console.log("this is the in lambda which is point to person itself ", this);
        },1000) ;
    }
};

person.talk()