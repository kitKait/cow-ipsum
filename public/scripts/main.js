"use strict";

var cowIpsumApp = {};
cowIpsumApp.sentence;
cowIpsumApp.paragraph;
cowIpsumApp.newWordsArray = [];
cowIpsumApp.newSentencesArray = [];

cowIpsumApp.cowWordList = ["Angus", "Holstein Friesian", "Shorthorn", "Hereford", "Galloway", "Brown Swiss", "Texas Longhorn", "Ayrshire", "Brangus", "Jersey", "Highland", "Beefmaster", "Dexter", "Guernsey", "Belgian Blue", "Red Poll", "English Longhorn", "Piedmontese", "Aubrac", "Bonsmara", "Normande", "Brahman", "Charolais", "Gelbvieh", "Limousin", "Red Angus", "Simmental", "Watusi", "cattle", "cow", "calf", "heifer", "steer", "bullocks", "ox", "springer", "freemartin", "milk", "beef", "udder", "dairy", "bovine", "bull", "cowshed", "barn", "cow patty", "lowing", "grass", "hay", "chew your cud", "holy cow", "herd", "livestock", "cream", "whole milk", "half and half", "chocolate milk", "churn", "butter", "whey", "domesticated ungulates", "bos taurus", "farm", "horns", "cattle raiding", "bison", "zebu", "yak", "milker", "house cow", "oxtail", "pasture"];

// generate 10 random words from the cowWordList
cowIpsumApp.generateCowWords = function () {
	cowIpsumApp.newWordsArray = [];
	for (var i = 0; i < 11; i++) {
		var randoNum = Math.floor(Math.random() * cowIpsumApp.cowWordList.length);
		var randoWord = cowIpsumApp.cowWordList[randoNum];
		cowIpsumApp.newWordsArray.push(randoWord);
	}
};

// Make a sentence with the 10 random words generated from the cowIpsumApp.generateCowWords function
cowIpsumApp.generateSentence = function () {
	cowIpsumApp.generateCowWords();
	// add the random words to an array with a space in between
	var makeSentence = cowIpsumApp.newWordsArray.join(' ');
	// capitalize and period-ize the sentence
	cowIpsumApp.sentence = makeSentence.charAt(0).toUpperCase() + makeSentence.slice(1) + '.';
	$('.displayIpsum').html("<p id=\"copy\">" + cowIpsumApp.sentence + "</p>");
	return cowIpsumApp.sentence;
};

// Make a paragraph of 6 sentences
cowIpsumApp.generateParagraph = function () {
	cowIpsumApp.newSentencesArray = [];
	// run sentence generator
	for (var i = 0; i < 7; i++) {
		var newSentence = cowIpsumApp.generateSentence();
		cowIpsumApp.newSentencesArray.push(newSentence);
	}
	// convert the array of sentences to one string with a space after
	cowIpsumApp.paragraph = cowIpsumApp.newSentencesArray.join(' ').slice(0, -1) + ', moooooooo.';
	$('.displayIpsum').html("<p id=\"copy\">" + cowIpsumApp.paragraph + "</p>");
};

var clipboard = new Clipboard('#copyButton');

// clipboard.on('success', function (e) {
// 	console.info('Action:', e.action);
// 	console.info('Text:', e.text);
// 	console.info('Trigger:', e.trigger);

// 	e.clearSelection();
// });

// clipboard.on('error', function (e) {
// 	console.error('Action:', e.action);
// 	console.error('Trigger:', e.trigger);
// });

cowIpsumApp.getCowText = function () {
	$('#sentenceButton').addClass('hide');
	$('#paragraphButton').addClass('hide');
	$('#copyButton').removeClass('hide');
	$('#backButton').removeClass('hide');
	$('.textDisplay').removeClass('hide');
};

cowIpsumApp.refresh = function () {
	$('#sentenceButton').removeClass('hide');
	$('#paragraphButton').removeClass('hide');
	$('#copyButton').addClass('hide');
	$('#backButton').addClass('hide');
	$('.textDisplay').addClass('hide');
};

// event listeners
cowIpsumApp.events = function () {
	$('#sentenceButton').on('click', function (e) {
		e.preventDefault();
		cowIpsumApp.generateSentence();
		cowIpsumApp.getCowText();
		// $('.textDisplay').addClass('topSpacing');
	});

	$('#paragraphButton').on('click', function (e) {
		e.preventDefault();
		cowIpsumApp.generateParagraph();
		cowIpsumApp.getCowText();
	});

	$('#copyButton').on('click', function (e) {
		e.preventDefault();
	});

	$('#backButton').on('click', function (e) {
		e.preventDefault();
		cowIpsumApp.refresh();
		// $('.textDisplay').removeClass('topSpacing');
	});
};

cowIpsumApp.init = function () {
	cowIpsumApp.events();
};

$(function () {
	cowIpsumApp.init();
});