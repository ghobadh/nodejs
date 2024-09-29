function makeRequest(location){
    return new Promise((resolve, reject) =>{
        console.log(`Making Request to ${location}`);
        if(location =='Google'){
            resolve('Gargamel say hi');
        } else {
            reject('We can only talk with Gargamel from Google');
        }
    })
}


// This function is working fine. However, it is too many then and passying parameters
function processRequest(response) {
    return new Promise ((resolve, reject) => {
        console.log('Processing Respone...')
        resolve(`Extra information ${response}`)
    })
}

makeRequest('Google').then(response => {
    console.log(`message is reciive from ${response}`);
    return processRequest(response);
}).then(process => console.log(`process of ${process} is completed now.`))
.catch(err => console.log(`error ${err}`));

//This is aync for the same function above but it is much simpler.
//In order to do it we add 'async' to the beginning of the function
//This function is doing exactly what line 21 is doing
// for errors we use try/catch block
async function doWork() {
    try {
            //In here 'await' makes the process to wait to finish the makeRquest first then it goes to the next step
        const response =  await makeRequest('Goosdfgle');
        console.log('Response Received');
        const processResponse = await processRequest(response);
        console.log(processResponse);
    } catch (err){
        console.log(`----> ${err}`)
    }
}
doWork()

//NOTE: 
//  1-remember 'async' you need to wrap your code within a function (no matter what type of function it is)
//  2- if we don't put 'await' always the promise will run and not the result. Therefore , we need to put we need to put 'await' for all async function we need
 