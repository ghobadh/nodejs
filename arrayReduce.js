const numbers =  [ 1,-2, 3, 2,];

// assume we want to add up all number in the array 
// the simple old version is 
let sum =0
for ( let n of numbers){
    sum += n;
}
console.log(sum);


//This is the easy was to use 'reduce' method.
//'reduce' method takes two arguments . the first method is acumulator which is acting like 'sum' in above  and currentValue is acking like 'n' in the loop which everytime gets a value of each element of the array
// the zero '0' as the second argument is the initial value for accumulator. 
//if we don't put the '0' for the second argument, then the accumulator will get the first element in the array . (1 in thie example), and currentvalue gets the second element of the array (-2 in this example)

const final = numbers.reduce((accumulator, currentValue) =>{
    return accumulator += currentValue;
}, 0  );

console.log(final);

//Even shorter version
const final2 = numbers.reduce(
            (accumulator, currentValue) => accumulator += currentValue );

console.log(final2);