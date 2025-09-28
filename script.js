// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Gallery navigation functionality
let currentImageIndex = 0;
const galleryImages = [
  'https://static.codia.ai/image/2025-09-28/zbu9GiD2wQ.png',
  'https://png.pngtree.com/thumb_back/fh260/background/20240329/pngtree-rows-of-dumbbells-in-the-gym-image_15662386.jpg',
  'https://t4.ftcdn.net/jpg/08/09/48/25/360_F_809482598_iFY3RUsAXrpaJAuFh2UijLuLhGMQYJDb.jpg',
  // Add more gallery images here if needed
];

const galleryImage = document.querySelector('.gallery-image img');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

if (prevBtn && nextBtn && galleryImage) {
  prevBtn.addEventListener('click', () => {
    currentImageIndex = currentImageIndex > 0 ? currentImageIndex - 1 : galleryImages.length - 1;
    galleryImage.src = galleryImages[currentImageIndex];
  });

  nextBtn.addEventListener('click', () => {
    currentImageIndex = currentImageIndex < galleryImages.length - 1 ? currentImageIndex + 1 : 0;
    galleryImage.src = galleryImages[currentImageIndex];
  });
}

// Button interactions
const heroButton = document.querySelector('.hero-button');
const motivationButton = document.querySelector('.motivation-button');

if (heroButton) {
  heroButton.addEventListener('click', () => {
    const aboutSection = document.querySelector('#pricing');
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
}

if (motivationButton) {
  motivationButton.addEventListener('click', () => {
    const pricingSection = document.querySelector('#pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
}

// Social media links (placeholder functionality)
const socialIcons = document.querySelectorAll('.social-icons img');
socialIcons.forEach((icon, index) => {
  icon.addEventListener('click', () => {
    if (index === 0) {
      // Instagram link
      console.log('Instagram clicked');
    } else if (index === 1) {
      // Facebook link
      console.log('Facebook clicked');
    }
  });
});

// Add hover effects for interactive elements
const interactiveElements = document.querySelectorAll('button, .social-icons img, .gallery-nav');
interactiveElements.forEach(element => {
  element.addEventListener('mouseenter', () => {
    element.style.transform = 'scale(1.05)';
    element.style.transition = 'transform 0.2s ease';
  });
  
  element.addEventListener('mouseleave', () => {
    element.style.transform = 'scale(1)';
  });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 100) {
    navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
    navbar.style.backdropFilter = 'blur(10px)';
    navbar.style.position = 'fixed';
    navbar.style.top = '0';
    navbar.style.width = '100%';
    navbar.style.zIndex = '1000';
    navbar.style.transition = 'all 0.3s ease';
  } else {
    navbar.style.backgroundColor = 'transparent';
    navbar.style.backdropFilter = 'none';
    navbar.style.position = 'relative';
  }
});


  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');

  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });
