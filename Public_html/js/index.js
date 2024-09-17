/* Toggle navbar for mobile */

function toggleNavbar() {
    var navbar = document.getElementById('dropdownNavbar');
    var toggleButton = document.querySelector('.navbar-toggle');

    navbar.classList.toggle("show-navbar");
    toggleButton.classList.toggle("open");
}

/* FAQ toggle*/

document.addEventListener('DOMContentLoaded', function () {
    const questions = document.querySelectorAll('.faq-question');
    questions.forEach(question => {
        question.addEventListener('click', function () {
            this.nextElementSibling.classList.toggle('show');
        })
    })
})


/* Farm header carousel */
const images = document.querySelectorAll('.carousel img');
const headerText = document.getElementById('headerText');
const dots = document.querySelectorAll('.status-dot');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;
const textContent = [
    "-Welcome to our farm- \n ",
    "We are dedicated to providing organically grown vegetables"
];

function preloadImages() {
    images.forEach(img => {
        const newImg = new Image();
        newImg.src = img.src;
    });
}

function showSlide(index) {
    images.forEach((img, i) => {
        img.classList.remove('active');
        dots[i].classList.remove('active');

        if (i === index) {
            img.classList.add('active');
            dots[i].classList.add('active');
        }
    });
    //animate the text
    headerText.classList.remove('visible');
    setTimeout(() => {
        headerText.innerText = textContent[index];
        headerText.classList.add('visible');
    }, 500);
};

function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    showSlide(currentIndex);
}
function prevSlide() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showSlide(currentIndex);
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

document.addEventListener('DOMContentLoaded', () => {
    preloadImages();
    images.forEach(img => img.style.visibility = 'visible');
    headerText.classList.add('visible');
    setInterval(nextSlide, 10000);
    
})


/* testimonial slider */

const slides = document.querySelectorAll('testimonial-slide');
let currentSlide = 0;

function showTestimonial(index) {
    slides[currentSlide].classList.remove('active');
    currentSlide = index;
    slides[currentSlide].classList.add('active');
}
document.querySelectorAll('.testimonial-controls button').forEach((button, index) => {
    button.addEventListener('click', () => showTestimonial(index));
});
setInterval(() => {
    const nextSlide = (currentSlide + 1) % slides.length;
    showTestimonial(nextSlide);
}, 5000);

showTestimonial(0);

/* blog slider */
/* let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active1", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 5000); // Change image every 2 seconds
}
 */









































































