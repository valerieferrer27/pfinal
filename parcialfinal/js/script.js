//Activador de jQuery

$(document).ready(function(){

    // Menu Responsive//

    $('aside#menu-movil').css('right','-290px');
    $('#cerrar').hide();

    $('#abrir').click(function(){
        $('aside#menu-movil').animate({
        right: 0
        },300,'easeOutExpo');
        $('#abrir').hide();
        $('#cerrar').show();

         event.preventDefault();
    
     });

     $('#cerrar, aside#menu-movil nav a').click(function(){ 
        $('aside#menu-movil').animate({
            right: -290
        },300,'easeOutExpo');
        $('#abrir').show();
        $('#cerrar').hide();

        event.preventDefault();

    });

        // Function para Detectar Scroll Down

    $(window).scroll(function(){
        if ($(this).scrollTop() > 150) {
             $('header').removeClass('transparente');
             $('header').addClass('gris');
 
           } else {
              $('header').removeClass('gris');
              $('header').addClass('transparente');

          }

        });

    });