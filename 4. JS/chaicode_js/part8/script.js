// alert("connected")

// 2 main parts of Dom manipulation
// get the element - add style , edit text inside, etc
// event listening - click mouse, listen to the event, do something on the element or grab the element

// example 1
const changeText = document.getElementById("changeTextButton");
const myParagraph = document.getElementById("myParagraph");

changeText.addEventListener("click", function () {
  //   console.log(this);
  // whenever we use arrow function in event listener, console.log(this) "this" will always point to global "this" object

  // whenever we use function, it will always point to the curret context, who is calling it. here the changeText button is calling it, so it will return changeText Button

  myParagraph.textContent = "lulululululu";
  console.log(myParagraph.textContent);
});

// example 2

const citiesList = document.getElementById("citiesList");
const highlightFirstCity = document.getElementById("highlightFirstCity");

// to access the first element
const firstElement = citiesList.firstElementChild;

// to store the click state
let clickState = false;

highlightFirstCity.addEventListener("click", function () {
  firstElement.classList.toggle("highlight");
});

//example 3

const coffeeType = document.getElementById("coffeeType");
const changeOrder = document.getElementById("changeOrder");

changeOrder.addEventListener("click", function () {
  coffeeType.textContent = "Espresso";
  coffeeType.style.backgroundColor = "brown";
  coffeeType.style.padding = "5px";
});

//example 4

const shoppingList = document.getElementById("shoppingList");
const addNewItem = document.getElementById("addNewItem");

addNewItem.addEventListener("click", function () {
  let newItem = document.createElement("li");
  newItem.textContent = "Eggs";
  shoppingList.appendChild(newItem);
});

// example 5

const removeLastTask = document.getElementById("removeLastTask");
const taskList = document.getElementById("taskList");

removeLastTask.addEventListener("click", function () {
  taskList.lastElementChild.remove();
});

//
const clickMeButton = document.getElementById("clickMeButton");

clickMeButton.addEventListener('click', function () {
  alert("clicked successfully");
});

// example 7

const teaList = document.getElementById("teaList");

teaList.addEventListener("click", function (event) {
//   console.log(event.target);
  if (event.target && event.target.matches(".teaItem")) {
    alert(`You selected ${event.target.textContent}`);
  }
});

// example 8

const feedbackForm = document.getElementById("feedbackForm");
const feedbackDisplay = document.getElementById("feedbackDisplay");

feedbackForm.addEventListener('submit',function(event){
    event.preventDefault();
    let textContent = document.getElementById("feedbackInput").value;
    console.log(textContent);
})

const label = document