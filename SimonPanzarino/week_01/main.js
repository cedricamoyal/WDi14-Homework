'use strict';

// The Calculator
// Part 1
//
// Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."

var squareNumber = function (num) {
  var answer = num * num;
  console.log("The result of squaring the number " + num + " is " + answer);
  return answer;
}

squareNumber(9);


// Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".

var halfNumber = function (num) {
  var answer = num / 2;
  console.log("Half of " + num + " is " + answer);
  return answer;
}

halfNumber(10);


// Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."

var percentOf = function (numOne, numTwo) {
  var answer = numOne / numTwo * 100;
  console.log(numOne + " is " + answer + "% of " + numTwo);
  return answer;
}

percentOf(2, 10);


// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
// Bonus: Round the result so there are only two digits after the decimal.

var areaOfCircle = function (radius) {
  var area = Math.PI * radius * radius;
  var toTwoDecimal = area.toFixed(2);
  console.log("The area for a circle with a radius of " + 2 + " is " + toTwoDecimal)
  return toTwoDecimal;
}

areaOfCircle(5);


// Part 2
//
// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
//
// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).

var doItAll = function (num) {
  var halfYourNumber = halfNumber(num);
  var squareIt = squareNumber(halfYourNumber);
  var areaOfYourCircle = areaOfCircle(squareIt);
  var percentage = percentOf(squareIt, areaOfYourCircle);

  console.log(percentage);
  return percentage;
}

doItAll(10);


// Strings
// These exercises will test your knowledge of string functions, conditionals, and arrays. For many of them, you will want to consult the JavaScript strings reference to find useful string methods to call.
//
// DrEvil
//
// Create a function called DrEvil. It should take a single argument, an amount, and return ' dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example:
//
//   DrEvil(10): 10 dollars
//   DrEvil(1000000): 1000000 dollars (pinky)

var drEvil = function (amount) {
  if (amount === 1000000) {
    var dollars = amount + " dollars (pinky)";
    console.log(dollars);
    return dollars
  } else {
    var dollars = amount + " dollars";
    console.log(dollars);
    return dollars;
  }
}

drEvil(10);
drEvil(1000000);


// MixUp
//
// Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:
//
//   mixUp('mix', pod'): 'pox mid'
//   mixUp('dog', 'dinner'): 'dig donner'
// Look up the JavaScript string reference to find methods which may be useful!

var mixUp = function (stringOne, stringTwo) {
  var changeOne = stringTwo[0] + stringOne.slice(1, stringOne.length);
  var changeTwo = stringOne[0] + stringTwo.slice(1, stringTwo.length);
  console.log(changeOne);
  console.log(changeTwo);
}

mixUp("Twelve", "Six");


// FixStart
//
// Create a function called fixStart. It should take a single argument, a string, and return a version where all occurences of its first character have been replaced with '*', except for the first character itself. You can assume that the string is at least one character long. For example:
//
// fixStart('babble'): 'ba**le'

var fixStart = function (word) {
  var firstLetter = word[0];
  var newWord = firstLetter;
  console.log(firstLetter);
  for (var i = 1; i <= word.length - 1; i++) {
    if (word[i] != firstLetter) {
      newWord += word[i];
    } else {
      newWord += "*";
    }
  }
  console.log(newWord);
}

fixStart("simpsons");


// Verbing
//
// Create a function called verbing. It should take a single argument, a string. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged. For example:
//
//   verbing('swim'): 'swimming'
//   verbing('swimming'): 'swimmingly'
//   verbing('go'): 'go'

var verbing = function(word) {
  if (word.length >= 3) {
    if (word.slice(word.length - 3, word.length - 0) !== "ing") {
      var newWord = word + "ing";
      console.log(newWord);
    } else if (word.slice(word.length - 3, word.length - 0) === "ing") {
      var newWord = word + "ly";
      console.log(newWord);
    }
  } else {
    console.log(word);
  }
}


verbing("swimming");


// Not Bad
//
// Create a function called notBad that takes a single argument, a string.
//
// It should find the first appearance of the substring 'not' and 'bad'.
// If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
// If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.
// For example:
//
//   notBad('This dinner is not that bad!'): 'This dinner is good!'
//   notBad('This movie is not so bad!'): 'This movie is good!'
//   notBad('This dinner is bad!'): 'This dinner is bad!'

var notBad = function (sentence) {
  if (sentence.indexOf("not") >= 0 && sentence.indexOf("not") < sentence.indexOf("bad")) {
    var newSentence = sentence.slice(sentence.charAt(0), sentence.indexOf("not")) + "good!";
    console.log(newSentence);
    return newSentence;
  } else {
    console.log(sentence);
    return sentence;
  }
}

notBad("This dinner is bad!");
