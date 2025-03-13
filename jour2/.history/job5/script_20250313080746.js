const footer = document.getElementById('footer');

window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY; 
    const pageHeight = document.documentElement.scrollHeight - window.innerHeight; 
    const scrollPercentage = (scrollPosition / pageHeight) * 100;

    const red = 255; // Rouge constant pour assurer la transition
    const green = Math.min(165, (scrollPercentage * 1.65)); // Passe de 0 à 165
    const blue = Math.max(0, (255 - (scrollPercentage * 2.55))); // Passe de 255 à 0
    
    const color = `rgb(${red}, ${green}, ${blue})`;
    
    // Applique la couleur calculée sur le footer
    footer.style.backgroundColor = `rgb(${purple}, ${orange}, 0)`;
});