const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

//will search through fruit list to match user input
function search(str) {
	let result = fruit.filter((f) => {												//create an array 'results' with all the fruits that match the user input
		return f.toLowerCase().includes(str.toLowerCase());							//convert fruit strings to lowercase
	});
	showSuggestions(result, str);													//pass the filtered array and user input to the showSuggestions function
}

//function to call the search every time user inputs a character
function searchHandler(e) {
	search(input.value);															//calls the search function after every character input by user
}

//generates a bulleted suggestion list to show user based off results from search function
function showSuggestions(result, inputVal) {
	const fruitList = result.map((result) => {										//take individual cells from array "result" and add into new array "fruitList"
			if(inputVal !== ''){													//check to make sure input is not a blank string (otherwise if user deletes input, shows full fruit list)
				return "<li>" + result + "</li>";									//return new arroy 'fruitList' with added <li> tags to create the bulleted list
			}
		});
	suggestions.innerHTML = "<ul>" + fruitList.join('') + "</ul>";					//create a <ul> element in the "suggestions" <div> that will contain "fruitList" array
};

//function to deal with user selection from suggested list
function useSuggestion(e) {
	input.value = e.target.innerText;												//target suggestion replaces the user input
	suggestions.innerHTML = '';														//clear the suggestions list after suggestion is selected
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);