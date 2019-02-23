const { URL } = require('url');

const myURL = new URL('https://example.org:81/foo');

console.log(myURL.host);

myURL.host = 'example.com:82';
console.log(myURL.host);