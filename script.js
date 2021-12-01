let users = [
	{ id: 1, name: "Emma", gender: "Female" },
	{ id: 2, name: "Oscar", gender: "Male" },
	{ id: 3, name: "Alexis", gender: "Female" },
	{ id: 4, name: "Adam", gender: "Male" },
];

const newUser = { id: 5, name: "mustafa", gender: "male" };

users.push(newUser);

console.log(users);

// console.log(users);
// function testRemove(id) {
// 	const filteredUsers = users.filter(filterUser);

// 	function filterUser(userItem) {
// 		if (userItem.name !== id) {
// 			return true;
// 		}
// 	}
// 	users = filteredUsers;
// 	console.log(filteredUsers);
// }

// testRemove("Adam");
