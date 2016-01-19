var options = {
	Name: 'legal',
	Nick_Name: 'nick name',
	Age: 'enter your age'
}

var reply = require('./..');

reply.get(options, function(err, answers){
	console.log("\nProfile:");
	console.log(answers);
});
