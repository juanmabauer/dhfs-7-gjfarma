function addToCart(productId, quantity) {
    if (!quantity) {
        quantity = 1;
    }
    fetch('/products/addToCart?productId=' + productId + "&quantity=" + quantity)
        .then(data => data.json()) 
        .then(data => {
            var totals = document.getElementsByClassName("grandTotal");
            if (totals.length > 0) {
                if (data.quantity == 0) {
                    document.getElementById("product-" + productId).remove();
                } else {
                    document.getElementById("productQuantity-" + productId).innerHTML = data.quantity;
                    document.getElementById("productTotalPrice-" + productId).innerHTML = "$ " + data.totalPrice;
                }
                for (i = 0; i < totals.length; i++) {
                    totals[i].innerHTML = "$ " + data.grandTotal;
                }
            } else {
                showSuccessMessage("Producto agregado exitosamente");
            }
        });
};

function removeItemFromCart(productId, quantity) {
    if (!quantity) {
        quantity = 1;
    }
    fetch('/products/removeItemFromCart?productId=' + productId)
        .then(data => data.json())
        .then(data => {
            document.getElementById("product-" + productId).remove();

            var totals = document.getElementsByClassName("grandTotal");
            if (totals.length > 0) {
                for (i = 0; i < totals.length; i++) {
                    totals[i].innerHTML = "$ " + data.grandTotal;
                }
            }
        });
};

function clearCart(){
    fetch('/products/clearCart')
    .then(data => {
        var totals = document.getElementsByClassName("grandTotal");
        for (i = 0; i < totals.length; i++) {
            totals[i].innerHTML = "$ 0";
        }
        document.getElementById("cartItems").innerHTML = "";
    });
};

function finishPurchease(){
    fetch('/products/finishPurchease')
    .then(data => {
        var totals = document.getElementsByClassName("grandTotal");
        for (i = 0; i < totals.length; i++) {
            totals[i].innerHTML = "$ 0";
        }
        showSuccessMessage("Gracias por su compra")
        document.getElementById("cartItems").innerHTML = "";
    });
}

