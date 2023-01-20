// 2.1 Convierte la siguiente promesa para esperar a ejecutar el console usando async-await.
// const runTimeOut = () => {
//     const promise = new Promise((resolve) => {
//         setTimeout(function () {
//             resolve();
//         }, 2000);
//     })

//     promise.then(() => {console.log('Time out!')})
// };

// runTimeOut();

const promise = new Promise((resolve) => {
    setTimeout(function () {
        resolve();
    }, 2000);
});

async function runTimeOut() {
await promise;
console.log('Time out!')
}

runTimeOut();

