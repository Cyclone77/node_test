const _querystring = require('querystring');

let _str = _querystring.escape('你好吗')
console.log(_str)

console.log(_querystring.unescape(_str))

let _json = {
    foo: 'bar',
    abc: ['xyz', '123']
};
console.log(_querystring.stringify(_json))

console.log(_querystring.parse(_querystring.stringify(_json)))