new Swiper('.swiper',{
   loop: true,
   pagination:{
      el: '.swiper-pagination',
      clickable: true,
   },
   //кол-во слайдов
   slidesPerView:1,
   //отступы между слайдами
   spaceBetween: 30,
   //адаптивность
   pagination: {
      el:  ".slider__pagination",
      clickable: true,
   },
   
   navigation: {
      nextEl:  ".slider-button-next",
      prevEl:  ".slider-button-prev",
   },
   breakpoints:{
      1153:{
         slidesPerView:4,
      },
      900:{
         slidesPerView:3,
      },
      550:{
         slidesPerView:1,
      }
   }
});



const menuBurg = document.querySelector('.header__burger');
const menuMobile = document.querySelector('.header__mobile-menu');

menuBurg.addEventListener('click', function(){
   menuBurg.classList.toggle('_active');
   menuMobile.classList.toggle('_active');
   document.body.classList.toggle('_lock');
});