document.addEventListener("DOMContentLoaded", function() {
    var products = [
        { id: 1, name: "Bike Model 1", image: "bike1.jpg", description: "High quality electric bike", price: 450 },
        { id: 2, name: "Bike Model 2", image: "bike2.jpg", description: "Efficient and lightweight", price: 870 },
        { id: 3, name: "Bike Model 3", image: "bike3.jpg", description: "Luxury high performance", price: 950 },
        { id: 4, name: "Bike Model 4", image: "bike4.jpg", description: "Heavy duty", price: 1200 }
    ];

    var productsContainer = document.getElementById('products');
    document.querySelectorAll('.filter-btn').forEach(function(button) {
        button.addEventListener('click', function() {
            var filter = this.getAttribute('data-price');
            var filteredProducts = products.filter(function(product) {
                if (filter === '0-500') return product.price <= 500;
                if (filter === '500-1000') return product.price > 500 && product.price <= 1000;
                if (filter === '1000+') return product.price > 1000;
                return true; // All products
            });
            displayProducts(filteredProducts);
        });
    });

    function displayProducts(products) {
        productsContainer.innerHTML = '';
        products.forEach(function(product) {
            productsContainer.innerHTML += `
                <div class="product">
                    <img src="${product.image}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <p>Price: $${product.price}</p>
                </div>
            `;
        });
    }

    displayProducts(products); // Display all products initially
});
