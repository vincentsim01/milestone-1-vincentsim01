const animatedImage = document.getElementById('tableinsideleft');



// Final position (center of viewport)
const finalX = window.innerWidth / 2 - 50;
const finalY = window.innerHeight / 2 - 50;

// Initial position (top-left, off-screen)
const initialX = -500;
const initialY = 0;

// Animation parameters
const startScroll = 400;
const endScroll = 1300;

function updateAnimation() {
    const scrollY = window.pageYOffset;

    
    // Final position: 50px from left, 1000px from top
    const finalX = 0;
    const finalY = 0;
    
    if (scrollY < startScroll) {
        // Before animation - hide image
        animatedImage.style.transform = `translate(${initialX}px, ${initialY}px)`;
    } else if (scrollY >= startScroll && scrollY <= endScroll) {
        // During animation - move image
        const progress = (scrollY - startScroll) / (endScroll - startScroll);
        const currentX = initialX + (finalX - initialX) * progress;
        const currentY = initialY + (finalY - initialY) * progress;
        
        animatedImage.style.transform = `translate(${currentX}px, ${currentY}px)`;
    } else {
        // After animation - keep at final position (50px from left, 1000px from top)
        animatedImage.style.transform = `translate(${finalX}px, ${finalY}px)`;
    }
}

window.addEventListener('scroll', updateAnimation);
window.addEventListener('resize', updateAnimation);
updateAnimation();