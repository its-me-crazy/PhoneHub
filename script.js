"use strict";


/* =========================================
   PHONE DATA
========================================= */

const phones = [

    {
        id: 1,
        brand: "Apple",
        name: "iPhone 17 Pro Max",
        price: 149999,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=600",
        specs: '6.9" OLED • 12GB RAM • 256GB • 5G',
        description:
            "Premium Apple flagship smartphone with powerful performance and an advanced camera system."
    },

    {
        id: 2,
        brand: "Apple",
        name: "iPhone 17",
        price: 89999,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=600",
        specs: '6.3" OLED • 8GB RAM • 128GB • 5G',
        description:
            "Powerful and compact Apple smartphone."
    },

    {
        id: 3,
        brand: "Samsung",
        name: "Galaxy S26 Ultra",
        price: 139999,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=600",
        specs: '6.9" AMOLED • 12GB RAM • 256GB • 5G',
        description:
            "Samsung flagship with a premium AMOLED display and professional camera system."
    },

    {
        id: 4,
        brand: "Samsung",
        name: "Galaxy S26",
        price: 79999,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1610792516307-ea5acd9c3b1b?w=600",
        specs: '6.2" AMOLED • 12GB RAM • 256GB • 5G',
        description:
            "High-performance Samsung smartphone for everyday use."
    },

    {
        id: 5,
        brand: "OnePlus",
        name: "OnePlus 14",
        price: 69999,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600",
        specs: '6.7" AMOLED • 12GB RAM • 256GB • 5G',
        description:
            "Fast OnePlus flagship with a smooth display and high-performance hardware."
    },

    {
        id: 6,
        brand: "OnePlus",
        name: "OnePlus Nord 6",
        price: 39999,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=600",
        specs: '6.6" AMOLED • 8GB RAM • 128GB • 5G',
        description:
            "Affordable OnePlus smartphone focused on performance."
    },

    {
        id: 7,
        brand: "Google",
        name: "Pixel 10 Pro XL",
        price: 109999,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600",
        specs: '6.8" OLED • 16GB RAM • 256GB • 5G',
        description:
            "Google smartphone featuring AI-focused software and computational photography."
    },

    {
        id: 8,
        brand: "Xiaomi",
        name: "Xiaomi 16 Ultra",
        price: 89999,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600",
        specs: '6.8" AMOLED • 16GB RAM • 512GB • 5G',
        description:
            "High-end Xiaomi smartphone with powerful hardware."
    },

    {
        id: 9,
        brand: "Vivo",
        name: "Vivo X300 Pro",
        price: 79999,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=600",
        specs: '6.8" AMOLED • 12GB RAM • 256GB • 5G',
        description:
            "Camera-focused Vivo smartphone."
    },

    {
        id: 10,
        brand: "Oppo",
        name: "Oppo Find X9 Pro",
        price: 84999,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=600",
        specs: '6.7" AMOLED • 12GB RAM • 256GB • 5G',
        description:
            "Premium Oppo smartphone with powerful cameras."
    },

    {
        id: 11,
        brand: "Realme",
        name: "Realme GT 8 Pro",
        price: 54999,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1592286927505-2fd0c0c9e8f6?w=600",
        specs: '6.7" AMOLED • 12GB RAM • 256GB • 5G',
        description:
            "Performance-oriented Realme smartphone."
    },

    {
        id: 12,
        brand: "Motorola",
        name: "Motorola Edge 70 Ultra",
        price: 64999,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?w=600",
        specs: '6.7" pOLED • 12GB RAM • 256GB • 5G',
        description:
            "Premium Motorola smartphone with a clean Android experience."
    },

    {
        id: 13,
        brand: "Nothing",
        name: "Nothing Phone 4 Pro",
        price: 59999,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=600",
        specs: '6.7" AMOLED • 12GB RAM • 256GB • 5G',
        description:
            "Distinctive smartphone featuring Nothing's unique design."
    },

    {
        id: 14,
        brand: "Samsung",
        name: "Galaxy A57 5G",
        price: 42999,
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=600",
        specs: '6.6" AMOLED • 8GB RAM • 128GB • 5G',
        description:
            "Balanced Samsung smartphone for everyday users."
    },

    {
        id: 15,
        brand: "OnePlus",
        name: "OnePlus 14R",
        price: 49999,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=600",
        specs: '6.7" AMOLED • 12GB RAM • 256GB • 5G',
        description:
            "Powerful OnePlus smartphone with excellent performance."
    },

    {
        id: 16,
        brand: "Xiaomi",
        name: "Redmi Note 15 Pro+",
        price: 34999,
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?w=600",
        specs: '6.7" AMOLED • 8GB RAM • 256GB • 5G',
        description:
            "Feature-packed Redmi smartphone at a competitive price."
    },

    {
        id: 17,
        brand: "Apple",
        name: "iPhone 16 Pro Max",
        price: 134999,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=600",
        specs: '6.9" OLED • 8GB RAM • 256GB • 5G',
        description:
            "Premium iPhone with excellent performance and camera capabilities."
    },

    {
        id: 18,
        brand: "Samsung",
        name: "Galaxy Z Fold",
        price: 159999,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=600",
        specs: '7.6" AMOLED • 12GB RAM • 512GB • 5G',
        description:
            "Large foldable Samsung smartphone designed for productivity."
    },

    {
        id: 19,
        brand: "Google",
        name: "Pixel Pro",
        price: 99999,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600",
        specs: '6.7" OLED • 12GB RAM • 256GB • 5G',
        description:
            "Google smartphone with clean Android software."
    },

    {
        id: 20,
        brand: "Motorola",
        name: "Moto Edge",
        price: 44999,
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?w=600",
        specs: '6.7" pOLED • 8GB RAM • 256GB • 5G',
        description:
            "Motorola smartphone with a premium display and smooth Android experience."
    }

];


/* =========================================
   STATE
========================================= */

let currentPhones = [...phones];

let currentBrand = "All";


let cart = loadStorage(
    "phoneCart",
    []
);

let wishlist = loadStorage(
    "phoneWishlist",
    []
);


/* =========================================
   HELPERS
========================================= */

function loadStorage(key, fallback) {

    try {

        const saved =
            localStorage.getItem(key);

        if (!saved) {
            return fallback;
        }

        const data =
            JSON.parse(saved);

        return data;

    } catch (error) {

        console.warn(
            "Storage error:",
            error
        );

        return fallback;
    }
}


function saveStorage(key, value) {

    try {

        localStorage.setItem(
            key,
            JSON.stringify(value)
        );

    } catch (error) {

        console.warn(
            "Could not save storage:",
            error
        );
    }
}


function formatPrice(price) {

    return Number(price).toLocaleString(
        "en-IN"
    );
}


/* =========================================
   DISPLAY PHONES
========================================= */

function displayPhones(list) {

    const grid =
        document.getElementById("phoneGrid");

    const resultCount =
        document.getElementById("resultCount");

    if (!grid) {
        console.error(
            "phoneGrid element not found."
        );
        return;
    }


    grid.innerHTML = "";


    if (resultCount) {

        resultCount.textContent =
            `Showing ${list.length} phone${list.length === 1 ? "" : "s"}`;
    }


    if (list.length === 0) {

        grid.innerHTML = `
            <div class="empty-state">

                <h2>😕 No phones found</h2>

                <p>
                    Try another phone name, brand,
                    or price range.
                </p>

            </div>
        `;

        return;
    }


    list.forEach(phone => {

        const liked =
            wishlist.includes(phone.id);


        const card =
            document.createElement("article");

        card.className =
            "phone-card";


        card.innerHTML = `

            <div class="phone-image">

                <img
                    src="${phone.image}"
                    alt="${phone.name}"
                    loading="lazy"
                    onerror="imageError(this)"
                >

                <button
                    class="heart"
                    type="button"
                    data-wishlist="${phone.id}"
                    aria-label="Add to wishlist"
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
                    ₹${formatPrice(phone.price)}
                </div>

                <div class="card-buttons">

                    <button
                        class="details"
                        type="button"
                        data-details="${phone.id}"
                    >
                        Details
                    </button>

                    <button
                        class="add-cart"
                        type="button"
                        data-cart="${phone.id}"
                    >
                        🛒 Add
                    </button>

                </div>

            </div>
        `;


        grid.appendChild(card);

    });

}


/* =========================================
   IMAGE FALLBACK
========================================= */

function imageError(img) {

    img.onerror = null;

    img.src =
        "https://dummyimage.com/500x600/e5e7eb/111827&text=Phone";
}


/* =========================================
   FILTER
========================================= */

function applyFilters() {

    const searchInput =
        document.getElementById("searchInput");

    const minInput =
        document.getElementById("minPrice");

    const maxInput =
        document.getElementById("maxPrice");


    const search =
        searchInput
            ? searchInput.value.trim().toLowerCase()
            : "";


    const min =
        minInput && minInput.value !== ""
            ? Number(minInput.value)
            : 0;


    const max =
        maxInput && maxInput.value !== ""
            ? Number(maxInput.value)
            : Infinity;


    currentPhones =
        phones.filter(phone => {

            const matchesSearch =
                !search ||
                phone.name
                    .toLowerCase()
                    .includes(search) ||
                phone.brand
                    .toLowerCase()
                    .includes(search);


            const matchesBrand =
                currentBrand === "All" ||
                phone.brand === currentBrand;


            const matchesPrice =
                phone.price >= min &&
                phone.price <= max;


            return (
                matchesSearch &&
                matchesBrand &&
                matchesPrice
            );

        });


    sortCurrentList();
}


/* =========================================
   SEARCH
========================================= */

function searchPhones() {

    applyFilters();

}


/* =========================================
   BRAND FILTER
========================================= */

function filterBrand(brand) {

    currentBrand =
        brand || "All";


    document
        .querySelectorAll(".brand-btn")
        .forEach(button => {

            button.classList.toggle(
                "active",
                button.dataset.brand === currentBrand
            );

        });


    applyFilters();


    scrollToPhones();
}


/* =========================================
   SORT
========================================= */

function sortPhones() {

    sortCurrentList();

}


function sortCurrentList() {

    const select =
        document.getElementById("sortSelect");

    const sort =
        select
            ? select.value
            : "default";


    if (sort === "low") {

        currentPhones.sort(
            (a, b) =>
                a.price - b.price
        );

    } else if (sort === "high") {

        currentPhones.sort(
            (a, b) =>
                b.price - a.price
        );

    } else if (sort === "rating") {

        currentPhones.sort(
            (a, b) =>
                b.rating - a.rating
        );

    } else if (sort === "name") {

        currentPhones.sort(
            (a, b) =>
                a.name.localeCompare(
                    b.name
                )
        );

    } else {

        currentPhones.sort(
            (a, b) =>
                a.id - b.id
        );

    }


    displayPhones(
        currentPhones
    );
}


/* =========================================
   PHONE DETAILS
========================================= */

function showDetails(id) {

    const phone =
        phones.find(
            item => item.id === Number(id)
        );


    if (!phone) {
        return;
    }


    const modalBody =
        document.getElementById("modalBody");


    modalBody.innerHTML = `

        <div class="modal-phone">

            <img
                src="${phone.image}"
                alt="${phone.name}"
                onerror="imageError(this)"
            >

            <div>

                <div class="brand">
                    ${phone.brand}
                </div>

                <h2>
                    ${phone.name}
                </h2>

                <div class="rating">
                    ⭐ ${phone.rating} / 5
                </div>

                <div class="price">
                    ₹${formatPrice(phone.price)}
                </div>

                <div class="modal-specs">

                    <strong>
                        Specifications
                    </strong>

                    <p>
                        ${phone.specs}
                    </p>

                    <br>

                    <strong>
                        About
                    </strong>

                    <p>
                        ${phone.description}
                    </p>

                </div>

                <button
                    class="checkout"
                    type="button"
                    data-modal-cart="${phone.id}"
                >
                    🛒 Add To Cart
                </button>

            </div>

        </div>
    `;


    openModal(
        "phoneModal"
    );
}


/* =========================================
   MODAL
========================================= */

function openModal(id) {

    const modal =
        document.getElementById(id);

    if (!modal) {
        return;
    }

    modal.classList.add("show");

    modal.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.style.overflow =
        "hidden";
}


function closeModal() {

    closeSpecificModal(
        "phoneModal"
    );
}


function closeSpecificModal(id) {

    const modal =
        document.getElementById(id);

    if (!modal) {
        return;
    }

    modal.classList.remove("show");

    modal.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.style.overflow =
        "";
}


/* =========================================
   CART
========================================= */

function addToCart(id) {

    id = Number(id);


    const existing =
        cart.find(
            item => item.id === id
        );


    if (existing) {

        existing.quantity += 1;

    } else {

        cart.push({
            id: id,
            quantity: 1
        });

    }


    saveStorage(
        "phoneCart",
        cart
    );


    updateCounts();

    showToast(
        "Phone added to cart 🛒"
    );
}


function showCart() {

    const container =
        document.getElementById(
            "cartItems"
        );


    if (!container) {
        return;
    }


    container.innerHTML = "";


    let total = 0;


    if (cart.length === 0) {

        container.innerHTML = `
            <div class="empty-state">
                <h2>🛒 Cart is empty</h2>
                <p>Add a phone to your cart.</p>
            </div>
        `;

    } else {

        cart.forEach(item => {

            const phone =
                phones.find(
                    p => p.id === item.id
                );


            if (!phone) {
                return;
            }


            const itemTotal =
                phone.price *
                item.quantity;


            total += itemTotal;


            container.innerHTML += `

                <div class="cart-row">

                    <div>

                        <strong>
                            ${phone.name}
                        </strong>

                        <br>

                        ₹${formatPrice(phone.price)}
                        × ${item.quantity}

                    </div>

                    <button
                        type="button"
                        data-remove-cart="${phone.id}"
                    >
                        Remove
                    </button>

                </div>
            `;

        });

    }


    document.getElementById(
        "cartTotal"
    ).textContent =
        formatPrice(total);


    openModal(
        "cartModal"
    );
}


function removeFromCart(id) {

    id = Number(id);


    cart =
        cart.filter(
            item => item.id !== id
        );


    saveStorage(
        "phoneCart",
        cart
    );


    updateCounts();

    showCart();
}


function closeCart() {

    closeSpecificModal(
        "cartModal"
    );
}


/* =========================================
   WISHLIST
========================================= */

function toggleWishlist(id) {

    id = Number(id);


    if (
        wishlist.includes(id)
    ) {

        wishlist =
            wishlist.filter(
                item => item !== id
            );

    } else {

        wishlist.push(id);

    }


    saveStorage(
        "phoneWishlist",
        wishlist
    );


    updateCounts();

    displayPhones(
        currentPhones
    );
}


function showWishlist() {

    const container =
        document.getElementById(
            "wishlistItems"
        );


    if (!container) {
        return;
    }


    container.innerHTML = "";


    if (wishlist.length === 0) {

        container.innerHTML = `
            <div class="empty-state">
                <h2>❤️ Wishlist is empty</h2>
                <p>
                    Tap the heart on a phone
                    to save it.
                </p>
            </div>
        `;

    } else {

        wishlist.forEach(id => {

            const phone =
                phones.find(
                    p => p.id === id
                );


            if (!phone) {
                return;
            }


            container.innerHTML += `

                <div class="cart-row">

                    <div>

                        <strong>
                            ${phone.name}
                        </strong>

                        <br>

                        ₹${formatPrice(
                            phone.price
                        )}

                    </div>

                    <button
                        type="button"
                        data-remove-wishlist="${phone.id}"
                    >
                        Remove
                    </button>

                </div>
            `;

        });

    }


    openModal(
        "wishlistModal"
    );
}


function closeWishlist() {

    closeSpecificModal(
        "wishlistModal"
    );
}


/* =========================================
   COUNTERS
========================================= */

function updateCounts() {

    const cartCount =
        document.getElementById(
            "cartCount"
        );


    const wishlistCount =
        document.getElementById(
            "wishlistCount"
        );


    if (cartCount) {

        cartCount.textContent =
            cart.reduce(
                (sum, item) =>
                    sum + Number(item.quantity),
                0
            );

    }


    if (wishlistCount) {

        wishlistCount.textContent =
            wishlist.length;

    }
}


/* =========================================
   DARK MODE
========================================= */

function toggleTheme() {

    document.body.classList.toggle(
        "dark"
    );


    const theme =
        document.body.classList.contains(
            "dark"
        )
            ? "dark"
            : "light";


    saveStorage(
        "phoneTheme",
        theme
    );


    updateThemeButton();
}


function updateThemeButton() {

    const button =
        document.getElementById(
            "themeButton"
        );


    if (!button) {
        return;
    }


    button.textContent =
        document.body.classList.contains(
            "dark"
        )
            ? "☀️"
            : "🌙";
}


/* =========================================
   SCROLL
========================================= */

function scrollToPhones() {

    const section =
        document.getElementById(
            "phonesSection"
        );


    if (!section) {
        return;
    }


    section.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}


/* =========================================
   CLEAR FILTERS
========================================= */

function clearFilters() {

    const search =
        document.getElementById(
            "searchInput"
        );

    const min =
        document.getElementById(
            "minPrice"
        );

    const max =
        document.getElementById(
            "maxPrice"
        );

    const sort =
        document.getElementById(
            "sortSelect"
        );


    if (search) {
        search.value = "";
    }

    if (min) {
        min.value = "";
    }

    if (max) {
        max.value = "";
    }

    if (sort) {
        sort.value = "default";
    }


    currentBrand = "All";


    document
        .querySelectorAll(
            ".brand-btn"
        )
        .forEach(button => {

            button.classList.toggle(
                "active",
                button.dataset.brand === "All"
            );

        });


    applyFilters();
}


/* =========================================
   CHECKOUT
========================================= */

function checkout() {

    if (cart.length === 0) {

        showToast(
            "Your cart is empty."
        );

        return;
    }


    showToast(
        "Checkout system is ready to connect with a payment gateway."
    );
}


/* =========================================
   TOAST
========================================= */

function showToast(message) {

    let toast =
        document.getElementById(
            "phoneHubToast"
        );


    if (!toast) {

        toast =
            document.createElement(
                "div"
            );

        toast.id =
            "phoneHubToast";


        toast.style.position =
            "fixed";

        toast.style.bottom =
            "25px";

        toast.style.left =
            "50%";

        toast.style.transform =
            "translateX(-50%)";

        toast.style.background =
            "#111827";

        toast.style.color =
            "white";

        toast.style.padding =
            "12px 20px";

        toast.style.borderRadius =
            "10px";

        toast.style.zIndex =
            "9999";

        toast.style.boxShadow =
            "0 8px 25px rgba(0,0,0,.25)";

        document.body.appendChild(
            toast
        );
    }


    toast.textContent =
        message;


    clearTimeout(
        toast.hideTimer
    );


    toast.style.display =
        "block";


    toast.hideTimer =
        setTimeout(
            () => {
                toast.style.display =
                    "none";
            },
            2500
        );
}


/* =========================================
   EVENT LISTENERS
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        const searchInput =
            document.getElementById(
                "searchInput"
            );


        const searchButton =
            document.getElementById(
                "searchButton"
            );


        const exploreButton =
            document.getElementById(
                "exploreButton"
            );


        const themeButton =
            document.getElementById(
                "themeButton"
            );


        const cartButton =
            document.getElementById(
                "cartButton"
            );


        const wishlistButton =
            document.getElementById(
                "wishlistButton"
            );


        const sortSelect =
            document.getElementById(
                "sortSelect"
            );


        const minPrice =
            document.getElementById(
                "minPrice"
            );


        const maxPrice =
            document.getElementById(
                "maxPrice"
            );


        const clearButton =
            document.getElementById(
                "clearFilters"
            );


        /* SEARCH */

        if (searchInput) {

            searchInput.addEventListener(
                "input",
                searchPhones
            );

            searchInput.addEventListener(
                "keydown",
                event => {

                    if (
                        event.key === "Enter"
                    ) {

                        searchPhones();

                        scrollToPhones();
                    }

                }
            );
        }


        if (searchButton) {

            searchButton.addEventListener(
                "click",
                () => {

                    searchPhones();

                    scrollToPhones();

                }
            );
        }


        /* EXPLORE */

        if (exploreButton) {

            exploreButton.addEventListener(
                "click",
                scrollToPhones
            );

        }


        /* THEME */

        if (themeButton) {

            themeButton.addEventListener(
                "click",
                toggleTheme
            );

        }


        /* CART */

        if (cartButton) {

            cartButton.addEventListener(
                "click",
                showCart
            );

        }


        /* WISHLIST */

        if (wishlistButton) {

            wishlistButton.addEventListener(
                "click",
                showWishlist
            );

        }


        /* SORT */

        if (sortSelect) {

            sortSelect.addEventListener(
                "change",
                sortPhones
            );

        }


        /* PRICE FILTERS */

        if (minPrice) {

            minPrice.addEventListener(
                "input",
                applyFilters
            );

        }


        if (maxPrice) {

            maxPrice.addEventListener(
                "input",
                applyFilters
            );

        }


        /* CLEAR */

        if (clearButton) {

            clearButton.addEventListener(
                "click",
                clearFilters
            );

        }


        /* BRAND BUTTONS */

        document
            .querySelectorAll(
                ".brand-btn"
            )
            .forEach(button => {

                button.addEventListener(
                    "click",
                    () => {

                        filterBrand(
                            button.dataset.brand
                        );

                    }
                );

            });


        /* PHONE GRID */

        const grid =
            document.getElementById(
                "phoneGrid"
            );


        if (grid) {

            grid.addEventListener(
                "click",
                event => {

                    const wishlistButton =
                        event.target.closest(
                            "[data-wishlist]"
                        );


                    const detailsButton =
                        event.target.closest(
                            "[data-details]"
                        );


                    const cartButton =
                        event.target.closest(
                            "[data-cart]"
                        );


                    if (wishlistButton) {

                        toggleWishlist(
                            Number(
                                wishlistButton.dataset.wishlist
                            )
                        );

                        return;
                    }


                    if (detailsButton) {

                        showDetails(
                            Number(
                                detailsButton.dataset.details
                            )
                        );

                        return;
                    }


                    if (cartButton) {

                        addToCart(
                            Number(
                                cartButton.dataset.cart
                            )
                        );

                    }

                }
            );

        }


        /* MODAL BUTTONS */

        document
            .getElementById(
                "closePhoneModal"
            )
            ?.addEventListener(
                "click",
                closeModal
            );


        document
            .getElementById(
                "closeCartModal"
            )
            ?.addEventListener(
                "click",
                closeCart
            );


        document
            .getElementById(
                "closeWishlistModal"
            )
            ?.addEventListener(
                "click",
                closeWishlist
            );


        /* CART REMOVE */

        document
            .getElementById(
                "cartItems"
            )
            ?.addEventListener(
                "click",
                event => {

                    const button =
                        event.target.closest(
                            "[data-remove-cart]"
                        );


                    if (button) {

                        removeFromCart(
                            Number(
                                button.dataset.removeCart
                            )
                        );

                    }

                }
            );


        /* WISHLIST REMOVE */

        document
            .getElementById(
                "wishlistItems"
            )
            ?.addEventListener(
                "click",
                event => {

                    const button =
                        event.target.closest(
                            "[data-remove-wishlist]"
                        );


                    if (button) {

                        toggleWishlist(
                            Number(
                                button.dataset.removeWishlist
                            )
                        );

                        showWishlist();

                    }

                }
            );


        /* DETAILS ADD TO CART */

        document
            .getElementById(
                "modalBody"
            )
            ?.addEventListener(
                "click",
                event => {

                    const button =
                        event.target.closest(
                            "[data-modal-cart]"
                        );


                    if (button) {

                        addToCart(
                            Number(
                                button.dataset.modalCart
                            )
                        );

                        closeModal();

                    }

                }
            );


        /* CHECKOUT */

        document
            .getElementById(
                "checkoutButton"
            )
            ?.addEventListener(
                "click",
                checkout
            );


        /* CLOSE MODALS BY BACKDROP */

        document
            .querySelectorAll(
                ".modal"
            )
            .forEach(modal => {

                modal.addEventListener(
                    "click",
                    event => {

                        if (
                            event.target === modal
                        ) {

                            closeSpecificModal(
                                modal.id
                            );

                        }

                    }
                );

            });


        /* ESCAPE */

        document.addEventListener(
            "keydown",
            event => {

                if (
                    event.key === "Escape"
                ) {

                    closeModal();

                    closeCart();

                    closeWishlist();

                }

            }
        );


        /* LOAD THEME */

        const savedTheme =
            loadStorage(
                "phoneTheme",
                "light"
            );


        if (
            savedTheme === "dark"
        ) {

            document.body.classList.add(
                "dark"
            );

        }


        updateThemeButton();


        /* INITIAL DISPLAY */

        displayPhones(
            phones
        );


        updateCounts();

    }
);
