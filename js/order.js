document.addEventListener("DOMContentLoaded", function () {
  const addButtons = document.querySelectorAll(".add-btn");
  const receiptList = document.getElementById("receiptList");
  const receiptTotal = document.getElementById("receiptTotal");

  let total = 0;

  addButtons.forEach(button => {
    button.addEventListener("click", function () {
      const itemName = button.getAttribute("data-item");
      const itemPrice = parseFloat(button.getAttribute("data-price"));
      const selectId = button.getAttribute("data-select");
      const selectElement = document.getElementById(selectId);
      const gravyChoice = selectElement.value;
      const proteinId = button.getAttribute("data-protein");
      let proteinChoice = "";
      if (proteinId) {
        const proteinElement = document.getElementById(proteinId);
        proteinChoice = proteinElement.value;
        if (proteinChoice === "") return;
      }

      if (gravyChoice === "") return;

      const proteinText = proteinChoice ? ` (${proteinChoice})` : "";
      const listItem = document.createElement("li");
      listItem.textContent = `${itemName}${proteinText} with ${gravyChoice} - $${itemPrice.toFixed(2)}`;

      const removeBtn = document.createElement("button");
      removeBtn.textContent = "Remove";
      removeBtn.style.marginLeft = "10px";
      removeBtn.style.padding = "0.25rem 0.5rem";
      removeBtn.style.fontSize = "0.85rem";
      removeBtn.style.cursor = "pointer";

      removeBtn.addEventListener("click", function () {
        receiptList.removeChild(listItem);
        total -= itemPrice;
        receiptTotal.textContent = total.toFixed(2);
      });

      listItem.appendChild(removeBtn);
      receiptList.appendChild(listItem);

      total += itemPrice;
      receiptTotal.textContent = total.toFixed(2);
    });
  });

  // place order button
  const placeOrderBtn = document.createElement("button");
  placeOrderBtn.textContent = "Place Order";
  placeOrderBtn.classList.add("add-btn");
  placeOrderBtn.addEventListener("click", function () {
    if (total === 0) {
      alert("you haven’t added anything to your order yet.");
      return;
    }
    alert("thanks! your order will be ready soon.");
    setTimeout(() => {
      window.location.href = "index.html";
    }, 1500);
  });

  document.querySelector(".receipt").appendChild(placeOrderBtn);
});