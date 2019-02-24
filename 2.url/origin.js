const { URL } = require('url')

const myURL = new URL('https://example.org/foo/bar?baz');
console.log(myURL.origin)

myURL.origin = 'http://你好';
console.log(myURL.toString())