document.addEventListener('DOMContentLoaded', function() {
    console.log("JavaScript Loaded: Welcome to blankdrive's website!");
    
    // Adding transition effects on page load
    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const href = this.getAttribute('href');
            
            // Fade out effect
            document.body.classList.add('fade-out');
            
            setTimeout(() => {
                window.location.href = href;
            }, 500);
        });
    });

    // Remove fade-out class after transition
    document.body.classList.remove('fade-out');
});