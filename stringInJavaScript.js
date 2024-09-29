// remember string is primitive and not an object


// thie is a string primitive
const message = 'This is my frist message';
// however we put dot in front of message it shows many other properties. for example
console.log(message.length)
// because internally the javascript engine wraps this primitive to an string object. and that is why we see those properties and function for 'message' variable

console.log('Type of message "' + typeof message + '"')

console.log (message[0]) ;// we can access to the string as index
console.log (message.includes('My')) ;// return false . this methoed return true or false for searching the string for the string is given.
console.log(message.startsWith("This")) ;// return true
console.log(message.endsWith('e')) ;//return true
console.log(message.indexOf('my')) ;// return 8 to find the index number
console.log(message.replace('frist', 'second')) ;// now the message is 'This is my second message'. Note that the origianl 'message' has not change and kept its value. check the next line
console.log(message);

console.log(message.split(' ')) // it will create an array of objects for each word in the 'message' string



//this is a string object
const msg = new String('hi');
console.log(msg.toString());
console.log('Type of msg "' + typeof msg + '"')