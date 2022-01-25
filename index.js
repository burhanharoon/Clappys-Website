let toggleButton = document.querySelector('.toggle-button');
let mobileNav = document.querySelector('.mobile-nav');
let backdrop = document.querySelector('.backdrop');

const closeModal = () => {
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