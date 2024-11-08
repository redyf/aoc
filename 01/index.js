import * as fs from "fs";

function part1() {
  const file = fs.readFileSync("./input.txt", "utf-8");
  let sum = 0;
  const total = file.split("\n").flatMap((line) => {
    const first = line.match(/\d/);
    const last = line.split("").reverse().join("").match(/\d/);
    const res = Number(first + last);
    sum += res;
    console.log(sum);
  });
}

part1();

function part2() {
  const input = fs.readFileSync("./input.txt", "utf-8");
  const lines = input.trim().split("\n");
  let sum = 0;

  // Define a regex pattern that matches either a digit or a spelled-out number
  const pattern = /(?=(\d|one|two|three|four|five|six|seven|eight|nine))/g;

  const wordToDigit = {
    one: "1",
    two: "2",
    three: "3",
    four: "4",
    five: "5",
    six: "6",
    seven: "7",
    eight: "8",
    nine: "9",
  };

  for (const line of lines) {
    // Find all matches in the line
    const matches = [...line.matchAll(pattern)].map((match) => {
      // Convert word to digit if it's a word, otherwise use the digit
      return wordToDigit[match[1]] || match[1];
    });

    if (matches.length > 0) {
      // Combine first and last digit
      const value = Number(matches[0] + matches[matches.length - 1]);
      sum += value;
    }
  }

  return sum;
}

console.log(part2());
