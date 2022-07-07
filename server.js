const express = require('express')
const fs = require('fs')

const app = express()
const FILE_NAME = 'iplist.txt'

function save(ip) {
    fs.readFile(FILE_NAME, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        data += ip + '\n';
        fs.writeFile(FILE_NAME, data, err => {
            if (err) {
                console.error(err);
            }
            // file written successfully
        });
    });
}

app.get('/', (req, res) => {
    let address = req.query.ip
    console.log(address)
    save(address)
    res.sendStatus(200)
})

app.listen(9876)