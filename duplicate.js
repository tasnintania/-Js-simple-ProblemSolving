const numbers = [4,5,9,7,8,4,3,5,6,2,11,55,44,11,3,84,66,55,88];
const duplicate = numbers.filter(function(value, index, array){
   //return array.indexOf(value) != index;
   return array.indexOf(value) === index;  //find uniq number
});

console.log(duplicate);