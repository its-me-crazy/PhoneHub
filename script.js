/* =========================================================
   PHONEHUB
   Frontend Smartphone Shopping Website
   ========================================================= */


/* =========================================================
   PHONE DATABASE
   ========================================================= */

const phones = [

    {
        id: 1,
        brand: "Apple",
        name: "iPhone 17 Pro Max",
        price: 149999,
        oldPrice: 169999,
        rating: 4.9,

        image:
            "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800",

        gallery: [
            "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800",
            "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=800",
            "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800"
        ],

        colors: [
            { name: "Black", hex: "#171717" },
            { name: "Silver", hex: "#d7d7d7" },
            { name: "Blue", hex: "#52698a" }
        ],

        specs: {
            display: "6.9-inch OLED",
            ram: "12 GB",
            storage: "256 GB",
            battery: "4,800 mAh",
            camera: "48 MP Triple Camera",
            frontCamera: "24 MP",
            processor: "Apple A19 Pro",
            network: "5G"
        },

        description:
            "Premium Apple flagship smartphone with a high-resolution display, powerful processor and advanced camera system."
    },


    {
        id: 2,
        brand: "Apple",
        name: "iPhone 17",
        price: 89999,
        oldPrice: 99999,
        rating: 4.8,

        image:
            "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=800",

        gallery: [
            "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=800",
            "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800",
            "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800"
        ],

        colors: [
            { name: "Black", hex: "#171717" },
            { name: "White", hex: "#eeeeee" },
            { name: "Blue", hex: "#536f9f" }
        ],

        specs: {
            display: "6.3-inch OLED",
            ram: "8 GB",
            storage: "128 GB",
            battery: "4,200 mAh",
            camera: "48 MP Dual Camera",
            frontCamera: "16 MP",
            processor: "Apple A19",
            network: "5G"
        },

        description:
            "Powerful and compact smartphone designed for excellent everyday performance and photography."
    },


    {
        id: 3,
        brand: "Samsung",
        name: "Galaxy S26 Ultra",
        price: 139999,
        oldPrice: 159999,
        rating: 4.9,

        image:
            "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=800",

        gallery: [
            "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=800",
            "https://images.unsplash.com/photo-1610792516307-ea5acd9c3b1b?w=800",
            "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800"
        ],

        colors: [
            { name: "Titanium Black", hex: "#202020" },
            { name: "Titanium Gray", hex: "#888888" },
            { name: "Titanium Blue", hex: "#526b8e" }
        ],

        specs: {
            display: "6.9-inch Dynamic AMOLED",
            ram: "12 GB",
            storage: "256 GB",
            battery: "5,500 mAh",
            camera: "200 MP Quad Camera",
            frontCamera: "50 MP",
            processor: "Snapdragon Elite",
            network: "5G"
        },

        description:
            "Samsung premium flagship with a large AMOLED display, professional camera system and powerful performance."
    },


    {
        id: 4,
        brand: "Samsung",
        name: "Galaxy S26",
        price: 79999,
        oldPrice: 89999,
        rating: 4.7,

        image:
            "https://images.unsplash.com/photo-1610792516307-ea5acd9c3b1b?w=800",

        gallery: [
            "https://images.unsplash.com/photo-1610792516307-ea5acd9c3b1b?w=800",
            "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=800",
            "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800"
        ],

        colors: [
            { name: "Black", hex: "#151515" },
            { name: "Silver", hex: "#cccccc" },
            { name: "Blue", hex: "#41698c" }
        ],

        specs: {
            display: "6.2-inch AMOLED",
            ram: "12 GB",
            storage: "256 GB",
            battery: "4,700 mAh",
            camera: "50 MP Triple Camera",
            frontCamera: "16 MP",
            processor: "Snapdragon Elite",
            network: "5G"
        },

        description:
            "High-performance Samsung smartphone for gaming, photography and everyday use."
    },


    {
        id: 5,
        brand: "OnePlus",
        name: "OnePlus 14",
        price: 69999,
        oldPrice: 79999,
        rating: 4.7,

        image:
            "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800",

        gallery: [
            "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800",
            "https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=800",
            "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800"
        ],

        colors: [
            { name: "Black", hex: "#111111" },
            { name: "Green", hex: "#506b5b" },
            { name: "Silver", hex: "#c8c8c8" }
        ],

        specs: {
            display: "6.7-inch AMOLED 120Hz",
            ram: "12 GB",
            storage: "256 GB",
            battery: "5,200 mAh",
            camera: "50 MP Triple Camera",
            frontCamera: "32 MP",
            processor: "Snapdragon Elite",
            network: "5G"
        },

        description:
            "Fast OnePlus flagship with a smooth high-refresh-rate display and high-performance hardware."
    },


    {
        id: 6,
        brand: "OnePlus",
        name: "OnePlus Nord 6",
        price: 39999,
        oldPrice: 44999,
        rating: 4.5,

        image:
            "https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=800",

        gallery: [
            "https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=800",
            "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800",
            "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800"
        ],

        colors: [
            { name: "Blue", hex: "#426f9e" },
            { name: "Black", hex: "#171717" },
            { name: "White", hex: "#eeeeee" }
        ],

        specs: {
            display: "6.6-inch AMOLED 120Hz",
            ram: "8 GB",
            storage: "128 GB",
            battery: "5,000 mAh",
            camera: "50 MP Dual Camera",
            frontCamera: "16 MP",
            processor: "Dimensity Series",
            network: "5G"
        },

        description:
            "Affordable performance-focused smartphone with a smooth AMOLED display."
    },


    {
        id: 7,
        brand: "Google",
        name: "Pixel 10 Pro XL",
        price: 109999,
        oldPrice: 119999,
        rating: 4.8,

        image:
            "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800",

        gallery: [
            "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800",
            "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800",
            "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800"
        ],

        colors: [
            { name: "Obsidian", hex: "#161616" },
            { name: "Porcelain", hex: "#e8e4d9" },
            { name: "Blue", hex: "#607b9c" }
        ],

        specs: {
            display: "6.8-inch OLED",
            ram: "16 GB",
            storage: "256 GB",
            battery: "5,100 mAh",
            camera: "50 MP Triple Camera",
            frontCamera: "42 MP",
            processor: "Google Tensor",
            network: "5G"
        },

        description:
            "Google flagship with AI-powered features and computational photography."
    },


    {
        id: 8,
        brand: "Xiaomi",
        name: "Xiaomi 16 Ultra",
        price: 89999,
        oldPrice: 99999,
        rating: 4.7,

        image:
            "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800",

        gallery: [
            "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800",
            "https://images.unsplash.com/photo-1592286927505-2fd0c0c9e8f6?w=800",
            "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?w=800"
        ],

        colors: [
            { name: "Black", hex: "#101010" },
            { name: "White", hex: "#eeeeee" },
            { name: "Green", hex: "#455e4d" }
        ],

        specs: {
            display: "6.8-inch AMOLED 120Hz",
            ram: "16 GB",
            storage: "512 GB",
            battery: "5,300 mAh",
            camera: "200 MP Quad Camera",
            frontCamera: "32 MP",
            processor: "Snapdragon Elite",
            network: "5G"
        },

        description:
            "High-end Xiaomi smartphone with powerful hardware and a professional camera setup."
    },


    {
        id: 9,
        brand: "Vivo",
        name: "Vivo X300 Pro",
        price: 79999,
        oldPrice: 89999,
        rating: 4.6,

        image:
            "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800",

        gallery: [
            "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800",
            "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800",
            "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?w=800"
        ],

        colors: [
            { name: "Blue", hex: "#536e91" },
            { name: "Black", hex: "#171717" },
            { name: "White", hex: "#ededed" }
        ],

        specs: {
            display: "6.8-inch AMOLED",
            ram: "12 GB",
            storage: "256 GB",
            battery: "5,400 mAh",
            camera: "50 MP Triple Camera",
            frontCamera: "32 MP",
            processor: "Dimensity Series",
            network: "5G"
        },

        description:
            "Camera-focused Vivo flagship with a premium display and strong battery life."
    },


    {
        id: 10,
        brand: "Oppo",
        name: "Oppo Find X9 Pro",
        price: 84999,
        oldPrice: 94999,
        rating: 4.7,

        image:
            "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800",

        gallery: [
            "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800",
            "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800",
            "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800"
        ],

        colors: [
            { name: "Black", hex: "#151515" },
            { name: "Gold", hex: "#b79b6b" },
            { name: "White", hex: "#eeeeee" }
        ],

        specs: {
            display: "6.7-inch AMOLED",
            ram: "12 GB",
            storage: "256 GB",
            battery: "5,100 mAh",
            camera: "50 MP Triple Camera",
            frontCamera: "32 MP",
            processor: "Dimensity Series",
            network: "5G"
        },

        description:
            "Premium Oppo smartphone with powerful cameras and a vibrant AMOLED display."
    },


    {
        id: 11,
        brand: "Realme",
        name: "Realme GT 8 Pro",
        price: 54999,
        oldPrice: 64999,
        rating: 4.5,

        image:
            "https://images.unsplash.com/photo-1592286927505-2fd0c0c9e8f6?w=800",

        gallery: [
            "https://images.unsplash.com/photo-1592286927505-2fd0c0c9e8f6?w=800",
            "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?w=800",
            "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800"
        ],

        colors: [
            { name: "Black", hex: "#101010" },
            { name: "Yellow", hex: "#d6ae25" },
            { name: "Silver", hex: "#c9c9c9" }
        ],

        specs: {
            display: "6.7-inch AMOLED 144Hz",
            ram: "12 GB",
            storage: "256 GB",
            battery: "5,200 mAh",
            camera: "50 MP Triple Camera",
            frontCamera: "32 MP",
            processor: "Snapdragon Series",
            network: "5G"
        },

        description:
            "Performance-oriented Realme smartphone designed for gaming and heavy applications."
    },


    {
        id: 12,
        brand: "Motorola",
        name: "Motorola Edge 70 Ultra",
        price: 64999,
        oldPrice: 74999,
        rating: 4.5,

        image:
            "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?w=800",

        gallery: [
            "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?w=800",
            "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800",
            "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800"
        ],

        colors: [
            { name: "Black", hex: "#141414" },
            { name: "Red", hex: "#8b2d2d" },
            { name: "Blue", hex: "#456f9d" }
        ],

        specs: {
            display: "6.7-inch pOLED",
            ram: "12 GB",
            storage: "256 GB",
            battery: "5,000 mAh",
            camera: "50 MP Triple Camera",
            frontCamera: "32 MP",
            processor: "Snapdragon Series",
            network: "5G"
        },

        description:
            "Premium Motorola smartphone with a clean Android experience and curved pOLED display."
    },


    {
        id: 13,
        brand: "Nothing",
        name: "Nothing Phone 4 Pro",
        price: 59999,
        oldPrice: 69999,
        rating: 4.6,

        image:
            "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800",

        gallery: [
            "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800",
            "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?w=800",
            "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?w=800"
        ],

        colors: [
            { name: "White", hex: "#eeeeee" },
            { name: "Black", hex: "#111111" },
            { name: "Gray", hex: "#888888" }
        ],

        specs: {
            display: "6.7-inch AMOLED 120Hz",
            ram: "12 GB",
            storage: "256 GB",
            battery: "5,000 mAh",
            camera: "50 MP Triple Camera",
            frontCamera: "32 MP",
            processor: "Snapdragon Series",
            network: "5G"
        },

        description:
            "Distinctive Nothing smartphone featuring a transparent-inspired design and smooth display."
    },


    {
        id: 14,
        brand: "Samsung",
        name: "Galaxy A57 5G",
        price: 42999,
        oldPrice: 49999,
        rating: 4.4,

        image:
            "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=800",

        gallery: [
            "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=800",
            "https://images.unsplash.com/photo-1610792516307-ea5acd9c3b1b?w=800",
            "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800"
        ],

        colors: [
            { name: "Black", hex: "#171717" },
            { name: "Blue", hex: "#4e7199" },
            { name: "White", hex: "#eeeeee" }
        ],

        specs: {
            display: "6.6-inch AMOLED",
            ram: "8 GB",
            storage: "128 GB",
            battery: "5,000 mAh",
            camera: "50 MP Triple Camera",
            frontCamera: "16 MP",
            processor: "Exynos Series",
            network: "5G"
        },

        description:
            "Balanced Samsung smartphone suitable for everyday users, photography and entertainment."
    },


    {
        id: 15,
        brand: "OnePlus",
        name: "OnePlus 14R",
        price: 49999,
        oldPrice: 57999,
        rating: 4.6,

        image:
            "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800",

        gallery: [
            "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800",
            "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800",
            "https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=800"
        ],

        colors: [
            { name: "Black", hex: "#151515" },
            { name: "Green", hex: "#4d6655" },
            { name: "Silver", hex: "#cccccc" }
        ],

        specs: {
            display: "6.7-inch AMOLED",
            ram: "12 GB",
            storage: "256 GB",
            battery: "5,100 mAh",
            camera: "50 MP Triple Camera",
            frontCamera: "32 MP",
            processor: "Snapdragon Series",
            network: "5G"
        },

        description:
            "Powerful OnePlus smartphone with excellent performance and a high-quality display."
    },


    {
        id: 16,
        brand: "Xiaomi",
        name: "Redmi Note 15 Pro+",
        price: 34999,
        oldPrice: 39999,
        rating: 4.4,

        image:
            "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?w=800",

        gallery: [
            "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?w=800",
            "https://images.unsplash.com/photo-1592286927505-2fd0c0c9e8f6?w=800",
            "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800"
        ],

        colors: [
            { name: "Black", hex: "#161616" },
            { name: "Blue", hex: "#456f99" },
            { name: "Purple", hex: "#725b88" }
        ],

        specs: {
            display: "6.7-inch AMOLED",
            ram: "8 GB",
            storage: "256 GB",
            battery: "5,100 mAh",
            camera: "200 MP Triple Camera",
            frontCamera: "32 MP",
            processor: "Snapdragon Series",
            network: "5G"
        },

        description:
            "Feature-packed Redmi smartphone with a large AMOLED display and powerful camera."
    },


    /* PHONES STARTING FROM ₹10,000 */

    {
        id: 17,
        brand: "Realme",
        name: "Realme C75",
        price: 10999,
        oldPrice: 12999,
        rating: 4.2,

        image:
            "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800",

        gallery: [
            "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800",
            "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?w=800"
        ],

        colors: [
            { name: "Black", hex: "#111111" },
            { name: "Blue", hex: "#416d98" }
        ],

        specs: {
            display: "6.7-inch LCD",
            ram: "6 GB",
            storage: "128 GB",
            battery: "6,000 mAh",
            camera: "50 MP Dual Camera",
            frontCamera: "8 MP",
            processor: "MediaTek Series",
            network: "5G"
        },

        description:
            "Affordable smartphone with a large battery and useful everyday features."
    },


    {
        id: 18,
        brand: "Samsung",
        name: "Galaxy M16 5G",
        price: 12999,
        oldPrice: 14999,
        rating: 4.3,

        image:
            "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=800",

        gallery: [
            "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=800",
            "https://images.unsplash.com/photo-1610792516307-ea5acd9c3b1b?w=800"
        ],

        colors: [
            { name: "Black", hex: "#151515" },
            { name: "Blue", hex: "#3e6790" },
            { name: "Green", hex: "#52705a" }
        ],

        specs: {
            display: "6.7-inch AMOLED",
            ram: "6 GB",
            storage: "128 GB",
            battery: "5,000 mAh",
            camera: "50 MP Triple Camera",
            frontCamera: "13 MP",
            processor: "Exynos Series",
            network: "5G"
        },

        description:
            "Affordable Samsung smartphone with AMOLED display and 5G connectivity."
    },


    {
        id: 19,
        brand: "Motorola",
        name: "Moto G Power",
        price: 14999,
        oldPrice: 16999,
        rating: 4.2,

        image:
            "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?w=800",

        gallery: [
            "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?w=800",
            "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800"
        ],

        colors: [
            { name: "Black", hex: "#111111" },
            { name: "Blue", hex: "#496f98" }
        ],

        specs: {
            display: "6.7-inch LCD",
            ram: "6 GB",
            storage: "128 GB",
            battery: "6,000 mAh",
            camera: "50 MP Dual Camera",
            frontCamera: "16 MP",
            processor: "MediaTek Series",
            network: "5G"
        },

        description:
            "Battery-focused Motorola smartphone for everyday users."
    },


    {
        id: 20,
        brand: "Xiaomi",
        name: "Redmi Note 15",
        price: 15999,
        oldPrice: 18999,
        rating: 4.3,

        image:
            "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800",

        gallery: [
            "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800",
            "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?w=800"
        ],

        colors: [
            { name: "Black", hex: "#151515" },
            { name: "Purple", hex: "#735d8d" },
            { name: "Blue", hex: "#466f98" }
        ],

        specs: {
            display: "6.7-inch AMOLED",
            ram: "8 GB",
            storage: "128 GB",
            battery: "5,100 mAh",
            camera: "108 MP Triple Camera",
            frontCamera: "16 MP",
            processor: "Snapdragon Series",
            network: "5G"
        },

        description:
            "Popular affordable smartphone with AMOLED display, large battery and high-resolution camera."
    }

];


/* =========================================================
   STATE
   ========================================================= */

let currentPhones = [...phones];

let currentBrand = "All";

let selectedProductColor = {};

let cart =
    JSON.parse(localStorage.getItem("phoneCart")) || [];

let wishlist =
    JSON.parse(localStorage.getItem("phoneWishlist")) || [];


/* =========================================================
   HELPERS
   ========================================================= */

function money(value) {

    return value.toLocaleString("en-IN");

}


function getPhone(id) {

    return phones.find(phone => phone.id === id);

}


function saveCart() {

    localStorage.setItem(
        "phoneCart",
        JSON.stringify(cart)
    );

    updateCounts();

}


function saveWishlist() {

    localStorage.setItem(
        "phoneWishlist",
        JSON.stringify(wishlist)
    );

    updateCounts();

}


/* =========================================================
   DISPLAY PHONES
   ========================================================= */

function displayPhones(list) {

    const grid =
        document.getElementById("phoneGrid");

    grid.innerHTML = "";

    document.getElementById("resultCount").textContent =
        `Showing ${list.length} phone${list.length === 1 ? "" : "s"}`;


    if (list.length === 0) {

        grid.innerHTML = `
            <div style="
                grid-column:1/-1;
                text-align:center;
                padding:80px 20px;
            ">
                <div style="font-size:50px">📱</div>

                <h2 style="margin-top:15px">
                    No phones found
                </h2>

                <p style="
                    color:var(--muted);
                    margin-top:8px;
                ">
                    Try another search or change your filters.
                </p>

                <button
                    onclick="clearFilters()"
                    style="
                        margin-top:20px;
                        padding:12px 20px;
                        border:none;
                        border-radius:8px;
                        background:var(--primary);
                        color:white;
                        cursor:pointer;
                    "
                >
                    Reset Filters
                </button>
            </div>
        `;

        return;
    }


    list.forEach(phone => {

        const liked =
            wishlist.includes(phone.id);

        const firstColor =
            phone.colors[0];


        const discount =
            Math.round(
                ((phone.oldPrice - phone.price) /
                phone.oldPrice) * 100
            );


        const card =
            document.createElement("div");

        card.className = "phone-card";


        card.innerHTML = `

            <div class="phone-image">

                <span class="image-label">
                    ${discount}% OFF
                </span>

                <img
                    src="${phone.image}"
                    alt="${phone.name}"
                    loading="lazy"
                    onerror="
                        this.src='https://via.placeholder.com/400x500?text=Phone'
                    "
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


                <div class="short-specs">

                    <span class="spec-pill">
                        ${phone.specs.ram} RAM
                    </span>

                    <span class="spec-pill">
                        ${phone.specs.storage}
                    </span>

                    <span class="spec-pill">
                        ${phone.specs.network}
                    </span>

                </div>


                <div class="rating">
                    ⭐ ${phone.rating} / 5
                </div>


                <div class="price">

                    ₹${money(phone.price)}

                    <span class="old-price">
                        ₹${money(phone.oldPrice)}
                    </span>

                    <span class="discount">
                        ${discount}% off
                    </span>

                </div>


                <div class="color-preview">

                    Colors:

                    ${phone.colors
                        .map(color => `
                            <span
                                class="mini-color"
                                style="background:${color.hex}"
                                title="${color.name}"
                            ></span>
                        `)
                        .join("")
                    }

                    <span>
                        ${phone.colors.length}
                    </span>

                </div>


                <div class="card-buttons">

                    <button
                        class="details"
                        onclick="showDetails(${phone.id})"
                    >
                        View Details
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


/* =========================================================
   SEARCH
   ========================================================= */

function searchPhones() {

    applyFilters();

}


document
    .getElementById("searchInput")
    .addEventListener(
        "input",
        applyFilters
    );


/* =========================================================
   BRAND FILTER
   ========================================================= */

function filterBrand(brand) {

    currentBrand = brand;

    applyFilters();

    scrollToPhones();

}


/* =========================================================
   PRICE FILTER
   ========================================================= */

function applyFilters() {

    const search =
        document
            .getElementById("searchInput")
            .value
            .toLowerCase()
            .trim();


    const min =
        Number(
            document
                .getElementById("minPrice")
                .value
        ) || 0;


    const maxInput =
        Number(
            document
                .getElementById("maxPrice")
                .value
        );


    const max =
        maxInput > 0
            ? maxInput
            : Infinity;


    currentPhones =
        phones.filter(phone => {

            const searchMatch =
                phone.name
                    .toLowerCase()
                    .includes(search) ||

                phone.brand
                    .toLowerCase()
                    .includes(search);


            const brandMatch =
                currentBrand === "All" ||
                phone.brand === currentBrand;


            const priceMatch =
                phone.price >= min &&
                phone.price <= max;


            return (
                searchMatch &&
                brandMatch &&
                priceMatch
            );

        });


    sortCurrentList();

}


/* =========================================================
   CLEAR FILTERS
   ========================================================= */

function clearFilters() {

    document.getElementById("searchInput").value = "";

    document.getElementById("minPrice").value = "";

    document.getElementById("maxPrice").value = "";

    document.getElementById("sortSelect").value = "default";

    currentBrand = "All";

    currentPhones = [...phones];

    displayPhones(currentPhones);

}


/* =========================================================
   UNDER ₹50,000
   ========================================================= */

function filterPriceUnder50000() {

    document.getElementById("minPrice").value = "10000";

    document.getElementById("maxPrice").value = "50000";

    currentBrand = "All";

    applyFilters();

    scrollToPhones();

}


/* =========================================================
   SORT
   ========================================================= */

function sortPhones() {

    sortCurrentList();

}


function sortCurrentList() {

    const sort =
        document.getElementById("sortSelect").value;


    if (sort === "low") {

        currentPhones.sort(
            (a, b) => a.price - b.price
        );

    }

    else if (sort === "high") {

        currentPhones.sort(
            (a, b) => b.price - a.price
        );

    }

    else if (sort === "rating") {

        currentPhones.sort(
            (a, b) => b.rating - a.rating
        );

    }

    else if (sort === "name") {

        currentPhones.sort(
            (a, b) =>
                a.name.localeCompare(b.name)
        );

    }

    else {

        currentPhones.sort(
            (a, b) => a.id - b.id
        );

    }


    displayPhones(currentPhones);

}


/* =========================================================
   PRODUCT DETAILS
   ========================================================= */

function showDetails(id) {

    const phone = getPhone(id);

    if (!phone) return;


    if (!selectedProductColor[id]) {

        selectedProductColor[id] =
            phone.colors[0].name;

    }


    const selectedColor =
        selectedProductColor[id];


    const discount =
        Math.round(
            ((phone.oldPrice - phone.price) /
            phone.oldPrice) * 100
        );


    const modalBody =
        document.getElementById("modalBody");


    modalBody.innerHTML = `

        <div class="product-layout">

            <div class="product-gallery">

                <img
                    id="mainProductImage"
                    class="main-product-image"
                    src="${phone.gallery[0]}"
                    alt="${phone.name}"
                >


                <div class="thumbnail-row">

                    ${phone.gallery.map(
                        (image, index) => `

                            <img
                                src="${image}"
                                class="thumbnail ${
                                    index === 0
                                        ? "active"
                                        : ""
                                }"
                                onclick="
                                    changeProductImage(
                                        '${image}',
                                        this
                                    )
                                "
                            >

                        `
                    ).join("")}

                </div>

            </div>


            <div>

                <div class="product-brand">
                    ${phone.brand}
                </div>

                <h2>
                    ${phone.name}
                </h2>

                <div class="rating">
                    ⭐ ${phone.rating} / 5
                </div>


                <div class="product-price">

                    ₹${money(phone.price)}

                    <span class="product-old-price">
                        ₹${money(phone.oldPrice)}
                    </span>

                </div>


                <div class="discount">
                    ${discount}% OFF
                </div>


                <p class="product-description">
                    ${phone.description}
                </p>


                <div class="color-title">
                    Select Color:
                    <span id="selectedColorName">
                        ${selectedColor}
                    </span>
                </div>


                <div class="color-options">

                    ${phone.colors.map(
                        color => `

                            <button
                                class="
                                    color-option
                                    ${
                                        selectedColor ===
                                        color.name
                                            ? "selected"
                                            : ""
                                    }
                                "
                                onclick="
                                    selectProductColor(
                                        ${phone.id},
                                        '${color.name}'
                                    )
                                "
                            >

                                <span
                                    class="color-circle"
                                    style="
                                        background:
                                        ${color.hex}
                                    "
                                ></span>

                                ${color.name}

                            </button>

                        `
                    ).join("")}

                </div>


                <div class="spec-table">

                    <div class="spec-row">
                        <span>Display</span>
                        <strong>
                            ${phone.specs.display}
                        </strong>
                    </div>

                    <div class="spec-row">
                        <span>RAM</span>
                        <strong>
                            ${phone.specs.ram}
                        </strong>
                    </div>

                    <div class="spec-row">
                        <span>Storage</span>
                        <strong>
                            ${phone.specs.storage}
                        </strong>
                    </div>

                    <div class="spec-row">
                        <span>Battery</span>
                        <strong>
                            ${phone.specs.battery}
                        </strong>
                    </div>

                    <div class="spec-row">
                        <span>Rear Camera</span>
                        <strong>
                            ${phone.specs.camera}
                        </strong>
                    </div>

                    <div class="spec-row">
                        <span>Front Camera</span>
                        <strong>
                            ${phone.specs.frontCamera}
                        </strong>
                    </div>

                    <div class="spec-row">
                        <span>Processor</span>
                        <strong>
                            ${phone.specs.processor}
                        </strong>
                    </div>

                    <div class="spec-row">
                        <span>Network</span>
                        <strong>
                            ${phone.specs.network}
                        </strong>
                    </div>

                </div>


                <button
                    class="checkout"
                    onclick="
                        addSelectedProductToCart(
                            ${phone.id}
                        )
                    "
                >
                    🛒 Add To Cart
                </button>

            </div>

        </div>
    `;


    document
        .getElementById("phoneModal")
        .style.display = "flex";

}


function changeProductImage(image, element) {

    document
        .getElementById("mainProductImage")
        .src = image;


    document
        .querySelectorAll(".thumbnail")
        .forEach(item =>
            item.classList.remove("active")
        );


    element.classList.add("active");

}


function selectProductColor(id, color) {

    selectedProductColor[id] = color;

    showDetails(id);

}


function addSelectedProductToCart(id) {

    const color =
        selectedProductColor[id] ||
        getPhone(id).colors[0].name;


    addToCart(id, color);

    closeModal();

}


/* =========================================================
   CART
   ========================================================= */

function addToCart(id, color = null) {

    const phone = getPhone(id);

    if (!phone) return;


    if (!color) {

        color =
            selectedProductColor[id] ||
            phone.colors[0].name;

    }


    const existing =
        cart.find(
            item =>
                item.id === id &&
                item.color === color
        );


    if (existing) {

        existing.quantity++;

    }

    else {

        cart.push({
            id: id,
            color: color,
            quantity: 1
        });

    }


    saveCart();

    alert(
        `${phone.name} (${color}) added to cart 🛒`
    );

}


function showCart() {

    const container =
        document.getElementById("cartItems");

    container.innerHTML = "";


    if (cart.length === 0) {

        container.innerHTML = `
            <div style="
                text-align:center;
                padding:50px 10px;
            ">
                <div style="font-size:50px">
                    🛒
                </div>

                <h3>Your cart is empty</h3>

                <p style="
                    color:var(--muted);
                    margin-top:8px;
                ">
                    Add some phones to your cart.
                </p>
            </div>
        `;

        document.getElementById("cartTotal")
            .textContent = "0";

        document.getElementById("cartGrandTotal")
            .textContent = "0";

        document
            .getElementById("cartModal")
            .style.display = "flex";

        return;
    }


    let total = 0;


    cart.forEach((item, index) => {

        const phone =
            getPhone(item.id);

        if (!phone) return;


        const itemTotal =
            phone.price * item.quantity;

        total += itemTotal;


        container.innerHTML += `

            <div class="cart-row">

                <img
                    src="${phone.image}"
                    alt="${phone.name}"
                >


                <div class="cart-row-info">

                    <strong>
                        ${phone.name}
                    </strong>

                    <div class="cart-color">
                        Color: ${item.color}
                    </div>

                    <div>
                        ₹${money(phone.price)}
                    </div>

                </div>


                <div class="quantity">

                    <button
                        onclick="
                            changeQuantity(
                                ${index},
                                -1
                            )
                        "
                    >
                        −
                    </button>

                    <strong>
                        ${item.quantity}
                    </strong>

                    <button
                        onclick="
                            changeQuantity(
                                ${index},
                                1
                            )
                        "
                    >
                        +
                    </button>

                </div>


                <button
                    class="remove-btn"
                    onclick="
                        removeFromCart(${index})
                    "
                >
                    Remove
                </button>

            </div>
        `;

    });


    document.getElementById("cartTotal")
        .textContent = money(total);

    document.getElementById("cartGrandTotal")
        .textContent = money(total);


    document
        .getElementById("cartModal")
        .style.display = "flex";

}


function changeQuantity(index, change) {

    if (!cart[index]) return;


    cart[index].quantity += change;


    if (cart[index].quantity <= 0) {

        cart.splice(index, 1);

    }


    saveCart();

    showCart();

}


function removeFromCart(index) {

    cart.splice(index, 1);

    saveCart();

    showCart();

}


function closeCart() {

    document
        .getElementById("cartModal")
        .style.display = "none";

}


/* =========================================================
   WISHLIST
   ========================================================= */

function toggleWishlist(id) {

    if (wishlist.includes(id)) {

        wishlist =
            wishlist.filter(
                item => item !== id
            );

    }

    else {

        wishlist.push(id);

    }


    saveWishlist();

    displayPhones(currentPhones);

}


function showWishlist() {

    const container =
        document.getElementById("wishlistItems");

    container.innerHTML = "";


    if (wishlist.length === 0) {

        container.innerHTML = `
            <div style="
                text-align:center;
                padding:50px 10px;
            ">

                <div style="font-size:50px">
                    ❤️
                </div>

                <h3>
                    Your wishlist is empty
                </h3>

                <p style="
                    color:var(--muted);
                    margin-top:8px;
                ">
                    Save phones you like here.
                </p>

            </div>
        `;

    }


    wishlist.forEach(id => {

        const phone =
            getPhone(id);

        if (!phone) return;


        container.innerHTML += `

            <div class="cart-row">

                <img
                    src="${phone.image}"
                    alt="${phone.name}"
                >

                <div class="cart-row-info">

                    <strong>
                        ${phone.name}
                    </strong>

                    <div>
                        ₹${money(phone.price)}
                    </div>

                </div>

                <button
                    class="remove-btn"
                    onclick="
                        toggleWishlist(${phone.id});
                        showWishlist();
                    "
                >
                    Remove
                </button>

            </div>
        `;

    });


    document
        .getElementById("wishlistModal")
        .style.display = "flex";

}


function closeWishlist() {

    document
        .getElementById("wishlistModal")
        .style.display = "none";

}


/* =========================================================
   COUNTERS
   ========================================================= */

function updateCounts() {

    const cartCount =
        cart.reduce(
            (total, item) =>
                total + item.quantity,
            0
        );


    document.getElementById("cartCount")
        .textContent = cartCount;


    document.getElementById("wishlistCount")
        .textContent = wishlist.length;

}


/* =========================================================
   DARK MODE
   ========================================================= */

function toggleTheme() {

    document.body.classList.toggle("dark");


    localStorage.setItem(
        "phoneTheme",
        document.body.classList.contains("dark")
            ? "dark"
            : "light"
    );

}


if (
    localStorage.getItem("phoneTheme")
    === "dark"
) {

    document.body.classList.add("dark");

}


/* =========================================================
   SCROLL
   ========================================================= */

function scrollToPhones() {

    document
        .getElementById("phonesSection")
        .scrollIntoView({
            behavior: "smooth"
        });

}


function goHome() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================================
   CHECKOUT
   ========================================================= */

function checkout() {

    if (cart.length === 0) {

        alert(
            "Your cart is empty."
        );

        return;

    }


    alert(
        "Checkout is ready for a backend/payment gateway. " +
        "This frontend currently does not process real payments."
    );

}


/* =========================================================
   MODAL CLOSE
   ========================================================= */

function closeModal() {

    document
        .getElementById("phoneModal")
        .style.display = "none";

}


window.addEventListener(
    "click",
    function(event) {

        if (
            event.target.classList
                .contains("modal")
        ) {

            event.target.style.display =
                "none";

        }

    }
);


/* =========================================================
   ESC KEY
   ========================================================= */

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Escape") {

            closeModal();
            closeCart();
            closeWishlist();

        }

    }
);


/* =========================================================
   INITIAL LOAD
   ========================================================= */

displayPhones(phones);

updateCounts();
