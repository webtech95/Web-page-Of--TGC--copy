// Slide Tonggle

$(document).ready(function () {
  $("#togglebtn").click(function () {
    $(".navbar").slideToggle("slow");
  });
});

// Header Scroller

document.addEventListener('scroll', () => {
  const header = document.querySelector('header');

  if (window.scrollY > 0) {
    header.classList.add('header-scroller');
  } else {
    header.classList.remove('header-scroller');
  }
});

// Placement Slider
$(document).ready(function () {
  const $track = $('.carousel-track');
  const $items = $('.carousel-item');
  const itemsPerSlide = 5;
  const totalSlides = Math.ceil($items.length / itemsPerSlide);
  let currentIndex = 0;

  // Dynamically create dots
  const $dotsContainer = $('.carousel-dots');
  for (let i = 0; i < totalSlides; i++) {
    $dotsContainer.append(`<span class="carousel-dot" data-index="${i}"></span>`);
  }

  const $dots = $('.carousel-dot');

  function updateCarousel() {
    const offset = -currentIndex * (100 / totalSlides);
    $track.css('transform', `translateX(${offset}%)`);
    $dots.removeClass('active');
    $dots.eq(currentIndex).addClass('active');
  }

  $dots.click(function () {
    currentIndex = $(this).data('index');
    updateCarousel();
  });

  // Auto-slide
  setInterval(function () {
    currentIndex = (currentIndex < totalSlides - 1) ? currentIndex + 1 : 0;
    updateCarousel();
  }, 5000); // Change slide every 5 seconds

  // Initialize active dot
  $dots.first().addClass('active');
  updateCarousel();
});


// Student Reviews

let currentSlide = 0;
const slidesContainer = document.querySelector('.slides');
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
  // Calculate the translateX value based on the current slide index
  const offset = -index * 100; // Each slide is 100% of the container width
  slidesContainer.style.transform = `translateX(${offset}%)`;

  // Update active dot
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length; // Move to the next slide
  showSlide(currentSlide);
}

// Add click event listeners to dots
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentSlide = index;
    showSlide(currentSlide);
  });
});

// Automatically transition to the next slide every 5 seconds
setInterval(nextSlide, 5000);

// Your Location

$(document).ready(function () {
  $("li:even").css("background-color", "#e8e8e8");
});

$(document).ready(function () {
  $("li:odd").css("background-color", "#ffff");
});




