document.addEventListener('DOMContentLoaded', function() {
    const backgrounds = [
        'fondofresa.jpg',
        'fondobana.jpg',
        'fondooreo.jpg',
        'colorfondo.PNG'
    ];

    const images = [
        'combofrutal.PNG',
        'combotropical.PNG',
        'donaoreo.PNG',
        'donaperso.PNG'
    ];

    const descriptions = [
        'Combo frutal: Nutella con fresa ',
        'Combo tropical: Nutella con banano',
        'Combo sorpresa: Chocolate Hershey con galleta oreo ',
        'Combo personalizado: puedes agregar un topping y un jarabe de tu elección.'
    ];

    let currentIndex = 0;
    let intervalId;
    let isDescriptionVisible = false;

    const card = document.getElementById('productCard');
    const description = document.getElementById('productDescription');

    function updateCard() {
        card.style.backgroundImage = `url(${images[currentIndex]})`;
        document.body.style.backgroundImage = `url(${backgrounds[currentIndex]})`;
        description.textContent = descriptions[currentIndex];
    }

    function showNextItem() {
        currentIndex = (currentIndex + 1) % images.length;
        updateCard();
    }

    function startCarousel() {
        intervalId = setInterval(showNextItem, 10000);
    }

    function stopCarousel() {
        clearInterval(intervalId);
    }

    card.addEventListener('click', function() {
        if (isDescriptionVisible) {
            showNextItem();
            startCarousel();
            card.classList.remove('active');
            isDescriptionVisible = false;
        } else {
            stopCarousel();
            card.classList.add('active');
            isDescriptionVisible = true;
        }
    });

    startCarousel();
    updateCard();
});

function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('show');
}
