const sleep = ms => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), ms);
    });
}

const url = 'https://jsonplaceholder.typicode.com/todos';
//const url = 'https://jsonplaceholder.typicod4535';

// function fetchTodos() {
//     console.log('Fetch is starting...');
//     return sleep(2000)
//     .then(() => fetch(url))
//     .then(response => response.json())
// }

// fetchTodos()
//     .then(data => {
//         console.log('Data', data);
//     })
//     .catch(error => {
//         console.error (error);
//     })

async function fetchAsyncTodos() {
    console.log('Fetch is starting...');
    try {
        await sleep(2000) 
        const response = await fetch(url)
        const data = await response.json()
        console.log('Data:', data)
    } catch (e) {
        console.error(e);
    } finally {
        console.log('fetchAsynsTodos is completed');
    }
}

fetchAsyncTodos()