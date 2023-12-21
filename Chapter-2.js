// Question 1:
for (let tri = '#'; tri.length <= 7; tri+='#') console.log(tri)

// Question 2:
for (let num = 1; num <= 100; num++) {
  let out = "";
  if (num % 3 === 0) out += `Fizz`;
  if (num % 5 === 0) out += `Buzz`;
  console.log(out.length !== 0 ? out : num);
}

// Question 3:
let size = 8;
let board = "";

for (let r = 0; r < size; r++) {
  for (let c = 0; c < size; c++) {
    if ((r+c) % 2 === 0) board += " ";
    else board += "#";
  }
  board += "\n";
}
console.log(board);
