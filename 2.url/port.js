const { URL } = require('url')
const myURL = new URL('https://example.org:8888');
console.log(myURL.port)

myURL.port = '8080'
console.log(myURL.href)

// 默认端口将自动转换为空字符
// (HTTPS协议默认端口是443)
myURL.port = '443';
console.log(myURL.href)

myURL.port = '1234'
console.log(myURL.toString())

// 无效字符串被忽略
myURL.port = 'abcd'
console.log(myURL.toString())

// 开头的数字将会被当做端口数
myURL.port = '5678abc'
console.log(myURL.toString())

// 非整形数字将会被截取部分
myURL.port = '1234.567'
console.log(myURL.toString())

// 超出范围的数字将被忽略
myURL.port = '1e10';
console.log(myURL.toString())