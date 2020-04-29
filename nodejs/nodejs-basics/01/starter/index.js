const fs = require('fs');
const superagent = require('superagent');

const readFilePromise = file => {
    return new Promise((resolve, reject) => {
        fs.readFile(file, (err, data) => {
            if (err) reject('Could not find file 🙁')
            resolve(data)
        })
    });
}

const writeFilePromise = (file, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(file, data, err => {
            if (err) return reject('Cannot be written 🙁')
            resolve('Suceessly written!')
        })
    });
}

readFilePromise(`${__dirname}/dog.txt`).then(data => {

    console.log(`Breed: ${data}`)
    superagent
        .get(`https://dog.ceo/api/breed/${data}/images/random`)
        .then(res => {
            console.log(res.body.message)

            writeFilePromise(`${__dirname}/save.txt`, res.body.message)
                .then(res => console.log(res))
                .catch(err => console.log(err.message))
        })
        .catch(err => {
            console.log(err.message);
        })
}).catch(err => console.log(err))

