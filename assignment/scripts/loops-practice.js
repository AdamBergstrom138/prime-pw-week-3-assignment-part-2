console.log('****** Loops Practice *******');


// 1. 'for' loop
console.log('---- 1. For loops ----');
// Example: a for loop to console.log numbers from 0 to 3
console.log('count from 0 to 3');
// start i at 0, while i is < 4 do code between {}, afterwards add 1 to i (i++)
for (let i=0; i<4; i++) {  
  console.log(i);
}

// 1.a. TODO: Write a for loop to console.log the numbers from 0 to 5 
//   - Which part of the example loop do you need to change to do this?
console.log('count from 0 to 5');
// You will need to change i<4; to i<6 because we want it to output up to 5.
for (let i=0; i<6; i++) {  
  console.log(i);
}
// 1.b. TODO: Write a for loop to console.log the numbers from 3 to 5
//   - Which part of the example loop do you need to change to do this?
console.log('count from 3 to 5');
// You will need to change the value of i to 3 because we don't want 0, 1, or 2 to output.
for (let i=3; i<6; i++) {  
  console.log(i);
}
// 1.c. TODO: Write a for loop to console.log EVEN numbers from 2 to 10
//   - Which part of the example loop do you need to change to do this?
console.log('count even numbers from 2 to 10 (2, 4, 6, 8, 10):');
// You will need to change the value of i to 2 because we want to start from 2.
// You will need to change i<6 to i<11 because we want to count up to 10 then stop.
// You will also need to change i++ to i=i+2 because we want to increment by 2.
for (let i=2; i<11; i=i+2) {  
  console.log(i);
}
// 1.d. (STRETCH) TODO: Write a for loop to do a countdown from 5 to 0
console.log('STRETCH: countdown from 5 to 0');

for (let i=5; i >= 0; i--) {
  console.log(i);
}
// 2. For of loops  
console.log('---- 2. For Of loop ----');
let stars = ['Polaris', 'Gacrux', 'Formalhaut', 'Rigel', 'Deneb']

// 2.a. TODO: Write a for of loop to console.log each star in the 'stars' array
console.log('Some stars:');
for ( names of stars) {
  console.log(names);
}

// 3. While loops  
console.log('---- 3. While loop ----');

// 3.a. TODO: Write a while loop to console.log each star in the 'stars' array
console.log('Some stars using while:');

let index = 0;
while (index < stars.length) {
  console.log('star: ',stars[index]);
  index++;
}
// 3.b. TODO: Write a while loop to console.log the numbers from 0 to 5
console.log('count from 0 to 5');

let max = 5;
let numbers = 0

while (numbers <= max) {
  console.log(numbers);
  numbers++;
}

// 3.c. TODO: Write a while loop to console.log the numbers from 10 to 5
console.log('count backwards from 10 to 5');
max = 5
numbers = 10

while (numbers >= max) {
  console.log(numbers);
  numbers--;
}
