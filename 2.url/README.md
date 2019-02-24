``` javascript
const _url = require('url')
console.log(_url.URL === URL)  // true

url.href === url.toString()
```

> 默认端口将自动转换为空字符， (HTTPS协议默认端口是443)

> 端口值可以被设置为数字或包含数字的字符串，数字范围0~65535(包括)。