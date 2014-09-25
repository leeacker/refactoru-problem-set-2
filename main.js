$(document).on('ready', function() {
	  
	// Write a function firstReverse that takes a single string parameter and returns the string in reverse order.


	var firstReverse = function(string){
		var newArray = string.split('')
		var reverseArray = [];
		for(var i = string.length-1; i >= 0; i--){
			reverseArray.push(newArray[i]);
		}
		console.log(reverseArray.join(''));
	};
	firstReverse('hello');
	firstReverse('goodbye');
	firstReverse('tomorrow');




	// Write a function swapCase that takes a single string parameter and swaps the case of each character. For example: if a string is "Hello World" the output should be "hELLO wORLD". Let numbers and symbols stay the way they are.

	var swapCase = function(string){
		var testArray = string.split('');
		var lowerCase = string.toLowerCase().split('');
		console.log(lowerCase);
		var swapped = [];
		for(var i = 0; i<string.length; i++){
			if(testArray[i] === lowerCase[i]){
				swapped.push(lowerCase[i].toUpperCase());
			} else {
				swapped.push(lowerCase[i]);
			}
		}
		console.log(swapped.join(''));
	}
	swapCase('Hello World');
	swapCase('WHATS UP');
	swapCase('hEY dUde');





	// Bonus:
	// Write a function letterCount that takes a single string parameter and returns the first word with the greatest number of repeated letters. For example: "Today, is the greatest day ever!" should return greatest because it has 2 e's (and 2 t's) and it comes before ever which also has 2 e's. If there are no words with repeating letters return -1. Words will be separated by single spaces.
	

	var test = 'greeeeeen';
	console.log(test.length - (_.without(test, 'e').length));

	var letterCount = function(string){
		// split string into words - associate with variable wordList
		var wordList = string.split(' ');
		console.log(wordList);
		// create an empty object to hold each word with a value of its most repeated letter's frequency of occurrence
		var wordsWithValues = {};
		// create a loop to cycle through each word in the original sentence 
		for(var i = 0; i<wordList.length ; i++){
			// create a variable to access an array of the individual letters in the current word
			var currentWord = wordList[i];
			var wordArray = currentWord.split('');
			console.log(wordArray);
			// create an key, value pair in the object wordsWithValues
			wordsWithValues[wordList[i]] = 0;
			// create a filter for words that have no duplicate letters so that further tests are not unnecessarily performed
			if(wordArray.length === _.uniq(wordArray).length){
					console.log('no duplicates');
			} else {	
				// create a variable to push to the object wordsWithValues
				var letterFrequency = 1;
				// create a new loop to cycle through each of the letters in the word
				for(var b = 0; b<wordArray.length ; b++){
					var currentLetter = wordArray[b];
					console.log(currentLetter);
					if(currentWord.length - (_.without(currentWord, currentLetter).length) > letterFrequency){
						letterFrequency = currentWord.length - (_.without(currentWord, currentLetter).length)
					}
					wordsWithValues[wordList[i]] = letterFrequency;
					console.log(wordsWithValues);

				}
			}
		}
		// create an array of letter frequencies
		var valuesArray =  _.chain(wordsWithValues).values();
		console.log('Values Array: ', valuesArray);
		var maxFrequency = valuesArray.max().value();
		console.log('Max Frequency: ', maxFrequency);
		var winnerIndex = valuesArray.indexOf(maxFrequency).value();
		console.log('Winner Index: ', winnerIndex)
		return wordList[winnerIndex];
	}
	
console.log(letterCount('there is no way in helllll this is going to work'));
console.log(letterCount('Today is the greatest day ever'));


});