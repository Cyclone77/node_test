const { URL } = require('url');
const myURLs = [
    new URL('https://www.example.com'),
    new URL('https://test.example.org')
];
console.log(JSON.stringify(myURLs));