
//MOBILEVIEW HIDE NAVS
let navSlide = () => {
    let lines = document.querySelector('.lines');
    let nav = document.querySelector('.nav-links');
    let navLinks = document.querySelectorAll('.nav-links li');

    lines.addEventListener('click', () =>{
        nav.classList.toggle('nav-move')

        navLinks.forEach((link, i) => {
            if(link.style.animation){
                link.style.animation = '';
            }else{
                link.style.animation = `navLinksShow 0.5s ease forwards ${i/7 + 0.5}s`;
            }

        });
    });

}

//lipat next time sa general




// jQuery(function() {  let button = $('#resetButton');

// button.on('click', (e) =>{
//     e.preventDefault();
//     $('html, body').animate({scrollTop:0}, '300');
// });

// })


// addColr();
navSlide();