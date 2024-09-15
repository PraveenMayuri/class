const jsonString ='{ "name":"Alice","age": 17,"isstudent":true}';

const jsonObject=JSON.parse(jsonString);

console.log(jsonObject.name);
console.log(jsonObject.age);
console.log(jsonObject.isstudent);




