// Question 1
function printInt(n) {
  let i = 0;
  while (i <= n) {
    console.log(i);
    i += 1;
  }
}
printInt(100);

// Question 2
function printIntRev(n) {
  for (let i = n; i > 0; i -= 1) {
    console.log(i);
  }
}
printIntRev(100);

// Question 3
function checkInput(x) {
  if (
    typeof x === 'string' ||
    typeof x === 'boolean' ||
    typeof x === 'number'
  ) {
    return typeof x;
  }
  return -1;
}
console.log(checkInput('uhh'));
console.log(checkInput(true));
console.log(checkInput(52));
console.log(checkInput({ name: 'Hieu' }));

// Question 4
function simpleEvenAdding(num) {
  let sum = 2;
  if (num < 2) {
    return 0;
  }
  for (let i = 4; i <= num; i += 1) {
    if (i % 2 === 0) {
      sum += i;
    }
  }
  return sum;
}
console.log(simpleEvenAdding(17));

// Question 5
function letterCapitalize(str) {
  const wordArray = str.split(' ');
  const capitalize = wordArray.map(
    x => x.charAt(0).toUpperCase() + x.substring(1)
  );
  return capitalize.join(' ');
}
console.log(letterCapitalize('hello world'));
console.log(letterCapitalize('you cannot find the answer online'));

// Question 6
function simpleReverse(str) {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i -= 1) {
    reversed += str[i];
  }
  return reversed;
  /*
    Can also use reverse() method for arrays
    return str
    .split('')
    .reverse()
    .join('');
  */
}
console.log(simpleReverse('I love Code'));
console.log(simpleReverse('Who let the dogs out'));

// Question 7
function findDiff(arr) {
  let max = arr[0];
  let min = arr[0];
  arr.forEach(element => {
    if (element > max) {
      max = element;
    } else if (element < min) {
      min = element;
    }
  });
  return max - min;
}
console.log(findDiff([1, 2, 4, 6, 20, 3]));

// Question 8
function timeConvert(num) {
  const hour = Math.floor(num / 60);
  const min = num % 60;
  return `${hour.toString()}:${min.toString()}`;
}
console.log(timeConvert(59));
console.log(timeConvert(97));

// Question 9
function findStr(str, long) {
  // Window Sliding Algorithm
  let countStrInLong = 0;
  const strLength = str.length;
  for (let i = 0; i <= long.length - strLength; i += 1) {
    if (long.substring(i, i + strLength) === str) {
      countStrInLong += 1;
    }
  }
  return countStrInLong;
}
console.log(findStr('hi', 'dasdhidasdahidashi'));

// Question 10
// Function to split number into its digits
function splitNumberIntoDigits(num) {
  const digits = num.toString().split('');
  const realDigits = digits.map(Number);
  return realDigits;
}
// Function to determine if number is self dividing
function isNumberSelfDividing(num) {
  const digitsArray = splitNumberIntoDigits(num);
  for (let digit = 0; digit < digitsArray.length; digit += 1) {
    if (num % digitsArray[digit] !== 0) {
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
  let i = nums.length;
  while (i >= 0) {
    if (nums[i] === 0) {
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
  const numArr = arr.length;
  arr.forEach(element => {
    sum += element;
  });
  return sum / numArr.toFixed(2);
}
console.log(average([7, 1432, 12, 13, 100]));
