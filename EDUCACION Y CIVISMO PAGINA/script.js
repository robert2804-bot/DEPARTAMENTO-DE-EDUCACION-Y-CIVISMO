const banners = document.querySelectorAll('.banner img');
let currentIndex = 0;

function changeBanner() {
    banners[currentIndex].classList.remove('active'); // Oculta la imagen actual
    currentIndex = (currentIndex + 1) % banners.length; // Mueve al siguiente índice
    banners[currentIndex].classList.add('active'); // Muestra la nueva imagen
}

// Cambia la imagen cada 3 segundos
setInterval(changeBanner, 3000);
