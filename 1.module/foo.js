const circle = require('./circle.js');

let _area = circle.area(4);

console.log(`半径为 4 的圆的面积是 ${_area}`);

console.log(circle.circumference(4));

console.dir(exports, require, module, __filename, __dirname);

console.log(exports === module.exports); // true

console.log(require.main === module); // true

console.log(exports === require.main.exports); // true