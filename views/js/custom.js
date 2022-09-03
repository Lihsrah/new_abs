//Amitesh

//Mobile Navigation js

$(document).ready(function(e) {
    $(".mobile_nav").click(function() {
            $("nav ul").slideToggle("")
            $("nav ul").addClass("nav_right")
            $(this).toggleClass("close_menu")
    })
    

    
    
    
});

$(document).ready(function() {

            $(window).scroll(function() {
                if ($(this).scrollTop() > 600) {
                    $('.scrollup').fadeIn();
                } else {
                    $('.scrollup').fadeOut();
                }
            });

            $('.scrollup').click(function() {
                $("html, body").animate({ scrollTop: 0 }, 300);
                return false;
            });
            
$(window).scroll(function() {
    if ($(this).scrollTop() > 1){  
        $('header').addClass("sticky");
    }
    else{
        $('header').removeClass("sticky");
    }
});     


$("#show_more").click(function(){
            $("#more_txt").slideToggle("slow");
            $(this).hide();
            $('#view_less').show();
        });
        $("#view_less").click(function(){
            $("#more_txt").slideToggle("slow");
            $(this).hide();
            $('#show_more').show();
        });




            
            

        });

//Custom Select box js 
    // $(document).ready(function() {
    //   $('select:not(.ignore)').niceSelect();      
    // });
        
//infographic number counter

$('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 50000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});
            
            

      


            
$('.search_plan .offers li').on('click', function(){
    $(this).addClass('active').siblings().removeClass('active');
});


$(document).ready(function() {
var owl = $('.owl-carousel');
owl.owlCarousel({
  margin: 15,
  nav: true,
  dots: false,
  autoHeight:true,
  loop: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1000: {
      items: 3
    }
  }
})
})
      
jQuery(document).ready(function() {
    function close_accordion_section() {
        jQuery('.accordion .accordion-section-title').removeClass('active');
        jQuery('.accordion .accordion-section-content').slideUp(300).removeClass('open');
    }

    jQuery('.accordion-section-title').click(function(e) {
        // Grab current anchor value
        var currentAttrValue = jQuery(this).attr('href');

        if(jQuery(e.target).is('.active')) {
            close_accordion_section();
        }else {
            close_accordion_section();

            // Add active class to section title
            jQuery(this).addClass('active');
            // Open up the hidden content panel
            jQuery('.accordion ' + currentAttrValue).slideDown(300).addClass('open'); 
        }

        e.preventDefault();
    });


if (jQuery(window).width() < 991) {
    
    jQuery("footer h3").click(function(){
        jQuery(this).next("footer .resource").slideToggle();
        jQuery(this).next("footer .subscribe").slideToggle();
        jQuery(this).next("footer form").slideToggle();

    jQuery(this).toggleClass("after_arrow")  ();
        
    });
    
    }
else {
}   
     

if (jQuery(window).width() < 600) {
    
    jQuery(".get_connection h4").click(function(){
        jQuery(this).next(".get_connection form").slideToggle();
         jQuery(".get_connection h4 span").slideToggle();
    jQuery(this).toggleClass("after_arrow")  ();
        
    });

    jQuery(".search_plan .plan_bg h4").click(function(){
        jQuery(this).next(".search_plan .plan_bg .connect_now").slideToggle();
    jQuery(this).toggleClass("after_arrow")  ();
        
    });






    jQuery(".get_touch").click(function(){
        jQuery(".new_connection").show();
   
    });

    jQuery(".close_div").click(function(){
        jQuery(".new_connection").hide();
   
    });



            $(window).scroll(function() {
                if ($(this).scrollTop() > 1500) {
                    $('.fixed_side_app').fadeIn();
                } else {
                    $('.fixed_side_app').fadeOut();
                }
            });


           $(window).scroll(function() {
                if ($(this).scrollTop() > 1500) {
                    $('.fixed_query').fadeIn();
                } else {
                    $('.fixed_query').fadeOut();
                }
            });






    }
else {
}     





});

 



$(document).ready(function () {

if (jQuery(window).width() > 600) {
    
$(".get_touch, .close_div").click(function () {
      $(".new_connection").toggleClass("new_connection_over");
      $('.overlay_bg').toggle()
  });

  $('.overlay_bg').click(function () {
      $(this).toggle();
      $(".new_connection").toggleClass("new_connection_over");
  })


    }
else {
}  


  



});





            

//Wow js property

new WOW().init();

 

 
