import React from 'react'

const App3 = () => {
    $(document).ready(function() {
        // Assign some jquery elements we'll need
        var $swiper = document.getElementsByClassName(".swiper-container");
        var $bottomSlide = null; // Slide whose content gets 'extracted' and placed
        // into a fixed position for animation purposes
        var $bottomSlideContent = null; // Slide content that gets passed between the
        // panning slide stack and the position 'behind'
        // the stack, needed for correct animation style
      
        var mySwiper = new Swiper(".swiper-container", {
          // spaceBetween: 1,
          slidesPerView: 4,
          centeredSlides: true,
          roundLengths: true,
          loop: true,
          loopAdditionalSlides: 30,
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
          }
        });
      })
      
  return (
   <div className="swiper-container">
    <div className="swiper-wrapper">
        <div className="swiper-slide">Slide 1
        </div>
        <div className="swiper-slide">Slide 2
        </div>
        <div className="swiper-slide">Slide 3
        </div>
        <div className="swiper-slide">Slide 4
        </div>
        <div className="swiper-slide">Slide 5
        </div>
    </div>
<div className="swiper-button-prev"></div>
    <div className="swiper-button-next"></div>

</div>
  )
}

export default App3