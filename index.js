// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * 
 * A: counter1 has closure because when invoking the variable counter1, counterMaker will return the actual count after it increments.
 *    However, counter2 does not have closure because after calling the function the memory will be lost. The initialization of the counter
 *    variable variable should be local, yet we would invoke the nested function.
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * 
 * A: The counter1 function uses closure with the nested function which would need to be invoked when called.
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better?
 * 
 * A: The counter2 code would be preferable when we want to restart the count to 0, otherwise if we want to actually
 *    keep track of the increment throughout a longer process closure as it is shown in counter1 would be preferable.
 *
*/

// counter1 code
// function with no parameters
function counterMaker() {
  // declare a local counter
  let count = 0;
  // return a function that increments the count variable
  return function counter() {
    count++;
  }
}
// function call with return value stored in counter1 variable
const counter1 = counterMaker();

// counter2 code
// declare a global variable outside function
let count = 0;

// function defn for counter2 function
function counter2() {
  // returns incremented value for count
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(/*Code Here*/){

    /*Code Here*/

}

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(/*code Here*/){

  /*Code Here*/

}

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(2) A number of innings

and returns the score at each pont in the game, like so:

1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam

Final Score: awayTeam - homeTeam */

function scoreboard(/* CODE HERE */) {
  /* CODE HERE */
}


