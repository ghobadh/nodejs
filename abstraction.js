
        //constructor function
        //The name convensation for the constructor function is we start with capital letter
        //Note:
        //1. we don't need 'return this;' stmt, as this is happening automatically
        //2. the object basically is an object although it is define with 'function'
        //3. in javascript a function is an object

        //Abstraction means
        // hide the details and show the essentials 
        
        function Circle(radius){
            // because we don't use 'this' the color is not part of Circle object beause it is local and it will be destroy as soon as the object goes out of the scope.
            // In fact ,'let' make the property private to the class (local varivale)
            let color = 'red';
            // in orde to reach the private property we can assign it to the property which is difned in the object
            this.color = color;

            this.radius = radius;

            // By change 'this' to 'let' we make the variable private, which it is only accessible within the object itself.
            let defaultLocation = { x:0 , y: 0};

            //The same way (changing 'this' to 'let'), we use a function as local and it is not accessible from outside of the object 
            let computeOptimumLocation = function(factor) {
                // ...
            }


            this.draw = function() {
                //We calling the method which we defined in the object leve
                //Since the property is local, we don't need to use this to call it.
                // we can call it directly
                computeOptimumLocation(0.1);

                console.log('constructor draw');
            }
        }

        const circle = new Circle(10);
        // now if you check the circle object , only radius and draw are accessible outside ot the object
        circle.radius = 20;