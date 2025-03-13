const footer = document.getElementById('footer');

window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY; 
    const pageHeight = document.documentElement.scrollHeight - window.innerHeight; 
    const scrollPercentage = (scrollPosition / pageHeight) * 100;

    // Rouge constant (255) pour assurer la transition fluide
    const red = 255; 
    // Le vert augmente de 0 à 165 pour aller vers l'orange
    const green = Math.min(165, (scrollPercentage * 1.65)); 
    // Le bleu diminue de 255 à 0 pour quitter le violet
    const blue = Math.max(0, (255 - (scrollPercentage * 2.55))); 

    // Applique la couleur calculée sur le footer
    footer.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
});
