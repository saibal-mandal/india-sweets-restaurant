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
        autoplayTimeout: 4500,
        smartSpeed: 1950,
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

//testimonials
$('#owldemo2').owlCarousel({
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
                items: 2
            }
        }
    });
	

////testimonials
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
$('#owldemo2').owlCarousel({
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
                items: 2
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


$(window).load(function(){
	var selectedTab = window.location.hash;
	$('a[href="'+selectedTab+'"]').trigger('click');
	setTimeout(function(){
		$("html, body").stop().animate({scrollTop: ($('#tab1').offset().top - ($('.mainnav').height() * 2.7)) });
	}, 500);
	
	var selectedTab = window.location.hash;
	$('a[href="'+selectedTab+'"]').trigger('click');
	setTimeout(function(){
		$("html, body").stop().animate({scrollTop: ($('#tab5').offset().top - ($('.mainnav').height() * 2.7)) });
	}, 500);
	
	var selectedTab = window.location.hash;
	$('a[href="'+selectedTab+'"]').trigger('click');
	setTimeout(function(){
		$("html, body").stop().animate({scrollTop: ($('#tab9').offset().top - ($('.mainnav').height() * 2.7)) });
	}, 500);
	
	var selectedTab = window.location.hash;
	$('a[href="'+selectedTab+'"]').trigger('click');
	setTimeout(function(){
		$("html, body").stop().animate({scrollTop: ($('#tab3').offset().top - ($('.mainnav').height() * 2.7)) });
	}, 500);	
		
});


    
    
// light box
        $(document).ready(function() {
            $('.fancybox').fancybox();

            $('.fancybox-buttons').fancybox({
                openEffect  : 'none',
                closeEffect : 'none',

                prevEffect : 'none',
                nextEffect : 'none',

                closeBtn  : false,

                helpers : {
                    title : {
                        type : 'inside'
                    },
                    buttons : {}
                },

                afterLoad : function() {
                    this.title = 'India Sweets Restaurant ' + (this.index + 1) + ' of ' + this.group.length + (this.title ? ' - ' + this.title : '');
                }
            });
      });  
	  
	  




  
