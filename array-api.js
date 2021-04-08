'use strict';

// Q1. make a string out of an array
{
  const fruits = ['apple', 'banana', 'orange'];
  console.log(fruits.join());
}

// Q2. make an array out of a string
{
  const fruits = '🍎, 🥝, 🍌, 🍒';
  const array = fruits.split(',');
  console.log(array);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  const rArray = array.reverse();
  console.log(rArray);
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  const nArray = array.slice(2);
  console.log(nArray);
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
  console.clear();
  let student = students.filter(Student => Student.score >=90);
  for(let i = 0; i < student.length; i++){
    console.log(`Smart student name : ${student[i].name}`);
  }
}

// Q6. make an array of enrolled students
{
  const nArray = students.filter(Student => Student.enrolled === true);
  for(let i = 0; i < nArray.length; i++){
    console.log(`Enrolled student name : ${nArray[i].name}`);
  }
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  let nArray = [];
  for(let i = 0; i < students.length; i++){
    nArray.push(students[i].score);
  }
  console.log(nArray);
}

// Q8. check if there is a student with the score lower than 50
{
  let student = students.filter(Student => Student.score <=50);
  for(let i = 0; i < student.length; i++){
    console.log(`Stupid student name : ${student[i].name}`);
  }
}

// Q9. compute students' average score
{
  let sum = 0;
  for(let i = 0; i < students.length; i++){
    sum += students[i].score;
  }
  console.log(`Average score : ${sum/students.length}`);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  let nArray = [];
  for(let i = 0; i < students.length; i++){
    nArray.push(students[i].score);
  }
  console.log(nArray.join());
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  let nArray = [];
  for(let i = 0; i < students.length; i++){
    nArray.push(students[i].score);
  }
  nArray.sort();
  console.log(nArray.join());
}
