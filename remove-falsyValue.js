// reomve falsy value from an arry
// falsy valuses
// false, 0 , ""(blank), null, undefined, NaN(Not a Number)

const numArrWithFalsyValues = [1, 2, NaN, 3, "", 4, 5, null, false];

const numsWithoutFalsyValues = numArrWithFalsyValues.filter(Boolean);

console.log(numsWithoutFalsyValues);
