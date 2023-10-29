function addToCart(productName, price) {
    var cartList = document.getElementById('cart-list');
    var productItem = document.createElement('li');
    productItem.textContent = `${productName} - $${price}`;
    var removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.onclick = function() {
        productItem.remove();
    };
    productItem.appendChild(removeButton);
    cartList.appendChild(productItem);
}
