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
  const fruits = '🍎, 🥝, 🍌, 🍒';
  const array = fruits.split(','); // 구분자를 넣지 않으면 string 통째로 들어감
  console.log(array);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  const rArray = array.reverse();
  console.log(rArray);
  console.log(array); // original도 바뀜
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  const nArray = array.slice(2); //end는 빠짐. 2,5면 2,3,4만 전달됨~! original은 그대로!
  console.log(nArray);
  //splice는 original array가 지정된 요소가 없어지면서 바뀜. 질문 조건에 맞지 않음.
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

  //find는 하나만 반환해서 object로 출력이 되는거고
  //fillter는 해당하는 모든 요소를 array에 저장해서 반환하기 때문에
  //Array의 요소로 반환되는 것이다.
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
  const result = students.filter((student)=> student.enrolled); //True가 필요하니까!
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
  const result = students.map((student)=>student.score*2); //만약 2배로 하고싶다면
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
  console.log(result); //반환값은 True or False 

  const result2 = !students.every((student)=>student.score>=50);
  // 같은 값을 every를 써서 나타내고 싶다면.
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
  //누적된 값을 반환하는 함수. 시작값을 저정해 줄 수 있음.
  const result = students.reduce((prev, curr)=>prev+curr.score,0);
  console.log(result / students.length);
   //reduceright은 반대 방향으로 누적함.
  /*
  {  
    console.log('----------');
    console.log(prev);
    console.log(curr);
    return prev + curr.score; //return값이 prev로 전달됨.
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
  .map((student)=>student.score) // 학생들을 점수로 변환
  .filter(score => score>=50) // 함수 이렇게 묶어서 사용 가능. 함수형 프로그래밍
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
  .sort((a,b)=>a-b); // b가 a보다 크면 minus값이 나오면서 a,b로 sort됨.
  //큰것이 앞으로 나오게 하고싶다면 b-a로 하면 된다!
  console.log(result);
}
