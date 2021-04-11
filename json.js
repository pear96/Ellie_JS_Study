// JSON
// JavaScript Object Notation

// 1.Object to JSON
// stringify(obj) : overloading 함수
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple','banana']);
console.log(json);

const rabbit = {
    name : 'tori',
    color : 'white',
    size : null,
    birthDate : new Date(),
    jump: () =>{ 
        console.log(`${name}can jump!`);
    },
};

//함수 포함 안됨, symbol도 포함 안됨!

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ['name', 'color']); // replacer 를 사용하여 원하는 요소만 추출
console.log(json);

json = JSON.stringify(rabbit, (key,value) =>{
    console.log(`key : ${key}, value: ${value}`);
    return key === 'name' ? 'ellie' : value;
});
console.log(json);

// 2.JSON to Object
// parse(json)
console.clear();
json = JSON.stringify(rabbit);
const obj = JSON.parse(json, (key, value)=>{
    console.log(`key : ${key}, value: ${value}`);
    return key === 'birthDate' ? new Date(value) : value;
    
});
// birthDate는 string이다. console.log(obj.birthDate.getDate()); 하는 방법

console.log(obj);
rabbit.jump();
// obj.jump(); json으로 변환될 때 못 넘어왔기 때문에 없다!

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate());