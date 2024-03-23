//Selecting the add to cart buttons for different dishes
const burgerButton = document.getElementById("burgerButton");
const pizzaButton = document.getElementById("pizzaButton");
const coffeeButton = document.getElementById("coffeeButton");

//Declaring variables for quantities of each dish item
let burgerQuantity = 0;
let pizzaQuantity = 0;
let coffeeQuantity = 0;

//Selecting the quantity dot div
const quantityDot = document.getElementById("quantityDot");
quantityDot.classList.toggle("quantity", false);

//Quantity of each dish becomes 1 when add to cart button is clicked
burgerButton.addEventListener("click", function () {
  burgerQuantity++;
  quantityDot.classList.toggle("quantity", true);
  console.log(burgerQuantity);
});

pizzaButton.addEventListener("click", function () {
  pizzaQuantity++;
  quantityDot.classList.toggle("quantity", true);
  console.log(pizzaQuantity);
});

coffeeButton.addEventListener("click", function () {
  coffeeQuantity++;
  quantityDot.classList.toggle("quantity", true);
  console.log(coffeeQuantity);
});
