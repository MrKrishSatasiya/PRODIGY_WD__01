$(document).ready(function(){
    $('#icon').click(function(){
     $('ul').toggleClass('show')
    });
})

const navbar = document.querySelector('.navbar');

// Function to add the "scrolled" class to the navbar when scrolling down
function handleScroll() {
    if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

    window.addEventListener('scroll', handleScroll);
    