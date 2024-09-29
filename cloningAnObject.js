        //Creating an object
        //When an object has several methods, we call it that this object have 'behaviour'.
        const circle = {
            radus: 1,
            draw: function() {
                console.log('draw');
            },
        };

        // This is a way to create an empty object
        const another = {};

        
        // OLD STYLE
        //with for loop we clone all properties of circle to 'another' object
        //but this way of cloning an object is deprecated and old
        for (let key in circle)
            another[key] = circle[key]; 


        console.log(another);





        //NEW STYLE     
        //Instead of using for loop to clone the object we can use assign () methed 
        // in this example we initiate the object with an emapty object '{}'.

        const circle2 = Object.assign({}, circle)
        
        //Note assign can color one more objects into an another object 
        // in the example we initiate the object with color property then we colon the circle to it. 
        //in other words, we coloned two objects (one annonymous and one circle) into a new object circle3
        const circle3 = Object.assign({
            color : 'yellow'
        }, circle);

        // now circle3 not only has its own property (color), but also all properties and their value from circle object
        console.log(circle3);


        //NEW STYLE - SPREAD WAY
        //This is the simplest way to colon an object 
        const circle4 = {...circle};

        console.log(circle4);