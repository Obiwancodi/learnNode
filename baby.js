var array = process.argv
array.shift();
array.shift();
var sum = 0

for (var i = 0; i < array.length; i++) {

	sum += parseInt(array[i],10)
	//console.log(array[i]);
}	

console.log(sum);