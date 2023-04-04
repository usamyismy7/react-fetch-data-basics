console.log("Before Prepare Food");
function prepareFood(data){
    let promise  = new Promise(function (resolve, reject) {
        setTimeout(()=> {
            if(data !== 2)
            {
            console.log("Prepare Food");
            resolve("Food is ready");
            }
            else {
                reject("value not acceptable");
            }
        }, 10);
    });
    return promise;
}
function prepareFrenceToast() {
    let promise = new Promise(function (resolve, reject) {
        setTimeout(()=>{
            console.log("Prepare French Toast");
            resolve("French Toast is ready");   
        }, 20);
    });
    return promise;
}
function prepareCoffee() {
    let promise = new Promise(function (resolve, reject) {
        setTimeout(()=>{
            console.log("Prepare Coffee");
            resolve("Coffee is ready");   
        }, 30);
    });
    return promise;
}

let promise = prepareFood();
promise.then(function (value){
    console.log("Food is Ready callback = ", value);
    return prepareFrenceToast();
})
.then(function (frenchToastValue){
    console.log("French Toast is ready callback = ",frenchToastValue)
    return prepareCoffee();
})
.then(function (coffeeValue){
    console.log("Coffee is Ready callback = ", coffeeValue);
})
.catch(function (error){
    console.log("Error = ",error);
});


console.log("Food will be ready soon, please wait")