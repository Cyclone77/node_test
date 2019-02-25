const { URL, URLSerchParams } = require('url');

const myURL = new URL('https://example.org/?abc=123');
console.log(myURL.searchParams.get('abc'))

myURL.searchParams.append('name', 'jorry')
console.log(myURL.toString())

myURL.searchParams.delete('abc')
console.log(myURL.toString())

myURL.searchParams.set('name', 'hair')
console.log(myURL.href)


const newSearchParams = new URLSearchParams(myURL.search)

newSearchParams.append('abc', '123');
console.log(myURL.href) //并没有变化
console.log(newSearchParams.toString())
myURL.search = newSearchParams
console.log(myURL.href)

newSearchParams.delete('name')
console.log(myURL.href)