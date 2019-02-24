const { URL } = require('url')

const myURL = new URL('https://example.org');
console.log(myURL.protocol)

myURL.protocol = 'ftp'
console.log(myURL.protocol)