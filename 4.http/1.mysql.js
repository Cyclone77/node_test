const mysql = require('mysql')
const data = require('./data.json')

const connection = mysql.createConnection({
    host: '192.168.0.66',
    user: 'glsoft',
    password: 'Glsoft@2018',
    database: 'EOMS'
})

connection.connect();

connection.query('SELECT * FROM M00040_SM_CODE_AQ', function(error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results);
});