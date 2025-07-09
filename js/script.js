window.addEventListener('load', function() {
    const progressBars = document.querySelectorAll('.progress-bar');
    
    progressBars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        bar.style.setProperty('--target-width', width + '%');
        
        setTimeout(() => {
            bar.style.width = width + '%';
        }, 300);
    });
});
