// 10 words per sentence; 8 sentences per paragraph (80 words)

"use strict";

let cowIpsumApp = {};
cowIpsumApp.cowSentence = {};
cowIpsumApp.properSentence = {};
cowIpsumApp.paragraph = {};

const cowWordList = ["Angus", "Holstein Friesian", "Shorthorn", "Hereford", "Galloway", "Brown Swiss", "Texas Longhorn", "Ayrshire", "Brangus", "Jersey", "Highland", "Beefmaster", "Dexter", "Guernsey", "Belgian Blue", "Red Poll", "English Longhorn", "Piedmontese", "Aubrac", "Bonsmara", "Normande", "Brahman", "Charolais", "Gelbvieh", "Limousin", "Red Angus", "Simmental", "Watusi", "cattle", "cow", "calf", "heifer", "steer", "bullocks", "ox", "springer", "freemartin", "milk", "beef", "udder", "dairy", "bovine", "bull", "cowshed", "barn", "cow patty", "lowing", "grass", "hay", "chew your cud", "holy cow", "herd", "livestock", "cream", "whole milk", "half and half", "chocolate milk", "churn", "butter", "whey", "domesticated ungulates", "bos taurus", "farm", "horns", "cattle raiding", "bison", "zebu", "yak", "milker", "house cow", "oxtail", "pasture"];

console.log('hello world');
console.log(cowWordList);

// empty array to store selected words
let newWordsArray = [];

// empty array to store selected sentences
let newSentencesArray = [];

// generate 10 random words from the cowWordList, and make a sentence with the words
const generateCowWords = () => {
	newWordsArray = [];
	for (let i = 0; i < 11; i++) {
		let randoNum = Math.floor(Math.random() * cowWordList.length);
		let randoWord = cowWordList[randoNum];
		// console.log(randoWord);
		newWordsArray.push(randoWord);
	}
	// console.log(newWordsArray);
	// add the random words to an array with a space in between
	cowIpsumApp.cowSentence = newWordsArray.join(' ');
	console.log(cowIpsumApp.cowSentence);
	// capitalize and period-ize the sentence
	cowIpsumApp.properSentence = cowIpsumApp.cowSentence.charAt(0).toUpperCase() + cowIpsumApp.cowSentence.slice(1) + '.';
	console.log(cowIpsumApp.properSentence);
	// console.log(typeof cowIpsumApp.properSentence);
	// make array of 10 sentences
	newSentencesArray.push(cowIpsumApp.properSentence);
	console.log(newSentencesArray);
	// console.log(typeof newSentencesArray);
}

// make a paragraph of 8 sentences
const generateParagraph = () => {
	// run sentence generator
	for (let i = 0; i < 9; i++) {
		generateCowWords();
	}
	// convert the array of sentences to one string with a space after
	cowIpsumApp.paragraph = newSentencesArray.join(' ').slice(0, -1) + ', moooooooo.';
	console.log(cowIpsumApp.paragraph);
}

cowIpsumApp.init = () => {
	generateCowWords();
	generateParagraph();
}

$(function() {
	cowIpsumApp.init();
});