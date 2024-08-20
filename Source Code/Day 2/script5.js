// Functions

function myGreetFunction() {
  console.log("Hello! How are you!");
}

// To run a function, we have to invoke it

myGreetFunction();

// Passing Arguments To A Function

function registerUser(userName, userAge, userUniversity) {
  console.log(
    `User has been registerd with name ${userName}, age ${userAge} studying in ${userUniversity}`
  );
}

registerUser("Sagnik", 26, "BITS PILANI");

// Default Arguments

function registerUser2(userName, userAge, userUniversity) {
  if (!userName) {
    userName = "BOT";
  }
  if (!userAge) {
    userAge = 18;
  }
  if (!userUniversity) {
    userUniversity = "Central City University";
  }
  console.log(
    `User has been registerd with name ${userName}, age ${userAge} studying in ${userUniversity}`
  );
}

registerUser2();


function registerUser3(userName = "BOT", userAge = 18, userUniversity = 'Central City University')
{
     console.log(
    `User has been registerd with name ${userName}, age ${userAge} studying in ${userUniversity}`
  );
}

registerUser3("Barry Allen", 25, "Keystone City University");
registerUser3();


// Returning Values From Functions

function randomNumberGenerator(min, max)
{
  return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(randomNumberGenerator(1, 7));
