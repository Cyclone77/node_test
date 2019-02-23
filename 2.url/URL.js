const { URL } = require('url');

const myURL1 = new URL('/foo', 'https://example.org/');
console.log(myURL1);

const myURL2 = new URL({ toString: () => 'https://example.org/' });
console.log(myURL2);

const myURL3 = new URL('https://你好你好');
console.log(myURL3);