async function getUsers() {

    try {

        const response = await fetch("https://dummyjson.com/users");

        const data = await response.json();

        const names = [
            "Gokul",
            "Ramesh",
            "Suresh",
            "Ravi",
            "Dhoni"
        ];

        names.forEach((name) => {
            console.log(name);
        });

    } catch (error) {

        console.log("Something went wrong:", error.message);

    }

}

getUsers();