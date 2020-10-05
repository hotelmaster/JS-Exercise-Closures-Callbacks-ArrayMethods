/* ### Task 3 - Stretch Goals

After you have completed the requirements, **create** a new file called `stretch.js` and practice more with closures. There are no tests for these problems.

See if you can complete one or more of the following challenges:

1. Predict the output of the code below and explain why this is the output using what you learned today. When you're ready for answers, view an explanation [here](https://www.coderbyte.com/algorithm/3-common-javascript-closure-questions

```js
(function(){
  var a = b = 3;})();

  console.log("a defined? " + (typeof a !== 'undefined'));
console.log("b defined? " + (typeof b !== 'undefined'));
```

A: a and b are local to the immediately invoked function, and are not returned. The console log statements will not have access to a and b, so
    the string will concatenate with a boolean of false for both.

2. Write a function that would allow you to do this using a closure. (This is another interview question we've seen before - when you're ready for answers, view an explanation [here](https://www.coderbyte.com/algorithm/3-common-javascript-closure-questions)).

```js

// declare createBase function to accept a number parameter
function createBase(num) {
    // return anonymous function
    // which will need to be invoked to run
    return function() {return num + 6};
}

var addSix = createBase(6);

// now addSix will be invoked and require an argument to add 6 to
// 10 + 6
addSix(10); // returns 16
// 21 + 6
addSix(21); // returns 27
```

3. Research the differences between functional programming and object oriented programming. Then, describe the pros and cons of 
    functional programming vs object-oriented programming. This is a common interview question and great practice!

A: 


*/