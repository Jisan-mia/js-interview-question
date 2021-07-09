/*
  Write a pure function that accepts an array of strings, return the
  longest string. Use no loops.
 */

function longestStrFunc(arrOfStr) {
	let longest = arrOfStr.reduce(
		(accStr, currentStr) =>
			currentStr.length > accStr.length ? currentStr : accStr,
		""
	);
	let multipleLongest = arrOfStr.filter((str) => str.length == longest.length);

	return multipleLongest.length > 1 ? multipleLongest : longest;
}

const friendsName = ["Shawon", "Mursaline", "Porag", "Asad"];
const longestFriend = longestStrFunc(friendsName);
console.log(longestFriend);

// same highest length

// function longestString(arr) {
// 	var wholeArr = [];
//     var tlength = 0;
//     for(var i =0; i < plorp.length; i++){
//       if(tlength < plorp[i].length){
//         tlength = plorp[i].length;
//       }
//     }
//     for(var j =0; j < plorp.length; j++){
//       if(plorp[j].length == tlength){
//          wholeArr.push(plorp[j]);
//       }
//     }
//    if(wholeArr.length == 1){
//      return wholeArr[0]
//    }else{
//       return wholeArr
//   }
// }
