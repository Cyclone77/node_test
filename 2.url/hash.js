const _url = require('url');

console.log(_url.URL === URL); // true

const myURL1 = new URL('https://example.org/foo#bar');
console.log(myURL1.hash);
myURL1.hash = "bzz";
console.log(myURL1.hash);