// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

// Navbar Fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
}

// Show More button
function toggleText() {
    var moreText = document.getElementById("showMore");
    var btnText = document.querySelector("#showMoreButton"); 

    moreText.classList.toggle("hidden");

    if (moreText.classList.contains("hidden")) {
        btnText.textContent = "Show More";
    } else {
        btnText.textContent = "Show Less";
    }
}
