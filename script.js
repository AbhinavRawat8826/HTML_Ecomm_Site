// Product data array
const products = [
    {
        brand: "Adidas",
        name: "Cartoon Astronaut T-Shirt",
        price: "$87",
        image: "img/products/n1.jpg",
        rating: 4
    },
    {
        brand: "Adidas",
        name: "Cartoon Astronaut T-Shirt",
        price: "$68",
        image: "img/products/n2.jpg",
        rating: 3
    },
    {
        brand: "Adidas",
        name: "Cartoon Astronaut T-Shirt",
        price: "$83",
        image: "img/products/n3.jpg",
        rating: 4
    },
    {
        brand: "Adidas",
        name: "Cartoon Astronaut T-Shirt",
        price: "$77",
        image: "img/products/n4.jpg",
        rating: 5
    }
];

// Function to render products
const renderProducts = () => {
    const container = document.getElementById("product-container");

    products.forEach(product => {
        // Generate star rating
        const stars = Array.from({ length: 5 }, (_, index) =>
            index < product.rating
                ? '<i class="fas fa-star"></i>'
                : '<i class="far fa-star"></i>'
        ).join("");

        // Generate product card HTML
        const productHTML = `
            <div class="pro">
                <img src="${product.image}" alt="${product.name}">
                <div class="des">
                    <span>${product.brand}</span>
                    <h5>${product.name}</h5>
                    <div class="star">${stars}</div>
                    <h4>${product.price}</h4>
                </div>
                <a href="#"><i class="fas fa-cart-shopping cart"></i></a>
            </div>
        `;

        // Append product card to container
        container.innerHTML += productHTML;
    });
};

// Call the function to render products on page load
renderProducts();
