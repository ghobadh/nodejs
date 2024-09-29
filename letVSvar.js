//in general, 'var' can cause of issue in accessibility and it can make issues
//we define two variable one with var and one with let
var color = 'red';
let age = 30;
// now color is attached to window object (window.color works), but age does not attached to window objec
//and window.age in inspect does not work .(undefined)
//This is a bad practice to attach color (using var) to window. Because there is only one window object and if you attach any 
//variable and from the other side you use a third party library which may have same variable name then your vailable will over write the third party variable.
//the confusion and errors.




// Please note this function is global now and it is attached to window object.
//It is always better using module to encapsulate each function so it does not attach to window object and cause any issue
function start(){
    for(let i=0;i < 5 ;i++)
        console.log(i);


    //Although we don't have { } in our for loop, 'i' varialbe is not accessiable outside of the next line of for loop
    //console.log(i); // This is not working. error meessage "can't find variable"


    //The x is defined with var . 
    for (var x=0;x< 5;x++)
        console.log(x);

    //strangely enought, still we have access to x altough we are outside of the for loop block.
    // var variable are limited to function and not the block. so x will not accessible outside of start () function.

    //var => function scope
    // ES6 (ES2015) : let, const => block-scope
    console.log("outside of for loop and x=" +x);

}

start();