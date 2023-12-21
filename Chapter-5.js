// Question 1:
let arrays = [[1, 2, 3], [4, 5], [6]];
let flattenedarr = arrays.reduce((acc, current) => acc.concat(current), []);
console.log(flattenedarr);

// Question 2:
function loop(value, test, update, body) {
  while (test(value)) {
    body(value);
    value = update(value);
  }
}
loop(3, n => n > 0, n => n - 1, console.log);

// Question 3:
// Using a loop
function everyWloop(arr, test) {
  for (let i = 0; i < arr.length; i++) {
    if (!test(arr[i])) return false;
  }
  return true;
}
// Using the some method
function everySome(arr, test) {
  return !arr.some(element => !test(element));
}
console.log(everyWloop([1, 3, 5], n => n < 10));
console.log(everyWloop([2, 4, 16], n => n < 10));
console.log(everyWloop([], n => n < 10));

console.log(everySome([1, 3, 5], n => n < 10));
console.log(everySome([2, 4, 16], n => n < 10));
console.log(everySome([], n => n < 10));

// Question 4:
const SCRIPTS = require('./scripts.js'); 
function characterScript(code) {
  for (let script of SCRIPTS) {
    if (script.ranges.some(([from, to]) => {
      return code >= from && code < to;
    })) {
      return script;
    }
  }
  return null;
}
function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.findIndex(c => c.name == name);
    if (known == -1) {
      counts.push({name, count: 1});
    } else {
      counts[known].count++;
    }
  }
  return counts;
}
function dominantDirection(text) {
  let scripts = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.direction : 'none';
  }).filter(({ name }) => name !== 'none');

  let dominantScript = scripts.reduce((a, b) => (a.count > b.count ? a : b), {});

  return dominantScript.name;
}
console.log(dominantDirection("Hello!"));
console.log(dominantDirection("Hey, مساء الخير"));
