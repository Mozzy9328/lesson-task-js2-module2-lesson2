import { theKey } from "../utility/settings.js";
import { saveToStorage } from "../utility/storage.js";

export default function createTheList(toDo) {
	// Creating the innerHTML with data taken from script.js
	const container = document.querySelector(".container");

	container.innerHTML = "";

	toDo.forEach((data) => {
		// We are gonna check if it is checked or not

		let checked = "";
		//if the list is complete, then checked is checked, if it is not, then empty "";
		if (data.complete) {
			checked = "checked";
		}
		container.innerHTML += `<li><span class="${checked}">${data.name}</span> <input ${checked} type="checkbox" data-id="${data.id}"/></li>`;
	});
	// Create addEventListener for the checkboxes.
	const checkboxes = document.querySelectorAll("li input");

	checkboxes.forEach(function (box) {
		box.addEventListener("click", toggleComplete);
	});

	function toggleComplete() {
		//To get the id attribute on click.
		const id = event.target.dataset.id;
		// Checks if the checkbox is checked on click
		const checked = event.target.checked;

		// This is to save it in the localstorage
		const updatedList = updateList(toDo, id, checked);
		saveToStorage(theKey, updatedList);
		// This is in order for the checked in CSS to work for new toDoLists
		createTheList(updatedList);
	}
}

// Update the list after the checkbox is clicked (toggleComplete),
// and then save it in localStorage

function updateList(toDo, id, checked) {
	// first we get the index on the item we clicked on

	const thisItemIndex = toDo.findIndex(function (item) {
		// if the item id, is the same as the id clicked on, return the index
		if (item.id === parseInt(id)) {
			return true;
		}
	});
	//If it return -1, it means we are comparing a number value to a string.
	// console.log(thisItemIndex);

	//thisItemIndex, becomes the i and whenever it is completed (click), we mark checked
	toDo[thisItemIndex].complete = checked;
	console.log(toDo);

	return toDo;
}
