$(document).ready(function(){
	console.log('this works')

$('.slider').slick({
      infinite: true,
      speed: 300,
      fade: true,
      slidesToShow: 1,
});

$("a").hover(
        function() { $(this).addClass("hover"); },
        function() { $(this).removeClass("hover"); }
    );

});

