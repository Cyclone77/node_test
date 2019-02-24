const { URL } = require('url')
const myURL = new URL('https://abc:xyz@example.com');

console.log(myURL.password)

myURL.password = '123'
console.log(myURL.password)
console.log(myURL.toString())