$(document).ready(function(){
	console.log('this works')

$('.slider').slick({
      infinite: true,
      speed: 300,
      fade: true,
      slidesToShow: 1,
      swipe: true,
});

$("a").hover(
        function() { $(this).addClass("hover"); },
        function() { $(this).removeClass("hover"); 
    });

$('img').hover(function() {
	$('img').removeClass('border');
	$(this).addClass('border');
});

$('.note').click(function() {
	$('fieldset').html('Thanks!')
});


});

