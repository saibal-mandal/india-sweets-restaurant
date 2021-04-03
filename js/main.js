//loader
$(window).load(function() {
    $('.loader').delay(400).fadeOut(200);
	});	
	
$(document).ready(function() {
 // scroll to top
$(window).scroll(function(){
	if($(this).scrollTop()>250){
		$('.scrollup').fadeIn();
	}else{
		$('.scrollup').fadeOut();
		}
	});
$('.scrollup').click(function(){
	$("html, body").animate({scrollTop:0}, 600);
	return false;
	});
	
// owl-carousel banner 
$('#owldemo1').owlCarousel({
        loop: true,
        nav: false,
        autoplay: true,
        autoplayTimeout: 7000,
        smartSpeed: 3000,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });


	

////our menu
$('#owldemo3').owlCarousel({
        loop: true,
        nav: false,
        margin:20,
        autoplay: true,
        autoplayTimeout: 4500,
        smartSpeed: 1950,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });


// sticky header
 $(window).scroll(function(){
    if ($(this).scrollTop() >= 200) {
       $('.bottomHeader').addClass('fixed-header',2000);
    }
    else {
       $('.bottomHeader').removeClass('fixed-header',2000);
    }
});



});



	  
	  




  
