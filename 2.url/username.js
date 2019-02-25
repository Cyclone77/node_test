const { URL } = require('url')

const myURL = new URL('https://abc:xyz@example.com');
console.log(myURL.username)

myURL.username = '123'
console.log(myURL.toString())
console.log(myURL.toJSON())