const myURL = new URL('https://example.org:81/foo');
console.log(myURL.hostname)
myURL.hostname = 'example.com:82';
console.log(myURL.href)