let totalAmount = 0;

function addToCart(itemName, price) {
  const cartItems = document.getElementById("cart-items");
  const li = document.createElement("li");
  li.classList.add("cart-item");
  li.textContent = `${itemName} - Rs.${price}`;

  // Store the item price as a data attribute of the li element
  li.dataset.price = price;

  const quantitySpan = document.createElement("span");
  quantitySpan.textContent = "Quantity: 1";
  quantitySpan.classList.add("quantity");
  li.appendChild(quantitySpan);

  const increaseButton = document.createElement("button");
  increaseButton.textContent = "+";
  increaseButton.onclick = function () {
    let quantity = parseInt(quantitySpan.textContent.split(": ")[1]);
    quantity++;
    quantitySpan.textContent = "Quantity: " + quantity;
    totalAmount += price;
    updateTotalDisplay();
  };
  li.appendChild(increaseButton);

  const decreaseButton = document.createElement("button");
  decreaseButton.textContent = "-";
  decreaseButton.onclick = function () {
    let quantity = parseInt(quantitySpan.textContent.split(": ")[1]);
    if (quantity > 1) {
      quantity--;
      quantitySpan.textContent = "Quantity: " + quantity;
      totalAmount -= price;
      updateTotalDisplay();
    }
  };
  li.appendChild(decreaseButton);

  const removeButton = document.createElement("button");
  removeButton.textContent = "Remove Item";
  removeButton.onclick = function () {
    const itemPrice = parseInt(li.dataset.price);
    totalAmount -=
      itemPrice * parseInt(quantitySpan.textContent.split(": ")[1]);
    updateTotalDisplay();
    li.remove();
  };
  li.appendChild(removeButton);

  cartItems.appendChild(li);
  totalAmount += price;
  updateTotalDisplay();
}

function updateTotalDisplay() {
  const totalDisplay = document.getElementById("total-display");
  totalDisplay.textContent = "Total: Rs." + totalAmount;
}
