        document.addEventListener('DOMContentLoaded', function() {
            const menuButton = document.getElementById('menuButton');
            const sidebar = document.getElementById('sidebar');
            
            if (menuButton && sidebar) {
                menuButton.addEventListener('click', function() {
                    sidebar.classList.toggle('active');
                });
            }
            

            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        window.scrollTo({
                            top: target.offsetTop - 20,
                            behavior: 'smooth'
                        });
                        

                        if (window.innerWidth <= 768) {
                            sidebar.classList.remove('active');
                        }
                    }
                });
            });
        });
        
        
        
        
        
        
        
        
        
        

        
        
        