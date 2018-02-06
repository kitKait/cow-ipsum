// 10 words per sentence; 8 sentences per paragraph (80 words)

"use strict";

var cowIpsumApp = {};
cowIpsumApp.cowSentence = {};
cowIpsumApp.properSentence = {};
cowIpsumApp.paragraph = {};

var cowWordList = ["Angus", "Holstein Friesian", "Shorthorn", "Hereford", "Galloway", "Brown Swiss", "Texas Longhorn", "Ayrshire", "Brangus", "Jersey", "Highland", "Beefmaster", "Dexter", "Guernsey", "Belgian Blue", "Red Poll", "English Longhorn", "Piedmontese", "Aubrac", "Bonsmara", "Normande", "Brahman", "Charolais", "Gelbvieh", "Limousin", "Red Angus", "Simmental", "Watusi", "cattle", "cow", "calf", "heifer", "steer", "bullocks", "ox", "springer", "freemartin", "moooooo", "milk", "beef", "udder", "dairy", "bovine", "bull", "cowshed", "barn", "cow patty", "lowing", "grass", "hay", "chew your cud", "holy cow", "herd", "livestock", "cream", "whole milk", "half and half", "chocolate milk", "churn", "butter", "whey", "domesticated ungulates", "bos taurus", "farm", "horns", "cattle raiding", "bison", "zebu", "yak", "milker", "house cow", "oxtail", "pasture"];

console.log('hello world');
console.log(cowWordList);

// empty array to store selected words
var newWordsArray = [];

// empty array to store selected sentences
var newSentencesArray = [];

// generate 10 random words from the cowWordList, and make a sentence with the words
var generateCowWords = function generateCowWords() {
	newWordsArray = [];
	for (var i = 0; i < 11; i++) {
		var randoNum = Math.floor(Math.random() * cowWordList.length);
		var randoWord = cowWordList[randoNum];
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
};

// make a paragraph of 8 sentences
var generateParagraph = function generateParagraph() {
	// run sentence generator
	for (var i = 0; i < 9; i++) {
		generateCowWords();
	}
	// convert the array of sentences to one string with a space after
	cowIpsumApp.paragraph = newSentencesArray.join(' ');
	console.log(cowIpsumApp.paragraph);
};

cowIpsumApp.init = function () {
	generateCowWords();
	generateParagraph();
};

$(function () {
	cowIpsumApp.init();
});