import {
  incrementQty,
  decrementQty,
  recalculateSubtotal
} from './helpers.js';

const incrButton = document.querySelector('#incr');
const decrButton = document.querySelector('#decr');
const qtyInput = document.querySelector('#qty');
const price = document.querySelector('#price');
const subTotal = document.querySelector('#subtotal');
const code = document.querySelector('#code');
const confirmCodeBtn = document.querySelector('#confirmButton');
let discount = 0;

incrButton.addEventListener('click', () => {
  qtyInput.value = incrementQty(qtyInput.value);
  subTotal.textContent = `Rp. ${recalculateSubtotal(
    price.value, 
    qty.value,
    discount
    )}`;
});

decrButton.addEventListener('click', () => {
  qtyInput.value = decrementQty(qtyInput.value);
  subTotal.textContent = `Rp. ${recalculateSubtotal(
    price.value, 
    qty.value,
    discount
    )}`;
});

confirmCodeBtn.addEventListener("click", () => {
  if (code.value === "MEGI25") {
    discount = 25;
    subTotal.textContent = `Rp. ${recalculateSubtotal(
      price.value, 
      qty.value,
      discount
    )}`;
  } else if (code.value === "MEGANN50") {
    discount = 50;
    subTotal.textContent = `Rp. ${recalculateSubtotal(
      price.value, 
      qty.value,
      discount
    )}`;
  } else if (code.value === "MEGM75") {
    discount = 75;
    subTotal.textContent = `Rp. ${recalculateSubtotal(
      price.value, 
      qty.value,
      discount
    )}`;
  } else if (code.value === "MEGNM80") {
    discount = 80;
    subTotal.textContent = `Rp. ${recalculateSubtotal(
      price.value, 
      qty.value,
      discount
    )}`;
  } else {
    discount = 0;
    subTotal.textContent = `Rp. ${recalculateSubtotal(
      price.value, 
      qty.value,
      discount
    )}`;
  }
});