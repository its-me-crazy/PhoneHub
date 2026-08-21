const phones = [

    {
        id: 1,
        brand: "Apple",
        name: "iPhone 17 Pro Max",
        price: 149999,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=600",
        specs: "6.9\" OLED • 12GB RAM • 256GB • 5G",
        description: "Premium Apple flagship smartphone with a powerful processor and advanced camera system."
    },

    {
        id: 2,
        brand: "Apple",
        name: "iPhone 17",
        price: 89999,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=600",
        specs: "6.3\" OLED • 8GB RAM • 128GB • 5G",
        description: "Powerful and compact iPhone with excellent performance and camera quality."
    },

    {
        id: 3,
        brand: "Samsung",
        name: "Galaxy S26 Ultra",
        price: 139999,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=600",
        specs: "6.9\" AMOLED • 12GB RAM • 256GB • 5G",
        description: "Samsung flagship featuring a premium AMOLED display and professional camera system."
    },

    {
        id: 4,
        brand: "Samsung",
        name: "Galaxy S26",
        price: 79999,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1610792516307-ea5acd9c3b1b?w=600",
        specs: "6.2\" AMOLED • 12GB RAM • 256GB • 5G",
        description: "High-performance Samsung smartphone for everyday use."
    },

    {
        id: 5,
        brand: "OnePlus",
        name: "OnePlus 14",
        price: 69999,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600",
        specs: "6.7\" AMOLED • 12GB RAM • 256GB • 5G",
        description: "Fast OnePlus flagship with smooth display and high-performance hardware."
    },

    {
        id: 6,
        brand: "OnePlus",
        name: "OnePlus Nord 6",
        price: 39999,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=600",
        specs: "6.6\" AMOLED • 8GB RAM • 128GB • 5G",
        description: "Affordable performance-focused smartphone."
    },

    {
        id: 7,
        brand: "Google",
        name: "Pixel 10 Pro XL",
        price: 109999,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600",
        specs: "6.8\" OLED • 16GB RAM • 256GB • 5G",
        description: "Google flagship with advanced AI features and computational photography."
    },

    {
        id: 8,
        brand: "Xiaomi",
        name: "Xiaomi 16 Ultra",
        price: 89999,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600",
        specs: "6.8\" AMOLED • 16GB RAM • 512GB • 5G",
        description: "High-end Xiaomi phone with powerful hardware."
    },

    {
        id: 9,
        brand: "Vivo",
        name: "Vivo X300 Pro",
        price: 79999,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=600",
        specs: "6.8\" AMOLED • 12GB RAM • 256GB • 5G",
        description: "Camera-focused Vivo flagship smartphone."
    },

    {
        id: 10,
        brand: "Oppo",
        name: "Oppo Find X9 Pro",
        price: 84999,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=600",
        specs: "6.7\" AMOLED • 12GB RAM • 256GB • 5G",
        description: "Premium Oppo smartphone with powerful cameras."
    },

    {
        id: 11,
        brand: "Realme",
        name: "Realme GT 8 Pro",
        price: 54999,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1592286927505-2fd0c0c9e8f6?w=600",
        specs: "6.7\" AMOLED • 12GB RAM • 256GB • 5G",
        description: "Performance-oriented Realme smartphone."
    },

    {
        id: 12,
        brand: "Motorola",
        name: "Motorola Edge 70 Ultra",
        price: 64999,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?w=600",
        specs: "6.7\" pOLED • 12GB RAM • 256GB • 5G",
        description: "Premium Motorola phone with clean Android experience."
    },

    {
        id: 13,
        brand: "Nothing",
        name: "Nothing Phone 4 Pro",
        price: 59999,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=600",
        specs: "6.7\" AMOLED • 12GB RAM • 256GB • 5G",
        description: "Distinctive smartphone with Nothing's unique design."
    },

    {
        id: 14,
        brand: "Samsung",
        name: "Galaxy A57 5G",
        price: 42999,
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=600",
        specs: "6.6\" AMOLED • 8GB RAM • 128GB • 5G",
        description: "Balanced Samsung smartphone for everyday users."
    },

    {
        id: 15,
        brand: "OnePlus",
        name: "OnePlus 14R",
        price: 49999,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=600",
        specs: "6.7\" AMOLED • 12GB RAM • 256GB • 5G",
        description: "Powerful OnePlus smartphone with excellent performance."
    },

    {
        id: 16,
        brand: "Xiaomi",
        name: "Redmi Note 15 Pro+",
        price: 34999,
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?w=600",
        specs: "6.7\" AMOLED • 8GB RAM • 256GB • 5G",
        description: "Feature-packed Redmi smartphone at a competitive price."
    }

];


let currentPhones = [...phones];

let cart = JSON.parse(localStorage.getItem("phoneCart")) || [];

let wishlist =
    JSON.parse(localStorage.getItem("phoneWishlist")) || [];

let currentBrand = "All";


/* DISPLAY PHONES */

function displayPhones(list) {

    const grid = document.getElementById("phoneGrid");

    grid.innerHTML = "";

    document.getElementById("resultCount").textContent =
        `Showing ${list.length} phone${list.length !== 1 ? "s" : ""}`;


    if (list.length === 0) {

        grid.innerHTML = `
            <div style="grid-column:1/-1;text-align:center;padding:60px">
                <h2>😕 No phones found</h2>
                <p style="margin-top:10px">
                    Try another search or filter.
                </p>
            </div>
        `;

        return;
    }


    list.forEach(phone => {

        const liked = wishlist.includes(phone.id);

        const card = document.createElement("div");

        card.className = "phone-card";


        card.innerHTML = `

            <div class="phone-image">

                <img
                    src="${phone.image}"
                    alt="${phone.name}"
                    loading="lazy"
                    onerror="this.src='https://via.placeholder.com/300x350?text=Phone'"
                >

                <button
                    class="heart"
                    onclick="toggleWishlist(${phone.id})"
                >
                    ${liked ? "❤️" : "🤍"}
                </button>

            </div>


            <div class="phone-info">

                <div class="brand">
                    ${phone.brand}
                </div>

                <h3 class="phone-name">
                    ${phone.name}
                </h3>

                <div class="specs">
                    ${phone.specs}
                </div>

                <div class="rating">
                    ⭐ ${phone.rating}
                </div>

                <div class="price">
                    ₹${phone.price.toLocaleString("en-IN")}
                </div>

                <div class="card-buttons">

                    <button
                        class="details"
                        onclick="showDetails(${phone.id})"
                    >
                        Details
                    </button>

                    <button
                        class="add-cart"
                        onclick="addToCart(${phone.id})"
                    >
                        🛒 Add
                    </button>

                </div>

            </div>
        `;


        grid.appendChild(card);

    });

}


/* BRAND FILTER */

function filterBrand(brand) {

    currentBrand = brand;

    applyFilters();

}


/* SEARCH */

function searchPhones() {

    applyFilters();

}

document
    .getElementById("searchInput")
    .addEventListener("input", applyFilters);


/* FILTER */

function applyFilters() {

    const search =
        document
            .getElementById("searchInput")
            .value
            .toLowerCase();

    const min =
        Number(document.getElementById("minPrice").value) || 0;

    const max =
        Number(document.getElementById("maxPrice").value) || Infinity;


    currentPhones = phones.filter(phone => {

        const matchesSearch =
            phone.name.toLowerCase().includes(search) ||
            phone.brand.toLowerCase().includes(search);

        const matchesBrand =
            currentBrand === "All" ||
            phone.brand === currentBrand;

        const matchesPrice =
            phone.price >= min &&
            phone.price <= max;

        return matchesSearch &&
               matchesBrand &&
               matchesPrice;

    });


    sortCurrentList();

}


/* SORT */

function sortPhones() {

    sortCurrentList();

}


function sortCurrentList() {

    const sort =
        document.getElementById("sortSelect").value;


    if (sort === "low") {

        currentPhones.sort(
            (a,b) => a.price - b.price
        );

    }

    else if (sort === "high") {

        currentPhones.sort(
            (a,b) => b.price - a.price
        );

    }

    else if (sort === "rating") {

        currentPhones.sort(
            (a,b) => b.rating - a.rating
        );

    }

    else if (sort === "name") {

        currentPhones.sort(
            (a,b) => a.name.localeCompare(b.name)
        );

    }


    displayPhones(currentPhones);

}


/* DETAILS */

function showDetails(id) {

    const phone =
        phones.find(p => p.id === id);

    if (!phone) return;


    document.getElementById("modalBody").innerHTML = `

        <div class="modal-phone">

            <img
                src="${phone.image}"
                alt="${phone.name}"
            >

            <div>

                <div class="brand">
                    ${phone.brand}
                </div>

                <h2>${phone.name}</h2>

                <div class="rating">
                    ⭐ ${phone.rating} / 5
                </div>

                <div class="price">
                    ₹${phone.price.toLocaleString("en-IN")}
                </div>

                <div class="modal-specs">

                    <strong>Specifications</strong>

                    <p>${phone.specs}</p>

                    <br>

                    <strong>About</strong>

                    <p>
                        ${phone.description}
                    </p>

                </div>

                <button
                    class="checkout"
                    onclick="addToCart(${phone.id}); closeModal();"
                >
                    🛒 Add To Cart
                </button>

            </div>

        </div>
    `;


    document.getElementById("phoneModal").style.display = "flex";

}


function closeModal() {

    document.getElementById("phoneModal").style.display = "none";

}


/* CART */

function addToCart(id) {

    const existing =
        cart.find(item => item.id === id);


    if (existing) {

        existing.quantity++;

    } else {

        cart.push({
            id: id,
            quantity: 1
        });

    }


    saveCart();

    alert("Phone added to cart 🛒");

}


function saveCart() {

    localStorage.setItem(
        "phoneCart",
        JSON.stringify(cart)
    );

    updateCounts();

}


function showCart() {

    const container =
        document.getElementById("cartItems");

    container.innerHTML = "";


    if (cart.length === 0) {

        container.innerHTML =
            "<p>Your cart is empty.</p>";

    }


    let total = 0;


    cart.forEach(item => {

        const phone =
            phones.find(p => p.id === item.id);

        if (!phone) return;


        const itemTotal =
            phone.price * item.quantity;

        total += itemTotal;


        container.innerHTML += `

            <div class="cart-row">

                <div>

                    <strong>${phone.name}</strong>

                    <br>

                    ₹${phone.price.toLocaleString("en-IN")}
                    × ${item.quantity}

                </div>

                <button
                    onclick="removeFromCart(${phone.id})"
                >
                    Remove
                </button>

            </div>
        `;

    });


    document.getElementById("cartTotal").textContent =
        total.toLocaleString("en-IN");


    document.getElementById("cartModal").style.display =
        "flex";

}


function removeFromCart(id) {

    cart =
        cart.filter(item => item.id !== id);

    saveCart();

    showCart();

}


function closeCart() {

    document.getElementById("cartModal").style.display =
        "none";

}


/* WISHLIST */

function toggleWishlist(id) {

    if (wishlist.includes(id)) {

        wishlist =
            wishlist.filter(item => item !== id);

    } else {

        wishlist.push(id);

    }


    localStorage.setItem(
        "phoneWishlist",
        JSON.stringify(wishlist)
    );


    updateCounts();

    displayPhones(currentPhones);

}


function showWishlist() {

    const container =
        document.getElementById("wishlistItems");

    container.innerHTML = "";


    if (wishlist.length === 0) {

        container.innerHTML =
            "<p>Your wishlist is empty ❤️</p>";

    }


    wishlist.forEach(id => {

        const phone =
            phones.find(p => p.id === id);

        if (!phone) return;


        container.innerHTML += `

            <div class="cart-row">

                <div>

                    <strong>${phone.name}</strong>

                    <br>

                    ₹${phone.price.toLocaleString("en-IN")}

                </div>

                <button
                    onclick="toggleWishlist(${phone.id})"
                >
                    Remove
                </button>

            </div>

        `;

    });


    document.getElementById("wishlistModal").style.display =
        "flex";

}


function closeWishlist() {

    document.getElementById("wishlistModal").style.display =
        "none";

}


/* COUNTERS */

function updateCounts() {

    document.getElementById("cartCount").textContent =
        cart.reduce(
            (sum,item) => sum + item.quantity,
            0
        );


    document.getElementById("wishlistCount").textContent =
        wishlist.length;

}


/* DARK MODE */

function toggleTheme() {

    document.body.classList.toggle("dark");

    localStorage.setItem(
        "phoneTheme",
        document.body.classList.contains("dark")
            ? "dark"
            : "light"
    );

}


if (localStorage.getItem("phoneTheme") === "dark") {

    document.body.classList.add("dark");

}


/* SCROLL */

function scrollToPhones() {

    document
        .getElementById("phonesSection")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* CHECKOUT */

function checkout() {

    if (cart.length === 0) {

        alert("Your cart is empty.");

        return;

    }

    alert(
        "Checkout system is ready to connect with a payment gateway."
    );

}


/* CLOSE MODAL WHEN CLICKING OUTSIDE */

window.onclick = function(event) {

    if (event.target.classList.contains("modal")) {

        event.target.style.display = "none";

    }

};

/* INITIAL LOAD */

displayPhones(phones);

updateCounts();,
