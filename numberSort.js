
//Arange Numeric number sequentioly

const number = [2,5,6,9,41,22,35,65,48,97,65,45,100];
console.log(number.sort(function(a,b){
    //return  a - b;   //arrange big to small numbers
    return b -a;    //small to big
}));
