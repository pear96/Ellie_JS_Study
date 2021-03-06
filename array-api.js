'use strict';

// Q1. make a string out of an array
{
  const fruits = ['apple', 'banana', 'orange'];
  console.log(fruits.join());
  //Ellie's
  const result = fruits.join(' and ');
  console.log(result);
}

// Q2. make an array out of a string
{
  const fruits = '๐, ๐ฅ, ๐, ๐';
  const array = fruits.split(','); // ๊ตฌ๋ถ์๋ฅผ ๋ฃ์ง ์์ผ๋ฉด string ํต์งธ๋ก ๋ค์ด๊ฐ
  console.log(array);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  const rArray = array.reverse();
  console.log(rArray);
  console.log(array); // original๋ ๋ฐ๋
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  const nArray = array.slice(2); //end๋ ๋น ์ง. 2,5๋ฉด 2,3,4๋ง ์ ๋ฌ๋จ~! original์ ๊ทธ๋๋ก!
  console.log(nArray);
  //splice๋ original array๊ฐ ์ง์ ๋ ์์๊ฐ ์์ด์ง๋ฉด์ ๋ฐ๋. ์ง๋ฌธ ์กฐ๊ฑด์ ๋ง์ง ์์.
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
  let student = students.filter(Student => Student.score >=90);
  for(let i = 0; i < student.length; i++){
    console.log(`Smart student name : ${student[i].name}`);
  }
  //Ellie's
  const result = students.find((student)=> student.score === 90);
  console.log(result);

  //find๋ ํ๋๋ง ๋ฐํํด์ object๋ก ์ถ๋ ฅ์ด ๋๋๊ฑฐ๊ณ 
  //fillter๋ ํด๋นํ๋ ๋ชจ๋  ์์๋ฅผ array์ ์ ์ฅํด์ ๋ฐํํ๊ธฐ ๋๋ฌธ์
  //Array์ ์์๋ก ๋ฐํ๋๋ ๊ฒ์ด๋ค.
}

// A5. find a student with the score 90
{
  const result = students.filter((student) => student.score ===90);
  console.log(result);
}

// Q6. make an array of enrolled students
{
  const nArray = students.filter(Student => Student.enrolled === true);
  for(let i = 0; i < nArray.length; i++){
    console.log(`Enrolled student name : ${nArray[i].name}`);
  }
}
// A6. make an array of enrolled students
{
  const result = students.filter((student)=> student.enrolled); //True๊ฐ ํ์ํ๋๊น!
  console.log(result);
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

// Ellie - A7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  const result = students.map((student)=>student.score*2); //๋ง์ฝ 2๋ฐฐ๋ก ํ๊ณ ์ถ๋ค๋ฉด
  console.log(result);
}

// Q8. check if there is a student with the score lower than 50
{
  let student = students.filter(Student => Student.score <=50);
  for(let i = 0; i < student.length; i++){
    console.log(`Stupid student name : ${student[i].name}`);
  }
}

// Ellie - A8. check if there is a student with the score lower than 50
{
  const result = students.some((student)=>student.score<50);
  console.log(result); //๋ฐํ๊ฐ์ True or False 

  const result2 = !students.every((student)=>student.score>=50);
  // ๊ฐ์ ๊ฐ์ every๋ฅผ ์จ์ ๋ํ๋ด๊ณ  ์ถ๋ค๋ฉด.
  console.log(result2);
}

// Q9. compute students' average score
{
  let sum = 0;
  for(let i = 0; i < students.length; i++){
    sum += students[i].score;
  }
  console.log(`Average score : ${sum/students.length}`);
}

// Ellie - A9. compute students' average score
{
  //๋์ ๋ ๊ฐ์ ๋ฐํํ๋ ํจ์. ์์๊ฐ์ ์ ์ ํด ์ค ์ ์์.
  const result = students.reduce((prev, curr)=>prev+curr.score,0);
  console.log(result / students.length);
   //reduceright์ ๋ฐ๋ ๋ฐฉํฅ์ผ๋ก ๋์ ํจ.
  /*
  {  
    console.log('----------');
    console.log(prev);
    console.log(curr);
    return prev + curr.score; //return๊ฐ์ด prev๋ก ์ ๋ฌ๋จ.
  },0);
  */
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

// Ellie - A10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  const result = students
  .map((student)=>student.score) // ํ์๋ค์ ์ ์๋ก ๋ณํ
  .filter(score => score>=50) // ํจ์ ์ด๋ ๊ฒ ๋ฌถ์ด์ ์ฌ์ฉ ๊ฐ๋ฅ. ํจ์ํ ํ๋ก๊ทธ๋๋ฐ
  .join();
  console.log(result);
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

// Ellie Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  const result = students.map((student)=>student.score)
  .sort((a,b)=>a-b); // b๊ฐ a๋ณด๋ค ํฌ๋ฉด minus๊ฐ์ด ๋์ค๋ฉด์ a,b๋ก sort๋จ.
  //ํฐ๊ฒ์ด ์์ผ๋ก ๋์ค๊ฒ ํ๊ณ ์ถ๋ค๋ฉด b-a๋ก ํ๋ฉด ๋๋ค!
  console.log(result);
}
