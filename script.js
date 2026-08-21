"use strict";


/* =========================================================
   PHONE DATA
   All listed prices start at ₹10,000 or above.
========================================================= */

const phones = [

    {
        id: 1,
        brand: "Samsung",
        name: "Galaxy A56 5G",
        price: 41999,
        mrp: 44999,
        rating: 4.6,
        discount: 7,

        images: [
            "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=800",
            "https://images.unsplash.com/photo-1610792516307-ea5acd9c3b1b?w=800",
            "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800"
        ],

        ram: "8GB",
        storage: "256GB",
        processor: "Octa-Core",
        display: "6.7-inch AMOLED",
        camera: "50MP + 12MP + 5MP",
        selfie: "12MP",
        battery: "5000mAh",
        network: "5G",
        os: "Android",

        specs:
            "8GB RAM • 256GB • 6.7-inch AMOLED • 50MP Camera • 5000mAh • 5G",

        description:
            "A premium Samsung smartphone with a large AMOLED display, versatile camera system and long-lasting battery."
    },


    {
        id: 2,
        brand: "Samsung",
        name: "Galaxy A36 5G",
        price: 32999,
        mrp: 36999,
        rating: 4.5,
        discount: 11,

        images: [
            "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=800",
            "https://images.unsplash.com/photo-1610792516307-ea5acd9c3b1b?w=800"
        ],

        ram: "8GB",
        storage: "128GB",
        processor: "Octa-Core",
        display: "6.7-inch AMOLED",
        camera: "50MP + 8MP + 5MP",
        selfie: "13MP",
        battery: "5000mAh",
        network: "5G",
        os: "Android",

        specs:
            "8GB RAM • 128GB • 6.7-inch AMOLED • 50MP Camera • 5000mAh • 5G",

        description:
            "A balanced Samsung phone designed for everyday performance, entertainment and photography."
    },


    {
        id: 3,
        brand: "Samsung",
        name: "Galaxy S25",
        price: 74999,
        mrp: 79999,
        rating: 4.8,
        discount: 6,

        images: [
            "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=800",
            "https://images.unsplash.com/photo-1610792516307-ea5acd9c3b1b?w=800"
        ],

        ram: "12GB",
        storage: "256GB",
        processor: "Snapdragon",
        display: "6.2-inch AMOLED",
        camera: "50MP + 12MP + 10MP",
        selfie: "12MP",
        battery: "4000mAh",
        network: "5G",
        os: "Android",

        specs:
            "12GB RAM • 256GB • AMOLED • 50MP Camera • 4000mAh • 5G",

        description:
            "A compact Samsung flagship combining high-end performance, cameras and premium design."
    },


    {
        id: 4,
        brand: "Samsung",
        name: "Galaxy S25 Ultra",
        price: 129999,
        mrp: 139999,
        rating: 4.9,
        discount: 7,

        images: [
            "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=800",
            "https://images.unsplash.com/photo-1610792516307-ea5acd9c3b1b?w=800"
        ],

        ram: "12GB",
        storage: "512GB",
        processor: "Snapdragon",
        display: "6.9-inch AMOLED",
        camera: "200MP Multi Camera",
        selfie: "12MP",
        battery: "5000mAh",
        network: "5G",
        os: "Android",

        specs:
            "12GB RAM • 512GB • 6.9-inch AMOLED • 200MP Camera • 5000mAh • 5G",

        description:
            "A premium Samsung flagship built for photography, gaming, productivity and high-performance use."
    },


    {
        id: 5,
        brand: "Apple",
        name: "iPhone 15",
        price: 59999,
        mrp: 69999,
        rating: 4.7,
        discount: 14,

        images: [
            "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=800",
            "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800"
        ],

        ram: "6GB",
        storage: "128GB",
        processor: "A16 Bionic",
        display: "6.1-inch OLED",
        camera: "48MP + 12MP",
        selfie: "12MP",
        battery: "Built-in",
        network: "5G",
        os: "iOS",

        specs:
            "6GB RAM • 128GB • 6.1-inch OLED • 48MP Camera • 5G",

        description:
            "A powerful Apple smartphone with a premium OLED display and capable dual-camera system."
    },


    {
        id: 6,
        brand: "Apple",
        name: "iPhone 15 Pro",
        price: 84999,
        mrp: 99999,
        rating: 4.8,
        discount: 15,

        images: [
            "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800",
            "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=800"
        ],

        ram: "8GB",
        storage: "256GB",
        processor: "A17 Pro",
        display: "6.1-inch OLED",
        camera: "48MP Pro Camera System",
        selfie: "12MP",
        battery: "Built-in",
        network: "5G",
        os: "iOS",

        specs:
            "8GB RAM • 256GB • OLED • A17 Pro • 48MP Camera • 5G",

        description:
            "A Pro iPhone designed for demanding performance, photography and video workloads."
    },


    {
        id: 7,
        brand: "Apple",
        name: "iPhone 16",
        price: 69999,
        mrp: 79999,
        rating: 4.8,
        discount: 12,

        images: [
            "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=800",
            "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800"
        ],

        ram: "8GB",
        storage: "128GB",
        processor: "A18",
        display: "6.1-inch OLED",
        camera: "48MP + 12MP",
        selfie: "12MP",
        battery: "Built-in",
        network: "5G",
        os: "iOS",

        specs:
            "8GB RAM • 128GB • OLED • A18 • 48MP Camera • 5G",

        description:
            "Modern iPhone combining strong performance, premium construction and excellent cameras."
    },


    {
        id: 8,
        brand: "Apple",
        name: "iPhone 16 Pro Max",
        price: 129999,
        mrp: 144999,
        rating: 4.9,
        discount: 10,

        images: [
            "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800",
            "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=800"
        ],

        ram: "8GB",
        storage: "256GB",
        processor: "A18 Pro",
        display: "6.9-inch OLED",
        camera: "48MP Pro Camera System",
        selfie: "12MP",
        battery: "Built-in",
        network: "5G",
        os: "iOS",

        specs:
            "8GB RAM • 256GB • 6.9-inch OLED • A18 Pro • 5G",

        description:
            "A large Pro iPhone designed for demanding users, photography and video creation."
    },


    {
        id: 9,
        brand: "OnePlus",
        name: "OnePlus 13",
        price: 69999,
        mrp: 74999,
        rating: 4.8,
        discount: 7,

        images: [
            "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800",
            "https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=800"
        ],

        ram: "12GB",
        storage: "256GB",
        processor: "Snapdragon 8 Elite",
        display: "6.82-inch AMOLED",
        camera: "50MP Triple Camera",
        selfie: "32MP",
        battery: "6000mAh",
        network: "5G",
        os: "Android",

        specs:
            "12GB RAM • 256GB • 6.82-inch AMOLED • 50MP Triple Camera • 6000mAh",

        description:
            "A flagship OnePlus phone focused on speed, display quality, cameras and battery life."
    },


    {
        id: 10,
        brand: "OnePlus",
        name: "OnePlus 13R",
        price: 42999,
        mrp: 49999,
        rating: 4.6,
        discount: 14,

        images: [
            "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800",
            "https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=800"
        ],

        ram: "12GB",
        storage: "256GB",
        processor: "Snapdragon",
        display: "6.78-inch AMOLED",
        camera: "50MP Triple Camera",
        selfie: "16MP",
        battery: "6000mAh",
        network: "5G",
        os: "Android",

        specs:
            "12GB RAM • 256GB • AMOLED • 50MP Camera • 6000mAh",

        description:
            "A performance-focused OnePlus phone offering flagship-style features at a lower price."
    },


    {
        id: 11,
        brand: "OnePlus",
        name: "OnePlus Nord 4",
        price: 29999,
        mrp: 34999,
        rating: 4.5,
        discount: 14,

        images: [
            "https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=800",
            "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800"
        ],

        ram: "8GB",
        storage: "128GB",
        processor: "Snapdragon",
        display: "6.74-inch AMOLED",
        camera: "50MP + 8MP",
        selfie: "16MP",
        battery: "5500mAh",
        network: "5G",
        os: "Android",

        specs:
            "8GB RAM • 128GB • AMOLED • 50MP Camera • 5500mAh",

        description:
            "A stylish mid-range OnePlus smartphone with strong performance and battery life."
    },


    {
        id: 12,
        brand: "Xiaomi",
        name: "Xiaomi 14",
        price: 49999,
        mrp: 59999,
        rating: 4.7,
        discount: 17,

        images: [
            "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800",
            "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?w=800"
        ],

        ram: "12GB",
        storage: "256GB",
        processor: "Snapdragon",
        display: "6.36-inch AMOLED",
        camera: "50MP Triple Camera",
        selfie: "32MP",
        battery: "4610mAh",
        network: "5G",
        os: "Android",

        specs:
            "12GB RAM • 256GB • AMOLED • 50MP Triple Camera • 5G",

        description:
            "Compact Xiaomi flagship with a high-quality display and versatile camera system."
    },


    {
        id: 13,
        brand: "Xiaomi",
        name: "Redmi Note 14 Pro",
        price: 27999,
        mrp: 32999,
        rating: 4.5,
        discount: 15,

        images: [
            "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?w=800",
            "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800"
        ],

        ram: "8GB",
        storage: "256GB",
        processor: "Octa-Core",
        display: "6.67-inch AMOLED",
        camera: "200MP",
        selfie: "32MP",
        battery: "5500mAh",
        network: "5G",
        os: "Android",

        specs:
            "8GB RAM • 256GB • AMOLED • 200MP Camera • 5500mAh",

        description:
            "A feature-rich Redmi phone with a high-resolution camera and large AMOLED display."
    },


    {
        id: 14,
        brand: "Xiaomi",
        name: "Redmi Note 14",
        price: 17999,
        mrp: 20999,
        rating: 4.4,
        discount: 14,

        images: [
            "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?w=800",
            "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800"
        ],

        ram: "8GB",
        storage: "128GB",
        processor: "Octa-Core",
        display: "6.67-inch AMOLED",
        camera: "50MP",
        selfie: "20MP",
        battery: "5500mAh",
        network: "5G",
        os: "Android",

        specs:
            "8GB RAM • 128GB • AMOLED • 50MP Camera • 5500mAh",

        description:
            "Affordable Redmi smartphone with a large display and strong battery."
    },


    {
        id: 15,
        brand: "Google",
        name: "Pixel 9",
        price: 59999,
        mrp: 69999,
        rating: 4.7,
        discount: 14,

        images: [
            "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800",
            "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800"
        ],

        ram: "12GB",
        storage: "256GB",
        processor: "Google Tensor",
        display: "6.3-inch OLED",
        camera: "50MP + 48MP",
        selfie: "10.5MP",
        battery: "4700mAh",
        network: "5G",
        os: "Android",

        specs:
            "12GB RAM • 256GB • OLED • 50MP Camera • 4700mAh",

        description:
            "Google phone with clean Android software and computational photography."
    },


    {
        id: 16,
        brand: "Google",
        name: "Pixel 9 Pro",
        price: 89999,
        mrp: 99999,
        rating: 4.8,
        discount: 10,

        images: [
            "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800",
            "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800"
        ],

        ram: "16GB",
        storage: "256GB",
        processor: "Google Tensor",
        display: "6.3-inch LTPO OLED",
        camera: "50MP Triple Camera",
        selfie: "42MP",
        battery: "4700mAh",
        network: "5G",
        os: "Android",

        specs:
            "16GB RAM • 256GB • LTPO OLED • Triple Camera • 4700mAh",

        description:
            "Premium Google smartphone with advanced camera hardware and AI-powered features."
    },


    {
        id: 17,
        brand: "Vivo",
        name: "Vivo V50",
        price: 34999,
        mrp: 39999,
        rating: 4.5,
        discount: 13,

        images: [
            "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800",
            "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800"
        ],

        ram: "8GB",
        storage: "256GB",
        processor: "Snapdragon",
        display: "6.77-inch AMOLED",
        camera: "50MP Dual Camera",
        selfie: "50MP",
        battery: "6000mAh",
        network: "5G",
        os: "Android",

        specs:
            "8GB RAM • 256GB • AMOLED • 50MP Camera • 6000mAh",

        description:
            "Vivo smartphone focused on portrait photography, display quality and battery life."
    },


    {
        id: 18,
        brand: "Vivo",
        name: "Vivo V40",
        price: 29999,
        mrp: 34999,
        rating: 4.4,
        discount: 14,

        images: [
            "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800",
            "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800"
        ],

        ram: "8GB",
        storage: "128GB",
        processor: "Snapdragon",
        display: "6.78-inch AMOLED",
        camera: "50MP Dual Camera",
        selfie: "50MP",
        battery: "5500mAh",
        network: "5G",
        os: "Android",

        specs:
            "8GB RAM • 128GB • AMOLED • 50MP Camera • 5500mAh",

        description:
            "Stylish Vivo smartphone with a strong camera setup and immersive display."
    },


    {
        id: 19,
        brand: "Oppo",
        name: "Oppo Reno 13",
        price: 37999,
        mrp: 42999,
        rating: 4.5,
        discount: 12,

        images: [
            "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800",
            "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800"
        ],

        ram: "8GB",
        storage: "256GB",
        processor: "MediaTek",
        display: "6.59-inch AMOLED",
        camera: "50MP Triple Camera",
        selfie: "50MP",
        battery: "5600mAh",
        network: "5G",
        os: "Android",

        specs:
            "8GB RAM • 256GB • AMOLED • 50MP Camera • 5600mAh",

        description:
            "Oppo smartphone designed for photography, entertainment and everyday performance."
    },


    {
        id: 20,
        brand: "Oppo",
        name: "Oppo F29 Pro",
        price: 29999,
        mrp: 34999,
        rating: 4.4,
        discount: 14,

        images: [
            "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800",
            "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800"
        ],

        ram: "8GB",
        storage: "128GB",
        processor: "Octa-Core",
        display: "6.7-inch AMOLED",
        camera: "50MP",
        selfie: "16MP",
        battery: "6000mAh",
        network: "5G",
        os: "Android",

        specs:
            "8GB RAM • 128GB • AMOLED • 50MP Camera • 6000mAh",

        description:
            "Oppo smartphone with a large AMOLED display and high-capacity battery."
    },


    {
        id: 21,
        brand: "Realme",
        name: "Realme GT 7",
        price: 42999,
        mrp: 49999,
        rating: 4.6,
        discount: 14,

        images: [
            "https://images.unsplash.com/photo-1592286927505-2fd0c0c9e8f6?w=800",
            "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?w=800"
        ],

        ram: "12GB",
        storage: "256GB",
        processor: "Dimensity",
        display: "6.78-inch AMOLED",
        camera: "50MP Triple Camera",
        selfie: "16MP",
        battery: "7000mAh",
        network: "5G",
        os: "Android",

        specs:
            "12GB RAM • 256GB • AMOLED • 50MP Camera • 7000mAh",

        description:
            "Performance-focused Realme phone with a large battery and high refresh-rate display."
    },


    {
        id: 22,
        brand: "Realme",
        name: "Realme 14 Pro",
        price: 27999,
        mrp: 31999,
        rating: 4.4,
        discount: 13,

        images: [
            "https://images.unsplash.com/photo-1592286927505-2fd0c0c9e8f6?w=800",
            "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?w=800"
        ],

        ram: "8GB",
        storage: "128GB",
        processor: "Dimensity",
        display: "6.77-inch OLED",
        camera: "50MP",
        selfie: "16MP",
        battery: "6000mAh",
        network: "5G",
        os: "Android",

        specs:
            "8GB RAM • 128GB • OLED • 50MP Camera • 6000mAh",

        description:
            "A stylish Realme smartphone with strong battery performance."
    },


    {
        id: 23,
        brand: "Motorola",
        name: "Motorola Edge 60 Pro",
        price: 39999,
        mrp: 44999,
        rating: 4.5,
        discount: 11,

        images: [
            "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?w=800",
            "https://images.unsplash.com/photo-1592286927505-2fd0c0c9e8f6?w=800"
        ],

        ram: "12GB",
        storage: "256GB",
        processor: "Dimensity",
        display: "6.7-inch pOLED",
        camera: "50MP Triple Camera",
        selfie: "50MP",
        battery: "6000mAh",
        network: "5G",
        os: "Android",

        specs:
            "12GB RAM • 256GB • pOLED • 50MP Camera • 6000mAh",

        description:
            "Premium Motorola phone with a curved display and clean Android experience."
    },


    {
        id: 24,
        brand: "Motorola",
        name: "Moto G85",
        price: 19999,
        mrp: 22999,
        rating: 4.3,
        discount: 13,

        images: [
            "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?w=800",
            "https://images.unsplash.com/photo-1592286927505-2fd0c0c9e8f6?w=800"
        ],

        ram: "8GB",
        storage: "128GB",
        processor: "Snapdragon",
        display: "6.67-inch pOLED",
        camera: "50MP + 8MP",
        selfie: "32MP",
        battery: "5000mAh",
        network: "5G",
        os: "Android",

        specs:
            "8GB RAM • 128GB • pOLED • 50MP Camera • 5000mAh",

        description:
            "Affordable Motorola smartphone with a premium-looking curved display."
    },


    {
        id: 25,
        brand: "Nothing",
        name: "Nothing Phone 3",
        price: 49999,
        mrp: 54999,
        rating: 4.5,
        discount: 9,

        images: [
            "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800",
            "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800"
        ],

        ram: "12GB",
        storage: "256GB",
        processor: "Snapdragon",
        display: "6.67-inch AMOLED",
        camera: "50MP Dual Camera",
        selfie: "32MP",
        battery: "5000mAh",
        network: "5G",
        os: "Android",

        specs:
            "12GB RAM • 256GB • AMOLED • 50MP Camera • 5000mAh",

        description:
            "Distinctive Nothing smartphone with a unique transparent-inspired design."
    },


    {
        id: 26,
        brand: "Nothing",
        name: "Nothing Phone 3a",
        price: 24999,
        mrp: 27999,
        rating: 4.4,
        discount: 11,

        images: [
            "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800",
            "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800"
        ],

        ram: "8GB",
        storage: "128GB",
        processor: "Snapdragon",
        display: "6.77-inch AMOLED",
        camera: "50MP Triple Camera",
        selfie: "32MP",
        battery: "5000mAh",
        network: "5G",
        os: "Android",

        specs:
            "8GB RAM • 128GB • AMOLED • 50MP Triple Camera • 5000mAh",

        description:
            "Affordable Nothing phone combining a clean interface with distinctive hardware design."
    },


    {
        id: 27,
        brand: "Samsung",
        name: "Galaxy M35 5G",
        price: 16999,
        mrp: 19999,
        rating: 4.3,
        discount: 15,

        images: [
            "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=800",
            "https://images.unsplash.com/photo-1610792516307-ea5acd9c3b1b?w=800"
        ],

        ram: "6GB",
        storage: "128GB",
        processor: "Exynos",
        display: "6.6-inch AMOLED",
        camera: "50MP Triple Camera",
        selfie: "13MP",
        battery: "6000mAh",
        network: "5G",
        os: "Android",

        specs:
            "6GB RAM • 128GB • AMOLED • 50MP Camera • 6000mAh",

        description:
            "Battery-focused Samsung smartphone suitable for everyday use and entertainment."
    },


    {
        id: 28,
        brand: "OnePlus",
        name: "OnePlus Nord CE 4",
        price: 21999,
        mrp: 24999,
        rating: 4.4,
        discount: 12,

        images: [
            "https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=800",
            "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800"
        ],

        ram: "8GB",
        storage: "128GB",
        processor: "Snapdragon",
        display: "6.7-inch AMOLED",
        camera: "50MP + 8MP",
        selfie: "16MP",
        battery: "5500mAh",
        network: "5G",
        os: "Android",

        specs:
            "8GB RAM • 128GB • AMOLED • 50MP Camera • 5500mAh",

        description:
            "OnePlus mid-range phone offering fast charging and smooth everyday performance."
    },


    {
        id: 29,
        brand: "Realme",
        name: "Realme P3 Pro",
        price: 23999,
        mrp: 26999,
        rating: 4.3,
        discount: 11,

        images: [
            "https://images.unsplash.com/photo-1592286927505-2fd0c0c9e8f6?w=800",
            "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?w=800"
        ],

        ram: "8GB",
        storage: "128GB",
        processor: "Snapdragon",
        display: "6.83-inch AMOLED",
        camera: "50MP + 8MP",
        selfie: "16MP",
        battery: "6000mAh",
        network: "5G",
        os: "Android",

        specs:
            "8GB RAM • 128GB • AMOLED • 50MP Camera • 6000mAh",

        description:
            "Realme smartphone designed for gaming, entertainment and long battery life."
    },


    {
        id: 30,
        brand: "Xiaomi",
        name: "Poco X7 Pro",
        price: 27999,
        mrp: 31999,
        rating: 4.6,
        discount: 13,

        images: [
            "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800",
            "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?w=800"
        ],

        ram: "8GB",
        storage: "256GB",
        processor: "Dimensity",
        display: "6.67-inch AMOLED",
        camera: "50MP + 8MP",
        selfie: "20MP",
        battery: "6550mAh",
        network: "5G",
        os: "Android",

        specs:
            "8GB RAM • 256GB • AMOLED • 50MP Camera • 6550mAh",

        description:
            "Performance-focused smartphone with a large battery and high-refresh-rate AMOLED display."
    }

];


/* =========================================================
   STATE
========================================================= */

let currentPhones = [...phones];

let currentBrand = "All";

let cart = loadStorage(
    "phonehub_cart",
    []
);

let wishlist = loadStorage(
    "phonehub_wishlist",
    []
);


/* =========================================================
   STORAGE
========================================================= */

function loadStorage(key, fallback) {

    try {

        const value =
            localStorage.getItem(key);

        if (!value) {
            return fallback;
        }

        return JSON.parse(value);

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
            "Save error:",
            error
        );
    }
}


/* =========================================================
   FORMAT
========================================================= */

function money(value) {

    return Number(value)
        .toLocaleString("en-IN");
}


/* =========================================================
   DISPLAY PRODUCTS
========================================================= */

function displayPhones(list) {

    const grid =
        document.getElementById(
            "phoneGrid"
        );


    const count =
        document.getElementById(
            "resultCount"
        );


    if (!grid) {
        return;
    }


    grid.innerHTML = "";


    if (count) {

        count.textContent =
            `Showing ${list.length} phone${list.length === 1 ? "" : "s"}`;

    }


    if (!list.length) {

        grid.innerHTML = `

            <div class="empty-state">

                <h2>
                    😕 No phones found
                </h2>

                <p>
                    Try another brand,
                    model or price range.
                </p>

            </div>

        `;

        return;
    }


    list.forEach(phone => {

        const liked =
            wishlist.includes(phone.id);


        const card =
            document.createElement(
                "article"
            );


        card.className =
            "product-card";


        card.innerHTML = `

            <div class="product-image-area">

                <span class="discount-badge">
                    ${phone.discount}% OFF
                </span>

                <button
                    class="wishlist-btn"
                    data-wishlist="${phone.id}"
                    type="button"
                >
                    ${liked ? "❤️" : "🤍"}
                </button>

                <img
                    src="${phone.images[0]}"
                    alt="${phone.name}"
                    loading="lazy"
                    onerror="imageFallback(this)"
                >

            </div>


            <div class="product-info">

                <div class="product-brand">
                    ${phone.brand}
                </div>


                <h3 class="product-name">
                    ${phone.name}
                </h3>


                <p class="product-short-specs">
                    ${phone.specs}
                </p>


                <div class="product-rating">
                    ⭐ ${phone.rating}
                </div>


                <div class="price-row">

                    <span class="current-price">
                        ₹${money(phone.price)}
                    </span>

                    <span class="mrp">
                        ₹${money(phone.mrp)}
                    </span>

                </div>


                <div class="card-buttons">

                    <button
                        class="details-button"
                        data-details="${phone.id}"
                        type="button"
                    >
                        View Details
                    </button>

                    <button
                        class="add-cart-button"
                        data-add-cart="${phone.id}"
                        type="button"
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
   IMAGE FALLBACK
========================================================= */

function imageFallback(img) {

    img.onerror = null;

    img.src =
        "https://dummyimage.com/500x650/e5e7eb/111827&text=Phone";
}


/* =========================================================
   SEARCH + FILTER
========================================================= */

function applyFilters() {

    const search =
        document.getElementById(
            "searchInput"
        )?.value
            .trim()
            .toLowerCase() || "";


    const min =
        Number(
            document.getElementById(
                "minPrice"
            )?.value
        ) || 10000;


    const maxValue =
        document.getElementById(
            "maxPrice"
        )?.value;


    const max =
        maxValue
            ? Number(maxValue)
            : Infinity;


    const rating =
        Number(
            document.getElementById(
                "ratingSelect"
            )?.value
        ) || 0;


    currentPhones =
        phones.filter(phone => {

            const text =
                (
                    phone.name +
                    " " +
                    phone.brand +
                    " " +
                    phone.processor +
                    " " +
                    phone.ram +
                    " " +
                    phone.storage
                )
                    .toLowerCase();


            const matchesSearch =
                !search ||
                text.includes(search);


            const matchesBrand =
                currentBrand === "All" ||
                phone.brand === currentBrand;


            const matchesPrice =
                phone.price >= min &&
                phone.price <= max;


            const matchesRating =
                phone.rating >= rating;


            return (
                matchesSearch &&
                matchesBrand &&
                matchesPrice &&
                matchesRating
            );

        });


    sortCurrentPhones();
}


function sortCurrentPhones() {

    const sort =
        document.getElementById(
            "sortSelect"
        )?.value || "default";


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

    } else if (sort === "discount") {

        currentPhones.sort(
            (a, b) =>
                b.discount - a.discount
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


/* =========================================================
   BRAND
========================================================= */

function setBrand(brand) {

    currentBrand =
        brand || "All";


    document
        .querySelectorAll(
            ".brand-button"
        )
        .forEach(button => {

            button.classList.toggle(
                "active",
                button.dataset.brand === currentBrand
            );

        });


    const select =
        document.getElementById(
            "brandSelect"
        );


    if (select) {
        select.value =
            currentBrand;
    }


    applyFilters();
}


/* =========================================================
   QUICK PRICE
========================================================= */

function quickPrice(min, max) {

    const minInput =
        document.getElementById(
            "minPrice"
        );

    const maxInput =
        document.getElementById(
            "maxPrice"
        );


    if (minInput) {
        minInput.value =
            min;
    }


    if (maxInput) {
        maxInput.value =
            max;
    }


    applyFilters();

    scrollToPhones();
}


/* =========================================================
   PRODUCT DETAILS
========================================================= */

function openProduct(id) {

    const phone =
        phones.find(
            item =>
                item.id === Number(id)
        );


    if (!phone) {
        return;
    }


    const modalBody =
        document.getElementById(
            "productModalBody"
        );


    modalBody.innerHTML = `

        <div class="product-detail-grid">

            <div class="gallery">

                <div class="thumbnail-list">

                    ${phone.images
                        .map(
                            (image, index) => `

                            <button
                                class="thumbnail ${
                                    index === 0
                                        ? "active"
                                        : ""
                                }"
                                data-image="${image}"
                                type="button"
                            >

                                <img
                                    src="${image}"
                                    alt="${phone.name}"
                                    onerror="imageFallback(this)"
                                >

                            </button>

                        `
                        )
                        .join("")}

                </div>


                <div class="main-product-image">

                    <img
                        id="mainProductImage"
                        src="${phone.images[0]}"
                        alt="${phone.name}"
                        onerror="imageFallback(this)"
                    >

                </div>

            </div>


            <div class="product-details">

                <div class="detail-brand">
                    ${phone.brand}
                </div>


                <h1 class="detail-title">
                    ${phone.name}
                </h1>


                <div class="detail-rating">
                    ⭐ ${phone.rating}
                    / 5
                </div>


                <div>

                    <span class="detail-price">
                        ₹${money(phone.price)}
                    </span>

                    <span class="detail-mrp">
                        ₹${money(phone.mrp)}
                    </span>

                    <span class="detail-discount">
                        ${phone.discount}% OFF
                    </span>

                </div>


                <p class="detail-description">
                    ${phone.description}
                </p>


                <div class="detail-actions">

                    <button
                        class="detail-add-cart"
                        data-detail-cart="${phone.id}"
                        type="button"
                    >
                        🛒 Add to Cart
                    </button>

                    <button
                        class="buy-now"
                        data-buy-now="${phone.id}"
                        type="button"
                    >
                        ⚡ Buy Now
                    </button>

                </div>


                <h3 class="spec-title">
                    📋 Full Specifications
                </h3>


                <table class="spec-table">

                    <tr>
                        <td>Brand</td>
                        <td>${phone.brand}</td>
                    </tr>

                    <tr>
                        <td>Model</td>
                        <td>${phone.name}</td>
                    </tr>

                    <tr>
                        <td>RAM</td>
                        <td>${phone.ram}</td>
                    </tr>

                    <tr>
                        <td>Storage</td>
                        <td>${phone.storage}</td>
                    </tr>

                    <tr>
                        <td>Processor</td>
                        <td>${phone.processor}</td>
                    </tr>

                    <tr>
                        <td>Display</td>
                        <td>${phone.display}</td>
                    </tr>

                    <tr>
                        <td>Rear Camera</td>
                        <td>${phone.camera}</td>
                    </tr>

                    <tr>
                        <td>Front Camera</td>
                        <td>${phone.selfie}</td>
                    </tr>

                    <tr>
                        <td>Battery</td>
                        <td>${phone.battery}</td>
                    </tr>

                    <tr>
                        <td>Network</td>
                        <td>${phone.network}</td>
                    </tr>

                    <tr>
                        <td>Operating System</td>
                        <td>${phone.os}</td>
                    </tr>

                </table>

            </div>

        </div>
    `;


    openModal(
        "productModal"
    );
}


/* =========================================================
   MODALS
========================================================= */

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


function closeModal(id) {

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


/* =========================================================
   CART
========================================================= */

function addToCart(id) {

    id = Number(id);


    const item =
        cart.find(
            product =>
                product.id === id
        );


    if (item) {

        item.quantity++;

    } else {

        cart.push({
            id: id,
            quantity: 1
        });

    }


    saveStorage(
        "phonehub_cart",
        cart
    );


    updateCounts();

    showToast(
        "Added to cart 🛒"
    );
}


function renderCart() {

    const container =
        document.getElementById(
            "cartItems"
        );


    if (!container) {
        return;
    }


    container.innerHTML = "";


    if (!cart.length) {

        container.innerHTML = `

            <div class="empty-state">

                <h2>
                    🛒 Your cart is empty
                </h2>

                <p>
                    Add a phone to start shopping.
                </p>

            </div>

        `;

        updateCartTotal(0);

        return;
    }


    let total = 0;


    cart.forEach(item => {

        const phone =
            phones.find(
                p =>
                    p.id === item.id
            );


        if (!phone) {
            return;
        }


        total +=
            phone.price *
            item.quantity;


        container.innerHTML += `

            <div class="cart-row">

                <div class="cart-row-image">

                    <img
                        src="${phone.images[0]}"
                        alt="${phone.name}"
                        onerror="imageFallback(this)"
                    >

                </div>


                <div>

                    <div class="cart-row-name">
                        ${phone.name}
                    </div>

                    <div class="cart-row-price">
                        ₹${money(phone.price)}
                    </div>


                    <div class="quantity-controls">

                        <button
                            data-decrease="${phone.id}"
                            type="button"
                        >
                            −
                        </button>

                        <span>
                            ${item.quantity}
                        </span>

                        <button
                            data-increase="${phone.id}"
                            type="button"
                        >
                            +
                        </button>

                    </div>

                </div>


                <button
                    class="remove-button"
                    data-remove="${phone.id}"
                    type="button"
                >
                    Remove
                </button>

            </div>
        `;

    });


    updateCartTotal(total);
}


function updateCartTotal(total) {

    const cartTotal =
        document.getElementById(
            "cartTotal"
        );


    const grandTotal =
        document.getElementById(
            "grandTotal"
        );


    if (cartTotal) {
        cartTotal.textContent =
            money(total);
    }


    if (grandTotal) {
        grandTotal.textContent =
            money(total);
    }
}


function changeQuantity(id, amount) {

    const item =
        cart.find(
            product =>
                product.id === Number(id)
        );


    if (!item) {
        return;
    }


    item.quantity += amount;


    if (item.quantity <= 0) {

        cart =
            cart.filter(
                product =>
                    product.id !== Number(id)
            );

    }


    saveStorage(
        "phonehub_cart",
        cart
    );


    updateCounts();

    renderCart();
}


/* =========================================================
   WISHLIST
========================================================= */

function toggleWishlist(id) {

    id = Number(id);


    if (
        wishlist.includes(id)
    ) {

        wishlist =
            wishlist.filter(
                item =>
                    item !== id
            );

        showToast(
            "Removed from wishlist"
        );

    } else {

        wishlist.push(id);

        showToast(
            "Added to wishlist ❤️"
        );
    }


    saveStorage(
        "phonehub_wishlist",
        wishlist
    );


    updateCounts();

    displayPhones(
        currentPhones
    );
}


function renderWishlist() {

    const container =
        document.getElementById(
            "wishlistItems"
        );


    if (!container) {
        return;
    }


    container.innerHTML = "";


    if (!wishlist.length) {

        container.innerHTML = `

            <div class="empty-state">

                <h2>
                    ❤️ Wishlist is empty
                </h2>

                <p>
                    Save phones you like here.
                </p>

            </div>

        `;

        return;
    }


    wishlist.forEach(id => {

        const phone =
            phones.find(
                p =>
                    p.id === id
            );


        if (!phone) {
            return;
        }


        container.innerHTML += `

            <div class="wishlist-row">

                <div class="wishlist-row-image">

                    <img
                        src="${phone.images[0]}"
                        alt="${phone.name}"
                        onerror="imageFallback(this)"
                    >

                </div>


                <div class="wishlist-row-info">

                    <div class="wishlist-row-name">
                        ${phone.name}
                    </div>

                    <div class="wishlist-row-price">
                        ₹${money(phone.price)}
                    </div>

                </div>


                <button
                    class="remove-button"
                    data-wishlist-remove="${phone.id}"
                    type="button"
                >
                    Remove
                </button>

            </div>
        `;

    });
}


/* =========================================================
   COUNTERS
========================================================= */

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
                    sum +
                    Number(item.quantity),
                0
            );
    }


    if (wishlistCount) {

        wishlistCount.textContent =
            wishlist.length;
    }
}


/* =========================================================
   THEME
========================================================= */

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


    localStorage.setItem(
        "phonehub_theme",
        theme
    );


    updateThemeButton();
}


/* =========================================================
   SCROLL
========================================================= */

function scrollToPhones() {

    const section =
        document.getElementById(
            "phonesSection"
        );


    if (!section) {
        return;
    }


    section.scrollIntoView({
        behavior: "smooth"
    });
}


/* =========================================================
   CLEAR FILTERS
========================================================= */

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

    const rating =
        document.getElementById(
            "ratingSelect"
        );

    const sort =
        document.getElementById(
            "sortSelect"
        );

    const brand =
        document.getElementById(
            "brandSelect"
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

    if (rating) {
        rating.value = "0";
    }

    if (sort) {
        sort.value = "default";
    }

    if (brand) {
        brand.value = "All";
    }


    currentBrand =
        "All";


    document
        .querySelectorAll(
            ".brand-button"
        )
        .forEach(button => {

            button.classList.toggle(
                "active",
                button.dataset.brand === "All"
            );

        });


    applyFilters();
}


/* =========================================================
   CHECKOUT
========================================================= */

function checkout() {

    if (!cart.length) {

        showToast(
            "Your cart is empty."
        );

        return;
    }


    showToast(
        "Checkout is ready for payment integration."
    );
}


/* =========================================================
   TOAST
========================================================= */

let toastTimer = null;


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

        toast.className =
            "toast";

        document.body.appendChild(
            toast
        );
    }


    toast.textContent =
        message;


    toast.classList.add(
        "show"
    );


    clearTimeout(
        toastTimer
    );


    toastTimer =
        setTimeout(
            () => {

                toast.classList.remove(
                    "show"
                );

            },
            2500
        );
}


/* =========================================================
   INITIALIZATION
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        /* THEME */

        if (
            localStorage.getItem(
                "phonehub_theme"
            ) === "dark"
        ) {

            document.body.classList.add(
                "dark"
            );
        }


        updateThemeButton();


        /* INITIAL PRODUCTS */

        displayPhones(
            phones
        );


        updateCounts();


        /* SEARCH */

        document
            .getElementById(
                "searchInput"
            )
            ?.addEventListener(
                "input",
                applyFilters
            );


        document
            .getElementById(
                "searchInput"
            )
            ?.addEventListener(
                "keydown",
                event => {

                    if (
                        event.key === "Enter"
                    ) {

                        applyFilters();

                        scrollToPhones();

                    }

                }
            );


        document
            .getElementById(
                "searchButton"
            )
            ?.addEventListener(
                "click",
                () => {

                    applyFilters();

                    scrollToPhones();

                }
            );


        /* EXPLORE */

        document
            .getElementById(
                "exploreButton"
            )
            ?.addEventListener(
                "click",
                scrollToPhones
            );


        /* THEME */

        document
            .getElementById(
                "themeButton"
            )
            ?.addEventListener(
                "click",
                toggleTheme
            );


        /* CART */

        document
            .getElementById(
                "cartButton"
            )
            ?.addEventListener(
                "click",
                () => {

                    renderCart();

                    openModal(
                        "cartModal"
                    );

                }
            );


        /* WISHLIST */

        document
            .getElementById(
                "wishlistButton"
            )
            ?.addEventListener(
                "click",
                () => {

                    renderWishlist();

                    openModal(
                        "wishlistModal"
                    );

                }
            );


        /* SORT */

        document
            .getElementById(
                "sortSelect"
            )
            ?.addEventListener(
                "change",
                applyFilters
            );


        /* BRAND SELECT */

        document
            .getElementById(
                "brandSelect"
            )
            ?.addEventListener(
                "change",
                event => {

                    setBrand(
                        event.target.value
                    );

                }
            );


        /* PRICE */

        document
            .getElementById(
                "minPrice"
            )
            ?.addEventListener(
                "input",
                applyFilters
            );


        document
            .getElementById(
                "maxPrice"
            )
            ?.addEventListener(
                "input",
                applyFilters
            );


        /* RATING */

        document
            .getElementById(
                "ratingSelect"
            )
            ?.addEventListener(
                "change",
                applyFilters
            );


        /* CLEAR */

        document
            .getElementById(
                "clearFilters"
            )
            ?.addEventListener(
                "click",
                clearFilters
            );


        /* BRANDS */

        document
            .querySelectorAll(
                ".brand-button"
            )
            .forEach(button => {

                button.addEventListener(
                    "click",
                    () => {

                        setBrand(
                            button.dataset.brand
                        );

                        scrollToPhones();

                    }
                );

            });


        /* QUICK PRICE */

        document
            .querySelectorAll(
                ".quick-filter"
            )
            .forEach(button => {

                button.addEventListener(
                    "click",
                    () => {

                        quickPrice(
                            Number(
                                button.dataset.min
                            ),
                            Number(
                                button.dataset.max
                            )
                        );

                    }
                );

            });


        /* PRODUCT GRID */

        document
            .getElementById(
                "phoneGrid"
            )
            ?.addEventListener(
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
                            "[data-add-cart]"
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

                        openProduct(
                            Number(
                                detailsButton.dataset.details
                            )
                        );

                        return;
                    }


                    if (cartButton) {

                        addToCart(
                            Number(
                                cartButton.dataset.addCart
                            )
                        );

                    }

                }
            );


        /* PRODUCT MODAL */

        document
            .getElementById(
                "productModalBody"
            )
            ?.addEventListener(
                "click",
                event => {

                    const thumbnail =
                        event.target.closest(
                            "[data-image]"
                        );


                    const addCart =
                        event.target.closest(
                            "[data-detail-cart]"
                        );


                    const buyNow =
                        event.target.closest(
                            "[data-buy-now]"
                        );


                    if (thumbnail) {

                        const mainImage =
                            document.getElementById(
                                "mainProductImage"
                            );


                        if (mainImage) {

                            mainImage.src =
                                thumbnail.dataset.image;
                        }


                        document
                            .querySelectorAll(
                                ".thumbnail"
                            )
                            .forEach(item => {

                                item.classList.remove(
                                    "active"
                                );

                            });


                        thumbnail.classList.add(
                            "active"
                        );

                    }


                    if (addCart) {

                        addToCart(
                            Number(
                                addCart.dataset.detailCart
                            )
                        );

                        closeModal(
                            "productModal"
                        );

                    }


                    if (buyNow) {

                        addToCart(
                            Number(
                                buyNow.dataset.buyNow
                            )
                        );

                        closeModal(
                            "productModal"
                        );

                        showToast(
                            "Phone added. Checkout is ready."
                        );

                    }

                }
            );


        /* CART EVENTS */

        document
            .getElementById(
                "cartItems"
            )
            ?.addEventListener(
                "click",
                event => {

                    const increase =
                        event.target.closest(
                            "[data-increase]"
                        );


                    const decrease =
                        event.target.closest(
                            "[data-decrease]"
                        );


                    const remove =
                        event.target.closest(
                            "[data-remove]"
                        );


                    if (increase) {

                        changeQuantity(
                            Number(
                                increase.dataset.increase
                            ),
                            1
                        );

                    }


                    if (decrease) {

                        changeQuantity(
                            Number(
                                decrease.dataset.decrease
                            ),
                            -1
                        );

                    }


                    if (remove) {

                        cart =
                            cart.filter(
                                item =>
                                    item.id !==
                                    Number(
                                        remove.dataset.remove
                                    )
                            );


                        saveStorage(
                            "phonehub_cart",
                            cart
                        );


                        updateCounts();

                        renderCart();

                    }

                }
            );


        /* WISHLIST EVENTS */

        document
            .getElementById(
                "wishlistItems"
            )
            ?.addEventListener(
                "click",
                event => {

                    const remove =
                        event.target.closest(
                            "[data-wishlist-remove]"
                        );


                    if (remove) {

                        toggleWishlist(
                            Number(
                                remove.dataset.wishlistRemove
                            )
                        );


                        renderWishlist();

                    }

                }
            );


        /* CLOSE BUTTONS */

        document
            .getElementById(
                "closeProductModal"
            )
            ?.addEventListener(
                "click",
                () =>
                    closeModal(
                        "productModal"
                    )
            );


        document
            .getElementById(
                "closeCartModal"
            )
            ?.addEventListener(
                "click",
                () =>
                    closeModal(
                        "cartModal"
                    )
            );


        document
            .getElementById(
                "closeWishlistModal"
            )
            ?.addEventListener(
                "click",
                () =>
                    closeModal(
                        "wishlistModal"
                    )
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


        /* BACKDROP */

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

                            closeModal(
                                modal.id
                            );

                        }

                    }
                );

            });


        /* ESC */

        document.addEventListener(
            "keydown",
            event => {

                if (
                    event.key === "Escape"
                ) {

                    document
                        .querySelectorAll(
                            ".modal.show"
                        )
                        .forEach(modal => {

                            closeModal(
                                modal.id
                            );

                        });

                }

            }
        );

    }
);
