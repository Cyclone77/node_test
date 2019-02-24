const { URL } = require('url')

const myURL = new URL('https://example.org/abc/xyz?123');
console.log(myURL.pathname)

myURL.pathname = 'abcdef'
console.log(myURL.toString())