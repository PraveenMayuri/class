function removeDuplicates(arr){
    return[new Set(arr)];

}
const arrayWithDuplicates=[2,2,2,2,2,2,2 ];
const arrayWithoutDuplicates=removeDuplicates(arrayWithDuplicates);
console.log(arrayWithoutDuplicates);
