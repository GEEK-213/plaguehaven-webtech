let cart = JSON.parse(localStorage.getItem('cart')) || [];
let totalPrice = 0;

function addToCart(item) {
    cart.push(item);
    updateCart();
    saveCart();
}

function removeFromCart(item) {
    cart = cart.filter(cartItem => cartItem !== item);
    updateCart();
    saveCart();
}

function updateCart() {
    const cartItemsDiv = document.getElementById('cart-items');
    cartItemsDiv.innerHTML = '';
    totalPrice = 0;

    cart.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('cart-item');

        const itemImg = document.createElement('img');
        itemImg.src = item.image;
        itemImg.alt = item.name;

        const itemInfo = document.createElement('div');
        const originalPrice = document.createElement('span');
        originalPrice.classList.add('original-price');
        originalPrice.textContent = `₹${item.originalPrice}`;

        const discountedPrice = document.createElement('span');
        discountedPrice.classList.add('discounted-price');
        discountedPrice.textContent = `₹${item.price}`;

        itemInfo.appendChild(originalPrice);
        itemInfo.appendChild(discountedPrice);

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = () => removeFromCart(item);

        itemDiv.appendChild(itemImg);
        itemDiv.appendChild(itemInfo);
        itemDiv.appendChild(removeButton);

        cartItemsDiv.appendChild(itemDiv);
        totalPrice += item.price;
    });

    document.getElementById('total-price').textContent = 'Total: ₹' + totalPrice.toFixed(2);
    document.querySelector('.cart-icon').textContent = `🛒 ${cart.length}`;
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

document.getElementById('checkout-button').addEventListener('click', () => {
    alert('Proceeding to checkout with ' + cart.length + ' items.');
});

document.getElementById('cart-icon').addEventListener('click', () => {
    document.getElementById('cart').classList.toggle('open');
    document.getElementById('cart-overlay').classList.toggle('open');
});

document.getElementById('cart-overlay').addEventListener('click', () => {
    document.getElementById('cart').classList.remove('open');
    document.getElementById('cart-overlay').classList.remove('open');
});

// Load cart from localStorage on page load
document.addEventListener('DOMContentLoaded', updateCart);
