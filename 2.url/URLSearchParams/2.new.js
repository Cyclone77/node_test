const { URLSearchParams } = require('url');
let params;

params = new URLSearchParams('user=abc&query=xyz');
console.log(params.get('user'));

console.log(params.toString())

params = new URLSearchParams('?user=tt&query=xyz');

console.log(params.toString())

params = new URLSearchParams({
    user: 'ff',
    query: ['first', 'second']
})

console.log(params.getAll('query'))
console.log(params.toString())

params = new URLSearchParams([
    ['user', 'abc'],
    ['query', 'first'],
    ['query', 'second']
])

console.log(params.toString());

const _map = new Map();
_map.set('user', 'abc')
_map.set('query', 'xyz')

params = new URLSearchParams(_map);
console.log(params.toString())

params.forEach((value, name, searchParams) => {
    console.log(name, value);
});
console.log(params.has('user'))