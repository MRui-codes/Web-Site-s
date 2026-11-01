const products = [
  { id: 1, name: 'Floral Printed Straight Kurta', category: 'Women Ethnic', price: 349, oldPrice: 799, rating: 4.2, reviews: '2.4k', badge: 'BESTSELLER', sizes: 'S, M, L, XL', image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=700&q=82' },
  { id: 2, name: 'Everyday Cotton Co-ord Set', category: 'Women Western', price: 499, oldPrice: 1199, rating: 4.1, reviews: '1.8k', badge: 'TRENDING', sizes: 'S, M, L, XL', image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=700&q=82' },
  { id: 3, name: 'Minimal Gold-Plated Earrings', category: 'Jewellery', price: 179, oldPrice: 499, rating: 4.4, reviews: '3.2k', badge: 'TOP RATED', sizes: 'Free size', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=700&q=82' },
  { id: 4, name: 'Soft Cotton Printed Bedsheet', category: 'Home & Kitchen', price: 399, oldPrice: 999, rating: 4.0, reviews: '980', badge: 'DEAL OF DAY', sizes: 'Double bed', image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=700&q=82' },
  { id: 5, name: 'Classic Everyday Sneakers', category: 'Men', price: 599, oldPrice: 1499, rating: 4.3, reviews: '1.1k', badge: 'POPULAR', sizes: '6, 7, 8, 9', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=82' },
  { id: 6, name: 'Glow Essentials Skincare Set', category: 'Beauty & Health', price: 299, oldPrice: 699, rating: 4.1, reviews: '765', badge: 'JUST IN', sizes: 'Set of 3', image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=700&q=82' },
  { id: 7, name: 'Handwoven Daily Tote Bag', category: 'Bags & Footwear', price: 259, oldPrice: 649, rating: 4.2, reviews: '1.3k', badge: 'CUSTOMER LOVE', sizes: 'One size', image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=700&q=82' },
  { id: 8, name: 'Comfy Kids Printed T-shirt', category: 'Kids', price: 199, oldPrice: 499, rating: 4.0, reviews: '542', badge: 'BUDGET PICK', sizes: '2–8 years', image: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=700&q=82' },
  { id: 9, name: 'Lightweight Floral Summer Dress', category: 'Women Western', price: 449, oldPrice: 1099, rating: 4.3, reviews: '884', badge: 'NEW ARRIVAL', sizes: 'S, M, L, XL', image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=700&q=82' },
  { id: 10, name: 'Daily Wear Printed Kurti', category: 'Women Ethnic', price: 329, oldPrice: 749, rating: 4.1, reviews: '1.6k', badge: 'BESTSELLER', sizes: 'M, L, XL, XXL', image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?auto=format&fit=crop&w=700&q=82' },
  { id: 11, name: 'Textured Ceramic Planter Set', category: 'Home & Kitchen', price: 279, oldPrice: 599, rating: 4.2, reviews: '634', badge: 'HOME FAVOURITE', sizes: 'Set of 2', image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=700&q=82' },
  { id: 12, name: 'Everyday Analog Watch', category: 'Men', price: 549, oldPrice: 1299, rating: 4.0, reviews: '913', badge: 'GREAT VALUE', sizes: 'Free size', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=700&q=82' },
  { id: 13, name: 'Embroidered Festive Saree', category: 'Women Ethnic', price: 799, oldPrice: 1899, rating: 4.5, reviews: '2.1k', badge: 'FESTIVE PICK', sizes: 'Free size', image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=700&q=82' },
  { id: 14, name: 'Relaxed Fit Linen Shirt', category: 'Men', price: 429, oldPrice: 999, rating: 4.1, reviews: '736', badge: 'EASY EVERYDAY', sizes: 'S, M, L, XL', image: 'https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=700&q=82' },
  { id: 15, name: 'Kids Building Blocks Set', category: 'Kids', price: 349, oldPrice: 799, rating: 4.2, reviews: '498', badge: 'PLAY TIME', sizes: '60 pieces', image: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=700&q=82' },
  { id: 16, name: 'Wireless Bluetooth Earbuds', category: 'Electronics', price: 699, oldPrice: 1799, rating: 4.0, reviews: '1.4k', badge: 'TECH PICK', sizes: 'Charging case included', image: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=700&q=82' },
  { id: 17, name: 'Printed Cushion Cover Set', category: 'Home & Kitchen', price: 229, oldPrice: 549, rating: 4.3, reviews: '621', badge: 'HOME FAVOURITE', sizes: 'Set of 5', image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=700&q=82' },
  { id: 18, name: 'Matte Lip Color Collection', category: 'Beauty & Health', price: 249, oldPrice: 599, rating: 4.1, reviews: '1.2k', badge: 'BEAUTY PICK', sizes: 'Set of 3', image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=700&q=82' },
  { id: 19, name: 'Pearl Detail Statement Necklace', category: 'Jewellery', price: 219, oldPrice: 649, rating: 4.4, reviews: '887', badge: 'CUSTOMER LOVE', sizes: 'Free size', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=700&q=82' },
  { id: 20, name: 'Canvas Everyday Backpack', category: 'Bags & Footwear', price: 479, oldPrice: 1099, rating: 4.2, reviews: '694', badge: 'TRAVEL READY', sizes: 'One size', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=700&q=82' },
  { id: 21, name: 'Lightweight Printed Dupatta', category: 'Women Ethnic', price: 189, oldPrice: 449, rating: 4.0, reviews: '1.1k', badge: 'BUDGET PICK', sizes: 'One size', image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?auto=format&fit=crop&w=700&q=82' },
  { id: 22, name: 'Everyday Analog Watch for Her', category: 'Women Western', price: 399, oldPrice: 999, rating: 4.3, reviews: '582', badge: 'JUST IN', sizes: 'Free size', image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=700&q=82' },
  { id: 23, name: 'Fast Charging Power Bank', category: 'Electronics', price: 799, oldPrice: 1599, rating: 4.0, reviews: '758', badge: 'SMART BUY', sizes: '10000 mAh', image: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&w=700&q=82' },
  { id: 24, name: 'Soft Plush Toy for Kids', category: 'Kids', price: 279, oldPrice: 649, rating: 4.5, reviews: '924', badge: 'LITTLE FAVOURITE', sizes: '30 cm', image: 'https://images.unsplash.com/photo-1559454403-b8fb88521f11?auto=format&fit=crop&w=700&q=82' }
];

const additionalProductSpecs = [
  ['Block Print Cotton A-Line Kurta', 'Women Ethnic', 449, 1099, 'S, M, L, XL', 'photo-1610030469983-98e550d6193c'],
  ['Floral Chikankari Kurti', 'Women Ethnic', 529, 1299, 'S, M, L, XL', 'photo-1583391733956-6c78276477e2'],
  ['Festive Embroidered Anarkali Suit', 'Women Ethnic', 899, 2199, 'M, L, XL, XXL', 'photo-1617627143750-d86bc21e42bb'],
  ['Printed Cotton Kurta Set', 'Women Ethnic', 649, 1599, 'S, M, L, XL', 'photo-1490481651871-ab68de25d43d'],
  ['Pastel Straight Kurta', 'Women Ethnic', 379, 899, 'S, M, L, XL', 'photo-1485230895905-ec40ba36b9bc'],
  ['Bandhani Print Kurta', 'Women Ethnic', 499, 1199, 'M, L, XL, XXL', 'photo-1529139574466-a303027c1d8b'],
  ['Mirror Work Festive Kurti', 'Women Ethnic', 699, 1699, 'S, M, L, XL', 'photo-1551232864-3f0890e580d9'],
  ['Everyday Rayon Kurta', 'Women Ethnic', 329, 799, 'S, M, L, XL, XXL', 'photo-1566206091558-7f218b696731'],
  ['Floral Anarkali Dress', 'Women Ethnic', 749, 1799, 'M, L, XL', 'photo-1598033129183-c4f50c736f10'],
  ['Cotton Palazzo Suit Set', 'Women Ethnic', 799, 1899, 'S, M, L, XL', 'photo-1591047139829-d91aecb6caea'],
  ['Embroidered Kurta Pant Dupatta Set', 'Women Ethnic', 999, 2499, 'M, L, XL, XXL', 'photo-1525507119028-ed4c629a60a3'],
  ['Printed Sharara Suit Set', 'Women Ethnic', 1199, 2999, 'M, L, XL', 'photo-1591369822096-ffd140ec948f'],
  ['Soft Cotton Tunic', 'Women Ethnic', 349, 849, 'S, M, L, XL', 'photo-1585487000160-6ebcfceb0d03'],
  ['Ikat Print Straight Suit', 'Women Ethnic', 699, 1699, 'S, M, L, XL', 'photo-1485968579580-b6d095142e6e'],
  ['Linen Blend Everyday Kurta', 'Women Ethnic', 549, 1299, 'S, M, L, XL, XXL', 'photo-1583743814966-8936f37f4678'],
  ['Geometric Print Kurta', 'Women Ethnic', 429, 999, 'S, M, L, XL', 'photo-1483985988355-763728e1935b'],
  ['Traditional Festive Saree', 'Women Ethnic', 899, 2299, 'Free size', 'photo-1617627143750-d86bc21e42bb'],
  ['Lightweight Printed Saree', 'Women Ethnic', 699, 1699, 'Free size', 'photo-1610030469983-98e550d6193c'],
  ['Soft Georgette Party Saree', 'Women Ethnic', 1099, 2699, 'Free size', 'photo-1529139574466-a303027c1d8b'],
  ['Floral Printed Saree', 'Women Ethnic', 849, 2099, 'Free size', 'photo-1496747611176-843222e1e57c'],
  ['Embroidered Everyday Dupatta', 'Women Ethnic', 249, 599, 'One size', 'photo-1583391733956-6c78276477e2'],
  ['Light Chiffon Printed Dupatta', 'Women Ethnic', 199, 499, 'One size', 'photo-1551232864-3f0890e580d9'],
  ['Printed Palazzo Pants', 'Women Ethnic', 399, 999, 'S, M, L, XL', 'photo-1566206091558-7f218b696731'],
  ['Stretch Cotton Ankle Leggings', 'Women Ethnic', 229, 599, 'S, M, L, XL, XXL', 'photo-1591047139829-d91aecb6caea'],
  ['Sleeveless Everyday Ethnic Kurti', 'Women Ethnic', 329, 799, 'S, M, L, XL', 'photo-1525507119028-ed4c629a60a3'],
  ['Handwork Festive Kurta Set', 'Women Ethnic', 899, 2199, 'M, L, XL', 'photo-1591369822096-ffd140ec948f'],
  ['Dobby Cotton Long Kurti', 'Women Ethnic', 479, 1199, 'S, M, L, XL, XXL', 'photo-1585487000160-6ebcfceb0d03'],
  ['Floral Long Kurta Set', 'Women Ethnic', 849, 2099, 'M, L, XL, XXL', 'photo-1485230895905-ec40ba36b9bc'],
  ['Everyday Cotton Co-ord Set', 'Women Western', 599, 1499, 'S, M, L, XL', 'photo-1483985988355-763728e1935b'],
  ['Relaxed Fit Graphic T-Shirt', 'Women Western', 249, 699, 'S, M, L, XL', 'photo-1529139574466-a303027c1d8b'],
  ['Ribbed Everyday Crop Top', 'Women Western', 229, 599, 'S, M, L, XL', 'photo-1576566588028-4147f3842f27'],
  ['High-Rise Straight Jeans', 'Women Western', 699, 1699, '28, 30, 32, 34', 'photo-1598033129183-c4f50c736f10'],
  ['Floral Midi Summer Dress', 'Women Western', 549, 1399, 'S, M, L, XL', 'photo-1496747611176-843222e1e57c'],
  ['Classic White Casual Shirt', 'Women Western', 449, 1099, 'S, M, L, XL', 'photo-1591047139829-d91aecb6caea'],
  ['Soft Knit Cardigan', 'Women Western', 699, 1699, 'S, M, L, XL', 'photo-1585487000160-6ebcfceb0d03'],
  ['Printed Tiered Maxi Dress', 'Women Western', 799, 1999, 'S, M, L, XL', 'photo-1566206091558-7f218b696731'],
  ['Everyday Wide-Leg Trousers', 'Women Western', 499, 1299, '28, 30, 32, 34', 'photo-1525507119028-ed4c629a60a3'],
  ['Sleeveless Summer Jumpsuit', 'Women Western', 649, 1599, 'S, M, L, XL', 'photo-1551232864-3f0890e580d9'],
  ['Pastel Cotton Tunic Top', 'Women Western', 329, 849, 'S, M, L, XL', 'photo-1485968579580-b6d095142e6e'],
  ['Denim Jacket for Women', 'Women Western', 899, 2199, 'S, M, L, XL', 'photo-1591369822096-ffd140ec948f'],
  ['Striped Casual Shirt', 'Women Western', 399, 999, 'S, M, L, XL', 'photo-1583743814966-8936f37f4678'],
  ['Printed Wrap-Style Dress', 'Women Western', 599, 1499, 'S, M, L, XL', 'photo-1539109136881-3be0616acf4b'],
  ['Comfort Fit Denim Shorts', 'Women Western', 379, 949, '28, 30, 32, 34', 'photo-1490481651871-ab68de25d43d'],
  ['Soft Lounge Co-ord Set', 'Women Western', 749, 1799, 'S, M, L, XL', 'photo-1485230895905-ec40ba36b9bc'],
  ['Pleated Midi Skirt', 'Women Western', 449, 1099, 'S, M, L, XL', 'photo-1529139574466-a303027c1d8b'],
  ['Lightweight Floral Blouse', 'Women Western', 349, 899, 'S, M, L, XL', 'photo-1551232864-3f0890e580d9'],
  ['Straight Fit Everyday Jeans', 'Women Western', 649, 1599, '28, 30, 32, 34', 'photo-1598033129183-c4f50c736f10'],
  ['Printed Short Kurti Top', 'Women Western', 299, 749, 'S, M, L, XL', 'photo-1576566588028-4147f3842f27'],
  ['Ruffle Sleeve Party Dress', 'Women Western', 699, 1699, 'S, M, L, XL', 'photo-1496747611176-843222e1e57c'],
  ['Lightweight Denim Shirt', 'Women Western', 549, 1399, 'S, M, L, XL', 'photo-1591047139829-d91aecb6caea'],
  ['Casual Cotton Joggers', 'Women Western', 429, 1099, 'S, M, L, XL', 'photo-1585487000160-6ebcfceb0d03'],
  ['Printed Peplum Top', 'Women Western', 329, 849, 'S, M, L, XL', 'photo-1539109136881-3be0616acf4b'],
  ['Textured Button-Down Shirt', 'Women Western', 499, 1249, 'S, M, L, XL', 'photo-1583743814966-8936f37f4678'],
  ['Flared Everyday Jeans', 'Women Western', 699, 1699, '28, 30, 32, 34', 'photo-1525507119028-ed4c629a60a3'],
  ['Satin Finish Evening Top', 'Women Western', 399, 999, 'S, M, L, XL', 'photo-1485968579580-b6d095142e6e'],
  ['Glow Hydrating Face Serum', 'Beauty & Health', 349, 899, '30 ml', 'photo-1608248543803-ba4f8c70ae0b'],
  ['Daily SPF 50 Sunscreen', 'Beauty & Health', 299, 749, '50 g', 'photo-1596462502278-27bfdc403348'],
  ['Gentle Foaming Face Wash', 'Beauty & Health', 199, 499, '100 ml', 'photo-1620916566398-39f1143ab7be'],
  ['Vitamin C Brightening Serum', 'Beauty & Health', 399, 999, '30 ml', 'photo-1611930022073-b7a4ba5fcccd'],
  ['Nourishing Night Cream', 'Beauty & Health', 329, 849, '50 g', 'photo-1598440947619-2c35fc9aa908'],
  ['Matte Liquid Lipstick Set', 'Beauty & Health', 279, 699, 'Set of 3', 'photo-1586495777744-4413f21062fa'],
  ['Everyday Nude Lip Color', 'Beauty & Health', 179, 449, '4.2 g', 'photo-1522335789203-aabd1fc54bc9'],
  ['Hydrating Aloe Face Gel', 'Beauty & Health', 229, 599, '100 g', 'photo-1608248543803-ba4f8c70ae0b'],
  ['Gentle Makeup Remover', 'Beauty & Health', 249, 649, '100 ml', 'photo-1612817288484-6f916006741a'],
  ['Soft Matte Compact Powder', 'Beauty & Health', 219, 549, '9 g', 'photo-1631729371254-42c2892f0e6e'],
  ['Rose Water Facial Toner', 'Beauty & Health', 189, 499, '100 ml', 'photo-1596462502278-27bfdc403348'],
  ['Daily Moisturizing Lotion', 'Beauty & Health', 279, 699, '200 ml', 'photo-1620916566398-39f1143ab7be'],
  ['Smudge-Proof Kajal Pencil', 'Beauty & Health', 149, 399, '0.35 g', 'photo-1522335789203-aabd1fc54bc9'],
  ['Lengthening Mascara', 'Beauty & Health', 249, 649, '8 ml', 'photo-1631729371254-42c2892f0e6e'],
  ['Nourishing Lip Balm Duo', 'Beauty & Health', 129, 349, 'Set of 2', 'photo-1586495777744-4413f21062fa'],
  ['Clay Purifying Face Mask', 'Beauty & Health', 299, 749, '100 g', 'photo-1612817288484-6f916006741a'],
  ['Lightweight Primer Gel', 'Beauty & Health', 329, 849, '30 g', 'photo-1611930022073-b7a4ba5fcccd'],
  ['Gentle Daily Shampoo', 'Beauty & Health', 249, 599, '200 ml', 'photo-1598440947619-2c35fc9aa908'],
  ['Makeup Brush Set', 'Beauty & Health', 399, 999, 'Set of 5', 'photo-1596462502278-27bfdc403348'],
  ['Overnight Lip Care Mask', 'Beauty & Health', 199, 499, '15 g', 'photo-1608248543803-ba4f8c70ae0b'],
  ['Textured Halter-Neck Top', 'Women Western', 279, 699, 'S, M, L, XL', 'photo-1539109136881-3be0616acf4b']
];

const reviewCounts = ['386', '524', '765', '1.1k', '1.4k', '2.2k'];
const productBadges = ['NEW ARRIVAL', 'BESTSELLER', 'TRENDING', 'VALUE PICK', 'JUST IN'];
additionalProductSpecs.forEach(([name, category, price, oldPrice, sizes, imageId], index) => {
  products.push({
    id: 25 + index, name, category, price, oldPrice,
    rating: Number((4 + (index % 6) * 0.1).toFixed(1)),
    reviews: reviewCounts[index % reviewCounts.length],
    badge: productBadges[index % productBadges.length], sizes,
    image: `https://images.unsplash.com/${imageId}?auto=format&fit=crop&w=700&q=82`
  });
});

const productGrid = document.getElementById('productGrid');
const searchInput = document.getElementById('searchInput');
const filterControls = [...document.querySelectorAll('[data-category]')];
const sortSelect = document.getElementById('sortSelect');
const emptyState = document.getElementById('emptyState');
const loadMore = document.getElementById('loadMore');
const toast = document.getElementById('toast');
const cartDrawer = document.getElementById('cartDrawer');
const drawerBackdrop = document.getElementById('drawerBackdrop');
const cartItemsEl = document.getElementById('cartItems');
const cartCountEl = document.getElementById('cartCount');
const drawerItemCount = document.getElementById('drawerItemCount');
const cartTotal = document.getElementById('cartTotal');
const cartEmpty = document.getElementById('cartEmpty');
const cartFooter = document.getElementById('cartFooter');

let activeCategory = 'All';
let query = '';
let cart = [];
let toastTimer;
let authMode = 'login';
let currentUser = null;

const authBackdrop = document.getElementById('authBackdrop');
const authForm = document.getElementById('authForm');
const authError = document.getElementById('authError');
const authTabs = document.getElementById('authTabs');
const authSuccess = document.getElementById('authSuccess');
const authName = document.getElementById('authName');
const authNameField = document.getElementById('authNameField');
const authPassword = document.getElementById('authPassword');
const authConfirm = document.getElementById('authConfirm');
const authConfirmField = document.getElementById('authConfirmField');

try { currentUser = JSON.parse(sessionStorage.getItem('shopCartSession') || 'null'); } catch { currentUser = null; }

function formatPrice(amount) { return `₹${amount.toLocaleString('en-IN')}`; }

function getVisibleProducts() {
  let visible = products.filter(product => {
    const matchesCategory = activeCategory === 'All' || product.category === activeCategory;
    const matchesSearch = `${product.name} ${product.category}`.toLowerCase().includes(query.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  if (sortSelect.value === 'price-low') visible.sort((a, b) => a.price - b.price);
  if (sortSelect.value === 'price-high') visible.sort((a, b) => b.price - a.price);
  return visible;
}

function renderProducts() {
  const visible = getVisibleProducts();
  productGrid.innerHTML = visible.map(product => `
    <article class="product-card">
      <div class="product-image-wrap">
        <img class="product-image" src="${product.image}" alt="${product.name}" loading="lazy">
        <span class="product-badge">${product.badge}</span>
        <button class="wishlist-button" data-wishlist="${product.id}" aria-label="Add ${product.name} to wishlist" aria-pressed="false">♡</button>
      </div>
      <div class="product-info">
        <p class="product-name" title="${product.name}">${product.name}</p>
        <div class="price-line"><strong class="product-price">${formatPrice(product.price)}</strong><span class="old-price">${formatPrice(product.oldPrice)}</span><span class="discount">${Math.round((1 - product.price / product.oldPrice) * 100)}% off</span></div>
        <div class="product-meta"><span class="rating">${product.rating} <span class="rating-star">★</span></span><span class="review-count">${product.reviews} reviews</span><span class="delivery">Free delivery</span></div>
        <div class="product-footer"><span class="size-info">${product.sizes}</span><button class="add-to-cart" data-add="${product.id}">+ Add</button></div>
      </div>
    </article>`).join('');
  emptyState.hidden = visible.length > 0;
  loadMore.hidden = visible.length === 0;
}

function syncCategoryButtons() {
  document.querySelectorAll('.filter-chip').forEach(button => button.classList.toggle('active', button.dataset.category === activeCategory));
  document.querySelectorAll('.nav-category').forEach(link => link.classList.toggle('active', link.dataset.category === activeCategory));
}

function setCategory(category) { activeCategory = category; syncCategoryButtons(); renderProducts(); }

function showToast(message) {
  toast.textContent = message; toast.classList.add('show'); clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2200);
}

function addToCart(id) {
  const product = products.find(item => item.id === id);
  const existing = cart.find(item => item.id === id);
  if (existing) existing.quantity += 1; else cart.push({ id, quantity: 1 });
  renderCart(); showToast(`${product.name} added to your bag`);
}

function renderCart() {
  const quantity = cart.reduce((total, item) => total + item.quantity, 0);
  const subtotal = cart.reduce((total, item) => total + products.find(product => product.id === item.id).price * item.quantity, 0);
  cartCountEl.textContent = quantity; drawerItemCount.textContent = `(${quantity})`; cartTotal.textContent = formatPrice(subtotal);
  cartEmpty.hidden = cart.length > 0; cartFooter.hidden = cart.length === 0;
  cartItemsEl.innerHTML = cart.map(item => {
    const product = products.find(entry => entry.id === item.id);
    return `<div class="cart-item"><img src="${product.image}" alt=""><div><h4>${product.name}</h4><p>${product.sizes}</p><strong>${formatPrice(product.price)}</strong><div class="qty-control"><button data-qty="${item.id}" data-change="-1" aria-label="Decrease quantity">−</button><span>${item.quantity}</span><button data-qty="${item.id}" data-change="1" aria-label="Increase quantity">+</button></div></div><button class="cart-item-remove" data-remove="${item.id}">Remove</button></div>`;
  }).join('');
}

function openCart() { cartDrawer.classList.add('open'); drawerBackdrop.classList.add('open'); cartDrawer.setAttribute('aria-hidden', 'false'); document.body.classList.add('cart-open'); }
function closeCart() { cartDrawer.classList.remove('open'); drawerBackdrop.classList.remove('open'); cartDrawer.setAttribute('aria-hidden', 'true'); document.body.classList.remove('cart-open'); }

function setAuthMode(mode) {
  authMode = mode;
  const isSignup = mode === 'signup';
  document.getElementById('authTitle').textContent = isSignup ? 'Create your account' : 'Welcome back';
  document.getElementById('authSubtitle').textContent = isSignup ? 'A few details and you are ready to shop.' : 'Sign in to keep your favourites close.';
  document.getElementById('authSubmit').innerHTML = isSignup ? 'Create account <span>→</span>' : 'Login to Shop Cart <span>→</span>';
  authNameField.hidden = !isSignup; authName.required = isSignup;
  authConfirmField.hidden = !isSignup; authConfirm.required = isSignup;
  authPassword.autocomplete = isSignup ? 'new-password' : 'current-password';
  authError.textContent = '';
  document.querySelectorAll('[data-auth-mode]').forEach(tab => {
    const selected = tab.dataset.authMode === mode;
    tab.classList.toggle('active', selected); tab.setAttribute('aria-selected', String(selected));
  });
}

function renderAuthState() {
  const signedIn = Boolean(currentUser);
  document.getElementById('profileLabel').textContent = signedIn ? `Hi, ${currentUser.name.split(' ')[0]}` : 'Login / Signup';
  document.getElementById('profileTrigger').setAttribute('aria-label', signedIn ? 'Your account' : 'Login or sign up');
  authTabs.hidden = signedIn; authForm.hidden = signedIn; authSuccess.hidden = !signedIn;
  if (signedIn) {
    document.getElementById('authTitle').textContent = 'Your account';
    document.getElementById('authSubtitle').textContent = 'Your Shop Cart demo profile is ready.';
    document.getElementById('authWelcome').textContent = `Hi, ${currentUser.name}!`;
    document.getElementById('authAccountEmail').textContent = currentUser.email;
  } else {
    setAuthMode(authMode);
  }
}

function openAuth() {
  renderAuthState(); authBackdrop.classList.add('open'); authBackdrop.setAttribute('aria-hidden', 'false');
  document.body.classList.add('auth-open');
  setTimeout(() => document.getElementById('closeAuth').focus(), 0);
}

function closeAuth() {
  authBackdrop.classList.remove('open'); authBackdrop.setAttribute('aria-hidden', 'true'); document.body.classList.remove('auth-open');
}

function readDemoUsers() {
  try { return JSON.parse(localStorage.getItem('shopCartDemoUsers') || '[]'); }
  catch { return []; }
}

async function hashDemoPassword(password, salt) {
  if (!globalThis.crypto?.subtle) throw new Error('Secure sign-in is not available in this browser. Please open the page in a modern browser.');
  const bytes = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(`${salt}:${password}`));
  return [...new Uint8Array(bytes)].map(byte => byte.toString(16).padStart(2, '0')).join('');
}

function startDemoSession(user) {
  currentUser = { name: user.name, email: user.email };
  sessionStorage.setItem('shopCartSession', JSON.stringify(currentUser));
  renderAuthState();
}

async function submitAuth(event) {
  event.preventDefault(); authError.textContent = '';
  const email = document.getElementById('authEmail').value.trim().toLowerCase();
  const password = authPassword.value;
  const users = readDemoUsers();
  try {
    if (authMode === 'signup') {
      const name = authName.value.trim();
      if (password !== authConfirm.value) { authError.textContent = 'The passwords do not match.'; return; }
      if (users.some(user => user.email === email)) { authError.textContent = 'An account with this email already exists. Try logging in.'; return; }
      const salt = [...crypto.getRandomValues(new Uint8Array(16))].map(byte => byte.toString(16).padStart(2, '0')).join('');
      const user = { name, email, salt, passwordHash: await hashDemoPassword(password, salt) };
      users.push(user); localStorage.setItem('shopCartDemoUsers', JSON.stringify(users));
      startDemoSession(user); showToast('Your Shop Cart account is ready.');
    } else {
      const user = users.find(item => item.email === email);
      if (!user) { authError.textContent = 'No demo account found for this email. Please sign up first.'; return; }
      if (await hashDemoPassword(password, user.salt) !== user.passwordHash) { authError.textContent = 'That password does not match this demo account.'; return; }
      startDemoSession(user); showToast('Welcome back to Shop Cart.');
    }
  } catch (error) { authError.textContent = error.message || 'Could not save this demo account in your browser.'; return; }
}

const heroSlides = [...document.querySelectorAll('#heroSlideshow .hero-image')];
const heroSlideButtons = [...document.querySelectorAll('.hero-slide-dot')];
const heroVisual = document.querySelector('.hero-visual');
const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
let activeHeroSlide = 0;
let heroSlideTimer;

function showHeroSlide(index) {
  activeHeroSlide = index;
  heroSlides.forEach((slide, slideIndex) => {
    const isActive = slideIndex === index;
    slide.classList.toggle('is-active', isActive);
    slide.setAttribute('aria-hidden', String(!isActive));
  });
  heroSlideButtons.forEach((button, buttonIndex) => {
    const isActive = buttonIndex === index;
    button.classList.toggle('is-active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });
}

function stopHeroAutoSlide() { clearInterval(heroSlideTimer); }
function startHeroAutoSlide() {
  stopHeroAutoSlide();
  if (reducedMotionQuery.matches || document.hidden || heroVisual.matches(':hover') || heroVisual.contains(document.activeElement)) return;
  heroSlideTimer = setInterval(() => showHeroSlide((activeHeroSlide + 1) % heroSlides.length), 4500);
}

heroSlideButtons.forEach((button, index) => button.addEventListener('click', () => {
  showHeroSlide(index);
  startHeroAutoSlide();
}));
heroVisual.addEventListener('mouseenter', stopHeroAutoSlide);
heroVisual.addEventListener('mouseleave', startHeroAutoSlide);
heroVisual.addEventListener('focusin', stopHeroAutoSlide);
heroVisual.addEventListener('focusout', event => {
  if (!heroVisual.contains(event.relatedTarget)) startHeroAutoSlide();
});
document.addEventListener('visibilitychange', () => document.hidden ? stopHeroAutoSlide() : startHeroAutoSlide());
reducedMotionQuery.addEventListener?.('change', startHeroAutoSlide);
showHeroSlide(0);
startHeroAutoSlide();

document.getElementById('searchForm').addEventListener('submit', event => { event.preventDefault(); query = searchInput.value.trim(); renderProducts(); document.getElementById('products').scrollIntoView({ behavior: 'smooth' }); });
searchInput.addEventListener('input', () => { query = searchInput.value.trim(); renderProducts(); });
filterControls.forEach(control => control.addEventListener('click', event => {
  const navItem = control.closest('.nav-item');
  if (navItem && control.classList.contains('nav-category') && navItem.querySelector('.nav-dropdown') && window.matchMedia('(hover: none)').matches) {
    event.preventDefault();
    document.querySelectorAll('.nav-item.open').forEach(item => { if (item !== navItem) item.classList.remove('open'); });
    navItem.classList.toggle('open');
    return;
  }
  event.preventDefault(); setCategory(control.dataset.category);
  if (navItem) navItem.classList.remove('open');
  if (control.classList.contains('category-card') || navItem) document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
}));
document.addEventListener('click', event => { if (!event.target.closest('.nav-item')) document.querySelectorAll('.nav-item.open').forEach(item => item.classList.remove('open')); });
sortSelect.addEventListener('change', renderProducts);
productGrid.addEventListener('click', event => {
  const addButton = event.target.closest('[data-add]');
  if (addButton) { addToCart(Number(addButton.dataset.add)); return; }
  const wishButton = event.target.closest('[data-wishlist]');
  if (wishButton) { const liked = wishButton.classList.toggle('liked'); wishButton.textContent = liked ? '♥' : '♡'; wishButton.setAttribute('aria-pressed', String(liked)); showToast(liked ? 'Added to your wishlist' : 'Removed from your wishlist'); }
});
document.getElementById('cartTrigger').addEventListener('click', openCart);
document.getElementById('profileTrigger').addEventListener('click', openAuth);
document.getElementById('closeAuth').addEventListener('click', closeAuth);
authBackdrop.addEventListener('click', event => { if (event.target === authBackdrop) closeAuth(); });
authTabs.addEventListener('click', event => { const tab = event.target.closest('[data-auth-mode]'); if (tab) setAuthMode(tab.dataset.authMode); });
authForm.addEventListener('submit', submitAuth);
document.getElementById('signOutButton').addEventListener('click', () => {
  sessionStorage.removeItem('shopCartSession'); currentUser = null; renderAuthState(); closeAuth(); showToast('You have signed out.');
});
document.getElementById('closeCart').addEventListener('click', closeCart);
drawerBackdrop.addEventListener('click', closeCart);
document.getElementById('continueShopping').addEventListener('click', closeCart);
cartItemsEl.addEventListener('click', event => {
  const qtyButton = event.target.closest('[data-qty]');
  const removeButton = event.target.closest('[data-remove]');
  if (qtyButton) { const item = cart.find(entry => entry.id === Number(qtyButton.dataset.qty)); item.quantity += Number(qtyButton.dataset.change); if (item.quantity <= 0) cart = cart.filter(entry => entry.id !== item.id); renderCart(); }
  if (removeButton) { cart = cart.filter(entry => entry.id !== Number(removeButton.dataset.remove)); renderCart(); }
});
document.getElementById('checkoutButton').addEventListener('click', () => showToast('Checkout is ready for your next step!'));
document.getElementById('clearSearch').addEventListener('click', () => { query = ''; searchInput.value = ''; setCategory('All'); });
document.getElementById('newsletterForm').addEventListener('submit', event => { event.preventDefault(); event.currentTarget.reset(); showToast('You’re on the list. See you soon!'); });
document.addEventListener('keydown', event => { if (event.key === 'Escape') { closeCart(); closeAuth(); } });

renderProducts(); renderCart(); renderAuthState();
