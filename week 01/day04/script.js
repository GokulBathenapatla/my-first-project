const userList = document.getElementById("userList");
const loading = document.getElementById("loading");
const error = document.getElementById("error");

async function getUsers() {

    try {

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
            throw new Error("Failed to fetch users");
        }

        const users = await response.json();

        loading.style.display = "none";

        const names = [
            "Gokul",
            "Ramesh",
            "Suresh",
            "Ravi",
            "Dhoni",
            "Arun",
            "Karthik",
            "Vijay",
            "Prakash",
            "Rahul"
        ];

        users.forEach((user, index) => {

            const userCard = document.createElement("div");

            userCard.innerHTML = `
                <h2>${names[index]}</h2>
                <p>Email: ${user.email}</p>
                <p>Phone: ${user.phone}</p>
            `;

            userList.appendChild(userCard);

        });

    } catch (err) {

        loading.style.display = "none";

        error.textContent = "Error: " + err.message;

    }

}

getUsers();