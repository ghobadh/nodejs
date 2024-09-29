//We want to search an array based on certain criteria
const number = [1, -1, 2, 3 , -2, -3, -4];


// Lambda version, the first argument in filter is predicate
const  negativeNumber = number.filter( x=> x < 0);


//map () method is taking each element of an array and give us an array with new element 
const items= negativeNumber.map( x => '<li>' + x + '</li>')
 // join method is joining all array with ',' seperator in one string. but we pass ' ', so the sperator will be a blank white space

const html = '<ul>' + items.join(' ') + '</ul>';
 
console.log(html);


//We can map even to an object rather than only a string
const items2 = negativeNumber.map (x => {
    const obj = {value : x };
    return obj;
});
console.log(items2);


//In previous example we explicitly define the object 'obj' and then we put the 'value' into it
//but there is a shorter version
// Please note the '{'  in line 29 is represting the code block and not an object so we cannot eliminate it. unless we use parathises (line 37)
const items3 = negativeNumber.map ( x=>{
    // we just return an annonymous objet to the map and this is totally fine
    return {value : x};
}); 

console.log(items3)

// we just return an annonymous object to the map and this is totally fine. but we can do this with paranthises '()' , in this way, the js engine does not see the '{}' as code block and now we are fine now.
const items4 = negativeNumber.map ( x=>({value : x})); 

console.log(items4)

 //please note : map() method deos not change the original array so we can have a shorter code
 //This is called chain of methods.
 const items5 = number
        .filter( x=> x<0)
        .map(x=> ({value : x}))
        .filter(x => x.value < -2)
        .map( x =>  `the finals values is: ${x.value}` )
        .join('\n');
 console.log(items5);
