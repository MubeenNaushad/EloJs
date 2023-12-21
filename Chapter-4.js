// Question 1:
function range(start, end, step = 1) {
  let res = [];
  if (step > 0) {
    for (let i = start; i <= end; i += step) {
      res.push(i);
    }
  } else {
    for (let i = start; i >= end; i += step) {
      res.push(i);
    }
  }
  return res;
}
function sum(nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return sum;
}
// console.log(range(1, 10, 2));
// console.log(range(5, 2, -1));
// console.log(sum(range(1, 10)));

// Question 2:
function reverseArray(arr) {
  let revarr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    revarr.push(arr[i]);
  }
  return revarr;
}
function reverseArrayInPlace(arr) {
  for (let i = 0; i < arr.length / 2; i++) {
    let temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
}
// console.log(reverseArray(["A", "B", "C"]));
// let arrVal = [1, 2, 3, 4, 5];
// reverseArrayInPlace(arrVal);
// console.log(arrVal);

// Question 3:
function arrayToList(arr) {
  let list = null;
  for (let i = arr.length - 1; i >= 0; i--) {
    list = { value: arr[i], rest: list };
  }
  return list;
}
function listToArray(list) {
  let arr = [];
  for (let node = list; node; node = node.rest) {
    arr.push(node.value);
  }
  return arr;
}
function prepend(element, list) {
  return { value: element, rest: list };
}
function nth(list, position) {
  if (!list) return undefined;
  else if (position === 0) {
    return list.value;
  } else {
    return nth(list.rest, position - 1);
  }
}
// console.log(arrayToList([10, 20]));
// console.log(listToArray({ value: 10, rest: { value: 20, rest: { value: 30, rest: null } } }));
// console.log(prepend(10, prepend(20, null)));
// console.log(nth(arrayToList([10, 20, 30]), 1));

// Question 4:
function deepEqual(a, b) {
  if (a === b) return true;

  if (a === null || b === null) return false;

  if (typeof a === 'object' && typeof b === 'object') {
    const keysA = Object.keys(a);
    const keysB = Object.keys(b);

    if (keysA.length !== keysB.length) {
      return false;
    }
    for (let key of keysA) {
      if (!keysB.includes(key) || !deepEqual(a[key], b[key])) {
        return false;
      }
    }
    return true;
  }
  return false;
}
let obj = { here: { is: "an" }, object: 2 };
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, { here: 1, object: 2 }));
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
