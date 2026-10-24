// Smartphone Data Catalog
const phones = [
    {
        id: 1,
        name: "iPhone 17 Pro Max",
        brand: "Apple",
        price: 149999,
        originalPrice: 169999,
        discount: "12% OFF",
        rating: 4.9,
        ram: "12 GB RAM",
        storage: "256 GB",
        network: "5G",
        processor: "Apple A19 Pro",
        display: "6.9-inch Super Retina XDR OLED",
        battery: "4850 mAh",
        camera: "48MP + 48MP + 48MP Triple Rear",
        colors: [
            { name: "Titanium Black", hex: "#232323" },
            { name: "Titanium Natural", hex: "#b8b2a6" },
            { name: "Titanium Silver", hex: "#e3e3e3" }
        ],
        image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=600&q=80",
        badge: "Flagship"
    },
    {
        id: 2,
        name: "iPhone 17",
        brand: "Apple",
        price: 89999,
        originalPrice: 99999,
        discount: "10% OFF",
        rating: 4.8,
        ram: "8 GB RAM",
        storage: "128 GB",
        network: "5G",
        processor: "Apple A19 Bionic",
        display: "6.3-inch Super Retina XDR OLED",
        battery: "4000 mAh",
        camera: "48MP + 12MP Dual Rear",
        colors: [
            { name: "Space Black", hex: "#111111" },
            { name: "Starlight", hex: "#f8f5ee" },
            { name: "Deep Pink", hex: "#f43f5e" }
        ],
        image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=600&q=80",
        badge: "Trending"
    },
    {
        id: 3,
        name: "Galaxy S26 Ultra",
        brand: "Samsung",
        price: 139999,
        originalPrice: 159999,
        discount: "13% OFF",
        rating: 4.9,
        ram: "12 GB RAM",
        storage: "256 GB",
        network: "5G",
        processor: "Snapdragon 8 Gen 5",
        display: "6.8-inch Dynamic AMOLED 2X 120Hz",
        battery: "5000 mAh",
        camera: "200MP + 50MP + 50MP + 10MP",
        colors: [
            { name: "Titanium Gray", hex: "#6b7280" },
            { name: "Titanium Black", hex: "#1f2937" },
            { name: "Titanium Violet", hex: "#7c3aed" }
        ],
        image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=600&q=80",
        badge: "Best Camera"
    },
    {
        id: 4,
        name: "Galaxy S25 5G",
        brand: "Samsung",
        price: 74999,
        originalPrice: 84999,
        discount: "11% OFF",
        rating: 4.7,
        ram: "8 GB RAM",
        storage: "256 GB",
        network: "5G",
        processor: "Exynos 2500 / Snapdragon 8 Gen 4",
        display: "6.2-inch FHD+ Dynamic AMOLED 2X",
        battery: "4000 mAh",
        camera: "50MP + 12MP + 10MP",
        colors: [
            { name: "Onyx Black", hex: "#18181b" },
            { name: "Cobalt Violet", hex: "#4c1d95" }
        ],
        image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=600&q=80",
        badge: "Popular"
    },
    {
        id: 5,
        name: "OnePlus 13 5G",
        brand: "OnePlus",
        price: 64999,
        originalPrice: 69999,
        discount: "7% OFF",
        rating: 4.7,
        ram: "16 GB RAM",
        storage: "512 GB",
        network: "5G",
        processor: "Snapdragon 8 Gen 4",
        display: "6.82-inch QHD+ ProXDR AMOLED 120Hz",
        battery: "5400 mAh",
        camera: "50MP + 64MP + 48MP Hasselblad",
        colors: [
            { name: "Silky Black", hex: "#262626" },
            { name: "Emerald Green", hex: "#047857" }
        ],
        image: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=600&q=80",
        badge: "Fast Charge"
    },
    {
        id: 6,
        name: "Google Pixel 9 Pro",
        brand: "Google",
        price: 109999,
        originalPrice: 119999,
        discount: "8% OFF",
        rating: 4.6,
        ram: "16 GB RAM",
        storage: "128 GB",
        network: "5G",
        processor: "Google Tensor G4",
        display: "6.3-inch Super Actua LTPO OLED",
        battery: "4700 mAh",
        camera: "50MP + 48MP + 48MP Triple Rear",
        colors: [
            { name: "Obsidian", hex: "#0f172a" },
            { name: "Porcelain", hex: "#f1f5f9" },
            { name: "Hazel", hex: "#4d7c0f" }
        ],
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=600&q=80",
        badge: "Pure AI"
    },
    {
        id: 7,
        name: "Xiaomi 15 Ultra",
        brand: "Xiaomi",
        price: 89999,
        originalPrice: 99999,
        discount: "10% OFF",
        rating: 4.6,
        ram: "16 GB RAM",
        storage: "512 GB",
        network: "5G",
        processor: "Snapdragon 8 Gen 4",
        display: "6.73-inch WQHD+ AMOLED 120Hz",
        battery: "5300 mAh",
        camera: "50MP Leica Quad Camera System",
        colors: [
            { name: "Black Leather", hex: "#1c1917" },
            { name: "White Ceramic", hex: "#fafafa" }
        ],
        image: "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?auto=format&fit=crop&w=600&q=80",
        badge: "Leica Optics"
    },
    {
        id: 8,
        name: "Vivo X100 Pro",
        brand: "Vivo",
        price: 89999,
        originalPrice: 96999,
        discount: "7% OFF",
        rating: 4.6,
        ram: "16 GB RAM",
        storage: "512 GB",
        network: "5G",
        processor: "MediaTek Dimensity 9300",
        display: "6.78-inch LTPO AMOLED 120Hz",
        battery: "5400 mAh",
        camera: "50MP ZEISS 1-inch Main Sensor",
        colors: [
            { name: "Asteroid Black", hex: "#18181b" },
            { name: "Sunset Orange", hex: "#ea580c" }
        ],
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80",
        badge: "ZEISS Camera"
    },
    {
        id: 9,
        name: "Nothing Phone (2a)",
        brand: "Nothing",
        price: 23999,
        originalPrice: 25999,
        discount: "8% OFF",
        rating: 4.4,
        ram: "8 GB RAM",
        storage: "128 GB",
        network: "5G",
        processor: "MediaTek Dimensity 7200 Pro",
        display: "6.7-inch Flexible AMOLED 120Hz",
        battery: "5000 mAh",
        camera: "50MP + 50MP Dual Rear",
        colors: [
            { name: "Dark Glyph", hex: "#27272a" },
            { name: "White Glyph", hex: "#f4f4f5" }
        ],
        image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=600&q=80",
        badge: "Value Pick"
    },
    {
        id: 10,
        name: "Motorola Edge 50 Ultra",
        brand: "Motorola",
        price: 59999,
        originalPrice: 64999,
        discount: "7% OFF",
        rating: 4.5,
        ram: "12 GB RAM",
        storage: "512 GB",
        network: "5G",
        processor: "Snapdragon 8s Gen 3",
        display: "6.7-inch pOLED 144Hz",
        battery: "4500 mAh",
        camera: "50MP + 50MP + 64MP",
        colors: [
            { name: "Nordic Wood", hex: "#a16207" },
            { name: "Peach Fuzz", hex: "#f97316" }
        ],
        image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=600&q=80",
        badge: "Clean OS"
    },
    {
        id: 11,
        name: "OPPO Find X7 Ultra",
        brand: "Oppo",
        price: 79999,
        originalPrice: 89999,
        discount: "11% OFF",
        rating: 4.6,
        ram: "16 GB RAM",
        storage: "256 GB",
        network: "5G",
        processor: "Snapdragon 8 Gen 3",
        display: "6.82-inch AMOLED 120Hz",
        battery: "5000 mAh",
        camera: "50MP Quad Main Hasselblad",
        colors: [
            { name: "Ocean Blue", hex: "#0284c7" },
            { name: "Sepia Brown", hex: "#78350f" }
        ],
        image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=600&q=80",
        badge: "Dual Telephoto"
    },
    {
        id: 12,
        name: "Realme GT 6 5G",
        brand: "Realme",
        price: 40999,
        originalPrice: 44999,
        discount: "8% OFF",
        rating: 4.4,
        ram: "12 GB RAM",
        storage: "256 GB",
        network: "5G",
        processor: "Snapdragon 8s Gen 3",
        display: "6.78-inch 120Hz LTPO AMOLED",
        battery: "5500 mAh",
        camera: "50MP Sony LYT-808 + 50MP",
        colors: [
            { name: "Fluid Silver", hex: "#d1d5db" },
            { name: "Razor Green", hex: "#15803d" }
        ],
        image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=600&q=80",
        badge: "Super Bright"
    }
];

// App State
let activeBrand = "All";
let searchQuery = "";
let minPriceFilter = null;
let maxPriceFilter = null;
let currentSort = "default";

let cart = [];
let wishlist = [];

// Format Prices
function formatPrice(num) {
    return num.toLocaleString("en-IN");
}

// Render Phone Grid
function renderPhones() {
    const grid = document.getElementById("phoneGrid");
    const countEl = document.getElementById("resultCount");

    let filtered = phones.filter((phone) => {
        const matchesBrand = activeBrand === "All" || phone.brand.toLowerCase() === activeBrand.toLowerCase();
        const matchesSearch = phone.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                              phone.brand.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesMin = minPriceFilter === null || phone.price >= minPriceFilter;
        const matchesMax = maxPriceFilter === null || phone.price <= maxPriceFilter;

        return matchesBrand && matchesSearch && matchesMin && matchesMax;
    });

    // Sorting
    if (currentSort === "low") {
        filtered.sort((a, b) => a.price - b.price);
    } else if (currentSort === "high") {
        filtered.sort((a, b) => b.price - a.price);
    } else if (currentSort === "rating") {
        filtered.sort((a, b) => b.rating - a.rating);
    } else if (currentSort === "name") {
        filtered.sort((a, b) => a.name.localeCompare(b.name));
    }

    countEl.textContent = `Showing ${filtered.length} smartphones`;

    if (filtered.length === 0) {
        grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 50px 20px; color: var(--muted);">
            <h3>No smartphones found</h3>
            <p>Try resetting filters or search criteria.</p>
        </div>`;
        return;
    }

    grid.innerHTML = filtered.map((p) => {
        const isWishlisted = wishlist.includes(p.id);
        return `
            <div class="phone-card">
                <div class="phone-image">
                    ${p.badge ? `<span class="image-label">${p.badge}</span>` : ""}
                    <button class="heart ${isWishlisted ? "active" : ""}" onclick="toggleWishlist(${p.id})">
                        ${isWishlisted ? "❤️" : "🤍"}
                    </button>
                    <img src="${p.image}" alt="${p.name}" />
                </div>
                <div class="phone-info">
                    <span class="brand">${p.brand}</span>
                    <h3 class="phone-name">${p.name}</h3>
                    <div class="short-specs">
                        <span class="spec-pill">${p.ram}</span>
                        <span class="spec-pill">${p.storage}</span>
                        <span class="spec-pill">${p.network}</span>
                    </div>
                    <div class="rating">⭐ ${p.rating} / 5.0</div>
                    <div class="price-box">
                        <span class="price">₹${formatPrice(p.price)}</span>
                        <span class="old-price">₹${formatPrice(p.originalPrice)}</span>
                        <span class="discount">${p.discount}</span>
                        <div class="bank-offer">💳 Extra 10% off on Select Cards</div>
                    </div>
                    <div class="color-preview">
                        <span>Colors:</span>
                        ${p.colors.map(c => `<span class="mini-color" style="background:${c.hex}" title="${c.name}"></span>`).join("")}
                    </div>
                    <div class="card-buttons">
                        <button class="details" onclick="openModal(${p.id})">View Details</button>
                        <button class="add-cart" onclick="addToCart(${p.id})">+ Add Cart</button>
                    </div>
                </div>
            </div>
        `;
    }).join("");
}

// Search & Filtering Actions
function searchPhones() {
    searchQuery = document.getElementById("searchInput").value.trim();
    renderPhones();
}

function filterBrand(brand, btn) {
    activeBrand = brand;
    document.querySelectorAll(".category-bar button").forEach(b => b.classList.remove("active"));
    if (btn) btn.classList.add("active");
    renderPhones();
}

function applyFilters() {
    const minVal = document.getElementById("minPrice").value;
    const maxVal = document.getElementById("maxPrice").value;
    minPriceFilter = minVal !== "" ? Number(minVal) : null;
    maxPriceFilter = maxVal !== "" ? Number(maxVal) : null;
    renderPhones();
}

function clearFilters() {
    document.getElementById("minPrice").value = "";
    document.getElementById("maxPrice").value = "";
    document.getElementById("searchInput").value = "";
    minPriceFilter = null;
    maxPriceFilter = null;
    searchQuery = "";
    activeBrand = "All";
    document.querySelectorAll(".category-bar button").forEach(b => b.classList.remove("active"));
    document.querySelector(".category-bar button").classList.add("active");
    renderPhones();
}

function filterPriceUnder50000() {
    document.getElementById("maxPrice").value = 50000;
    maxPriceFilter = 50000;
    scrollToPhones();
    renderPhones();
}

function sortPhones() {
    currentSort = document.getElementById("sortSelect").value;
    renderPhones();
}

function scrollToPhones() {
    document.getElementById("phonesSection").scrollIntoView({ behavior: "smooth" });
}

function goHome() {
    clearFilters();
    window.scrollTo({ top: 0, behavior: "smooth" });
}

// Modal View Details
function openModal(id) {
    const p = phones.find(item => item.id === id);
    if (!p) return;

    const modalBody = document.getElementById("modalBody");
    modalBody.innerHTML = `
        <div class="product-layout">
            <div class="product-gallery">
                <img class="main-product-image" src="${p.image}" alt="${p.name}">
            </div>
            <div>
                <span class="product-brand">${p.brand}</span>
                <h2>${p.name}</h2>
                <div class="rating">⭐ ${p.rating} / 5.0 Rating</div>
                <div class="product-price">
                    ₹${formatPrice(p.price)}
                    <span class="product-old-price">₹${formatPrice(p.originalPrice)}</span>
                </div>
                <div class="offer-badge">🔥 Deal of the day - ${p.discount}</div>
                <p class="product-description">
                    Equipped with state-of-the-art ${p.processor} processor, a vivid ${p.display}, and a versatile ${p.camera} camera system. Enjoy all-day power with ${p.battery} battery capacity.
                </p>
                <div class="color-title">Available Colors:</div>
                <div class="color-options">
                    ${p.colors.map((c, idx) => `
                        <div class="color-option ${idx === 0 ? 'selected' : ''}" onclick="selectColor(this)">
                            <span class="color-circle" style="background:${c.hex}"></span>
                            ${c.name}
                        </div>
                    `).join("")}
                </div>
                <div class="spec-table">
                    <div class="spec-row"><span>Processor</span><span>${p.processor}</span></div>
                    <div class="spec-row"><span>Display</span><span>${p.display}</span></div>
                    <div class="spec-row"><span>Camera</span><span>${p.camera}</span></div>
                    <div class="spec-row"><span>Battery</span><span>${p.battery}</span></div>
                    <div class="spec-row"><span>RAM / Storage</span><span>${p.ram} | ${p.storage}</span></div>
                </div>
                <div class="card-buttons" style="margin-top:20px;">
                    <button class="add-cart" style="padding:12px;" onclick="addToCart(${p.id}); closeModal();">Add to Shopping Cart</button>
                </div>
            </div>
        </div>
    `;
    document.getElementById("phoneModal").style.display = "flex";
}

function selectColor(el) {
    document.querySelectorAll(".color-option").forEach(opt => opt.classList.remove("selected"));
    el.classList.add("selected");
}

function closeModal() {
    document.getElementById("phoneModal").style.display = "none";
}

// Cart & Wishlist Management
function addToCart(id) {
    const existing = cart.find(item => item.id === id);
    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({ id: id, qty: 1 });
    }
    updateCounts();
    alert("Item added to cart!");
}

function toggleWishlist(id) {
    if (wishlist.includes(id)) {
        wishlist = wishlist.filter(itemId => itemId !== id);
    } else {
        wishlist.push(id);
    }
    updateCounts();
    renderPhones();
}

function updateCounts() {
    const totalCartItems = cart.reduce((sum, item) => sum + item.qty, 0);
    document.getElementById("cartCount").textContent = totalCartItems;
    document.getElementById("wishlistCount").textContent = wishlist.length;
}

function showCart() {
    const cartItemsEl = document.getElementById("cartItems");
    if (cart.length === 0) {
        cartItemsEl.innerHTML = `<p style="padding:20px 0; color:var(--muted);">Your shopping cart is currently empty.</p>`;
        document.getElementById("cartTotal").textContent = "0";
        document.getElementById("cartGrandTotal").textContent = "0";
    } else {
        let total = 0;
        cartItemsEl.innerHTML = cart.map(item => {
            const p = phones.find(x => x.id === item.id);
            const itemTotal = p.price * item.qty;
            total += itemTotal;
            return `
                <div class="cart-row">
                    <img src="${p.image}" alt="${p.name}">
                    <div class="cart-row-info">
                        <strong>${p.name}</strong>
                        <span class="cart-color">Price: ₹${formatPrice(p.price)}</span>
                    </div>
                    <div class="quantity">
                        <button onclick="changeQty(${p.id}, -1)">-</button>
                        <span>${item.qty}</span>
                        <button onclick="changeQty(${p.id}, 1)">+</button>
                    </div>
                    <button class="remove-btn" onclick="removeFromCart(${p.id})">✕</button>
                </div>
            `;
        }).join("");
        document.getElementById("cartTotal").textContent = formatPrice(total);
        document.getElementById("cartGrandTotal").textContent = formatPrice(total);
    }
    document.getElementById("cartModal").style.display = "flex";
}

function changeQty(id, delta) {
    const item = cart.find(x => x.id === id);
    if (item) {
        item.qty += delta;
        if (item.qty <= 0) {
            cart = cart.filter(x => x.id !== id);
        }
    }
    updateCounts();
    showCart();
}

function removeFromCart(id) {
    cart = cart.filter(x => x.id !== id);
    updateCounts();
    showCart();
}

function closeCart() {
    document.getElementById("cartModal").style.display = "none";
}

function showWishlist() {
    const wishlistItemsEl = document.getElementById("wishlistItems");
    if (wishlist.length === 0) {
        wishlistItemsEl.innerHTML = `<p style="padding:20px 0; color:var(--muted);">No phones saved in your wishlist yet.</p>`;
    } else {
        wishlistItemsEl.innerHTML = wishlist.map(id => {
            const p = phones.find(x => x.id === id);
            return `
                <div class="cart-row">
                    <img src="${p.image}" alt="${p.name}">
                    <div class="cart-row-info">
                        <strong>${p.name}</strong>
                        <span class="cart-color">₹${formatPrice(p.price)}</span>
                    </div>
                    <button class="add-cart" style="padding:8px 12px; font-size:12px;" onclick="addToCart(${p.id})">Move to Cart</button>
                    <button class="remove-btn" onclick="toggleWishlist(${p.id}); showWishlist();">✕</button>
                </div>
            `;
        }).join("");
    }
    document.getElementById("wishlistModal").style.display = "flex";
}

function closeWishlist() {
    document.getElementById("wishlistModal").style.display = "none";
}

function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }
    alert("Thank you for your order! Order placed successfully.");
    cart = [];
    updateCounts();
    closeCart();
}

// Theme Switcher
function toggleTheme() {
    document.body.classList.toggle("dark");
    const themeBtn = document.getElementById("themeBtn");
    if (document.body.classList.contains("dark")) {
        themeBtn.textContent = "☀️";
    } else {
        themeBtn.textContent = "🌙";
    }
}

// Close modals when clicking outside
window.onclick = function(event) {
    const pModal = document.getElementById("phoneModal");
    const cModal = document.getElementById("cartModal");
    const wModal = document.getElementById("wishlistModal");
    if (event.target === pModal) pModal.style.display = "none";
    if (event.target === cModal) cModal.style.display = "none";
    if (event.target === wModal) wModal.style.display = "none";
};

// Initial Render
renderPhones();
