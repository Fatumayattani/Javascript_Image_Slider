const $next = document.querySelector('.next');
const $prev = document.querySelector('.prev');

$next.addEventListener(
    'click',
    () => {
        const products = document.querySelectorAll('.product');
        document.querySelector('.slides').appendChild(products[0]);
    },
);

$prev.addEventListener(
    'click',
    () => {
        const products = document.querySelectorAll('.product');
        const slides = document.querySelector('.slides');
        slides.prepend(products[products.length - 1]);
    },
);
