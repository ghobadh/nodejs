// The 'this' definition --> it is a reference to the the 'object' that is executing the current function

// RULE 1: if the function is part of an object we call it method. the method is pointing the object itself. method -> obj
// RULE 2: however, if the function is regular function which means it is not part an object, the we call it functinn and it is pointing to window object in browser and global in node.js . function -> global (window, global)


// EXAPLE of RULE 1
// we create an object vidro and play () is method to the object so it is point to the object and it has acces to the object's properties.
const video = {
    title :'a',
    //method
    play(){
        console.log(this);
    }
};

video.play();

// so even we add another method to video object still the 'this' pointing the object (with stop() method added)
video.stop = function (){
    console.log(this);
}

video.stop();


// EXAMPLE of RULE 2
//Since this function is not defined within any block, so the rule 2 is applied
function playVideo() {
    console.log(this); 
}
// when we run the function, 'this' will how the window object 
playVideo();



//EXAMPLE 2 of RULE 2
// using constructor function
function Video(title){
    this.title = title;
    console.log(this);
}


// This is an excpetion. in here because we use 'new' keyword to create the object , now 'this' keyword is pointing to a new object and not the global
const v = new Video('title');



//EXAMPLE 3 combination of two rules!!

const videoCombined = {
    title : 'my titile',
    tags : ['a', 'b', 'c'],
    //showTags is a method, which means the 'this' in the method is pointing to the object itself
    showTags(){
        //Here is confusion part. The function in here pointing to global and not the object anymore!!!!!!
        this.tags.forEach(function(tag) {
            //This is fine as long as done try to reach any propperty in videoCombited object.
            console.log(tag);
        });
    },
    showTagsWithTitle(){
        this.tags.forEach(function(tag) {
            //This time we want to access to title property in videoCombited object
            console.log(this.title, tag);
            //forEach has this capablity to pass the second object into the loop. Therefore, for 'this' in the above line , we added 'this' in the line below , so the object videoCombined is passed to the loop.
            //if we don't add 'this' in the line below the function fails in 'this' line above.
        }, this);
    },
    showTagsWithAnyArg(){
        this.tags.forEach(function(tag) {
            console.log(this.title, tag);
            //forEach has this capablity to pass the second object into the loop. Therefore, for 'this' in the above line , we added annonymous objet in the line below , so the object videoCombined is passed to the loop.
            //if we don't add the annonymous object below  in the line below the function fails in 'this' line above. the second object can by any object as long has it has 'title' property since we called it in the forEach loop.
        }, {title : 'Gargamel'});
    }

    // Note that now all function is similar to foreach to pass second object into. and for those we need to use another technique.


};

videoCombined.showTags();
videoCombined.showTagsWithTitle();
videoCombined.showTagsWithAnyArg();







