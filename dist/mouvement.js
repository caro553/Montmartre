/* REVOIR LE MOUVEMENT DU PARALLAXE ENSEMBLE APRES  */


document.addEventListener("DOMContentLoaded", function() {
    var parallaxElements = document.querySelectorAll(".background-image");

    var observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.style.transform = "translateX(-100%)";
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 }); 

    parallaxElements.forEach(function(element) {
        observer.observe(element);
    });
});
