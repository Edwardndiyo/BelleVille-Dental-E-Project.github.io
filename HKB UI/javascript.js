// Initialize Swiper
var swiper = new Swiper('.carousel', {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  


  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    navigation: {
      prevEl: '.prev-btn',
      nextEl: '.next-btn',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  var prevButton = document.querySelector('.prev-btn');
  var nextButton = document.querySelector('.next-btn');

  prevButton.addEventListener('click', function () {
    swiper.slidePrev();
  });

  nextButton.addEventListener('click', function () {
    swiper.slideNext();
  });

