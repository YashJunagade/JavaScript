/* typeof() & typeof <variable_name> we can use both method to know the data type of the variable*/

let score = "33";
score = Number(score) // convert string to number
console.log(score);
console.log(typeof(score));

let score2 = 33;
score2 = String(score2) // convert number to string
console.log(score2);
console.log(typeof(score2));


let flag = 1;
flag = Boolean(flag) // convert number to boolean
console.log(flag);
console.log(typeof(flag));