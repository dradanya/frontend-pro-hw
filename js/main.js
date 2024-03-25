document.addEventListener('DOMContentLoaded', function () {
    const products = {
        Bags: [
            { name: "Men bag", price: 50 },
            { name: "Lady bag", price: 40 },
            { name: "Formal bag", price: 60 },
            { name: "Fashion bag", price: 45 },
            { name: "New bag", price: 55 }
        ],
        Pants: [
            { name: "Men pants", price: 30 },
            { name: "Women pants", price: 35 },
            { name: "Casual pants", price: 25 },
            { name: "Sport pants", price: 40 },
            { name: "Brand pants", price: 50 }
        ],
        Shirts: [
            { name: "Men shirt", price: 20 },
            { name: "Women shirt", price: 25 },
            { name: "Formal shirt", price: 30 },
            { name: "Sport shirt", price: 35 },
            { name: "Work shirt", price: 40 }
        ],
        Hats: [
            { name: "Sun hat", price: 15 },
            { name: "Winter hat", price: 20 },
            { name: "Baseball hat", price: 18 },
            { name: "Men hat", price: 25 },
            { name: "Women hat", price: 22 }
        ],
        Shoes: [
            { name: "Sport shoes", price: 25 },
            { name: "Winter shoes", price: 35 },
            { name: "Football shoes", price: 40 },
            { name: "Men shoes", price: 28 },
            { name: "Women shoes", price: 27 }
        ]
    };

    const categoryList = document.querySelector('#category_side');
    const productsList = document.querySelector('#products_list');
    const informationBlock = document.querySelector('#information_block');
    const ordersInfo = document.querySelector('.orders_info');

    function showCategories() {
        Object.keys(products).forEach(cat => {
            const categoryItem = document.createElement('div');
            categoryItem.classList.add('category_style');
            categoryItem.textContent = cat;
            categoryItem.addEventListener('click', () => showProducts(cat));
            categoryList.appendChild(categoryItem);
        });
    }

    function showProducts(category) {
        productsList.innerHTML = '';

        products[category].forEach(product => {
            const productElement = document.createElement('div');
            productElement.classList.add('product_style');
            productElement.textContent = `${product.name} - $${product.price}`;
            productElement.addEventListener('click', () => showProductInfo(product));
            productsList.appendChild(productElement);
        });
    }

    function showProductInfo(product) {
        informationBlock.innerHTML = '';

        const productInfo = document.createElement('div');
        productInfo.classList.add('text_style')
        productInfo.textContent = `Current price : ${product.name} - $${product.price}`;

        const buyButton = document.createElement('button');
        buyButton.classList.add('buyButton');
        buyButton.textContent = 'Buy';
        buyButton.addEventListener('click', () => {
            const footer = document.querySelector('#footer');
            footer.style.display = 'flex';
        });

        informationBlock.appendChild(productInfo);
        informationBlock.appendChild(buyButton);
    }

    showCategories();

    document.getElementById("form").addEventListener("submit", function(event) {
        event.preventDefault();
        
        const userName = document.getElementById("user_name").value.trim();
        const userSurname = document.getElementById("user_surname").value.trim();
        const userSelect = document.getElementById("user_select").value;
        const userDepartment = document.getElementById("user_department").value.trim();
        const userPurchase = document.getElementById("user_purchase").value;
        const userAmount = document.getElementById("user_amount").value.trim();
        const userComment = document.getElementById("user_comment").value.trim();
        
        if (userName === '' || userSurname === '' || userSelect === 'Select a city' || userDepartment === '' || userPurchase === 'Choose your payment method' || userAmount === '') {
            alert("Please fill in all required fields!");
            return;
        }

        submitOrder(userName, userSurname, userSelect, userDepartment, userPurchase, userAmount, userComment);
    });

    document.getElementById("myOrdersBtn").addEventListener("click", showMyOrders);

    function showMyOrders() {
        const orders = JSON.parse(localStorage.getItem("orders")) || [];
        informationBlock.innerHTML = ''; // Clear information block
        productsList.innerHTML = ''; // Clear products list

        ordersInfo.innerHTML = ''; // Clear orders info

        orders.forEach(order => {
            const orderElement = document.createElement('div');
            orderElement.classList.add('order');
            orderElement.textContent = `Date: ${order.date}`; // Removed price from here

            const detailsBtn = document.createElement('button');
            detailsBtn.textContent = 'Details';
            detailsBtn.classList.add('detailsBtn')
            detailsBtn.addEventListener('click', () => showOrderDetails(order));
            orderElement.appendChild(detailsBtn);

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.classList.add('deleteBtn');
            deleteBtn.addEventListener('click', () => deleteOrder(order));
            orderElement.appendChild(deleteBtn);

            ordersInfo.appendChild(orderElement);
        });
    }

    function showOrderDetails(order) {
        ordersInfo.innerHTML = ''; // Clear orders info

        const detailsElement = document.createElement('div');
        detailsElement.classList.add('orderDetails');

        let detailsString = 'Order details:<br>';
        for (const key in order.details) {
            detailsString += `<strong>${key}:</strong> ${order.details[key]}<br>`;
        }
        detailsElement.innerHTML = detailsString;

        ordersInfo.appendChild(detailsElement);
    }

    function deleteOrder(order) {
        const orders = JSON.parse(localStorage.getItem("orders")) || [];
        const filteredOrders = orders.filter(o => o.date !== order.date);
        localStorage.setItem("orders", JSON.stringify(filteredOrders));

        showMyOrders();
    }

    function submitOrder(name, surname, city, department, paymentMethod, amount, comment) {
        const order = {
            date: new Date().toLocaleString(),
            details: {
                Name: name,
                Surname: surname,
                City: city,
                Department: department,
                Payment_Method: paymentMethod,
                Amount: amount,
                Comment: comment
            }
        };

        const orders = JSON.parse(localStorage.getItem("orders")) || [];
        orders.push(order);
        localStorage.setItem("orders", JSON.stringify(orders));

        productsList.innerHTML ='';
        informationBlock.innerHTML ='';
        document.getElementById("footer").style.display = 'none';
    }
});
