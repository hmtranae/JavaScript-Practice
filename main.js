// Question 1: print all natural numbers from 1 to n
function printInt(n) {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}
printInt(10);

// Question 2: print all natural numbers in reverse from n to 1
function printIntRev(n) {
  for (let i = n; i > 0; i -= 1) {
    console.log(i);
  }
}
printIntRev(10);

// Question 3: return type of x as a string 
function checkInput(x) {
  if (
    typeof x === 'string' ||
    typeof x === 'boolean' ||
    typeof x === 'number'
  ) {
    return typeof x;
  }
  return -1; // if not a string, boolean or number
}
console.log(checkInput('uhh'));
console.log(checkInput(true));
console.log(checkInput(52));
console.log(checkInput({ name: 'Hieu' }));

// Question 4: return sum of all even numbers from 1 to num
function simpleEvenAdding(num) {
  if (num < 2) {
    return 0;
  }
  let sum = 2;
  for (let i = 4; i <= num; i += 2) {
    sum += i;
  }
  return sum;
}
console.log(simpleEvenAdding(10));

// Question 5: capitalizes first letter of each word in str
function letterCapitalize(str) {
  str = str.toLowerCase()
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.substring(1))
    .join(' ');
  return str;
}
console.log(letterCapitalize('hello world'));
console.log(letterCapitalize('you cannot find the answer online'));

// Question 6: return string in reversed order
function simpleReverse(str) {
  return str
    .split('')
    .reverse()
    .join('');
}
console.log(simpleReverse('I love Code'));
console.log(simpleReverse('Who let the dogs out'));

// Question 7: return difference between max and min value in array
function findDiff(arr) {
  if (arr.length === 0) {
    return 'Your array is empty!';
  }
  return Math.max(...arr) - Math.min(...arr);
}
console.log(findDiff([1, 2, 4, 6, 20, 3]));

// Question 8: given paramter, returns number of hours and minutes 
function timeConvert(num) {
  const hour = Math.floor(num / 60);
  const min = num % 60;
  return `${hour.toString()}:${min.toString()}`;
}
console.log(timeConvert(59));
console.log(timeConvert(97));

// Question 9: returns how many str in long
function findStr(str, long) {
  // Window Sliding Algorithm
  let countStrInLong = 0;
  const strLength = str.length;
  for (let i = 0; i <= long.length - strLength; i += 1) {
    // Look up .substring method
    if (long.substring(i, i + strLength) === str) {
      countStrInLong += 1;
    }
  }
  return countStrInLong;
}
console.log(findStr('hi', 'dasdhidasdahihihidashi'));

// Question 10: return array of all possible self dividing numbers given a range
// Function to determine if number is self dividing
function isNumberSelfDividing(num) {
  const digits = num.toString().split('');
  const realDigits = digits.map(Number);
  for (const digit of realDigits) {
    if (num % digit !== 0) {
      return false;
    }
  }
  return true;
}
function selfDividingNumbers(left, right) {
  const isSelfDividingArray = [];
  for (let num = left; num <= right; num += 1) {
    const selfDividingBool = isNumberSelfDividing(num);
    if (selfDividingBool === true) {
      isSelfDividingArray.push(num);
    }
  }
  return isSelfDividingArray;
}
console.log(selfDividingNumbers(1, 22));

// Question 11
function moveZeros(nums) {
  // Starts looking for 0's at the end of array
  let i = nums.length;
  while (i >= 0) {
    if (nums[i] === 0) {
      // Removes the zero at that index and pushes 0 to the end
      nums.splice(i, 1);
      nums.push(0);
    }
    i -= 1;
  }
  return nums;
}
console.log(moveZeros([0, 1, 0, 3, 12]));

// Question 12
function average(arr) {
  let sum = 0;
  if (arr.length === 0) {
    return 0;
  }
  arr.forEach(element => {
    sum += element;
  });
  return sum / arr.length.toFixed(2);
}
console.log(average([7, 1432, 12, 13, 100]));
console.log(average([]));
