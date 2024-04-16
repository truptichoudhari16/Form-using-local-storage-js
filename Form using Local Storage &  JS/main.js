/*

// Write on Terminal

sessionStorage.getItem("name");
sessionStorage.clear();
sessionStorage.removeItem("name");
sessionStorage.setItem("name", "Triu");
sessionStorage.removeItem("name");

*/

/*
window.onstorage = (e) => {
  alert("changed");
  console.log(e);
};
*/

// Local Storage

let key = prompt("Enter key you want to set");
let value = prompt("Enter value you want to sent");

localStorage.setItem(key, value);

console.log(`The value at ${key} is ${localStorage.getItem(key)}`);
