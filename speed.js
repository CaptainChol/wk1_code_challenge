const prompt = require('prompt');
// it calls prompt module
prompt.start();

prompt.get(['speedo'], function (error, checker) 
// uses prompt to get the value of speed 

 {
  // declare variables maxspeedLimit and limitkmPerPoint as constants and assign values 
  const maxSpeedLimit = 70;
  const limitKmPerPoint = 5;

  //throws an error
  if (error) { return onErr(error);
  }

 // gets values entered via prompt 
 //checks if the speed value is less than sum of speedLimit and kmPerPoint

  if (checker.speedo < maxSpeedLimit + limitKmPerPoint) {
    console.log("Ok"); 
    // if the outcome is true it will display message OK on console 
    return;
  }

  const points = Math.floor((checker.speedo - maxSpeedLimit) / limitKmPerPoint);
  //the variable points value is subtractraction of speedlimit from entered speed and divided by kmperPoint  

  // checks if the value of points is more than or equal to 12
  if (points >= 12) {
    console.log("License suspended");
//prints license as suspended
  }
  // otherwise it prints the value of points
  else console.log("Points", points);
});


function onErr(error) {
  console.log(error);
  return 1;
}