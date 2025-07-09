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


function toggleSegment(segmentId) {
    const content = document.getElementById(segmentId + '-content');
    const button = document.getElementById(segmentId + '-btn');
    const segment = document.getElementById(segmentId);
    
    if (content.classList.contains('expanded')) {
        content.classList.remove('expanded');
        button.textContent = 'Expand';
        segment.classList.remove('expanded');
    } else {
        content.classList.add('expanded');
        button.textContent = 'Collapse';
        segment.classList.add('expanded');
    }
}