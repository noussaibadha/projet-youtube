'use strict'

// Scroll
let h2 = document.querySelectorAll("#text-scroll")
//onscroll
window.addEventListener("scroll", () => {
    h2[0].style.transform = "translateX(" + window.scrollY + "px)"
    h2[1].style.transform = "translateX(-" + window.scrollY + "px)"
})

// Video
document.addEventListener("DOMContentLoaded", function() {
    var videos = document.querySelectorAll('.video-film');
  
    videos.forEach(function(video) {
      video.addEventListener('mouseover', function() {
        this.play();
      });
      video.addEventListener('mouseout', function() {
        this.pause();
      });
    });
  });
  




  
//cursor 
const cursorDot = document.querySelector(".cursor-dot"); // Sélectionne l'élément représentant le point du curseur
const cursorOutline = document.querySelector(".cursor-outline"); // Sélectionne l'élément représentant le contour du curseur

// Événement déclenché lorsque la souris se déplace
window.addEventListener("mousemove", (e) => {
    // Récupération des coordonnées X et Y de la souris
    const posX = e.clientX;
    const posY = e.clientY;

    // Positionnement du point du curseur aux coordonnées de la souris
    cursorDot.style.top = `${posY}px`;
    cursorDot.style.left = `${posX}px`;

    // Positionnement du contour du curseur aux coordonnées de la souris
    cursorOutline.style.top = `${posY}px`;
    cursorOutline.style.left = `${posX}px`;

    // Vérification si la souris survole un élément avec la classe "pointer"
    const isPointerHovered = e.target.classList.contains("pointer");

    // Ajustement de la taille du curseur en fonction du survol d'un élément "pointer"
    if (isPointerHovered) {
        cursorDot.style.width = "5px"; // Largeur réduite du point du curseur
        cursorDot.style.height = "5px"; // Hauteur réduite du point du curseur
        cursorOutline.style.width = "35px"; // Largeur agrandie du contour du curseur
        cursorOutline.style.height = "35px"; // Hauteur agrandie du contour du curseur
        cursorOutline.style.backgroundColor = "#fff"; // Couleur du contour modifiée
        cursorDot.style.transition = `width 400ms, height 400ms`; // Animation de transition pour le point du curseur
        cursorOutline.style.transition = `width 400ms, height 400ms`; // Animation de transition pour le contour du curseur
    } else {
        // Utilisation de la taille par défaut si la souris ne survole pas un élément "pointer"
        cursorDot.style.width = "10px"; // Largeur par défaut du point du curseur
        cursorDot.style.height = "10px"; // Hauteur par défaut du point du curseur
        cursorOutline.style.width = "55px"; // Largeur par défaut du contour du curseur
        cursorOutline.style.height = "55px"; // Hauteur par défaut du contour du curseur
        cursorOutline.style.backgroundColor = "#f3f4f556"; // Couleur du contour par défaut
    }

    // Animation du contour du curseur vers la nouvelle position de la souris
    cursorOutline.animate({
        top: `${posY}px`,
        left: `${posX}px`,
    }, {
        duration: 100,
        fill: "forwards",
        easing: "ease-in-out",
    });
});


// section a propos 
const faqButtons = document.querySelectorAll('.faq-question button');

    faqButtons.forEach(button => {
        button.addEventListener('click', () => {
            const faqQuestion = button.closest('.faq-question');
            const faqAnswer = faqQuestion.querySelector('p');
            const icon = button.querySelector('.fa-chevron-down');

            faqButtons.forEach(otherButton => {
                if (otherButton !== button) {
                    const otherFaqQuestion = otherButton.closest('.faq-question');
                    otherFaqQuestion.querySelector('p').classList.remove('show');
                    otherFaqQuestion.querySelector('.fa-chevron-down').classList.remove('rotate');
                }
            });

            faqAnswer.classList.toggle('show'); 
            icon.classList.toggle('rotate');
        });
    });