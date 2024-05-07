// 35. Count vowels in a string

function countVowels(str) {
  const vowels = "aeiouAEIOU";
  let count = 0;
  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return;
  count;
}
// 36. Count consonants in a string

function
 
countConsonants
(
str
) {
  
const
 vowels = 
"aeiouAEIOU"
;
  
let
 count = 
0
;
  
for
 (
let
 char 
of
 str) {
    
if
 (!vowels.
includes
(char) && char.
match
(
/[a-zA-Z]/
)) {
      count++;
    }
  }
  
return
 count;
}
