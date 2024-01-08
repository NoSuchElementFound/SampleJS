let promise=new Promise(function (resolve,reject){
    if(1>0){
        resolve('promise kept')
    }
    else {reject("promise broke")}
});    //producer code

promise.then(function (value){
    console.log(value)
},function (reason){
    console.log(reason)
});     //consumer code


//----------------------------------------------------------------------------------------

function resolvePromiseAfterDelay(delay)
{
    let promise=new Promise(function (resolve, reject){
        setTimeout(function (){
            resolve(`Promise is being resolved after ${delay} milliseconds`)
    },delay)});
    return promise
}

async function asyncFunction() {
    console.log("Start")
    const result = await resolvePromiseAfterDelay(4000)
    console.log("End")

}
asyncFunction();

