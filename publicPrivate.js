//This variable since it is defined in outside of any block so it is global
// As the best practice it is always better we don't define any global variable, as it can confusing and prone to errors.
const color = 'red'


function start(){
    // When we use 'const' the variable is only accessiable to its block
    // Keyword 'let' is the same also. it is only accessible by its own block or sub-blocks
    const message ='This is a message';
    // Although color is availabe globally , but if we redefine it , we lose access the the original global varialbe.
    // now the color in this block and global variable color are two different variable which are pointing to two different address in memory.
    // In other word, the local varialbes have precedenece over global variables.
    // As the best practice the name of global and local variable should not be same.
    const color = 44;
    console.log(color);
}

// This is completely fine as the vaariable constant is bounded to the block . so two variable message in start( ) and stop() is totally fine.
function stop(){
    const message = 'different message'
    console.log(color);
}



start();
stop();
