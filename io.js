var fs = require('fs');
var buff = new Buffer(fs.readFileSync(process.argv[2]));
var str = buff.toString();

var array = str.split('\n');
console.log(array.length - 1);