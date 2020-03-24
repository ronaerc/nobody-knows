const myPromise = new Promise((resolve, reject) => {
    if(false){
        setTimeout(() => {
            resolve('Success');
        }, 1000);
    }
    else{
        reject('I have failed');
    }
 
})

myPromise
    .then(value => console.log(value + '!!!!'))
    .then
    .catch(rejectValue => console.log(rejectValue)); //error 