const sql = require('mssql');

const config = {
    user: 'sa',
    password: '',
    server: '192.168.0.138\\sql2000',
    stream: false,

    options: { encrypt: true },
    port: 1433,
    database: 'DZQZ_02_21'
};

sql.connect(config).then(() => {
    return sql.query(`SELECT * FROM A033A001 WHERE B0110 LIKE '008%' AND A0100 NOT IN (SELECT * FROM CN )`)
}).then(result => {
    console.dir(result)
}).catch(err => {
    // ... error checks
});