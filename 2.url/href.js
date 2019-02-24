const { URL } = require('url');
const myURL = new URL('https://example.org/foo');

console.log(myURL.href)

myURL.href = 'https://example.com/bar#hash';
console.log(myURL.href);
console.log(myURL.toString())