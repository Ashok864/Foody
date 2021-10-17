let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{             /*menu bar click chng show cancl button */
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
/*section start */
let section = document.querySelectorAll('section'); /*order 'section' */
let navLinks = document.querySelectorAll('header .navbar a');
/*section end */

window.onscroll = () =>{             /*remove*/
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    section.forEach(sec=>{         /*section */
      let top = window.scrollY;
      let height = sec.offsetHeight;
      let offset = sec.offsetTop - 150;
      let id = sec.getAttribute('id');
      if(top => offset && top < offset + height){
        navLinks.forEach(links =>{
          links.classList.remove('active');  /*header navbar class=active (select) */
          document.querySelector('header .navbar a[href*='+id+']').classList.add('active');

        }); 
      };

    });
}

document.querySelector('#search-icon').onclick = () =>{   /*search icon */
    document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick = () =>{   /*cncl search box */
    document.querySelector('#search-form').classList.remove('active');
}

/*swiper script*/
var swiper = new Swiper(".home-slider", {   
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",    
      clickable: true,
    },
    loop:true,
  });             
  var swiper = new Swiper(".review-slider", {   /*review slider */
    spaceBetween: 20,     /*chng value */
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    loop:true,
    breakpoints: {        
      0: {
         slidesPerView: 1,
      },
      640: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });                              

