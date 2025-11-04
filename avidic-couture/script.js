// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Hero Slider
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    slides[index].classList.add('active');
    dots[index].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide = index;
        showSlide(currentSlide);
    });
});

// Auto-play slider
setInterval(nextSlide, 5000);

// Partners Slider
let currentPartnerSlide = 0;
const partnerSlider = document.querySelector('.partners-slider');
const partnerSlides = document.querySelectorAll('.partner-slide');
const partnersNext = document.querySelector('.partners-next');
const partnersPrev = document.querySelector('.partners-prev');
const totalPartnerSlides = partnerSlides.length;
const slidesToShow = window.innerWidth <= 768 ? 1 : 3;

function updatePartnerSlider() {
    const slideWidth = 100 / slidesToShow;
    const translateX = -currentPartnerSlide * slideWidth;
    partnerSlider.style.transform = `translateX(${translateX}%)`;
}

function nextPartnerSlide() {
    const maxSlide = totalPartnerSlides - slidesToShow;
    currentPartnerSlide = currentPartnerSlide >= maxSlide ? 0 : currentPartnerSlide + 1;
    updatePartnerSlider();
}

function prevPartnerSlide() {
    const maxSlide = totalPartnerSlides - slidesToShow;
    currentPartnerSlide = currentPartnerSlide <= 0 ? maxSlide : currentPartnerSlide - 1;
    updatePartnerSlider();
}

partnersNext.addEventListener('click', nextPartnerSlide);
partnersPrev.addEventListener('click', prevPartnerSlide);

// Auto-play partners slider
setInterval(nextPartnerSlide, 4000);

// Product Data
const products = [
    { name: "Traditional Agbada", category: "men", price: "₦85,000", image: "avidic-catalogue/avidic-traditional-agbada.webp" },
    { name: "Ankara Dress", category: "women", price: "₦45,000", image: "avidic-catalogue/avidic-ankara-dress.webp" },
    { name: "Dashiki Shirt", category: "men", price: "₦25,000", image: "avidic-catalogue/avidic-danshiki-shirt.webp" },
    { name: "Kente Wrap Dress", category: "women", price: "₦55,000", image: "avidic-catalogue/avidic-kente.jpg" },
    { name: "Embroidered Kaftan", category: "men", price: "₦65,000", image: "avidic-catalogue/avidic-embroidered-kaftan.jpg" },
    { name: "Adire Blouse", category: "women", price: "₦35,000", image: "avidic-catalogue/avidic-adire-blouse.webp" },
    { name: "Senator Suit", category: "men", price: "₦75,000", image: "avidic-catalogue/avidic-senator-suit.webp" },
    { name: "Gele Headwrap", category: "women", price: "₦15,000", image: "avidic-catalogue/avidic-gele.webp" },
    { name: "Buba & Sokoto", category: "men", price: "₦50,000", image: "avidic-catalogue/avidic-buba-men.webp" }
];

// Render Products
function renderProducts(productsToShow = products) {
    const grid = document.getElementById('productsGrid');
    grid.innerHTML = productsToShow.map(product => `
        <div class="product-card" data-category="${product.category}">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>Premium African fashion piece crafted with traditional techniques</p>
                <div class="product-price">${product.price}</div>
            </div>
        </div>
    `).join('');
}

// Filter Products
const filterBtns = document.querySelectorAll('.filter-btn');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const filter = btn.dataset.filter;
        const filteredProducts = filter === 'all' ? products : products.filter(p => p.category === filter);
        renderProducts(filteredProducts);
    });
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Contact Form
const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const name = contactForm.querySelector('input[type="text"]').value;
    const email = contactForm.querySelector('input[type="email"]').value;
    
    if (name && email) {
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    }
});

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
    }
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
});