const address = {
    street: 'Queen Street',
    city : '',
    country: ''
};

//if we want to assign each of this property to a varialbe we need to do this
//but this way is boring and tedious
const streetOld = address.street;
const cityOld = address.city;
const countryOld = address.country;

//This is a new way to assign each variable so we don't' need to have repetition
const { street, city, country } = address;

// we can use only some of the variable.
// using ':' we can have a different name from what we have in the object . unlike line 14
const {street :st, city : ci } = address;

console.log(st)
