//We want to seatch an array based on certain criteria
const number = [1, -1, 2, 3];

// We want to filter only positive numbers
const postiveNumber = number.filter(function(value) {
    return value >= 0;
});

// Lambda version, the first argument in filter is predicate
const  negativeNumber = number.filter( x=> x < 0);

console.log(postiveNumber);
console.log(negativeNumber);




// Another example of lambda
const jobs = [
    {id : 1 , isActive : true},
    {id : 2 , isActive : true},
    {id : 3 , isActive : false},
];

const activeJobs = jobs.filter( x => x.isActive);
console.log(activeJobs);




