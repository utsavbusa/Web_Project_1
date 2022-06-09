const mobile_nav = document.querySelector(".mobile-nav-btn");
const nav_header = document.querySelector(".header");


const toggleNavbar = () => {
    // alert("utsav busa");
nav_header.classList.toggle("active");
};

mobile_nav.addEventListener("click",() => toggleNavbar());



let slides=document.querySelectorAll('.slide-container');
        let index=0;

        // next function

        function next(){
            slides[index].classList.remove('active');
            index = (index + 1 ) % slides.length;
            slides[index].classList.add('active');
        }

        // prev function

        function prev(){
            slides[index].classList.remove('active');
            index = (index - 1 + slides.length ) % slides.length;
            slides[index].classList.add('active');
        }

        // autoplay

        setInterval(next,4000);

