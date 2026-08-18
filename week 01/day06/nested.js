const names = ["Gokul", "Ramesh", "Suresh"];//nested loop means one loop is placed inside another loop.
for (let i = 0; i < names.length; i++) { //this is outer loop.

    for (let j = 0; j < names.length; j++) {// this is inner loop

        console.log(names[i], names[j]);//o(n2)

    }
}

//if i have more than 3 loops.

for (let i = 0; i < 2; i++) {

    for (let j = 0; j < 2; j++) {

        for (let k = 0; k < 2; k++) {

            for (let l = 0; l < 2; l++) {
                console.log(i, j, k, l);
            }

        }

    }

}//here time complexity is o(n4).