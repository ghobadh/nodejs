// In this example x1 and y1 are independent object which when we change one it does not impact in the orhter one.
// They are 'Reference value'
let x1 = 10;
let y1 = x1 ;//The value of the x is copied into the new variable y1. so they are indepedant. 
x1 =20;
console.log('x1:' + x1 + ' y1:' + y1);


// This is the way we us as 'Reference Type'
// In this way y and x are dependable and both are pointing to the same address in the memory. 
let x = {value : 10};
let y = x;
// Change the value of x with 'Reference Type'
x.value = 20;
console.log('x:' + x.value + ' y:' + y.value);




let number  =10
function increaseByValue(number){
    number++;
}

increaseByValue(number);
console.log('number by value: '+ number) //The answer is 10




let number2  ={ value : 10}
function increaseByReference(obj){
    obj.value++;
}

increaseByReference(number2);
console.log('number by reference: '+ number2.value) //The answer is 11
