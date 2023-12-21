// Question 1:
function min(a, b) {
    return (a < b) ? a : b;
}
console.log(min(0, 10));
console.log(min(0, -10));

// Question 2:
function isEven(n) {
    if (n === 0) {
      return true;
    } else if (n === 1) {
      return false;
    } else if (n < 0) {
      return isEven(-n);
    } else {
      return isEven(n - 2);
    }
}
console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));

// Question 3:
function countBs(str) {
  return countChar(str, "B");
}
function countChar(str, char) {
    let count = 0;
    for (let i = 0; i <= str.length-1; i++) {
      if (str[i] === char) {
        count++;
      }
    }
    return count;
}
console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));
