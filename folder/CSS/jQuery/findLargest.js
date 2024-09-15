function findLargestNo(arr)
{
    let largest = arr[0];
    for(let i=1;i<arr.length;i++)
        {
            if(arr[i]>largest){
                largest=arr[i];
            }
        }
        return largest;

}
const numbers =[9,6,3,4,10];
const largestNumber = findLargestNo(numbers);
console.log("The largest number is:",largestNumber);
