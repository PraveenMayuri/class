function sumOfNumbers(numbers)
{
    let sum = 0 ;
    for(let i=0;i<numbers.length;i++){
        sum = sum+numbers[i];
    }
    return sum;
}
    
const numbers =[1, 2,3,4,5];
const result= sumOfNumbers(numbers);
console.log(result);
