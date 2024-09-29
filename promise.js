let guess = 2;

let myPromise = new Promise((resolve, reject) => {
    let criteria  = 1+1;
    if (criteria == guess){
        resolve('Success');
    } else {
        reject('failed');
    }
})

//then will call resolve function, whereas , catch is got pupulated with reject function return.
myPromise
    .then( message => console.log(`This is the then ${message}`))
    .catch( message => console.log(`This is in the catch ${message}`))