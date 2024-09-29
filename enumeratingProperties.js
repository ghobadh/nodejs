
        //constructor function
        //The name convensation for the constructor function is we start with capital letter
        //Note:
        //1. we don't need 'return this;' stmt, as this is happening automatically
        //2. the object basically is an object although it is define with 'function'
        //3. in javascript a function is an object
        
        function Circle(radius){
            this.radius = radius;
            this.draw = function() {
                console.log('constructor draw');
            }
        }

        const circle = new Circle(10);

        for ( let key in circle){

            console.log(key, circle[key]);
        }

        //in case we want to see only properties
        for (let key2 in circle){
            if (typeof circle[key2] !== 'function')
                console.log(key2, circle[key2])
        }


        // Using Object you can see the all keys but the problem is your cannt separat the method from a variable
        const keys  = Object.keys(circle);
        console.log(keys);
        
        // How to find out an object has a give property
        if ('radius' in circle)
            console.log('-->Circle has a radius')