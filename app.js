// 1. Write a function that creates a closure and returns a function that can add
// a specific number to any number passed to it. For example, if the closure is
// created with 5, the returned function should add 5 to any number passed
// to it.

function addNumberClosure(number) {
  return function (x) {
    return x + number;
  };
}

let number = +prompt("Enter a Number");
const addFive = addNumberClosure(number);
console.log(addFive(10)); // Output: 15
console.log(addFive(20)); // Output: 25

// 2. Write a recursive function that searches an array for a specific value. The
// function should return true if the value is found, and false if it is not. You
// can assume that the array is not nested.

const myArray = [1, 2, 3, 4, 5];
console.log(searchArray(myArray, 3)); // true
console.log(searchArray(myArray, 6));

function searchArray(array, value) {
  if (array.length === 0) {
    // base case, empty array
    return false;
  } else if (array[0] === value) {
    // base case, value found
    return true;
  } else {
    return searchArray(array.slice(1), value); // recursive case, search rest of array
  }
}

//  3 - Write a function that adds a new paragraph element to the bottom of an
// HTML document. The function should take a string argument that will be
// used as the text content of the new paragraph element.

let para = document.getElementById("para");
let paraContent = prompt("Enter Your Paragraph");
para.innerHTML = "<p> " + paraContent + "</p>";
console.log(para);

//  4 - Write a function that adds a new list item to an unordered list in an HTML
// document. The function should take a string argument that will be used as
// the text content of the new list item.

let listItem = document.getElementById("listItem");
let itemContent = prompt("Enter Your item");
listItem.innerHTML = "<li>" + itemContent + "</li> ";

console.log(listItem);

// 5 - Write a function that changes the background color of an HTML element.
// The function should take two arguments: the first argument is a reference
// to the HTML element, and the second argument is a string representing
// the new background color.

let para = document.getElementById("para");
let paraContent = prompt("Enter Your Paragraph");
para.innerHTML = "<p> " + paraContent + "</p>";
para.style.background = "green";
console.log(para);

// 6. Write a function that saves an object to localStorage. The function should
// take two arguments: the first argument is a string representing the key to
// use for storing the object, and the second argument is the object to store.

let obj = {
  fullName: "Ishaq",
  age: "19",
  class: "css",
  rollNO: 132,
};

let jsonFormt = JSON.stringify(obj);
let locatStorage = localStorage.setItem("testObject", jsonFormt);

// 7. Write a function that retrieves an object from localStorage. The function
// should take one argument, which is a string representing the key used to
// store the object. The function should return the object.

let object = localStorage.getItem("testObject");

function objFromStorage(object) {
  let objFormat = JSON.parse(object);
  return objFormat;
}
console.log(objFromStorage(object));

// 8. Write a function that takes an object and saves each property to
// localStorage using the property name as the key and the property value as
// the value. The function should also retrieve the object from localStorage
// and return it as a new object.

let obj = {
  fullName: "Ishaq",
  age: "19",
  class: "css",
  rollNO: 132,
  address: "karachi",
};
function saveToLocalStorage(obj) {
  // Save each property to localStorage
  for (let prop in obj) {
    localStorage.setItem(prop, JSON.stringify(obj[prop]));
  }

  // Retrieve object from localStorage
  let newObj = {};
  for (let i = 0; i < localStorage.length; i++) {
    let prop = localStorage.key(i);
    newObj[prop] = JSON.parse(localStorage.getItem(prop));
  }

  // Return new object
  return newObj;
}
console.log(saveToLocalStorage(obj));
