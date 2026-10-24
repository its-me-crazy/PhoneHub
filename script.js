* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --bg: #f5f7fb;
    --card: #ffffff;
    --text: #111827;
    --muted: #6b7280;
    --primary: #635bff;
    --primary-dark: #5148e8;
    --border: #e5e7eb;
    --success: #16a34a;
    --danger: #ef4444;
}

body.dark {
    --bg: #090d18;
    --card: #141a29;
    --text: #ffffff;
    --muted: #aab3c5;
    --border: #283149;
}

body {
    font-family: Arial, Helvetica, sans-serif;
    background: var(--bg);
    color: var(--text);
    transition: background 0.3s, color 0.3s;
}

/* ================= HEADER ================= */
.header {
    min-height: 74px;
    background: var(--card);
    border-bottom: 1px solid var(--border);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 25px;
    padding: 12px 6%;
    position: sticky;
    top: 0;
    z-index: 1000;
}

.logo {
    font-size: 25px;
    font-weight: 900;
    white-space: nowrap;
    cursor: pointer;
}

.logo span {
    color: var(--primary);
}

.search-box {
    display: flex;
    width: min(600px, 45%);
}

.search-box input {
    width: 100%;
    padding: 13px 18px;
    border: 1px solid var(--border);
    border-right: none;
    border-radius: 10px 0 0 10px;
    outline: none;
    background: var(--bg);
    color: var(--text);
    font-size: 14px;
}

.search-box button {
    width: 55px;
    border: none;
    background: var(--primary);
    color: white;
    border-radius: 0 10px 10px 0;
    cursor: pointer;
    font-size: 17px;
}

.search-box button:hover {
    background: var(--primary-dark);
}

.header-actions {
    display: flex;
    gap: 8px;
}

.header-actions button {
    border: none;
    background: var(--bg);
    color: var(--text);
    padding: 10px 13px;
    border-radius: 9px;
    cursor: pointer;
    font-size: 15px;
    position: relative;
}

.header-actions button:hover {
    background: var(--primary);
    color: white;
}

.action-btn span {
    background: var(--danger);
    color: white;
    font-size: 10px;
    padding: 2px 6px;
    border-radius: 10px;
    font-weight: bold;
    margin-left: 4px;
}

/* ================= CATEGORY BAR ================= */
.category-bar {
    background: var(--card);
    border-bottom: 1px solid var(--border);
    padding: 12px 6%;
    display: flex;
    gap: 10px;
    overflow-x: auto;
    scrollbar-width: none;
}

.category-bar::-webkit-scrollbar {
    display: none;
}

.category-bar button {
    white-space: nowrap;
    padding: 9px 16px;
    border: 1px solid var(--border);
    background: var(--bg);
    color: var(--text);
    border-radius: 20px;
    cursor: pointer;
    transition: 0.2s;
}

.category-bar button.active,
.category-bar button:hover {
    background: var(--primary);
    color: white;
    border-color: var(--primary);
}

/* ================= HERO ================= */
.hero {
    min-height: 500px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 70px 8%;
    background:
        radial-gradient(circle at 80% 45%, rgba(99, 91, 255, 0.4), transparent 30%),
        linear-gradient(135deg, #0c1020, #22285b);
    color: white;
    overflow: hidden;
}

.hero-content {
    max-width: 650px;
}

.hero-tag {
    display: inline-block;
    padding: 8px 14px;
    border-radius: 20px;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.15);
    color: #c8c4ff;
    font-size: 12px;
    letter-spacing: 1.5px;
    margin-bottom: 20px;
}

.hero h1 {
    font-size: clamp(45px, 7vw, 78px);
    line-height: 1;
    margin-bottom: 25px;
}

.hero h1 span {
    display: block;
    color: #948cff;
}

.hero p {
    color: #d4d7e1;
    font-size: 17px;
    line-height: 1.7;
    max-width: 600px;
}

.hero-buttons {
    display: flex;
    gap: 12px;
    margin-top: 30px;
    flex-wrap: wrap;
}

.primary-btn,
.secondary-btn {
    padding: 14px 22px;
    border-radius: 10px;
    cursor: pointer;
    font-weight: bold;
    transition: 0.2s;
}

.primary-btn {
    border: none;
    background: white;
    color: #111827;
}

.secondary-btn {
    border: 1px solid rgba(255, 255, 255, 0.3);
    background: rgba(255, 255, 255, 0.08);
    color: white;
}

.primary-btn:hover {
    background: #e2e8f0;
}

.secondary-btn:hover {
    background: rgba(255, 255, 255, 0.2);
}

.hero-phone {
    width: 300px;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}

.hero-phone-glow {
    width: 260px;
    height: 260px;
    border-radius: 50%;
    background: #635bff;
    filter: blur(80px);
    opacity: 0.6;
    position: absolute;
}

.fake-phone {
    width: 180px;
    height: 350px;
    border-radius: 32px;
    background: linear-gradient(135deg, #555, #111);
    border: 6px solid #333;
    box-shadow: 0 30px 70px rgba(0, 0, 0, 0.5);
    position: relative;
    transform: rotate(-12deg);
    z-index: 2;
}

.fake-camera {
    position: absolute;
    width: 50px;
    height: 50px;
    background: #111;
    border: 5px solid #444;
    border-radius: 50%;
    top: 20px;
    left: 20px;
}

.fake-camera.small {
    width: 28px;
    height: 28px;
    top: 80px;
    left: 30px;
}

/* ================= FEATURES ================= */
.features {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 15px;
    padding: 25px 6%;
    background: var(--card);
    border-bottom: 1px solid var(--border);
}

.feature {
    display: flex;
    align-items: center;
    gap: 13px;
    padding: 12px;
}

.feature > span {
    font-size: 27px;
}

.feature strong {
    display: block;
}

.feature p {
    color: var(--muted);
    font-size: 12px;
    margin-top: 4px;
}

/* ================= MAIN ================= */
main {
    padding: 55px 6% 80px;
}

.section-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 25px;
}

.section-small {
    color: var(--primary);
    font-size: 12px;
    font-weight: bold;
    letter-spacing: 1.5px;
    margin-bottom: 5px;
}

.section-header h2 {
    font-size: 32px;
}

.section-header p:last-child {
    color: var(--muted);
    margin-top: 6px;
}

select {
    padding: 12px 15px;
    border: 1px solid var(--border);
    border-radius: 9px;
    background: var(--card);
    color: var(--text);
    outline: none;
}

/* ================= FILTERS ================= */
.filters {
    display: flex;
    align-items: center;
    gap: 15px;
    flex-wrap: wrap;
    padding: 15px;
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: 12px;
    margin-bottom: 25px;
}

.filter-title {
    font-weight: bold;
}

.filters label {
    color: var(--muted);
    font-size: 12px;
}

.filters input {
    display: block;
    width: 150px;
    padding: 9px 10px;
    margin-top: 5px;
    border: 1px solid var(--border);
    border-radius: 7px;
    background: var(--bg);
    color: var(--text);
    outline: none;
}

.clear-filter {
    margin-left: auto;
    padding: 10px 15px;
    border: none;
    border-radius: 8px;
    background: #ef4444;
    color: white;
    cursor: pointer;
}

/* ================= PHONE GRID ================= */
.phone-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    gap: 22px;
}

.phone-card {
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: 17px;
    overflow: hidden;
    position: relative;
    transition: 0.25s;
    display: flex;
    flex-direction: column;
}

.phone-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 18px 45px rgba(0, 0, 0, 0.12);
}

/* ================= PHONE IMAGE ================= */
.phone-image {
    height: 260px;
    background: #f1f3f7;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
}

body.dark .phone-image {
    background: #20283a;
}

.phone-image img {
    max-width: 85%;
    max-height: 85%;
    object-fit: contain;
    transition: 0.3s;
}

.phone-card:hover .phone-image img {
    transform: scale(1.06);
}

.image-label {
    position: absolute;
    top: 12px;
    left: 12px;
    background: #16a34a;
    color: white;
    font-size: 10px;
    font-weight: bold;
    padding: 5px 8px;
    border-radius: 5px;
}

.heart {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 38px;
    height: 38px;
    border: none;
    border-radius: 50%;
    background: white;
    cursor: pointer;
    font-size: 18px;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.12);
}

.heart.active {
    color: #ef4444;
}

/* ================= PHONE INFO ================= */
.phone-info {
    padding: 18px;
    display: flex;
    flex-direction: column;
    flex: 1;
}

.brand {
    color: var(--primary);
    font-size: 12px;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 0.5px;
}

.phone-name {
    font-size: 18px;
    margin: 6px 0;
    font-weight: 700;
}

.short-specs {
    display: flex;
    gap: 5px;
    flex-wrap: wrap;
    margin: 10px 0;
}

.spec-pill {
    padding: 4px 7px;
    background: var(--bg);
    border: 1px solid var(--border);
    border-radius: 5px;
    font-size: 10px;
    color: var(--muted);
}

.rating {
    color: #f59e0b;
    margin-top: 5px;
    font-size: 13px;
    font-weight: bold;
}

.price-box {
    margin-top: auto;
    padding-top: 10px;
}

.price {
    font-size: 21px;
    font-weight: 800;
}

.old-price {
    color: var(--muted);
    text-decoration: line-through;
    font-size: 13px;
    margin-left: 7px;
    font-weight: normal;
}

.discount {
    color: #16a34a;
    font-size: 12px;
    margin-left: 5px;
    font-weight: bold;
}

.bank-offer {
    font-size: 11px;
    color: var(--primary);
    margin-top: 4px;
    font-weight: 600;
}

.color-preview {
    display: flex;
    align-items: center;
    gap: 6px;
    margin-top: 10px;
    font-size: 11px;
    color: var(--muted);
}

.mini-color {
    width: 14px;
    height: 14px;
    border-radius: 50%;
    border: 1px solid #aaa;
}

.card-buttons {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
    margin-top: 15px;
}

.card-buttons button {
    padding: 10px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;
    transition: 0.2s;
}

.details {
    background: var(--bg);
    color: var(--text);
    border: 1px solid var(--border) !important;
}

.add-cart {
    background: var(--primary);
    color: white;
}

.add-cart:hover {
    background: var(--primary-dark);
}

/* ================= MODAL ================= */
.modal {
    display: none;
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.7);
    z-index: 2000;
    align-items: center;
    justify-content: center;
    padding: 15px;
}

.modal-content {
    background: var(--card);
    color: var(--text);
    width: min(950px, 100%);
    max-height: 92vh;
    overflow-y: auto;
    border-radius: 20px;
    padding: 30px;
    position: relative;
}

.close {
    position: absolute;
    top: 12px;
    right: 17px;
    border: none;
    background: transparent;
    color: var(--text);
    font-size: 32px;
    cursor: pointer;
    z-index: 5;
}

/* ================= PRODUCT DETAILS MODAL ================= */
.product-layout {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 35px;
    padding-top: 15px;
}

.product-gallery {
    min-width: 0;
}

.main-product-image {
    width: 100%;
    height: 380px;
    object-fit: contain;
    background: var(--bg);
    border-radius: 15px;
    padding: 20px;
}

.product-brand {
    color: var(--primary);
    text-transform: uppercase;
    font-weight: bold;
    font-size: 13px;
}

.product-layout h2 {
    font-size: 28px;
    margin: 8px 0;
}

.product-description {
    color: var(--muted);
    line-height: 1.6;
    margin: 15px 0;
    font-size: 14px;
}

.product-price {
    font-size: 28px;
    font-weight: 900;
    margin: 12px 0;
}

.product-old-price {
    text-decoration: line-through;
    color: var(--muted);
    font-size: 16px;
    margin-left: 8px;
}

.offer-badge {
    display: inline-block;
    background: #dcfce7;
    color: #15803d;
    padding: 6px 12px;
    border-radius: 6px;
    font-size: 12px;
    font-weight: bold;
    margin-bottom: 12px;
}

body.dark .offer-badge {
    background: #14532d;
    color: #86efac;
}

.color-title {
    font-weight: bold;
    margin-top: 18px;
    font-size: 14px;
}

.color-options {
    display: flex;
    gap: 10px;
    margin-top: 10px;
    flex-wrap: wrap;
}

.color-option {
    display: flex;
    align-items: center;
    gap: 6px;
    border: 1px solid var(--border);
    padding: 7px 12px;
    border-radius: 20px;
    cursor: pointer;
    background: var(--bg);
    color: var(--text);
    font-size: 13px;
}

.color-option.selected {
    border: 2px solid var(--primary);
    background: rgba(99, 91, 255, 0.1);
}

.color-circle {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border: 1px solid #999;
}

.spec-table {
    margin-top: 20px;
    border: 1px solid var(--border);
    border-radius: 10px;
    overflow: hidden;
}

.spec-row {
    display: grid;
    grid-template-columns: 130px 1fr;
    border-bottom: 1px solid var(--border);
    padding: 10px 12px;
    font-size: 13px;
}

.spec-row:last-child {
    border-bottom: none;
}

.spec-row span:first-child {
    color: var(--muted);
}

/* ================= CART MODAL ================= */
.cart-modal {
    width: min(650px, 100%);
}

.modal-subtitle {
    color: var(--muted);
    margin: 5px 0 20px;
}

.cart-row {
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 15px 0;
    border-bottom: 1px solid var(--border);
}

.cart-row img {
    width: 75px;
    height: 75px;
    object-fit: contain;
    background: var(--bg);
    border-radius: 8px;
}

.cart-row-info {
    flex: 1;
}

.cart-row-info strong {
    display: block;
    margin-bottom: 5px;
}

.cart-color {
    color: var(--muted);
    font-size: 12px;
}

.quantity {
    display: flex;
    align-items: center;
    gap: 8px;
}

.quantity button {
    width: 27px;
    height: 27px;
    border: 1px solid var(--border);
    background: var(--bg);
    color: var(--text);
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
}

.remove-btn {
    border: none;
    background: #ef4444;
    color: white;
    padding: 6px 9px;
    border-radius: 5px;
    cursor: pointer;

}

.cart-summary {
    margin-top: 20px;
    padding: 18px;
    background: var(--bg);
    border-radius: 10px;
}

.cart-summary > div {
    display: flex;
    justify-content: space-between;
    padding: 6px 0;
}

.cart-summary hr {
    border: none;
    border-top: 1px solid var(--border);
    margin: 10px 0;
}

.grand-total {
    font-size: 20px;
}

.cart-summary strong {
    margin-left: auto;
}

.checkout {
    width: 100%;
    padding: 14px;
    border: none;
    border-radius: 10px;
    margin-top: 18px;
    background: var(--primary);
    color: white;
    font-size: 15px;
    font-weight: bold;
    cursor: pointer;
}

/* ================= FOOTER ================= */
footer {
    background: #0c1020;
    color: white;
    padding: 50px 6%;
    text-align: center;
}

.footer-logo {
    font-size: 25px;
    font-weight: 900;
    margin-bottom: 10px;
}

footer p {
    color: #9ca3af;
}

.footer-links {
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
    margin: 25px 0;
}

.footer-links span {
    color: #cbd5e1;
    font-size: 13px;
    cursor: pointer;
}

.footer-links span:hover {
    color: white;
}

.copyright {
    font-size: 12px;
}

/* ================= MOBILE ================= */
@media (max-width: 800px) {
    .header {
        padding: 12px 15px;
        flex-wrap: wrap;
        gap: 10px;
    }

    .search-box {
        order: 3;
        width: 100%;
    }

    .header-actions {
        margin-left: auto;
    }

    .hero {
        padding: 55px 25px;
        min-height: 480px;
    }

    .hero-phone {
        display: none;
    }

    .features {
        grid-template-columns: 1fr 1fr;
        padding: 20px 15px;
    }

    main {
        padding: 40px 15px 60px;
    }

    .section-header {
        align-items: flex-start;
        flex-direction: column;
        gap: 15px;
    }

    .filters {
        align-items: flex-start;
    }

    .clear-filter {
        margin-left: 0;
    }

    .product-layout {
        grid-template-columns: 1fr;
    }

    .main-product-image {
        height: 300px;
    }
}

@media (max-width: 500px) {
    .logo {
        font-size: 21px;
    }

    .header-actions button {
        padding: 8px;
    }

    .hero h1 {
        font-size: 48px;
    }

    .hero-buttons {
        flex-direction: column;
    }

    .primary-btn,
    .secondary-btn {
        width: 100%;
    }

    .features {
        grid-template-columns: 1fr;
    }

    .phone-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 10px;
    }

    .phone-image {
        height: 190px;
    }

    .phone-info {
        padding: 12px;
    }

    .phone-name {
        font-size: 14px;
    }

    .price {
        font-size: 16px;
    }

    .card-buttons {
        grid-template-columns: 1fr;
    }

    .spec-pill {
        font-size: 9px;
    }

    .cart-row {
        flex-wrap: wrap;
    }
}
