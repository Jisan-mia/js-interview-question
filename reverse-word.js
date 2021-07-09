/*
  Write a function that will reverse the letters of words in a
  sentence, without altering the position of the words, or the
  punctuation.
 */

function reverseWord(str) {
	let splitWords = str.split(" ");
	let reverse = splitWords.map((word) => word.split("").reverse().join(""));
	return reverse.join(" ");
}

const reversedWords = reverseWord("My name is Jisan");
console.log(reversedWords);
