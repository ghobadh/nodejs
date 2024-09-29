        // Comment and it is ignored 
        //This is my first java scipt after many years
        console.log('Hello world');

        //variable cannot be reserved keyword
        //variable cannot start with number
        //variable cannot start with space or hyphen
        //They should be meaningful
        //They are case sensetive
        // You can use multiple of them in a single line


        let name = 'Gargamel'; // String Literal
        let age = 30; // number Literal
        let isApproved = false; // Boolean Listeral
        let firstName = undefined;
        let selectedColor = null;
        
        
        console.log(name);


        //constant
        const interestRate = 0.3;

        //Reference Types are:
        //  Object
        //  Array
        //  Function

        let person = {
            name: 'John',
            age: 22

        };

        //change the object with 'Dot notation'
        person.name = 'Gargamel'

        //change the object with bracket notation
        // in the say we can change the notation dynamically
        let selection = 'age'
        person[selection] = 40

        console.log(person);
0

        //Function
        function greet(name, lastname){
            console.log('Hello ' + name +' '+ lastname)
        }

        greet('Gargamel','Izreal');


        // Calculating function with return value
        function square(number){
            return number * number;
        }

        console.log(square(5));

        //Creating an object
        //When an object has several methods, we call it that this object have 'behaviour'.
        const circle = {
            radus: 1,
            location: {
                x: 1,
                y:1
            },
            draw: function() {
                console.log('draw');
            },
            //This is another way to define a function . In this way we don't use word 'function' , but the behavour is the same

            draw2(){
                console.log("draw2");
            }
        };

        circle.draw();


        //factory function
        //with Factory function we reduce to repeat function which do the same thing in different objects
        //name of the factory function is camel notation (the first character is always ower case )
        function createCircle(radius){
            return {
            radius , // this is same as radius : radius
             draw: function() {
                console.log('factory draw');
            }
        };

        }

        const factoryCircle = createCircle(1);
        factoryCircle.draw();


        //constructor function
        //The name convensation for the constructor function is we start with capital letter (Pascal Notation)
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

        

        // As I mentioned in note 2, Circle has properties like an object. e.g
        // wirte down Circle.name in node console
        //new create a new object and then 'this' will point to that object
        //it is important to use 'new' otherwise, without 'new' keyword the object will created in windows object level which is a 
        //poor practice

        const another = new Circle(1);
        another.draw()

        Circle.call({},1); // This line of code is exactly like line 123  'new Circle(1)'. This object will create internally. the '{}' is pointing to 'this' in the object
        Circle.apply({}, [1]); //apply function is exactly like call function except the argument can be passed as an array


        const Circle1 = new Function('radius', `
            this.radius = radius;
            this.draw = function() {
                console.log('constructor draw 2');
            }
            `);
        
            const circleFunc = new Circle1(1);



