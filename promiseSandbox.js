// console.log('Request data...');

// // setTimeout(() => {
// //     console.log('Prepare data...');

// //     const backendData = {
// //         server: 'dbMail',
// //         port: 2000,
// //         status: 'working',
// //     }

// //     setTimeout(() => {
// //         backendData.modified = true;
// //         console.log('Data received', backendData);
// //     }, 2000)
// // }, 2000)

// const p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('Prepare data...');

//         const backendData = {
//             server: 'dbMail',
//             port: 2000,
//             status: 'working',
//         }
//         resolve(backendData);
//     }, 2000);
// });

// p.then((Data) => {
//     console.log('Data received', Data);
//     console.log('Promise resolved');
// })

const sleep = ms => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), ms);
    });
}

sleep(2000).then(() => { console.log('Messaga with 2 sec delay')});
sleep(5000).then(() => { console.log('Message with 5 sec delay')});

// Promise.all([sleep(2000), sleep(5000)]).then(() => {
//     console.log('All promise resolved');
// });

// Promise.race([sleep(2000), sleep(5000)]).then(() => {
//     console.log('Race promises');
// })