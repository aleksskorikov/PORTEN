
document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.querySelector('#burger__menu');
    const burgerMenuLists = document.querySelector('#burger__menu-lists');
    const menuListsCloze = document.querySelector('#menu__lists-cloze');
    const hiddenProducts = document.querySelectorAll('.hidden-products');
    const productsBtn = document.querySelector("#products-btn");

    burgerMenu.addEventListener('click', () => {
        burgerMenuLists.classList.add('activ');
        burgerMenu.style.display = "none";
    });

    menuListsCloze.addEventListener('click', () => {
        burgerMenuLists.classList.remove('activ');
        burgerMenu.style.display = "block";
    });

    productsBtn.addEventListener('click', () => {
        hiddenProducts.forEach(hiddenProduct => {
            hiddenProduct.style.display = 'block';
        });
    });

    const form = document.querySelector('#subscriptionForm');
    const emailInput = document.querySelector('#emailInput');

    function validateEmail(email) {
        const examination = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return examination.test(email);
    };

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        
        const email = emailInput.value.trim();

        if (!validateEmail(email)) {
            alert('Введіть коректну адресу електронної пошти.');
            return;
        }

        alert('Ваша пошта успішно надіслана!');
        form.reset();
    });
});