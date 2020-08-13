setTimeout(() => {
    console.log('Executing callback...')
    
    setTimeout(() => {
        console.log('Executing callback in callback...')
    }, 2000);
}, 2000);

// with promise...
function await(time = 2000) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Executing promise...')
        }, time);
    })
} 

await(3000).then(console.log) // Executing promise...
