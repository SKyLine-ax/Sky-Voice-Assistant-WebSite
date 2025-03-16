document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const headerOffset = 70; 
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const logo = document.querySelector(".logo"); 
    const sections = [
        { selector: ".download", color: "rgb(220, 220, 220)" }, 
        { selector: ".features", color: "rgb(220, 220, 220)" } 
    ];

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const section = sections.find(s => entry.target.matches(s.selector));

            if (entry.isIntersecting && section) {
                logo.style.color = section.color;
            } else if (!entry.isIntersecting) {
                logo.style.color = "var(--primary)"; 
            }
        });
    }, { threshold: 0.6 });

    sections.forEach(section => {
        const element = document.querySelector(section.selector);
        if (element) observer.observe(element);
    });
});





