const fruits=["Banana","Orange","Apple","Grapes"];
let size=fruits.length;
let fruit=fruits.at(2);
let fruit1=fruits.pop();
let fruit2=fruits.push();
let fruit3=fruits.shift("Lemon");

console.log("The length of the array is:",size);
console.log("The fruit in the second position is :",fruit);
console.log("The fruit popped out of the array is :",fruit1);
console.log("The fruit pushed out of the array is :",fruit2);
console.log("The fruit shifted out of the array is :",fruit3);
