const { URL, URLSearchParams } = require('url')
const myURL = new URL('https://example.org/abc?123');

console.log(myURL.search)

myURL.search = 'abc=123'
console.log(myURL.search)
console.log(myURL.searchParams.get('abc')) //123