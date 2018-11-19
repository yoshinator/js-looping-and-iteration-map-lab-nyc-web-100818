// Code your solution in this file.
function lowerCaseDrivers(drivers){
  let newArray = drivers.map(function(driver) {
  return driver.toLowerCase();
  });
  return newArray;
}

function nameToAttributes(drivers){
  return drivers.map(function(driver){ //Taking off the training wheels
    return {firstName: driver.split(" ")[0], lastName: driver.split(" ")[1]}
  });
}


function attributesToPhrase(drivers){
  return drivers.map(function(driver){
    return `${driver.name} is from ${driver.hometown}`
  });
}
