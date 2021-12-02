// This will save the key name, and the value it holds in localStorage
export function saveToStorage(key, value) {
	localStorage.setItem(key, JSON.stringify(value));
}

// This will retrieve the key name, and the value will return empty if it is null or undefiend, or else it will return a value.
export function getFromStorage(key) {
	const value = localStorage.getItem(key);
	if (!value) {
		return [];
	}
	return JSON.parse(value);
}
