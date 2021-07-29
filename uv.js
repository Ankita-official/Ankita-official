const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav_right');
    const navright = document.querySelectorAll('.nav_right li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        navright.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation =``;
            }
            else{
                link.style.animation = `navRightfade 0.3s ease forwards ${index / 7 + 1}s`;
            } 
    
        });

        burger.classList.toggle('toggle');
    });  

    
}

navSlide();