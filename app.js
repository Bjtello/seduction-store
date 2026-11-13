/**
 * SÉDUCTION - Haute Lingerie
 * Lógica SPA, Catálogo Exclusivo (6 Piezas Originales), Filtros, Banners y Carrito Flotante WhatsApp
 */

// Banners de Categoría de Lujo
const CATEGORY_BANNERS = {
    "negro-sensual": {
        tag: "COLECCIÓN NOIR & SOMBRAS",
        title: "Negro Sensual & Encaje Prohibido",
        description: "Elegancia clandestina inspirada en Cincuenta Sombras. Encajes franceses, terciopelo profundo y detalles en plata diseñados para el juego de las sombras.",
        image: "assets/banner-negro-sensual.jpg"
    },
    "edicion-roja": {
        tag: "PASIÓN & SEDUCCIÓN PURA",
        title: "Edición Roja Carmesí & Borgoña",
        description: "La intensidad del deseo en sedas carmesí y arneses de alta costura. Piezas exclusivas para encender la noche con poder absoluto.",
        image: "assets/bg-main-luxury.jpg"
    },
    "bodys-arneses": {
        tag: "ATELIER PROVOCATEUR",
        title: "Bodys, Arneses & Cadenas Silver",
        description: "Piezas arquitectónicas que enmarcan la silueta con correas de satén regulables, toques bondage de alta costura y herrajes metálicos pulidos.",
        image: "assets/banner-negro-sensual.jpg"
    },
    "all": {
        tag: "CATÁLOGO PRIVÉE",
        title: "El Arte de la Seducción Clandestina",
        description: "Descubre nuestra selección integral de alta corsetería, piezas de encaje y arneses exclusivos hechos a mano para noches memorables.",
        image: "assets/bg-hero-boutique.jpg"
    }
};

// Catálogo de Productos Exclusivos de SÉDUCTION (Únicamente las 6 piezas originales)
const PRODUCTS_DATA = [
    {
        id: "prod-01",
        name: "Body Colegiala Chic & Corbata",
        category: "negro-sensual",
        categoryLabel: "Negro Sensual",
        tags: ["negro-sensual", "bodys-arneses"],
        badge: "Bestseller",
        price: 22.00,
        oldPrice: 25.00,
        sizes: ["S", "M", "L"],
        image: "assets/model-1-colegiala.jpg",
        flatlayImage: "assets/prod-1-colegiala.jpg",
        description: "Enterizo negro seductor estilo colegiala chic con cuello camisero blanco, corbata negra satinada, abertura provocativa bajo el busto y tirantes conectados a falda skater.",
        material: "Satén de alta densidad, cuello camisero blanco de piqué, tirantes ajustables y broches reforzados."
    },
    {
        id: "prod-02",
        name: "Conjunto Noir Ribete Blanco",
        category: "negro-sensual",
        categoryLabel: "Negro Sensual",
        tags: ["negro-sensual"],
        badge: "Edición Especial",
        price: 22.00,
        oldPrice: 25.00,
        sizes: ["S", "M", "L"],
        image: "assets/model-2-ribete-blanco.jpg",
        flatlayImage: "assets/prod-2-ribete-blanco.jpg",
        description: "Sostén de encaje negro transparente con delicado festón blanco y lazo central. Braguita de tiro alto con tiras cruzadas y ligueros en muslos con lazos blancos.",
        material: "Encaje chantilly bicolor, lazos de raso marfil y elásticos afelpados regulables."
    },
    {
        id: "prod-03",
        name: "Conjunto Rojo Carmesí con Arnés",
        category: "edicion-roja",
        categoryLabel: "Edición Roja",
        tags: ["edicion-roja", "bodys-arneses"],
        badge: "Pieza Ícono",
        price: 22.00,
        oldPrice: 25.00,
        sizes: ["S", "M", "L"],
        image: "assets/model-3-arnes-rojo.jpg",
        flatlayImage: "assets/prod-3-arnes-rojo.jpg",
        description: "Conjunto de encaje rojo carmesí con arnés de diseño geométrico. Sostén con aros y argollas O-rings metálicas con tiras que cruzan abdomen y cintura, más ligueros a los muslos.",
        material: "Blonda carmesí borgoña, argollas metálicas hipoalergénicas y correas elásticas satinadas."
    },
    {
        id: "prod-04",
        name: "Conjunto Gargantilla Choker Noir",
        category: "negro-sensual",
        categoryLabel: "Negro Sensual",
        tags: ["negro-sensual", "bodys-arneses"],
        badge: "Alta Costura",
        price: 24.00,
        oldPrice: 27.00,
        sizes: ["S", "M", "L"],
        image: "assets/model-4-choker.jpg",
        flatlayImage: "assets/prod-4-choker-noir.jpg",
        description: "Exclusivo conjunto negro con gargantilla choker floral de encaje conectada al sostén mediante una tira central. Panty a juego con liguero de encaje y tiras cruzadas en cadera.",
        material: "Encaje floral bordado, gargantilla con broche regulable y ligueros con broches de silicona."
    },
    {
        id: "prod-05",
        name: "Bralette Noir Clásico Escote V",
        category: "negro-sensual",
        categoryLabel: "Negro Sensual",
        tags: ["negro-sensual"],
        badge: "Esencial VIP",
        price: 20.00,
        oldPrice: 24.00,
        sizes: ["S", "M", "L"],
        image: "assets/model-5-bralette.jpg",
        flatlayImage: "assets/prod-5-bralette-clean.jpg",
        description: "Bralette negro de encaje con escote en V profundo y banda elástica ancha. Braguita de encaje a juego con detalle de tiras dobles paralelas en la cadera.",
        material: "Encaje suave elástico, banda ancha bajo busto para confort absoluto y puente íntimo de algodón."
    },
    {
        id: "prod-06",
        name: "Body Arnés & Malla Transparente",
        category: "bodys-arneses",
        categoryLabel: "Bodys & Arneses",
        tags: ["bodys-arneses", "negro-sensual"],
        badge: "Bondage Chic",
        price: 22.00,
        oldPrice: 25.00,
        sizes: ["S", "M", "L"],
        image: "assets/prod-6-body-clean.jpg",
        flatlayImage: "assets/model-6-transparencias.jpg",
        description: "Body vanguardista estilo arnés con copas de malla transparente oscura. Diseño geométrico con cuello alto tipo choker, cintas por el torso y ligas en los muslos.",
        material: "Malla transparente de alta resistencia, correas de raso reforzadas y microhebillas."
    }
];

// Estado de la Aplicación
class BoutiqueApp {
    constructor() {
        this.products = PRODUCTS_DATA;
        this.banners = CATEGORY_BANNERS;
        this.cart = this.loadCart();
        this.currentFilter = "all";
        this.selectedSizes = {}; // { [productId]: "S/M" }

        // Descuentos y Cupones
        this.discountPercent = 0;
        this.appliedPromoCode = "";

        // Inicializar tallas por defecto
        this.products.forEach(p => {
            this.selectedSizes[p.id] = p.sizes[0] || "S";
        });

        // Número de WhatsApp de la boutique (Ecuador: +593 o genérico configurable)
        this.whatsappNumber = "593987283265";

        this.initDOMElements();
        this.bindEvents();
        this.renderCategoryBanner();
        this.renderProducts();
        this.updateCartUI();
    }

    initDOMElements() {
        this.productsGrid = document.getElementById("productsGrid");
        this.categoryBannerContainer = document.getElementById("categoryBannerContainer");
        this.filterButtons = document.querySelectorAll(".filter-btn");
        this.cartCount = document.getElementById("cartCount");
        this.cartDrawer = document.getElementById("cartDrawer");
        this.cartOverlay = document.getElementById("cartOverlay");
        this.cartTriggerBtn = document.getElementById("cartTriggerBtn");
        this.cartCloseBtn = document.getElementById("cartCloseBtn");
        this.cartBody = document.getElementById("cartBody");
        this.cartSubtotal = document.getElementById("cartSubtotal");
        this.cartTotal = document.getElementById("cartTotal");
        this.discountLine = document.getElementById("discountLine");
        this.discountVal = document.getElementById("discountVal");
        this.discountPercentElem = document.getElementById("discountPercent");
        this.cartItemsSubtitle = document.getElementById("cartItemsSubtitle");
        this.whatsappOrderBtn = document.getElementById("whatsappOrderBtn");
        this.clearCartBtn = document.getElementById("clearCartBtn");
        this.orderCustomerName = document.getElementById("orderCustomerName");
        this.orderCity = document.getElementById("orderCity");
        this.promoCodeInput = document.getElementById("promoCodeInput");
        this.promoBadgeInfo = document.getElementById("promoBadgeInfo");

        // Quick View Modal
        this.quickViewModal = document.getElementById("quickViewModal");
        this.quickViewOverlay = document.getElementById("quickViewOverlay");
        this.quickViewContent = document.getElementById("quickViewContent");
        this.modalCloseBtn = document.getElementById("modalCloseBtn");

        // Guía de Tallas Modal
        this.sizeGuideModal = document.getElementById("sizeGuideModal");
        this.sizeGuideOverlay = document.getElementById("sizeGuideOverlay");
        this.sizeGuideCloseBtn = document.getElementById("sizeGuideCloseBtn");

        // Audio & Mobile Nav
        this.audioToggleBtn = document.getElementById("audioToggleBtn");
        this.mainHeader = document.getElementById("mainHeader");
        this.mobileMenuBtn = document.getElementById("mobileMenuBtn");
        this.navLinks = document.getElementById("navLinks");
        this.toastContainer = document.getElementById("toastContainer");

        // Dock de Música & Playlist 50 Sombras
        this.musicDock = document.getElementById("musicDock");
        this.musicDockToggle = document.getElementById("musicDockToggle");
        this.openPlaylistModalBtn = document.getElementById("openPlaylistModalBtn");
        this.playlistModal = document.getElementById("playlistModal");
        this.playlistOverlay = document.getElementById("playlistOverlay");
        this.playlistCloseBtn = document.getElementById("playlistCloseBtn");
        this.modalSynthToggleBtn = document.getElementById("modalSynthToggleBtn");
    }

    bindEvents() {
        // Sticky Header Blur effect
        window.addEventListener("scroll", () => {
            if (window.scrollY > 40) {
                this.mainHeader.classList.add("scrolled");
            } else {
                this.mainHeader.classList.remove("scrolled");
            }
        });

        // Controles de Audio sincronizados (Header, Dock Flotante y Modal)
        if (this.audioToggleBtn) {
            this.audioToggleBtn.addEventListener("click", () => this.toggleAtmosphere());
        }

        

        

        // Modal Playlist 50 Sombras
        // Playlist modal removido para The Weeknd Earned It
        if (this.playlistCloseBtn) {
            this.playlistCloseBtn.addEventListener("click", () => this.closePlaylistModal());
        }
        if (this.playlistOverlay) {
            this.playlistOverlay.addEventListener("click", () => this.closePlaylistModal());
        }

        // Menú móvil
        if (this.mobileMenuBtn && this.navLinks) {
            this.mobileMenuBtn.addEventListener("click", () => {
                this.navLinks.classList.toggle("mobile-active");
            });

            this.navLinks.querySelectorAll("a").forEach(link => {
                link.addEventListener("click", () => {
                    this.navLinks.classList.remove("mobile-active");
                });
            });
        }

        // Filtros de Catálogo
        this.filterButtons.forEach(btn => {
            btn.addEventListener("click", () => {
                const filter = btn.getAttribute("data-filter");
                this.setFilter(filter);
            });
        });

        // Carrito Drawer Toggles
        this.cartTriggerBtn.addEventListener("click", () => this.openCart());
        this.cartCloseBtn.addEventListener("click", () => this.closeCart());
        this.cartOverlay.addEventListener("click", () => this.closeCart());

        // WhatsApp Checkout
        this.whatsappOrderBtn.addEventListener("click", () => this.checkoutWhatsApp());

        // Vaciar Carrito
        this.clearCartBtn.addEventListener("click", () => {
            if (this.cart.length === 0) return;
            if (confirm("¿Deseas vaciar tu selección íntima?")) {
                this.cart = [];
                this.saveCart();
                this.updateCartUI();
                this.showToast("Carrito vaciado correctamente");
            }
        });

        // Modal Quick View
        this.modalCloseBtn.addEventListener("click", () => this.closeQuickView());
        this.quickViewOverlay.addEventListener("click", () => this.closeQuickView());

        // Modal Guía de Tallas
        if (this.sizeGuideCloseBtn && this.sizeGuideOverlay) {
            this.sizeGuideCloseBtn.addEventListener("click", () => this.closeSizeGuide());
            this.sizeGuideOverlay.addEventListener("click", () => this.closeSizeGuide());
        }

        // Tecla ESC para cerrar modales y drawer
        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape") {
                this.closeCart();
                this.closeQuickView();
                this.closeSizeGuide();
                this.closePlaylistModal();
                if (this.navLinks) this.navLinks.classList.remove("mobile-active");
            }
        });
    }

    setFilter(filterValue) {
        this.currentFilter = filterValue;

        // Actualizar estado activo en botones
        this.filterButtons.forEach(btn => {
            if (btn.getAttribute("data-filter") === filterValue) {
                btn.classList.add("active");
            } else {
                btn.classList.remove("active");
            }
        });

        this.renderCategoryBanner();
        this.renderProducts();
    }

    renderCategoryBanner() {
        if (!this.categoryBannerContainer) return;
        const banner = this.banners[this.currentFilter] || this.banners["all"];

        this.categoryBannerContainer.innerHTML = `
            <div class="category-banner-card" style="background-image: url('${banner.image}');">
                <div class="category-banner-content">
                    <span class="category-banner-tag">
                        <i data-lucide="sparkles"></i> ${banner.tag}
                    </span>
                    <h2 class="category-banner-title">${banner.title}</h2>
                    <p class="category-banner-desc">${banner.description}</p>
                </div>
            </div>
        `;

        if (window.lucide) {
            lucide.createIcons();
        }
    }

    renderProducts() {
        // Filtrar productos
        let filtered = this.products;
        if (this.currentFilter !== "all") {
            filtered = this.products.filter(p => {
                return p.category === this.currentFilter || p.tags.includes(this.currentFilter);
            });
        }

        if (filtered.length === 0) {
            this.productsGrid.innerHTML = `
                <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; color: var(--text-silver-dark);">
                    <i data-lucide="eye-off" style="width: 48px; height: 48px; margin-bottom: 1rem; color: var(--crimson-light);"></i>
                    <h3 style="font-family: var(--font-heading); color: white; margin-bottom: 0.5rem;">No se encontraron piezas en esta categoría</h3>
                    <p>Por favor selecciona otro filtro para explorar nuestra colección.</p>
                </div>
            `;
            if (window.lucide) lucide.createIcons();
            return;
        }

        this.productsGrid.innerHTML = filtered.map(prod => {
            const selectedSize = this.selectedSizes[prod.id] || prod.sizes[0];

            return `
                <article class="product-card" data-id="${prod.id}">
                    <div class="product-image-wrap">
                        <img src="${prod.image}" alt="${prod.name}" class="product-image" loading="lazy">
                        <span class="product-badge">${prod.badge}</span>
                        <button class="quick-view-trigger" onclick="app.openQuickView('${prod.id}')" title="Vista Rápida">
                            <i data-lucide="eye"></i>
                        </button>
                    </div>

                    <div class="product-info">
                        <span class="product-category-tag">${prod.categoryLabel}</span>
                        <h3 class="product-title">${prod.name}</h3>
                        <p class="product-desc">${prod.description}</p>
                        
                        <div class="product-price">
                            <span>$${prod.price.toFixed(2)}</span>
                            ${prod.oldPrice ? `<span class="old-price">$${prod.oldPrice.toFixed(2)}</span>` : ''}
                        </div>

                        <!-- Selector de Tallas -->
                        <div class="size-selector-wrap">
                            <div class="size-label">
                                <span>Talla</span>
                                <span onclick="app.openSizeGuide()" style="color: var(--crimson-light); font-size: 0.72rem; cursor: pointer; text-decoration: underline;" title="Ver tabla de medidas">
                                    Guía Sensual
                                </span>
                            </div>
                            <div class="size-options">
                                ${prod.sizes.map(size => `
                                    <button 
                                        type="button" 
                                        class="size-pill ${size === selectedSize ? 'selected' : ''}" 
                                        onclick="app.selectProductSize('${prod.id}', '${size}', this)">
                                        ${size}
                                    </button>
                                `).join('')}
                            </div>
                        </div>

                        <!-- Botón Añadir al Carrito con Efecto Resplandor Rojo Oscuro -->
                        <button class="btn-add-cart" onclick="app.addToCart('${prod.id}')">
                            <i data-lucide="shopping-bag"></i>
                            <span>Añadir al Carrito</span>
                        </button>
                    </div>
                </article>
            `;
        }).join('');

        if (window.lucide) {
            lucide.createIcons();
        }
    }

    selectProductSize(productId, size, buttonElement) {
        this.selectedSizes[productId] = size;

        // Actualizar visualmente los botones de talla dentro de esa tarjeta
        const card = buttonElement.closest(".product-card");
        if (card) {
            const pills = card.querySelectorAll(".size-pill");
            pills.forEach(p => p.classList.remove("selected"));
            buttonElement.classList.add("selected");
        }
    }

    // FAQ Accordion Toggle
    toggleFaq(buttonElement) {
        const item = buttonElement.closest(".faq-item");
        if (!item) return;
        const wasActive = item.classList.contains("active");

        // Cerrar otros
        document.querySelectorAll(".faq-item").forEach(i => i.classList.remove("active"));

        if (!wasActive) {
            item.classList.add("active");
        }
    }

    // Modal Guía de Tallas
    openSizeGuide() {
        if (!this.sizeGuideModal || !this.sizeGuideOverlay) return;
        this.sizeGuideModal.classList.add("active");
        this.sizeGuideOverlay.classList.add("active");
        if (window.lucide) lucide.createIcons();
    }

    closeSizeGuide() {
        if (!this.sizeGuideModal || !this.sizeGuideOverlay) return;
        this.sizeGuideModal.classList.remove("active");
        this.sizeGuideOverlay.classList.remove("active");
    }

        // Control de Audio HTML5
    toggleAtmosphere() {
        const audio = document.getElementById("bgMusic") || document.querySelector("audio");
        if (audio) {
            if (audio.paused) {
                audio.play();
                this.showToast("The Weeknd — Earned It (Sonido ambiente activado)");
            } else {
                audio.pause();
                this.showToast("Música de fondo en pausa");
            }
        }
    }

    syncAudioUI(isPlaying) {
        if (window.actualizarPlayVisual) {
            window.actualizarPlayVisual(isPlaying);
        }
    }

    // Modal Playlist 50 Sombras
    openPlaylistModal() {
        if (!this.playlistModal || !this.playlistOverlay) return;
        this.playlistModal.classList.add("active");
        this.playlistOverlay.classList.add("active");
        if (window.lucide) lucide.createIcons();
    }

    closePlaylistModal() {
        if (!this.playlistModal || !this.playlistOverlay) return;
        this.playlistModal.classList.remove("active");
        this.playlistOverlay.classList.remove("active");
    }

    // Modal de Vista Rápida
    openQuickView(productId) {
        const prod = this.products.find(p => p.id === productId);
        if (!prod) return;

        const currentSize = this.selectedSizes[prod.id] || prod.sizes[0];

        this.quickViewContent.innerHTML = `
            <div class="modal-grid">
                <div class="modal-img-wrap">
                    <img src="${prod.image}" alt="${prod.name}">
                </div>
                <div class="modal-details">
                    <span class="product-category-tag">${prod.categoryLabel} &bull; ${prod.badge}</span>
                    <h2 class="product-title" style="font-size: 1.8rem; margin: 0.5rem 0 0.8rem;">${prod.name}</h2>
                    
                    <div class="product-price" style="font-size: 1.6rem; margin-bottom: 1.2rem;">
                        <span>$${prod.price.toFixed(2)}</span>
                        ${prod.oldPrice ? `<span class="old-price" style="font-size: 1.1rem;">$${prod.oldPrice.toFixed(2)}</span>` : ''}
                    </div>

                    <p style="color: var(--text-silver); font-size: 0.92rem; line-height: 1.7; margin-bottom: 1.5rem;">
                        ${prod.description}
                    </p>

                    <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--glass-border); border-radius: 10px; padding: 1rem; margin-bottom: 1.5rem;">
                        <span style="font-size: 0.72rem; letter-spacing: 0.15em; color: var(--crimson-light); font-weight: 700; text-transform: uppercase; display: block; margin-bottom: 0.3rem;">Materiales & Acabados</span>
                        <p style="font-size: 0.82rem; color: var(--text-silver-dark);">${prod.material}</p>
                    </div>

                    <div class="size-selector-wrap" style="margin-bottom: 1.8rem;">
                        <div class="size-label">
                            <span>Selecciona tu Talla:</span>
                            <span onclick="app.openSizeGuide()" style="color: var(--crimson-light); font-size: 0.72rem; cursor: pointer; text-decoration: underline;">
                                Guía Sensual
                            </span>
                        </div>
                        <div class="size-options">
                            ${prod.sizes.map(size => `
                                <button 
                                    type="button" 
                                    class="size-pill ${size === currentSize ? 'selected' : ''}" 
                                    onclick="app.selectProductSize('${prod.id}', '${size}', this)">
                                    ${size}
                                </button>
                            `).join('')}
                        </div>
                    </div>

                    <button class="btn-crimson btn-glow" style="width: 100%; justify-content: center;" onclick="app.addToCart('${prod.id}'); app.closeQuickView();">
                        <i data-lucide="shopping-bag"></i>
                        <span>Añadir a mi Carrito Secreto</span>
                    </button>
                </div>
            </div>
        `;

        this.quickViewModal.classList.add("active");
        this.quickViewOverlay.classList.add("active");
        if (window.lucide) lucide.createIcons();
    }

    closeQuickView() {
        this.quickViewModal.classList.remove("active");
        this.quickViewOverlay.classList.remove("active");
    }

    // Carrito de Compras
    addToCart(productId) {
        const prod = this.products.find(p => p.id === productId);
        if (!prod) return;

        const size = this.selectedSizes[productId] || prod.sizes[0];
        const existingItem = this.cart.find(item => item.id === productId && item.size === size);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            this.cart.push({
                id: prod.id,
                name: prod.name,
                price: prod.price,
                image: prod.image,
                size: size,
                quantity: 1
            });
        }

        this.saveCart();
        this.updateCartUI();
        this.triggerBadgeBump();
        this.showToast(`“${prod.name}” (${size}) añadido a tu selección íntima`);
    }

    removeFromCart(productId, size) {
        this.cart = this.cart.filter(item => !(item.id === productId && item.size === size));
        this.saveCart();
        this.updateCartUI();
    }

    changeQuantity(productId, size, delta) {
        const item = this.cart.find(i => i.id === productId && i.size === size);
        if (!item) return;

        item.quantity += delta;
        if (item.quantity <= 0) {
            this.removeFromCart(productId, size);
        } else {
            this.saveCart();
            this.updateCartUI();
        }
    }

    // Aplicar Cupón Promocional VIP
    applyPromoCode() {
        if (!this.promoCodeInput) return;
        const code = this.promoCodeInput.value.trim().toUpperCase();
        if (!code) return;

        if (code === "NOIR15" || code === "SECRETO15") {
            this.discountPercent = 15;
            this.appliedPromoCode = code;
            this.showToast("Cupón VIP aplicado: 15% de descuento");
            if (this.promoBadgeInfo) {
                this.promoBadgeInfo.innerHTML = `<span style="color: #4ade80; font-size: 0.75rem; font-weight: 600;">✔ Cupón ${code} activo (-15%)</span>`;
            }
        } else if (code === "SECRETO10" || code === "VIP10") {
            this.discountPercent = 10;
            this.appliedPromoCode = code;
            this.showToast("Cupón VIP aplicado: 10% de descuento");
            if (this.promoBadgeInfo) {
                this.promoBadgeInfo.innerHTML = `<span style="color: #4ade80; font-size: 0.75rem; font-weight: 600;">✔ Cupón ${code} activo (-10%)</span>`;
            }
        } else {
            this.showToast("Código no válido. Prueba con NOIR15");
            if (this.promoBadgeInfo) {
                this.promoBadgeInfo.innerHTML = `<span style="color: #f43f5e; font-size: 0.75rem;">✖ Código inválido. Prueba NOIR15</span>`;
            }
        }
        this.updateCartUI();
    }

    updateCartUI() {
        const totalItems = this.cart.reduce((sum, item) => sum + item.quantity, 0);
        this.cartCount.textContent = totalItems;
        this.cartItemsSubtitle.textContent = `${totalItems} ${totalItems === 1 ? 'prenda seleccionada' : 'prendas seleccionadas'}`;

        const subtotal = this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        this.cartSubtotal.textContent = `$${subtotal.toFixed(2)}`;

        // Cálculo de descuento
        let discountAmount = 0;
        if (this.discountPercent > 0) {
            discountAmount = subtotal * (this.discountPercent / 100);
            if (this.discountLine) {
                this.discountLine.style.display = "flex";
                if (this.discountPercentElem) this.discountPercentElem.textContent = `${this.discountPercent}%`;
                if (this.discountVal) this.discountVal.textContent = `-$${discountAmount.toFixed(2)}`;
            }
        } else {
            if (this.discountLine) this.discountLine.style.display = "none";
        }

        const finalTotal = Math.max(0, subtotal - discountAmount);
        this.cartTotal.textContent = `$${finalTotal.toFixed(2)}`;

        if (this.cart.length === 0) {
            this.cartBody.innerHTML = `
                <div class="cart-empty-state">
                    <i data-lucide="heart" class="cart-empty-icon"></i>
                    <h4>Tu selección íntima está vacía</h4>
                    <p style="font-size: 0.85rem; line-height: 1.5; margin-bottom: 1.5rem;">
                        Permítete explorar nuestros encajes y arneses exclusivos. Cada prenda aguarda para revelar tu lado más audaz.
                    </p>
                    <a href="#coleccion" class="btn-glass" onclick="app.closeCart()" style="font-size: 0.78rem;">
                        Explorar Colección
                    </a>
                </div>
            `;
        } else {
            this.cartBody.innerHTML = this.cart.map(item => `
                <div class="cart-item">
                    <img src="${item.image}" alt="${item.name}" class="cart-item-img">
                    <div class="cart-item-info">
                        <div>
                            <h4 class="cart-item-name">${item.name}</h4>
                            <span class="cart-item-size-badge">Talla: ${item.size}</span>
                        </div>
                        <div style="display: flex; align-items: center; justify-content: space-between; margin-top: 0.5rem;">
                            <span class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</span>
                            
                            <div class="cart-item-controls">
                                <button class="qty-btn" onclick="app.changeQuantity('${item.id}', '${item.size}', -1)" title="Reducir">
                                    <i data-lucide="minus" style="width: 12px; height: 12px;"></i>
                                </button>
                                <span class="qty-number">${item.quantity}</span>
                                <button class="qty-btn" onclick="app.changeQuantity('${item.id}', '${item.size}', 1)" title="Aumentar">
                                    <i data-lucide="plus" style="width: 12px; height: 12px;"></i>
                                </button>
                                <button class="cart-remove-item" onclick="app.removeFromCart('${item.id}', '${item.size}')" title="Eliminar">
                                    <i data-lucide="trash-2" style="width: 15px; height: 15px;"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            `).join('');
        }

        if (window.lucide) {
            lucide.createIcons();
        }
    }

    triggerBadgeBump() {
        this.cartCount.classList.add("bump");
        setTimeout(() => {
            this.cartCount.classList.remove("bump");
        }, 300);
    }

    openCart() {
        this.cartDrawer.classList.add("active");
        this.cartOverlay.classList.add("active");
        document.body.style.overflow = "hidden";
    }

    closeCart() {
        this.cartDrawer.classList.remove("active");
        this.cartOverlay.classList.remove("active");
        document.body.style.overflow = "";
    }

    // Checkout por WhatsApp con Mensaje Predefinido de Lujo
    checkoutWhatsApp() {
        if (this.cart.length === 0) {
            alert("Tu carrito está vacío. Agrega al menos una prenda antes de enviar el pedido.");
            return;
        }

        const customerName = this.orderCustomerName.value.trim() || "Cliente VIP";
        const city = this.orderCity.value.trim() || "Por coordinar en privado";
        const subtotal = this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const discountAmount = subtotal * (this.discountPercent / 100);
        const finalTotal = Math.max(0, subtotal - discountAmount);

        // Armado elegante del mensaje
        let message = `🌹 *PEDIDO EXCLUSIVO - SÉDUCTION BOUTIQUE* 🌹\n`;
        message += `_Atención Confidencial & Empaque Discreto_\n\n`;
        message += `👤 *Cliente:* ${customerName}\n`;
        message += `📍 *Ciudad / Destino:* ${city}\n`;
        message += `------------------------------------\n`;
        message += `📦 *DETALLE DE PRENDAS:* \n`;

        this.cart.forEach((item, index) => {
            message += `${index + 1}. *${item.name}*\n`;
            message += `   • Talla: ${item.size}\n`;
            message += `   • Cantidad: ${item.quantity}\n`;
            message += `   • Subtotal: $${(item.price * item.quantity).toFixed(2)}\n`;
        });

        message += `------------------------------------\n`;
        message += `💵 *Subtotal:* $${subtotal.toFixed(2)} USD\n`;
        if (this.discountPercent > 0) {
            message += `🎟 *Cupón VIP:* ${this.appliedPromoCode} (-${this.discountPercent}%)\n`;
            message += `✨ *Ahorro:* -$${discountAmount.toFixed(2)} USD\n`;
        }
        message += `💰 *TOTAL PRENDAS:* $${finalTotal.toFixed(2)} USD\n`;
        message += `🚚 *Envío:* A coordinar (Gratis en puntos Quito / Tarifa Servientrega según ciudad)\n`;
        message += `🔒 *Garantía:* Empaque neutro y 100% confidencial.\n\n`;
        message += `Hola Séduction, deseo coordinar el pago reservado y la entrega de este pedido.`;

        // Codificar URL para WhatsApp
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${this.whatsappNumber}?text=${encodedMessage}`;

        // Abrir WhatsApp en pestaña nueva
        window.open(whatsappUrl, "_blank");
    }

    // Toast Feedback
    showToast(message) {
        const toast = document.createElement("div");
        toast.className = "toast";
        toast.innerHTML = `
            <i data-lucide="check-circle-2"></i>
            <span>${message}</span>
        `;
        this.toastContainer.appendChild(toast);

        if (window.lucide) {
            lucide.createIcons();
        }

        setTimeout(() => {
            toast.style.animation = "toastOut 0.35s forwards";
            setTimeout(() => {
                if (toast.parentNode) {
                    toast.parentNode.removeChild(toast);
                }
            }, 350);
        }, 3200);
    }

    handleNewsletter() {
        const input = document.getElementById("newsletterEmail");
        if (input && input.value) {
            this.showToast("Bienvenida a la lista secreta de Séduction.");
            input.value = "";
        }
    }

    // Persistencia LocalStorage
    saveCart() {
        try {
            localStorage.setItem("seduction_cart", JSON.stringify(this.cart));
        } catch (e) {
            console.warn("No se pudo guardar en localStorage", e);
        }
    }

    loadCart() {
        try {
            const saved = localStorage.getItem("seduction_cart");
            return saved ? JSON.parse(saved) : [];
        } catch (e) {
            return [];
        }
    }
}

// Inicializar la aplicación globalmente
let app;
document.addEventListener("DOMContentLoaded", () => {
    app = new BoutiqueApp();
});



// ==========================================
// Control Exclusivo de Audio HTML5 Nativo
// The Weeknd - Earned It
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('bgMusic') || document.querySelector('audio');
    const playBtn = document.getElementById('playPauseBtn');
    const playIcon = document.getElementById('playPauseIcon');
    const muteBtn = document.getElementById('muteToggleBtn');
    const muteIcon = document.getElementById('muteIcon');
    const eqBars = document.getElementById('eqBars');
    const dock = document.getElementById('musicDock');

    if (!audio) return;

    // Configuración nativa del reproductor HTML5
    audio.volume = 0.8;
    audio.muted = false;

    // Sincronización visual Play / Pausa
    function actualizarPlayVisual(reproduciendo) {
        if (playIcon) {
            playIcon.setAttribute('data-lucide', reproduciendo ? 'pause' : 'play');
        }
        if (eqBars) {
            eqBars.style.opacity = reproduciendo ? '1' : '0.4';
        }
        if (dock) {
            dock.classList.toggle('playing', reproduciendo);
        }
        if (window.lucide) {
            window.lucide.createIcons();
        }
    }

    // Sincronización visual Silencio / Mute
    function actualizarMuteVisual(estaSilenciado) {
        if (muteIcon) {
            muteIcon.setAttribute('data-lucide', estaSilenciado ? 'volume-x' : 'volume-2');
        }
        if (muteBtn) {
            muteBtn.style.opacity = estaSilenciado ? '0.6' : '1';
        }
        if (window.lucide) {
            window.lucide.createIcons();
        }
    }

    // Control exclusivo del botón Play / Pausa
    if (playBtn) {
        playBtn.onclick = function (e) {
            e.stopPropagation();
            if (audio.paused) {
                audio.play().then(() => {
                    actualizarPlayVisual(true);
                }).catch(err => {
                    console.warn("Reproducción pausada por navegador:", err);
                });
            } else {
                audio.pause();
                actualizarPlayVisual(false);
            }
        };
    }

    // Control exclusivo del botón de Silencio
    if (muteBtn) {
        muteBtn.onclick = function (e) {
            e.stopPropagation();
            audio.muted = !audio.muted;
            actualizarMuteVisual(audio.muted);
        };
    }

    // Escuchar eventos nativos de la etiqueta <audio>
    audio.addEventListener('play', () => actualizarPlayVisual(true));
    audio.addEventListener('pause', () => actualizarPlayVisual(false));
    audio.addEventListener('volumechange', () => actualizarMuteVisual(audio.muted));

    // Desbloqueo de audio en la primera interacción del usuario con la tienda
    function primerToque(e) {
        if (e.target && e.target.closest && (e.target.closest('#musicDock') || e.target.closest('#playPauseBtn') || e.target.closest('#muteToggleBtn'))) {
            return;
        }

        if (audio.paused) {
            audio.play().then(() => {
                actualizarPlayVisual(true);
            }).catch(() => {
                // Autoplay bloqueado por políticas del navegador hasta clic manual
            });
        }
    }

    document.addEventListener('click', primerToque, { once: true });
    document.addEventListener('touchstart', primerToque, { once: true });

    window.actualizarPlayVisual = actualizarPlayVisual;
    window.actualizarMuteVisual = actualizarMuteVisual;
    window.updateMusicVisuals = actualizarPlayVisual;
});
