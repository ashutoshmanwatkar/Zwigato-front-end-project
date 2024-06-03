//------------------------------Text animation using typejs-------------------------

setTimeout(function() {
    var typed = new Typed('#element', {
        strings: ['Hungry?', 'Unexpected guests?', 'Cooking Gone Wrong?', 'Movie Night?', 'Game Night?', 'Party at Home?'],
        typeSpeed: 75,
        loop: true,  // This makes the animation loop continuously
    });
}, 1000);  // 1000 milliseconds delay (1 second)


// **************************** hamburger menu ****************
let menu = document.querySelector('.bx-menu');
let navbar = document.querySelector('.navbar');

menu.addEventListener('click', function () {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('nav-toggle');
})

// ********************** Service section animation ***************

document.addEventListener("DOMContentLoaded", function () {
    const serviceCards = document.querySelectorAll('.service-card');

    const observerOptions = {
        threshold: 0.2 // Trigger when 20% of the element is in view
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target); // Stop observing once the animation has been triggered
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    serviceCards.forEach(card => {
        observer.observe(card);
    });
});

// ***************************** EXPERTISE SECTION ANIMATION *******************
document.addEventListener("DOMContentLoaded", function () {
    const serviceCards = document.querySelectorAll('.expertise .card-container .card');

    const observerOptions = {
        threshold: 0.2 // Trigger when 20% of the element is in view
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visibility');
                observer.unobserve(entry.target); // Stop observing once the animation has been triggered
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    serviceCards.forEach(card => {
        observer.observe(card);
    });
});


// ***************************** Restaurents section ********************

document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById("toggleButton");
    const hiddenPlaces = document.querySelectorAll(".place-container .places:nth-child(n+10)");
    const placeContainer = document.querySelector(".restaurants .place-container");

    let isExpanded = false;

    toggleButton.addEventListener("click", function() {
        hiddenPlaces.forEach(place => {
            place.classList.toggle("hidden");
        });

        isExpanded = !isExpanded;
        toggleButton.textContent = isExpanded ? "Show less" : "Show more";
    });

    // Intersection Observer to trigger animation on scroll
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                placeContainer.classList.add("animate");
                observer.disconnect(); // Stop observing after animation is triggered
            }
        });
    }, {
        threshold: 0.2 // Adjust as needed
    });

    observer.observe(placeContainer);
});


// ************************ FAQ SECTION ******************************


const accordion = document.querySelectorAll('.contentBox');
for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function () {
        this.classList.toggle('active')
    })
}


// --------------------------- Popup section ----------------------

document.addEventListener("DOMContentLoaded", function () {
    // Set timeout to display popup after 5 seconds
    setTimeout(function () {
        const popup = document.getElementById('popup');
        popup.style.display = 'block';
    }, 5000);

    // Close popup when close button is clicked
    document.getElementById('closeBtn').addEventListener('click', function () {
        document.getElementById('popup').style.display = 'none';
    });
});








