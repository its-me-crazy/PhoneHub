// Complete Smartphone Catalog (₹8,000 to ₹1,90,000)
const phones = [
    // --- Entry Level & Budget Range (₹8,000 - ₹15,000) ---
    {
        id: 1,
        name: "POCO C65 5G",
        brand: "Xiaomi",
        price: 7999,
        originalPrice: 10999,
        discount: "27% OFF",
        rating: 4.2,
        ram: "4 GB RAM",
        storage: "128 GB",
        network: "5G",
        processor: "MediaTek Helio G85",
        display: "6.74-inch HD+ 90Hz Display",
        battery: "5000 mAh",
        camera: "50MP Dual AI Camera",
        colors: [
            { name: "Matte Black", hex: "#1c1c1c" },
            { name: "Pastel Blue", hex: "#a0c4ff" }
        ],
        image: "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?auto=format&fit=crop&w=600&q=80",
        badge: "Budget King"
    },
    {
        id: 2,
        name: "Redmi 13C 5G",
        brand: "Xiaomi",
        price: 9499,
        originalPrice: 13999,
        discount: "32% OFF",
        rating: 4.3,
        ram: "6 GB RAM",
        storage: "128 GB",
        network: "5G",
        processor: "MediaTek Dimensity 6100+",
        display: "6.74-inch HD+ 90Hz LCD",
        battery: "5000 mAh",
        camera: "50MP AI Dual Camera",
        colors: [
            { name: "Starrail Green", hex: "#2d6a4f" },
            { name: "Starlight Black", hex: "#111111" }
        ],
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=600&q=80",
        badge: "Best Seller"
    },
    {
        id: 3,
        name: "Realme C65 5G",
        brand: "Realme",
        price: 10499,
        originalPrice: 13999,
        discount: "25% OFF",
        rating: 4.3,
        ram: "6 GB RAM",
        storage: "128 GB",
        network: "5G",
        processor: "MediaTek Dimensity 6300",
        display: "6.67-inch 120Hz HD+ Display",
        battery: "5000 mAh",
        camera: "50MP AI Primary Camera",
        colors: [
            { name: "Feather Green", hex: "#52b788" },
            { name: "Glowing Black", hex: "#1b263b" }
        ],
        image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=600&q=80",
        badge: "5G Value"
    },
    {
        id: 4,
        name: "Moto G34 5G",
        brand: "Motorola",
        price: 11999,
        originalPrice: 14999,
        discount: "20% OFF",
        rating: 4.4,
        ram: "8 GB RAM",
        storage: "128 GB",
        network: "5G",
        processor: "Snapdragon 695 5G",
        display: "6.5-inch 120Hz HD+ Display",
        battery: "5000 mAh",
        camera: "50MP + 2MP Dual Rear",
        colors: [
            { name: "Ocean Green Vegan", hex: "#2a9d8f" },
            { name: "Ice Blue", hex: "#90e0ef" }
        ],
        image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=600&q=80",
        badge: "Clean Android"
    },
    {
        id: 5,
        name: "Samsung Galaxy M15 5G",
        brand: "Samsung",
        price: 13499,
        originalPrice: 16999,
        discount: "20% OFF",
        rating: 4.3,
        ram: "6 GB RAM",
        storage: "128 GB",
        network: "5G",
        processor: "MediaTek Dimensity 6100+",
        display: "6.5-inch FHD+ Super AMOLED 90Hz",
        battery: "6000 mAh",
        camera: "50MP Triple Rear Camera",
        colors: [
            { name: "Celestial Blue", hex: "#48cae4" },
            { name: "Stone Grey", hex: "#4a4e69" }
        ],
        image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=600&q=80",
        badge: "6000mAh Power"
    },

    // --- Mid-Range (₹15,000 - ₹35,000) ---
    {
        id: 6,
        name: "Vivo T3 5G",
        brand: "Vivo",
        price: 19999,
        originalPrice: 22999,
        discount: "13% OFF",
        rating: 4.5,
        ram: "8 GB RAM",
        storage: "128 GB",
        network: "5G",
        processor: "MediaTek Dimensity 7200",
        display: "6.67-inch FHD+ AMOLED 120Hz",
        battery: "5000 mAh",
        camera: "50MP Sony OIS Camera",
        colors: [
            { name: "Cosmic Blue", hex: "#03045e" },
            { name: "Crystal Flake", hex: "#caf0f8" }
        ],
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80",
        badge: "Sony Camera"
    },
    {
        id: 7,
        name: "Nothing Phone (2a)",
        brand: "Nothing",
        price: 23999,
        originalPrice: 25999,
        discount: "8% OFF",
        rating: 4.5,
        ram: "8 GB RAM",
        storage: "128 GB",
        network: "5G",
        processor: "MediaTek Dimensity 7200 Pro",
        display: "6.7-inch Flexible AMOLED 120Hz",
        battery: "5000 mAh",
        camera: "50MP + 50MP Dual OIS",
        colors: [
            { name: "Dark Glyph", hex: "#27272a" },
            { name: "White Glyph", hex: "#f4f4f5" }
        ],
        image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=600&q=80",
        badge: "Glyph Lights"
    },
    {
        id: 8,
        name: "OnePlus Nord CE 4",
        brand: "OnePlus",
        price: 24999,
        originalPrice: 27999,
        discount: "10% OFF",
        rating: 4.6,
        ram: "8 GB RAM",
        storage: "256 GB",
        network: "5G",
        processor: "Snapdragon 7 Gen 3",
        display: "6.7-inch FHD+ AMOLED 120Hz",
        battery: "5500 mAh",
        camera: "50MP Sony LYT-600 OIS",
        colors: [
            { name: "Celadon Marble", hex: "#84a98c" },
            { name: "Dark Chrome", hex: "#353535" }
        ],
        image: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=600&q=80",
        badge: "100W Charging"
    },
    {
        id: 9,
        name: "OPPO Reno 11 5G",
        brand: "Oppo",
        price: 28999,
        originalPrice: 38999,
        discount: "25% OFF",
        rating: 4.4,
        ram: "8 GB RAM",
        storage: "256 GB",
        network: "5G",
        processor: "MediaTek Dimensity 7050",
        display: "6.7-inch Curved OLED 120Hz",
        battery: "5000 mAh",
        camera: "32MP Telephoto Portrait",
        colors: [
            { name: "Wave Green", hex: "#52b788" },
            { name: "Rock Grey", hex: "#4a5568" }
        ],
        image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=600&q=80",
        badge: "Curved Display"
    },

    // --- Premium Segment (₹35,000 - ₹75,000) ---
    {
        id: 10,
        name: "Realme GT 6 5G",
        brand: "Realme",
        price: 40999,
        originalPrice: 44999,
        discount: "8% OFF",
        rating: 4.5,
        ram: "12 GB RAM",
        storage: "256 GB",
        network: "5G",
        processor: "Snapdragon 8s Gen 3",
        display: "6.78-inch 120Hz LTPO AMOLED",
        battery: "5500 mAh",
        camera: "50MP Sony LYT-808 OIS",
        colors: [
            { name: "Fluid Silver", hex: "#d1d5db" },
            { name: "Razor Green", hex: "#15803d" }
        ],
        image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=600&q=80",
        badge: "Super Bright"
    },
    {
        id: 11,
        name: "iPhone 14",
        brand: "Apple",
        price: 54999,
        originalPrice: 69900,
        discount: "21% OFF",
        rating: 4.7,
        ram: "6 GB RAM",
        storage: "128 GB",
        network: "5G",
        processor: "Apple A15 Bionic",
        display: "6.1-inch Super Retina XDR",
        battery: "3279 mAh",
        camera: "12MP + 12MP Dual Rear",
        colors: [
            { name: "Midnight Black", hex: "#111827" },
            { name: "Starlight White", hex: "#f8fafc" },
            { name: "Blue", hex: "#3b82f6" }
        ],
        image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=600&q=80",
        badge: "Popular iPhone"
    },
    {
        id: 12,
        name: "OnePlus 12 5G",
        brand: "OnePlus",
        price: 64999,
        originalPrice: 69999,
        discount: "7% OFF",
        rating: 4.8,
        ram: "12 GB RAM",
        storage: "256 GB",
        network: "5G",
        processor: "Snapdragon 8 Gen 3",
        display: "6.82-inch QHD+ ProXDR 120Hz",
        battery: "5400 mAh",
        camera: "50MP + 64MP Hasselblad",
        colors: [
            { name: "Silky Black", hex: "#262626" },
            { name: "Flowy Emerald", hex: "#047857" }
        ],
        image: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=600&q=80",
        badge: "Hasselblad Camera"
    },
    {
        id: 13,
        name: "Samsung Galaxy S24 5G",
        brand: "Samsung",
        price: 74999,
        originalPrice: 84999,
        discount: "11% OFF",
        rating: 4.7,
        ram: "8 GB RAM",
        storage: "256 GB",
        network: "5G",
        processor: "Exynos 2400 / Snapdragon 8 Gen 3",
        display: "6.2-inch Dynamic AMOLED 2X 120Hz",
        battery: "4000 mAh",
        camera: "50MP + 12MP + 10MP Triple",
        colors: [
            { name: "Onyx Black", hex: "#18181b" },
            { name: "Cobalt Violet", hex: "#4c1d95" },
            { name: "Amber Yellow", hex: "#f59e0b" }
        ],
        image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=600&q=80",
        badge: "Galaxy AI"
    },

    // --- Ultra Flagship & Foldables Range (₹80,000 - ₹1,90,000) ---
    {
        id: 14,
        name: "iPhone 15",
        brand: "Apple",
        price: 79900,
        originalPrice: 79900,
        discount: "Official",
        rating: 4.8,
        ram: "6 GB RAM",
        storage: "128 GB",
        network: "5G",
        processor: "Apple A16 Bionic",
        display: "6.1-inch Dynamic Island OLED",
        battery: "3349 mAh",
        camera: "48MP Dual Camera",
        colors: [
            { name: "Black", hex: "#1c1917" },
            { name: "Pink", hex: "#fda4af" },
            { name: "Blue", hex: "#93c5fd" }
        ],
        image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=600&q=80",
        badge: "Dynamic Island"
    },
    {
        id: 15,
        name: "Vivo X100 Pro",
        brand: "Vivo",
        price: 89999,
        originalPrice: 96999,
        discount: "7% OFF",
        rating: 4.8,
        ram: "16 GB RAM",
        storage: "512 GB",
        network: "5G",
        processor: "MediaTek Dimensity 9300",
        display: "6.78-inch LTPO AMOLED 120Hz",
        battery: "5400 mAh",
        camera: "50MP ZEISS 1-inch Camera",
        colors: [
            { name: "Asteroid Black", hex: "#18181b" },
            { name: "Sunset Orange", hex: "#ea580c" }
        ],
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80",
        badge: "ZEISS 1-inch Lens"
    },
    {
        id: 16,
        name: "Google Pixel 9 Pro",
        brand: "Google",
        price: 109999,
        originalPrice: 119999,
        discount: "8% OFF",
        rating: 4.7,
        ram: "16 GB RAM",
        storage: "128 GB",
        network: "5G",
        processor: "Google Tensor G4",
        display: "6.3-inch Super Actua LTPO OLED",
        battery: "4700 mAh",
        camera: "50MP + 48MP + 48MP Triple",
        colors: [
            { name: "Obsidian", hex: "#0f172a" },
            { name: "Porcelain", hex: "#f1f5f9" }
        ],
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=600&q=80",
        badge: "Google AI"
    },
    {
        id: 17,
        name: "Galaxy S24 Ultra",
        brand: "Samsung",
        price: 129999,
        originalPrice: 144999,
        discount: "10% OFF",
        rating: 4.9,
        ram: "12 GB RAM",
        storage: "512 GB",
        network: "5G",
        processor: "Snapdragon 8 Gen 3 for Galaxy",
        display: "6.8-inch QHD+ Dynamic AMOLED 2X",
        battery: "5000 mAh",
        camera: "200MP Quad Camera + S-Pen",
        colors: [
            { name: "Titanium Black", hex: "#1f2937" },
            { name: "Titanium Gray", hex: "#6b7280" },
            { name: "Titanium Violet", hex: "#7c3aed" }
        ],
        image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=600&q=80",
        badge: "200MP Camera"
    },
    {
        id: 18,
        name: "iPhone 16 Pro Max",
        brand: "Apple",
        price: 144900,
        originalPrice: 159900,
        discount: "9% OFF",
        rating: 4.9,
        ram: "8 GB RAM",
        storage: "256 GB",
        network: "5G",
        processor: "Apple A18 Pro Chip",
        display: "6.9-inch ProMotion 120Hz OLED",
        battery: "4685 mAh",
        camera: "48MP Triple Camera Control",
        colors: [
            { name: "Desert Titanium", hex: "#c2a98f" },
            { name: "Natural Titanium", hex: "#b8b2a6" },
            { name: "Black Titanium", hex: "#1f2421" }
        ],
        image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=600&q=80",
        badge: "A18 Pro Flagship"
    },
    {
        id: 19,
        name: "Samsung Galaxy Z Fold 6",
        brand: "Samsung",
        price: 164999,
        originalPrice: 184999,
        discount: "11% OFF",
        rating: 4.8,
        ram: "12 GB RAM",
        storage: "512 GB",
        network: "5G",
        processor: "Snapdragon 8 Gen 3 for Galaxy",
        display: "7.6-inch Foldable Dynamic AMOLED",
        battery: "4400 mAh",
        camera: "50MP Triple Rear Camera",
        colors: [
            { name: "Silver Shadow", hex: "#94a3b8" },
            { name: "Navy Blue", hex: "#1e3a8a" },
            { name: "Pink", hex: "#f472b6" }
        ],
        image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=600&q=80",
        badge: "Premium Foldable"
    },
    {
        id: 20,
        name: "iPhone 17 Pro Max Ultra",
        brand: "Apple",
        price: 189999,
        originalPrice: 199999,
        discount: "5% OFF",
        rating: 5.0,
        ram: "16 GB RAM",
        storage: "1 TB Storage",
        network: "5G",
        processor: "Apple A19 Pro Bionic",
        display: "6.9-inch Super Retina ProMotion",
        battery: "5100 mAh",
        camera: "48MP Quad Fusion + 10x Periscope",
        colors: [
            { name: "Deep Titanium", hex: "#0f172a" },
            { name: "Gold Titanium", hex: "#d97706" }
        ],
        image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=600&q=80",
        badge: "1TB Ultra Storage"
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

// Format Currency
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

    // Sorting Options
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
            <h3>No smartphones found matching your filter</h3>
            <p>Try clearing your price filters or search term.</p>
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
                        <div class="bank-offer">💳 Extra 10% off on HDFC & ICICI Cards</div>
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

// Search & Filter Actions
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

// Product Modal Details
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
                <div class="offer-badge">🔥 Deal of the Day - ${p.discount}</div>
                <p class="product-description">
                    Powered by ${p.processor}, featuring a stunning ${p.display}, and a high-resolution ${p.camera}. Includes a ${p.battery} battery with superfast charging technology.
                </p>
                <div class="color-title">Select Color Variant:</div>
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
                    <button class="add-cart" style="padding:12px;" onclick="addToCart(${p.id}); closeModal();">Add to Cart</button>
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

// Shopping Cart & Wishlist Actions
function addToCart(id) {
    const existing = cart.find(item => item.id === id);
    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({ id: id, qty: 1 });
    }
    updateCounts();
    alert("Phone added to cart!");
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
    alert("Order placed successfully!");
    cart = [];
    updateCounts();
    closeCart();
}

// Dark / Light Theme Toggle
function toggleTheme() {
    document.body.classList.toggle("dark");
    const themeBtn = document.getElementById("themeBtn");
    if (document.body.classList.contains("dark")) {
        themeBtn.textContent = "☀️";
    } else {
        themeBtn.textContent = "🌙";
    }
}

// Close Modals on Outer Overlay Click
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
