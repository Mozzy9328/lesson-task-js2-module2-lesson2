import createTheList from "./components/createTheList.js";
import { theKey } from "./utility/settings.js";
import { getFromStorage, saveToStorage } from "./utility/storage.js";

// The to do List should now contain what is saved in localStorage, and not this:
// let toDo = [];
let toDo = getFromStorage(theKey);

// This is done in order for the item to be saved in the HTML on refresh
createTheList(toDo);

const addBtn = document.querySelector("#add");
const listInput = document.querySelector(".input");

addBtn.addEventListener("click", addItem);

function addItem() {
	const itemValue = listInput.value.trim();

	if (itemValue.length >= 1) {
		const newItem = { id: Date.now(), name: itemValue };
		listInput.innerHTML = "";
		listInput.focus();
		toDo.push(newItem);
		//if the condition is satisfied then create the list
		createTheList(toDo);
		saveToStorage(theKey, toDo);
	}
	console.log(toDo);
}
