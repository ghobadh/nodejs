const first = [1,2,3];
const second = [4,5,6];

// OLD WAY to combine
const combinedOldWay = first.concat(second);

// NEW WAY to combine usig spread (the three dots are the spread)
const combine = [...first, ...second];

// Spread is used to clone the array object
const clone = [...first];
console.log(clone); // This is exactly same as first array object


// we can combine the objects even
const person = {name : 'Gargamel'};
const job = { job_descroption : 'unemployed'}
// in this example we combined person and job objects and add location on property 
const combinedPerson = {
    ...person,
    ...job,
    location : 'Canada'
};

console.log(combinedPerson);