var reply = require('./../');

reply.confirm('Are you 18 and older?', function(err, yes){
  var answer = "";
  if (!err && yes)
    answer = "You are ready to enter the world of adult!"
  else
    answer = "Come back when you get older";

	console.log(answer);
});
