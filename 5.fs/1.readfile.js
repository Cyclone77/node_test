const fs = require('fs')

fs.readFile('./msg.txt', (err, data) => {
    console.log(data)
})