//https://tediousjs.github.io/node-mssql/
//npm install mssql
const sql = require('mssql')

const data = require('./data.json')

data.forEach(item => {

});

const config = {
    user: 'sa',
    password: '119119@@@',
    server: '192.168.0.16',
    database: 'GSHRDBII_377_PXPT_XZ'
}

sql.connect(config).then(() => {
    return sql.query `SELECT TOP 10 * FROM Data_Person_A01`
}).then(result => {
    //console.dir(result)
}).catch(err => {
    // ... error checks
})

sql.on('error', err => {
    // ... error handler
})