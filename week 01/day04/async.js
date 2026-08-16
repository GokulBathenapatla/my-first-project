//async is a function it will work with promisses.

async function hello() {
    console.log("Hello");
}

hello();

// await means i needs to finish the promises.

//async → before the function
//await → before the Promise

function checkLogin() {

    return new Promise((resolve, reject) => {

        let loggedIn = false;

        if (loggedIn) {
            resolve("Login successful");
        } else {
            reject("Login failed");
        }

    });

}

async function login() {

    try {

        const result = await checkLogin();

        console.log(result);

    } catch (error) {

        console.log(error);

    }

}

login();
//result recives the value from reslove