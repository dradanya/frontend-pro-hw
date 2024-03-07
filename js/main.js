// Sample product data with prices
const products = {
    bags: [
        { name: "Men bag", price: 50 },
        { name: "Lady bag", price: 40 },
        { name: "Formal bag", price: 60 },
        { name: "Fashion bag", price: 45 },
        { name: "New bag", price: 55 }
    ],
    pants: [
        { name: "Men pants", price: 30 },
        { name: "Women pants", price: 35 },
        { name: "Casual pants", price: 25 },
        { name: "Sport pants", price: 40 },
        { name: "Brand pants", price: 50 }
    ],
    shirts: [
        { name: "Men shirt", price: 20 },
        { name: "Women shirt", price: 25 },
        { name: "Formal shirt", price: 30 },
        { name: "Sport shirt", price: 35 },
        { name: "Work shirt", price: 40 }
    ],
    hats: [
        { name: "Sun hat", price: 15 },
        { name: "Winter hat", price: 20 },
        { name: "Baseball hat", price: 18 },
        { name: "Men hat", price: 25 },
        { name: "Women hat", price: 22 }
    ]
};

// Function to show products of a specific category
function showProducts(category) {
    const productsList = document.getElementById('products_list');
    productsList.innerHTML = ''; // Clear previous products

    const productList = products[category];
    if (!productList) return;

    productList.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('prstyle');
        productElement.textContent = `${product.name} - $${product.price}`;
        productElement.addEventListener('click', () => showProductInfo(product));
        productsList.appendChild(productElement);
    });
}

// Function to show product information
function showProductInfo(product) {
    const informationBlock = document.getElementById('information_block');
    informationBlock.innerHTML = ''; // Clear previous information

    const productInfo = document.createElement('div');
    productInfo.textContent = `Current price :  ${product.name} - $${product.price}`;
    
    const buyButton = document.createElement('button');
    buyButton.classList.add('buyButton');
    buyButton.textContent = 'Buy';
    buyButton.addEventListener('click', () => {
        alert(`You have bought ${product.name} for $${product.price}`);
        informationBlock.innerHTML = ''; // Clear product information after buying
    });

    informationBlock.appendChild(productInfo);
    informationBlock.appendChild(buyButton);
}
