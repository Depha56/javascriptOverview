// 34. Modify a string at a specific position

function
 
stringModifier
(
str, position, char
) {
  
return
 str.
substring
(
0
, position) + char + str.
substring
(position + 
1
);
}