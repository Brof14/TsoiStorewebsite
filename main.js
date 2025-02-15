const products = [
  {
    id: 1,
    model: "iphone13pro",
    name: "iPhone 13 Pro",
    price: 999,
    colors: ["Graphite", "Gold", "Silver", "Sierra Blue"],
    specs: { screen: '6.1"', memory: "128GB", camera: "12MP Triple", processor: "A15 Bionic" },
    discount: false,
    popular: true,
    rating: 4.7,
    reviewsCount: 200,
    image: "images/iphone13pro_graphite.jpg",
    images: [
      "images/iphone13pro_graphite.jpg",
      "images/iphone13pro_gold.jpg",
      "images/iphone13pro_silver.jpg",
      "images/iphone13pro_sierrablue.jpg"
    ]
  },
  {
    id: 2,
    model: "iphone14pro",
    name: "iPhone 14 Pro",
    price: 1099,
    colors: ["Deep Purple", "Gold", "Silver", "Space Black"],
    specs: { screen: '6.1"', memory: "128GB", camera: "48MP Triple", processor: "A16 Bionic" },
    discount: true,
    popular: true,
    rating: 4.8,
    reviewsCount: 250,
    image: "images/iphone14pro_deeppurple.jpg",
    images: [
      "images/iphone14pro_deeppurple.jpg",
      "images/iphone14pro_gold.jpg",
      "images/iphone14pro_silver.jpg",
      "images/iphone14pro_spaceblack.jpg"
    ]
  },
  {
    id: 3,
    model: "iphone14",
    name: "iPhone 14",
    price: 899,
    colors: ["Blue", "Midnight", "Starlight", "Product(RED)"],
    specs: { screen: '6.1"', memory: "128GB", camera: "12MP Dual", processor: "A15 Bionic" },
    discount: false,
    popular: false,
    rating: 4.5,
    reviewsCount: 150,
    image: "images/iphone14_blue.jpg",
    images: [
      "images/iphone14_blue.jpg",
      "images/iphone14_midnight.jpg",
      "images/iphone14_starlight.jpg",
      "images/iphone14_red.jpg"
    ]
  },
  {
    id: 4,
    model: "iphone15",
    name: "iPhone 15",
    price: 999,
    colors: ["Black", "White", "Red", "Blue"],
    specs: { screen: '6.1"', memory: "128GB", camera: "12MP Dual", processor: "A16 Bionic" },
    discount: true,
    popular: true,
    rating: 4.6,
    reviewsCount: 180,
    image: "images/iphone15_black.jpg",
    images: [
      "images/iphone15_black.jpg",
      "images/iphone15_white.jpg",
      "images/iphone15_red.jpg",
      "images/iphone15_blue.jpg"
    ]
  },
  {
    id: 5,
    model: "iphone15pro",
    name: "iPhone 15 Pro",
    price: 1199,
    colors: ["Titanium", "Black", "Silver", "Blue"],
    specs: { screen: '6.1"', memory: "256GB", camera: "48MP Triple", processor: "A17 Pro" },
    discount: false,
    popular: true,
    rating: 4.8,
    reviewsCount: 220,
    image: "images/iphone15pro_titanium.jpg",
    images: [
      "images/iphone15pro_titanium.jpg",
      "images/iphone15pro_black.jpg",
      "images/iphone15pro_silver.jpg",
      "images/iphone15pro_blue.jpg"
    ]
  },
  {
    id: 6,
    model: "iphone16",
    name: "iPhone 16",
    price: 1099,
    colors: ["Black", "White", "Gold"],
    specs: { screen: '6.1"', memory: "128GB", camera: "12MP Dual", processor: "A16 Bionic" },
    discount: false,
    popular: false,
    rating: 4.4,
    reviewsCount: 130,
    image: "images/iphone16_black.jpg",
    images: [
      "images/iphone16_black.jpg",
      "images/iphone16_white.jpg",
      "images/iphone16_gold.jpg"
    ]
  },
  {
    id: 7,
    model: "iphone16pro",
    name: "iPhone 16 Pro",
    price: 1299,
    colors: ["Black", "Silver", "Gold", "Blue"],
    specs: { screen: '6.1"', memory: "256GB", camera: "48MP Triple", processor: "A17 Pro" },
    discount: true,
    popular: true,
    rating: 4.9,
    reviewsCount: 300,
    image: "images/iphone16pro_black.jpg",
    images: [
      "images/iphone16pro_black.jpg",
      "images/iphone16pro_silver.jpg",
      "images/iphone16pro_gold.jpg",
      "images/iphone16pro_blue.jpg"
    ]
  },
  {
    id: 8,
    model: "iphone16promax",
    name: "iPhone 16 Pro Max",
    price: 1399,
    colors: ["Black", "Silver", "Gold"],
    specs: { screen: '6.7"', memory: "256GB", camera: "48MP Triple", processor: "A17 Pro" },
    discount: false,
    popular: true,
    rating: 5.0,
    reviewsCount: 320,
    image: "images/iphone16promax_black.jpg",
    images: [
      "images/iphone16promax_black.jpg",
      "images/iphone16promax_silver.jpg",
      "images/iphone16promax_gold.jpg"
    ]
  },
  {
    id: 9,
    model: "iphone14promax",
    name: "iPhone 14 Pro Max",
    price: 1299,
    colors: ["Deep Purple", "Gold", "Silver", "Space Black"],
    specs: { screen: '6.7"', memory: "128GB", camera: "48MP Triple", processor: "A16 Bionic" },
    discount: true,
    popular: true,
    rating: 4.8,
    reviewsCount: 280,
    image: "images/iphone14promax_deeppurple.jpg",
    images: [
      "images/iphone14promax_deeppurple.jpg",
      "images/iphone14promax_gold.jpg",
      "images/iphone14promax_silver.jpg",
      "images/iphone14promax_spaceblack.jpg"
    ]
  },
  {
    id: 10,
    model: "iphone13promax",
    name: "iPhone 13 Pro Max",
    price: 1199,
    colors: ["Graphite", "Gold", "Silver", "Sierra Blue"],
    specs: { screen: '6.7"', memory: "128GB", camera: "12MP Triple", processor: "A15 Bionic" },
    discount: false,
    popular: false,
    rating: 4.7,
    reviewsCount: 210,
    image: "images/iphone13promax_graphite.jpg",
    images: [
      "images/iphone13promax_graphite.jpg",
      "images/iphone13promax_gold.jpg",
      "images/iphone13promax_silver.jpg",
      "images/iphone13promax_sierrablue.jpg"
    ]
  }
];



document.addEventListener('DOMContentLoaded', () => {
  initCountdown();

  if (document.getElementById('new-products')) renderHomeSections();
  if (document.getElementById('catalog-products')) {
    renderCatalogProducts(products);
    initCatalogSearch();
  }
  if (window.location.pathname.includes("product.html")) {
    loadReviews();
    renderRecommendedProducts();
  }
  loadCart();
  loadFavorites();
  initAuth();
});

function initCountdown() {
  const countdownElement = document.getElementById('countdown');
  if (!countdownElement) return;
  const endTime = new Date("2025-12-31T23:59:59").getTime();
  setInterval(() => {
    const now = Date.now();
    const diff = endTime - now;
    if (diff <= 0) {
      countdownElement.textContent = "Акция завершена";
      return;
    }
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    countdownElement.textContent = `${days}д ${hours}ч ${minutes}м ${seconds}с`;
  }, 1000);
}

function renderHomeSections() {
  const newContainer = document.getElementById('new-products');
  const discountContainer = document.getElementById('discount-products');
  const popularContainer = document.getElementById('popular-products-grid');

  products.forEach(prod => {
    const card = createProductCard(prod);
    if (prod.model === "iphone16pro" || prod.model === "iphone16promax") newContainer.appendChild(card.cloneNode(true));
    if (prod.discount) discountContainer.appendChild(card.cloneNode(true));
    if (prod.popular) popularContainer.appendChild(card.cloneNode(true));
  });
}

function renderCatalogProducts(data) {
  const container = document.getElementById('catalog-products');
  container.innerHTML = "";
  data.forEach(prod => {
    container.appendChild(createProductCard(prod));
  });
}

function createProductCard(prod) {
  const article = document.createElement('article');
  article.className = "product-card";
  article.setAttribute('data-model', prod.model);
  article.setAttribute('data-color', prod.colors[0]);
  article.setAttribute('data-memory', prod.specs.memory);
  article.setAttribute('data-discount', prod.discount);
  article.setAttribute('data-popular', prod.popular);
  article.innerHTML = `
    <img src="${prod.image}" alt="${prod.name}" loading="lazy">
    <h3>${prod.name}</h3>
    <p class="price">${prod.price}$ ${prod.discount ? '<span class="discount">-10%</span>' : ''}</p>
    <p class="rating">Рейтинг: ${prod.rating} (${prod.reviewsCount} отзывов)</p>
    <a href="product.html?id=${prod.id}" class="btn btn-secondary">Подробнее</a>
  `;
  return article;
}

function applyCatalogFilters() {
  const model = document.getElementById('filter-model').value;
  const color = document.getElementById('filter-color').value;
  const memory = document.getElementById('filter-memory').value;
  const priceOrder = document.getElementById('filter-price').value;
  const discount = document.getElementById('filter-discount').checked;
  const popular = document.getElementById('filter-popular').checked;

  let filtered = products.filter(prod => {
    return (!model || prod.model === model) &&
           (!color || prod.colors.includes(color)) &&
           (!memory || prod.specs.memory === memory) &&
           (!discount || prod.discount === true) &&
           (!popular || prod.popular === true);
  });

  filtered.sort((a, b) => priceOrder === "asc" ? a.price - b.price : b.price - a.price);
  renderCatalogProducts(filtered);
}

function initCatalogSearch() {
  const input = document.getElementById('catalog-search');
  const list = document.getElementById('catalog-autocomplete');

  input.addEventListener('input', () => {
    const query = input.value.toLowerCase();
    list.innerHTML = "";
    if (!query) return;
    products.filter(prod => prod.name.toLowerCase().includes(query))
      .forEach(prod => {
        const li = document.createElement('li');
        li.textContent = prod.name;
        li.onclick = () => {
          input.value = prod.name;
          list.innerHTML = "";
          window.location.href = `product.html?id=${prod.id}`;
        };
        list.appendChild(li);
      });
  });
}

let cart = [];
function loadCart() {
  const savedCart = localStorage.getItem('cart');
  if (savedCart) cart = JSON.parse(savedCart);
  renderCart();
}
function addToCart(productId) {
  const prod = products.find(p => p.id === productId);
  if (!prod) return;
  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ id: productId, quantity: 1 });
  }
  localStorage.setItem('cart', JSON.stringify(cart));
  showPopup("Товар добавлен в корзину");
  renderCart();
}
function renderCart() {
  const container = document.getElementById('cart-items');
  if (!container) return;
  container.innerHTML = "";
  let total = 0;
  cart.forEach(item => {
    const prod = products.find(p => p.id === item.id);
    if (!prod) return;
    total += prod.price * item.quantity;
    const div = document.createElement('div');
    div.className = "cart-item";
    div.innerHTML = `
      <img src="${prod.image}" alt="${prod.name}" loading="lazy">
      <div class="item-info">
        <h3>${prod.name}</h3>
        <p class="price">${prod.price}$</p>
        <div class="quantity-control">
          <button onclick="updateQuantity(${prod.id}, -1)">-</button>
          <input type="number" value="${item.quantity}" min="1" onchange="setQuantity(${prod.id}, this.value)">
          <button onclick="updateQuantity(${prod.id}, 1)">+</button>
        </div>
        <button class="btn btn-secondary" onclick="removeFromCart(${prod.id})">Удалить</button>
      </div>
    `;
    container.appendChild(div);
  });
  document.getElementById('cart-total').textContent = total + "$";
}
function updateQuantity(id, delta) {
  const item = cart.find(i => i.id === id);
  if (item) {
    item.quantity = Math.max(1, item.quantity + delta);
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
  }
}
function setQuantity(id, value) {
  const item = cart.find(i => i.id === id);
  if (item) {
    item.quantity = Math.max(1, parseInt(value));
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
  }
}
function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  localStorage.setItem('cart', JSON.stringify(cart));
  renderCart();
}
function checkout() {
  alert('Переход к оформлению заказа');
}

let favorites = [];
function loadFavorites() {
  const savedFav = localStorage.getItem('favorites');
  if (savedFav) favorites = JSON.parse(savedFav);
  renderFavorites();
}
function toggleFavorite(productId) {
  if (favorites.includes(productId)) {
    favorites = favorites.filter(id => id !== productId);
    showPopup("Товар удалён из избранного");
  } else {
    favorites.push(productId);
    showPopup("Товар добавлен в избранное");
  }
  localStorage.setItem('favorites', JSON.stringify(favorites));
  renderFavorites();
}
function renderFavorites() {
  const container = document.getElementById('favorites-list');
  if (!container) return;
  container.innerHTML = "";
  favorites.forEach(id => {
    const prod = products.find(p => p.id === id);
    if (!prod) return;
    const div = document.createElement('div');
    div.className = "product-card";
    div.innerHTML = `
      <img src="${prod.image}" alt="${prod.name}" loading="lazy">
      <h3>${prod.name}</h3>
      <p class="price">${prod.price}$</p>
      <a href="product.html?id=${prod.id}" class="btn btn-secondary">Подробнее</a>
    `;
    container.appendChild(div);
  });
}

const searchInput = document.getElementById('search-input');
if (searchInput) {
  searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    const list = document.getElementById('autocomplete-list');
    list.innerHTML = "";
    if (!query) return;
    products.filter(prod => prod.name.toLowerCase().includes(query))
      .forEach(prod => {
        const li = document.createElement('li');
        li.textContent = prod.name;
        li.onclick = () => {
          searchInput.value = prod.name;
          list.innerHTML = "";
          window.location.href = `product.html?id=${prod.id}`;
        };
        list.appendChild(li);
      });
  });
}

let reviews = [];
function loadReviews() {
  const params = new URLSearchParams(window.location.search);
  const productId = params.get('id');
  const savedReviews = localStorage.getItem(`reviews_${productId}`);
  if (savedReviews) {
    reviews = JSON.parse(savedReviews);
    renderReviews();
  }
}
function submitReview(event) {
  event.preventDefault();
  const params = new URLSearchParams(window.location.search);
  const productId = params.get('id');
  const text = document.getElementById('review-text').value;
  const rating = document.getElementById('review-rating').value;
  const review = { text, rating, date: new Date().toLocaleString() };
  reviews.push(review);
  localStorage.setItem(`reviews_${productId}`, JSON.stringify(reviews));
  renderReviews();
  document.getElementById('review-form').reset();
}
function renderReviews() {
  const container = document.getElementById('reviews-list');
  container.innerHTML = "";
  reviews.forEach(r => {
    const div = document.createElement('div');
    div.className = "review-item";
    div.innerHTML = `<strong>Оценка: ${r.rating}</strong><br>${r.text}<br><em>${r.date}</em>`;
    container.appendChild(div);
  });
}