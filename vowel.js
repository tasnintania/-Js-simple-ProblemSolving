//Finding and count vowel in a sentence

const vowel = ["A","E","I","O","U","a","e","i","o","u"];

function countVowel (sentence){
    let count = 0;
    const letters = Array.from(sentence);
    letters.forEach(function(value, index, array){
        if(vowel.includes(value)){
            count ++;
        }
    });
    return count;

}
console.log(countVowel("Bangladesh is my motherland and i love it very much"));