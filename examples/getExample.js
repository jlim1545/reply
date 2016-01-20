var reply = require('./..');

var options = {
	Name: 'legal',
	Nick_Name: 'nick name',
	Age: 'enter your age',
	Hobby: 'enter your hobby',
	School: 'Enter your school'
}

reply.get(options, function(err, answers){
	console.log("\nProfile:");
	console.log(answers);
});
