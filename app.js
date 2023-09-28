const input = document.querySelector('#fruit');
const suggestions = document.querySelector('dropdown-list');
// const form = document.querySelector("form");

const fruits = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

input.addEventListener('keyup', search);

function search() {
	removeShowSuggestion();

	const value =  input.value.toLowerCase();

	if(value.length === 0) {
		return;
	}

	let results = [];
	
	fruits.forEach((fruit) => {
		if(fruit.indexOf(value) > -1) {
			results.push(fruit);
		} else {
			if(fruit.substr(0, value.length).toLowerCase() === value) {
				results.push(fruit);
			}
		}
	});
	
	showSuggestions(results);
}

function showSuggestions(results) {
	const unorderedEl = document.createElement("ul");
	unorderedEl.className = "dropdown-list";
	unorderedEl.id = "dropdown-list";

	results.forEach((item) => {
		const listEl = document.createElement("li");
		const listElBtn = document.createElement("button");
		listElBtn.innerHTML = item;
		listEl.addEventListener("click", useSuggestion)
		listEl.appendChild(listElBtn)
		unorderedEl.appendChild(listEl);
	})
	
	document.querySelector("#search-container").appendChild(unorderedEl);
}

function removeShowSuggestion() {
	const unorderedEl = document.querySelector("#dropdown-list");
	if(unorderedEl) {
		unorderedEl.remove();
	}
}


function useSuggestion(e) {
	e.preventDefault();

	const listEl = e.target;
	input.value = listEl.innerText;

	removeShowSuggestion();
}
