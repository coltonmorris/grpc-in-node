var PROTO_PATH = "";
var fs = require("fs");


var p1 = new Promise(function(resolve, reject){
	fs.readFile("hello.txt", function (err, data){
		if (err) {
			reject(err);
		}
		else {
			resolve(data.toString());
		}	
	});
}).then(function(data,err){
	console.log("in first then:");
	console.log(data);
	console.log(err);
})
.catch(function(err){
	console.log("in catch:");
	console.log(err);
});

var promise1 = Promise.resolve(42);
var p2 = promise1.then(
	function (val){
		console.log(val);
	});	
