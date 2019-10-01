//alert("hellow");
$(function(){
  $(".news-content").owlCarousel({
          items: 5,
          autoplay: true,
          smartSpeed: 700,
          loop: true,
          autoplayHoverPause: true,
          responsive: {
              0:{
                  items: 3,
                  autoplayHoverPause: false,
              },
              480:{
                  items: 1,
              },
              768:{
                  items: 1,
              },
          },   
      });
    
  });
