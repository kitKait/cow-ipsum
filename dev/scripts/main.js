// 10 words per sentence; 8 sentences per paragraph (80 words)

"use strict";

var cowIpsumApp = {};

var cowWordList = ["Angus", "Holstein Friesian", "Shorthorn", "Hereford", "Galloway", "Brown Swiss", "Texas Longhorn", "Ayrshire", "Brangus", "Jersey", "Highland", "Beefmaster", "Dexter", "Guernsey", "Belgian Blue", "Red Poll", "English Longhorn", "Piedmontese", "Aubrac", "Bonsmara", "Normande", "Brahman", "Charolais", "Gelbvieh", "Limousin", "Red Angus", "Simmental", "Watusi", "cattle", "cow", "calf", "heifer", "steer", "bullocks", "ox", "springer", "freemartin", "moooooo", "milk", "beef", "udder", "dairy", "bovine", "bull", "cowshed", "barn", "cow patty", "lowing", "grass", "hay", "chew your cud", "holy cow", "herd", "livestock", "cream", "whole milk", "half and half", "chocolate milk", "churn", "butter", "whey", "domesticated ungulates", "bos taurus", "farm", "horns", "cattle raiding", "bison", "zebu", "yak", "milker", "house cow", "oxtail", "pasture"];

console.log('hello world');
console.log(cowWordList);

// empty array to store selected words
let newWordsArray = [];

// empty array to store selected sentences
let newSentencesArray = [];

// generate 10 random words from the cowWordList, and make a sentence with the words
const generateCowWords = () => {
	for (let i = 0; i < 10; i++) {
		let randoNum = Math.floor(Math.random() * cowWordList.length);
		let randoWord = cowWordList[randoNum];
		console.log(randoWord);
		newWordsArray.push(randoWord);
	}
	console.log(newWordsArray);
	let cowSentence = newWordsArray.join(' ');
	console.log(cowSentence);
}

generateCowWords();

$(document).ready(function () {
	//
});