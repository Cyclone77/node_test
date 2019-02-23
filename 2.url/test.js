const url = require('url');

const myURL1 =
    url.parse('https://user:pass@sub.host.com:8080/p/a/t/h?query=string#hash');

console.log(myURL1.hash);

const myURL3 = new URL('/foo', 'https://example.org/');

const myURL2 =
    new URL('https://user:pass@sub.host.com:8080/p/a/t/h?query=string#hash');

console.log(myURL2.hash);

console.log(delete myURL2.hash); // 删除返回true但没有任何效果
console.log(myURL2.hash);