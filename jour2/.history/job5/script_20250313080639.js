const footer = document.getElementById('footer');

window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY; 
    const pageHeight = document.documentElement.scrollHeight - window.innerHeight; 
    const scrollPercentage = (scrollPosition / pageHeight) * 100;

   
    const purple = Math.min(255, (scrollPercentage * 2)); // Couleur verte évoluant avec le scroll
    const orange = Math.min(255, (255 - (scrollPercentage * 2))); // Couleur rouge évoluant avec le scroll
    
    // Applique la couleur calculée sur le footer
    footer.style.backgroundColor = `rgb(${p}, ${green}, 0)`;
});