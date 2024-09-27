document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper("#reviews-slider", {
    loop: true,
    autoplay: {
      delay: 3000, // 3 seconds delay between slides
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
});
