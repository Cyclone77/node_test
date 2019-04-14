//https://tediousjs.github.io/node-mssql/
//npm install mssql
const sql = require('mssql');

const data = require('./data.json');

const _arr = [];

function _buildDataArray(_res, parent) {
    _res.forEach(item => {
        _arr.push({
            id: item.id,
            text: item.text,
            hasChildren: Number(item.childNodes && item.childNodes.length > 0),
            parent: parent
        })

        if (item.childNodes && item.childNodes.length > 0) {
            _buildDataArray(item.childNodes, item.id);
        }
    });
}

_buildDataArray(data, '.');

const _sqlList = [];

function _buildSQLList() {
    _arr.forEach(item => {
        const _sqltemp = `INSERT INTO Course_Tree$(id, name, hasChildren, parent) VALUES('${item.id}', '${item.text}', '${item.hasChildren}', '${item.parent}')`;
        _sqlList.push(_sqltemp);
    })
}

_buildSQLList();
//console.dir(_sqlList);

const config = {
    user: 'sa',
    password: '119119@@@',
    server: '192.168.0.16',
    database: 'GSHRDBII_377_PXPT_XZ'
};

sql.connect(config).then(() => {
    //return sql.query(_sqlList.join('\n\r'))
    return sql.query(`SELECT TOP 5 * FROM DATA_Person_A01`)
}).then(result => {
    console.dir(result)
}).catch(err => {
    // ... error checks
});

sql.on('error', err => {
    // ... error handler
});