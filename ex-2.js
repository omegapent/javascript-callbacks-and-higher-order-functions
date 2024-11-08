//Exercise #2: At Least Five Function

function atLeastFive(array, operation) {
  // Start coding here
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (operation(array[i])) {
      count++;
    }
  }
  return count >= 5;
};

function condition(score) {
  return score > 70;
};

const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

// Using `atLeastFive` function here
let scoreRoom1Result = atLeastFive(studentScoresRoom1, condition);
console.log(scoreRoom1Result) //true
let scoreRoom2Result = atLeastFive(studentScoresRoom2, condition);
console.log(scoreRoom2Result) //false
let scoreRoom3Result = atLeastFive(studentScoresRoom3, condition);
console.log(scoreRoom3Result) //false
