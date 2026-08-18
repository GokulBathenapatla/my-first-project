for (let i = 0; i < n; i++) {
    console.log(i);
}// here we have only loop that's why the time complexity is o(n)

//Two loops one after another
for (let i = 0; i < n; i++) {
}

for (let i = 0; i < n; i++) {
}// here also time complexity is o(n)

//Loop inside another loop

for (let i = 0; i < n; i++) {

    for (let j = 0; j < n; j++) {

    }
}// here the time complexity is o(n2).