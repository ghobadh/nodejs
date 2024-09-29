//String is primitive. However , String in js engine wraps to an object . So we will have many methods for it. 

//This how we defines everything in js
// OBject --> {}
// Boolean --> true, false
//String --> '' , ""
//Template --> ``



//With template (backqoute) we have message in the code exactly the way we want to see it in the output of broswer
// for example if we want to see this message in two line we will use \n
const message = 'this is my \n\'first\' message';
//we can do this way in below but still we need all those backslash in our staring
const message2 = 'this is my \n'+
'\'first\' message';

//but with template, life is easier and we have the message exactly as we will see in the brower, and we don't
//need those baskslash anymore
const message3=`this is my
'first' message`;

// All of them they do the same thing but template is much easier
console.log(message);
console.log(message2);
console.log(message3);

// With tempplate we can place holder as well as we don't have this capability in other ways

//WTIHOUT TEMPLATE
const name = 'Gargamel';
const emailWithoutTemplate = 'Hi '+ name +',\n\n Thank tou for joining my mailing list.\n\nRegards,\nGavin';


function greeting(){
    return 'Hellooo';
}

//WITH TEMLAGE
//within the curly bracse we can add any expression . Even we can call a function which returns a value.
const emailWithTemplate = `${greeting()} ${name} ${2+4},

Thank you for joining my mailing list.

Regards,
Gavin`

console.log(emailWithoutTemplate);
console.log(emailWithTemplate);


