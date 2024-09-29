
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
        
        // adding new property . Unlike java , we can add and/or remove property dynamically

        circle.location = {x : 1 };
        //Another way is using [] notation. This way is useful when dynamically change the property name 
        const propertyName = 'location'
        circle[propertyName] = {x : 2};

        // deleting the property
        delete circle.location

