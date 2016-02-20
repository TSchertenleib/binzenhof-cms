$(document).ready(function ()   { 


  // MULTIPLE GALLERIES


  // unsere tiere

  var $siteSlider = $(".site-slider"),
  $sliderTitle = $(".thumb");
  $sliderTitle.each(function() {
    var $this = $(this),
    sliderId = $this.attr("data-sliderId"),
    $targetEl = $("#" + sliderId);


    $this.on("click", function() {   
        $siteSlider.removeClass("is-active");
        $targetEl.addClass("is-active");
      });
  });



// events

$sliderTitleEvents = $(".thumb-events");
$sliderTitleEvents.each(function() {
  var $this = $(this),
  sliderId = $this.attr("data-sliderId"),
  $targetEl = $("#" + sliderId);


  $this.on("click", function() {  
    $siteSlider.removeClass("is-active");
    $targetEl.addClass("is-active");
  });
});





// slick slider

$('.site-slider').slick({
  dots: false,
  adaptiveHeight: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true        
});



$('.site-slider-bauernhof').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true,
  arrows: true,
  responsive: [
  {
    breakpoint: 1400,
    settings: {
      dots: true
    }
  },
  {
    breakpoint: 1000,
    settings: {
      dots: true
    }
  },
  {
    breakpoint: 667,
    settings: {
      dots: true
    }
  }
  ]               
});


$('.site-slider-laedeli').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true,
  arrows: true,
  responsive: [
  {
    breakpoint: 1400,
    settings: {
      dots: true
    }
  },
  {
    breakpoint: 1000,
    settings: {
      dots: true
    }
  },
  {
    breakpoint: 667,
    settings: {
      dots: true
    }
  }
  ]        
});



$('.tiere-ueberflex').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  dots: true,
  centerMode: false,
  focusOnSelect: true,
  arrows: false,
  asNavFor: '.site-slider',
  responsive: [
  {
    breakpoint: 1400,
    settings: {
      centerMode: true,
      slidesToShow: 4,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 1000,
    settings: {
      centerMode: true,
      slidesToShow: 3,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 667,
    settings: {
      centerMode: true,
      slidesToShow: 2,
      slidesToScroll: 1
    }
  }
  ]

});


$('.events-ueberflex').slick({
  slidesToShow: 6,
  slidesToScroll: 0,
  dots: true,
  centerMode: false,
  focusOnSelect: true,
  arrows: false,
  asNavFor: '.site-slider',
  responsive: [
  {
    breakpoint: 1400,
    settings: {
      centerMode: true,
      slidesToShow: 4,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 1000,
    settings: {
      centerMode: true,
      slidesToShow: 3,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 667,
    settings: {
      centerMode: true,
      slidesToShow: 2,
      slidesToScroll: 1
    }
  }
  ]
});

});