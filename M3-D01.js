/* 1. Create a function to calculate the sum of the two given integers. If the two values are the same, return triple their sum. */
const sumOrTriple = function (a, b) {
  if (a === b) {
    return (a + b) * 3
  } else {
    return a + b
  }
}

console.log(sumOrTriple(2, 3))
console.log(sumOrTriple(2, 2))

/* 2. Create a function to check two given integers. Return `true` if one of them is 50 or if their sum is 50. */
const isFifty = function (a, b) {
  return a == 50 || b == 50 || a + b == 50
}

console.log(isFifty(50, 20))
console.log(isFifty(10, 50))
console.log(isFifty(20, 30))
console.log(isFifty(10, 20))

/* 3. Create a function to remove a character at a specified position from a given string: pass the position and the string as parameters, return the new string. */
const removeChar = function (str, position) {
  return str.slice(0, position) + str.slice(position + 1)
}

console.log(removeChar("Strive", 2))

/* 4. Create a function to find and return the largest of three given integers. */
const maxNumber = function (a, b, c) {
  return Math.max(a, b, c)
}

console.log(maxNumber(5, 9, 8))

/* 5. Create a function to check if two numbers are in the range 40-60 or 70-100. 
    Return `true` if they do, return `false` if one (or both) don't. */

const inRange = function (a, b) {
  return (
    (a >= 40 && a <= 60 && b >= 70 && b <= 100) ||
    (b >= 40 && b <= 60 && a >= 70 && a <= 100)
  )
}

console.log(inRange(40, 100))
console.log(inRange(90, 50))
console.log(inRange(39, 60))
console.log(inRange(39, 101))

/* 6. Create a function to create a new string composed of a specified number of copies of a given string. 
    Pass the string and the number of copies as parameters. */

const copies = function (str, nbrOfCopies) {
  let result = ""
  for (let i = 0; i < nbrOfCopies; i++) {
    result += str
  }
  return result
}

console.log(copies("Strive", 6))

/* 7. Create a function to display the city name if the string begins with "Los" or "New". 
    Pass the city name as a parameter. Return `false` if they start with a different string. */

const isLosNew = function (city) {
  return city.startsWith("Los") || city.startsWith("New")
}

console.log(isLosNew("Los Angeles"))
console.log(isLosNew("New York"))
console.log(isLosNew("York New"))
console.log(isLosNew("StriveVille"))
/* 8. Create a function to calculate and return the sum of all elements from an array with 3 elements. 
    Pass the array as a parameter. */

const sumArray = function (arr) {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  return sum
}

console.log(sumArray([4, 8, 9]))

/* 9. Create a function to test if an array of lenght 2 contains 1 OR 3. 
    Return `true` is it does, `false` if it doesn't. */
const oneOrThree = function (arr) {
  return arr[0] == 1 || arr[0] == 3 || arr[1] == 1 || arr[1] == 3
}

console.log(oneOrThree([1, 5]))
console.log(oneOrThree([5, 3]))
console.log(oneOrThree([5, 1]))
console.log(oneOrThree([5, 6]))

/* 10. Create a function to test if an array of lenght 2 DOES NOT contain 1 or 3. 
    Return `true` if it doesn't, `false` if it does. */

const notOneOrThree = function (arr) {
  return arr[0] != 1 && arr[0] != 3 && arr[1] != 1 && arr[1] != 3
}
console.log(notOneOrThree([1, 5]))
console.log(notOneOrThree([5, 3]))
console.log(notOneOrThree([5, 1]))
console.log(notOneOrThree([5, 6]))

/* 11. Create a function to find the longest string from a given array of strings. 
    Pass the array as parameter and return the longest string. */

const longestString = function (arr) {
  let longest = arr[0]
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].length > longest.length) {
      longest = arr[i]
    }
  }
  return longest
}

console.log(longestString(["Strive", "May", "2021", "xxxxxxxxxx", "yyyy"]))

/* 12. Create a function to find the types of a given angle:
  1. Acute angle ⇒ between 0 and 90 degrees. Return `acute`.
    2. Right angle ⇒ 90 degree. Return `right`
    3. Obtuse angle ⇒ between 90 and 180. Return `obtuse`
    4. Straight angle ⇒ 180 degrees. Return `straight`

    Pass the angle as a parameter.


*/
const angleType = function (angle) {
  if (angle >= 0 && angle < 90) {
    return "acute"
  }
  if (angle == 90) {
    return "right"
  }
  if (angle > 90 && angle < 180) {
    return "obtuse"
  }
  if (angle == 180) {
    return "straight"
  }
  return ""
}

console.log(angleType(12))
console.log(angleType(90))
console.log(angleType(91))
console.log(angleType(180))
console.log(angleType(500))

/* 13. Create a function to find and return the index of the greatest element of a given array of integers that you passed as a parameter. */
const indexOfMax = function (arr) {
  let max = arr[0]
  let index = 0
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]
      index = i
    }
  }
  return index
}

console.log(indexOfMax([12, 900, 2018]))

/* 14. Create a function to find and return the largest **even** number from an array of integers that is passed a parameter. */
const largestEven = function (arr) {
  let evenMax = -Infinity
  for (let i = 0; i < arr.length; i++) {
    let currentNumber = arr[i]
    if (currentNumber % 2 === 0 && currentNumber > evenMax) {
      evenMax = currentNumber
    }
  }
  return evenMax
}

console.log(largestEven([10, 12, 1, 6, 15, 21]))

/* 15. Create a function to check from two given integers (passed as parameters) if one is positive and the other is negative. 
    Return `true` if that's the case, return `false` if it's not. */

const positiveNegative = function (a, b) {
  return a * b < 0
}

console.log(positiveNegative(2, 3))
console.log(positiveNegative(-2, -3))
console.log(positiveNegative(2, -3))
console.log(positiveNegative(-2, 3))

/* 16. Create a function to create and return a new string where the first 3 characters and in lower case and the others are in upper case. 
    If the string's length is less than 3, convert the whole string into uppercase. Pass the original string as a parameter. */

const lowerUpper = function (str) {
  if (str.length < 3) {
    return str.toUpperCase()
  }
  return str.slice(0, 3).toLowerCase() + str.slice(3).toUpperCase()
}

console.log(lowerUpper("ab"))
console.log(lowerUpper("MAYStrive"))

/* 17. Create a function to calculate the sum of two integers (passed as parameters). 
    If the sum is in the 50-80 range, return `65`, otherwise, return `80`. */

const sumRange = function (a, b) {
  let sum = a + b
  if (sum >= 50 && sum <= 80) {
    return 65
  }
  return 80
}

console.log(sumRange(2, 100))
console.log(sumRange(2, 48))

/* 18. Create a function to convert a number (passed as a parameter) into a string, basing yourself on this example: 
    The number has 3 as a factor ⇒ return `Diego`
    The number has 5 as a factor ⇒ return `Riccardo`
    The number has 7 as a factor ⇒ return `Stefano`
    If the number does not have 3,5, or 7, return the original number. 
    ⚠️ The factor is an integer which evenly divides a number without leaving a remainder. One number can have more than one factor, in that case you should return both names. 
Ex. 15 has both 3 and 5 has factors: the function will return `DiegoRiccardo` */

const factors = function (n) {
  let result = ""
  if (n % 3 === 0) {
    result += "Diego"
  }
  if (n % 5 === 0) {
    result += "Ricardo"
  }
  if (n % 7 === 0) {
    result += "Stefano"
  }

  if (result.length === 0) {
    return n
  }

  return result
}

console.log(factors(21))
console.log(factors(23))
console.log(factors(15))
console.log(factors(6))

/* 19. Create a function that that takes a phrase as a parameter and returns its acronym.
Ex. British Broadcasting Corporation returns `BBC` */

const acronym = function (str) {
  let result = ""
  let wordsArr = str.split(" ")
  for (let word of wordsArr) {
    result += word[0].toUpperCase()
  }

  return result
}
console.log(acronym("hello i am the best"))
