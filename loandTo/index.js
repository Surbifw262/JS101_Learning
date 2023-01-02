// Problem 1: Given the year of birth, if the age is between 13 and 19 (both included) print Teenage and in between 20 and 29 (both included) print Twenties
let my_birth=1996;
let current_Year=(2023-my_birth);
if(current_Year<=13 && current_Year<=19)
  console.log("Teenage");
else if(current_Year>=20 && current_Year<=29)
  console.log("Twenties");
else
  console.log("Worng input");