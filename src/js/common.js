$('.slider-owl').owlCarousel({
    margin:1,
    loop:true,
    dots:true,
    items:1
})

$('.owl-categories').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    responsive:{
        0:{
            items:2,
            margin: 10
        },
        600:{
            items:3,
            margin: 10
        },
        780:{
            items:2,
            margin: 10
        },
        1200:{
            items:2
        },
        1600:{
            items:3
        }
    }
})

$('.single .owl-product').owlCarousel({
    loop:true,
    margin:30,
    nav:false,
    responsive:{
        0:{
            items:2,
            margin: 10
        },
        600:{
            items:3,
            margin: 10
        },
        780:{
            items:4,
            margin: 10
        },
        1200:{
            items:4
        },
        1600:{
            items:6
        }
    }
})

$('.owl-news').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2,
            margin: 10
        },
        1600:{
            items:3
        }
    }
})

$('.owl-models').owlCarousel({
    loop:true,
    margin:30,
    autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:4
        },
        1200:{
            items:6
        },
        1600:{
            items:8
        }
    }
})

$(document).ready(function() {
  //Для липкого меню
  $(window).scroll(function() {
    if ($(this).scrollTop() >= 100) {
      $(".main-header").addClass("fix animate__fadeInDown animate__animated");
    } else {
      $(".main-header").removeClass("fix animate__fadeInDown animate__animated");
    }
  });
  //конец липкого меню
});

$(function () {
  $('.smart-basket__wrapper').smbasket({
    productElement: 'product__element',
    buttonAddToBasket: 'product__add-to-cart-button',
    countryCode: '+7',
    smartBasketCurrency: '₽',
    productQuantityWrapper: 'product__quantity',
    smartBasketMinArea: 'header__basket-min',smartBasketMinText: '',
    smartBasketMinIconPath: 'img/shopping-basket-wight.svg',

    agreement: {
        isRequired: true,
        isChecked: true
      }
  });
});

$(".categories-icon > a").on("click", function() {
  $(".categories").toggleClass("d-none animate__fadeIn animate__animated");
  });

$(".single .categories-icon > a").on("click", function() {
  $(".single .categories").toggleClass("d-block");
  });

$(".gallery-item img").on("click", function() {
  $(".pict").attr("src", $(this).attr("src"));
  $(".pict").attr("data-zoom", $(this).attr("src"));
  });

$(".sort span").on("click", function() {
  $(this).children('i').toggleClass('fa-angle-up fa-angle-down');
  });

new Drift(document.querySelector('.pict'), {
    paneContainer: document.querySelector('.description'),
    inlinePane: 900,
    inlineOffsetY: -85,
    containInline: true,
    hoverBoundingBox: true
});

function getForm(){
    	var subEmail = $('#subEmail').val();
	  $.ajax({
	    type: "POST",
	    url: '/src/php/subscribe.php',
	    data: {subEmail:subEmail},
	    success: function(){
	      alert('Сообщение отправлено');
	    },
	    error: function(e){
	    	alert('Что то пошло не так');
	    }
	  });
	  
	  $(':input','#main') 
		.not(':button, :submit, :reset, :hidden') 
		.val('') 
		.removeAttr('checked') 
		.removeAttr('selected'); 
	};