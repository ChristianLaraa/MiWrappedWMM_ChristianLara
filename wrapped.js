function scrollGallery(direction) {
    const galleryContainer = document.getElementById('galleryContainer');
  const scrollAmount = 12; // Ajusta la cantidad de desplazamiento según tus necesidades
  const targetScroll = galleryContainer.scrollLeft + direction * scrollAmount;
  const duration = 600; // Ajusta la duración de la animación en milisegundos
    const startTime = performance.now();

        function scrollStep(timestamp) {
    const progress = timestamp - startTime;
    const percentage = Math.min(progress / duration, 1);
    galleryContainer.scrollLeft += direction * scrollAmount * percentage;

    if (percentage < 1) {
        requestAnimationFrame(scrollStep);
    }
}
    requestAnimationFrame(scrollStep);
}