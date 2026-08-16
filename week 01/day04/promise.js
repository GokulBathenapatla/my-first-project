//promise it has three states one is pending
// fullfilled - completed
//failure - rejected.


//const myPromise = new Promise((resolve, reject) => {

  //  let success = true;
   // console.log(success);

    //if (success) {
     //   resolve("Task completed");
    //} else {
      //  reject("Task failed");
    //}

//});

const myPromise = new Promise((resolve, reject) => {

    let success = true;// in js boolean values should be always in lowercase only.

    if (success) {
        resolve("Task completed");
    } else {
        reject("Task failed");
    }

});

myPromise
    .then((result) => {//in above reslove that value stored in this result
        //.if promise gets success we will use .then
        console.log(result);
    })
    .catch((error) => {
        //if promise gets failed  we will use catch.
        console.log(error);
    });
