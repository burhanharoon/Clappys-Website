var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');
var backdrop = document.querySelector('.backdrop');

function closeModal() {
    backdrop.classList.remove('open');
}

toggleButton.addEventListener('click', function () {
    mobileNav.classList.add('open');
    backdrop.classList.add('open');
});

backdrop.addEventListener('click', function () {
    mobileNav.classList.remove('open');
    closeModal();
});