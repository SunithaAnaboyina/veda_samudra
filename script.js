  
    function toggleMenu() {
      const nav = document.getElementById("navLinks");
      nav.classList.toggle("active");
    }
   const slides = document.querySelectorAll(".slide-image");
    let currentSlide = 0;

    function showNextSlide() {
      slides[currentSlide].classList.remove("active");
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add("active");
    }

    setInterval(showNextSlide, 3000);



    // page 3
    // script.js

// script.js

document.addEventListener("DOMContentLoaded", function () {
  let cartCount = 0;
  const cartCountSpan = document.getElementById("cart-count");
  const buyButtons = document.querySelectorAll(".buy-btn");

  buyButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      cartCount++;
      cartCountSpan.textContent = cartCount;
    });
  });
});







    function showBulkOrders() {
  document.body.classList.add('show-bulk');
  document.getElementById('bulkOrderSection').style.display = 'block';

  // Hide all other sections EXCEPT navbar and bulk order
  document.querySelectorAll('.main-content-section').forEach(section => {
    section.style.display = 'none';
  });

  // Keep navbar visible
  document.querySelector('nav').style.display = 'flex'; // or 'block' based on your styling
}



const bulkBtn = document.getElementById('bulkOrdersBtn');
const bulkSection = document.getElementById('bulkOrderSection');

bulkBtn.addEventListener('click', () => {
  document.body.classList.add('show-bulk');
  bulkSection.classList.remove('hidden');
});



// home
// Show bulk order section, hide home
document.getElementById("bulkOrdersBtn").addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("bulkOrderSection").classList.remove("hidden");
  document.getElementById("homeSection").classList.add("hidden");
});

// Show home, hide bulk order section
document.getElementById("homeLogo").addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("homeSection").classList.remove("hidden");
  document.getElementById("bulkOrderSection").classList.add("hidden");
});


