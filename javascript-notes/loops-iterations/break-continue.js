// Breaks & Continue   
//todo BREAK - brakes off the loop completely
for (let i = 0; i <= 20; i++) {
    if (i === 10) {
        console.log('Broke off');
        break;
    }
    console.log(i)
}

// todo CONTINUE - similar to break, however it will just skip the statement and continue with the rest. 
for (let i = 0; i <= 20; i++) {
    if (i === 13) {
        console.log('Skipping 13...');
        continue;
    }
    console.log(i)
}
