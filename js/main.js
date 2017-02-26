$(document).ready(function() {





    /*  carousel Init    */
    $('#carousel').carouFredSel({
        width: '800',
        pagination: ".pagination",
        responsive: true,
        scroll: {
            fx: '200',
           duration         : 1000,
           pauseOnHover     : true

        },
        items: {
            visible: 1,
            width: '800'
        },
        swipe: {
            onMouse: true,
            onTouch: true
        }
    });




    /*    Mean navigation menu scroll to    */
    $('nav ul li a .scroll').click(function(e) {
        e.preventDefault();
        scrollTo($(this).attr('href'), 900, 'easeInOutCubic');
    });





    $('.hero').bgswitcher({
        images: ["img/bg/1.jpg","img/bg/2.jpg","img/bg/3.jpg","img/bg/4.jpg", "img/bg/5.jpg"],
        effect: "fade",
        interval: 3000
});


    $('.marcas').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
    });


































    /*    Back to top button    */
    var back_top = $('#back_top');

    back_top.click(function(e) {
        e.preventDefault();
        scrollTo(0, 900, 'easeInOutCubic');

    });

    function scrollTo(target, speed, ease) {
        $(window).scrollTo(target, speed, {
            easing: ease
        });
    }

    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 749) {
            back_top.stop().animate({
                opacity: 1
            }, 250);
        } else {
            back_top.stop().animate({
                opacity: 0
            }, 250);
        }
    });

});


function hover(element) {
  console.log(element.src);
  var x = toggle(element.src,true);
   element.setAttribute('src', x + ',1.svg');
}
function unhover(element) {
    // console.log(element.src);
    var x = toggle(element.src,false);
     element.setAttribute('src', x + '.svg');
}

function toggle(element, bool) {

  if(bool){

    console.log(element.src);

    var e = element.split(".svg");
    return e[0];

  }
else{
  console.log(element.src);

  var i = element.split(",");
  return i[0];
}


}
