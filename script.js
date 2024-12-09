var data = [
  "Alice, 1990",
  "Bob, 1985",
  "Charlie, 1992",
  "Diana, 1988",
  "Eve, 1995",
  "Frank, 1987",
  "Grace, 1993",
  "Hank, 1991",
  "Ivy, 1989",
  "Jack, 1994",
  "Kate, 1996",
  "Leo, 1986",
  "Mia, 1997",
  "Nina, 1984",
  "Oscar, 1983",
];

const sortByBirth = (data) => {
  let result = [...data];
  result.sort((a, b) => +a.split(",")[1] - b.split(",")[1]);
  return result;
};

const countEvenAndOdds = (array) => {
  let evens = 0;
  let odds = 0;
  array.map((elem) => {
    if (elem % 2) {
      odds++;
    } else {
      evens++;
    }
  });
  return [evens, odds];
};

console.log(sortByBirth(data));

let arr = [12, 5, 17, 39, 40, 64, 75];
const [evenNum, oddNum] = countEvenAndOdds(arr);
console.log(arr);
console.log(
  `Number of even numbers: ${evenNum}\nNumber of odd numbers: ${oddNum}`
);
