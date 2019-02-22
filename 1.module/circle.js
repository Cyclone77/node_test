const { PI } = Math;

exports.area = (r) => PI * r ** 2;

exports.circumference = (r) => 2 * PI * r;

console.log('是否运行circle.js', require.main === module); // true