/* Strings
a- Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en 
mayúscula (utilizar toUpperCase).
*/
var fullName = "SabrinaTasselli";
console.log (fullName.toUpperCase())
/* 
b- Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con 
los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).
*/
var fullName = "SabrinaTasselli";
var first_5_Letters = fullName.substring(0, 5);
console.log (first_5_Letters)
/*
c- Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string
con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).
*/
var fullName = "SabrinaTasselli";
var last_3_letters = fullName.substring(fullName.length - 3);
console.log (last_3_letters)
/* 
d- Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la 
primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable
 (utilizar substring, toUpperCase, toLowerCase y el operador +).
*/
var fullName = "sabrinaTasselli";
var firstLetter = fullName.substring(0, 1);
var restLetters = fullName.substring(1);
var totalText = (firstLetter.toUpperCase() + restLetters.toLowerCase());
console.log (totalText)
/*
e- Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco.
Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).
*/
var fullNameSpace = "sabrina tasselli 18";
var Space = fullNameSpace.indexOf(" ");
console.log(Space)
/* 
f- Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y 
algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para generar 
un nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás letras 
en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).
*/
var twoWords = "esTrUcTURAS cOMPlicaDAS"
var firstWordLetter1 = twoWords.substring (0, 1);
var secondWordLetter1 = twoWords.substring (twoWords.indexOf(" ")+1, twoWords.indexOf(" ")+2);
var restLettersFirstWord = twoWords.substring (1, twoWords.indexOf(" "));
var restLettersSecondWord = twoWords.substring (twoWords.indexOf(" ")+2, twoWords.length);
var fullFirtsWord = firstWordLetter1.toUpperCase() + restLettersFirstWord.toLowerCase();
var fullSecondWord = secondWordLetter1.toUpperCase() + restLettersSecondWord.toLowerCase();
console.log(fullFirtsWord + " " + fullSecondWord)